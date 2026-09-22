import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import {
  read,
  safe,
  git,
  atomic,
  statePath,
  historyPath
} from './khds-validate.mjs';

const root = process.cwd();

function fail(message) {
  throw new Error(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function gitDiffClean(commit, repoPath) {
  try {
    execFileSync(
      'git',
      ['diff', '--quiet', commit, '--', repoPath],
      { cwd: root, stdio: 'ignore' }
    );
    return true;
  } catch {
    return false;
  }
}

function commitExists(commit) {
  try {
    execFileSync(
      'git',
      ['cat-file', '-e', `${commit}^{commit}`],
      { cwd: root, stdio: 'ignore' }
    );
    return true;
  } catch {
    return false;
  }
}

const dryRun = process.argv.includes('--dry-run');
const confirm = process.argv.includes('--confirm');

if (!dryRun && !confirm) {
  fail('Use --dry-run to preview or --confirm to perform the authorized reconciliation.');
}

assert(
  path.resolve(git(root, 'rev-parse', '--show-toplevel')) === path.resolve(root),
  'Run this script from the repository root.'
);

const head = git(root, 'rev-parse', 'HEAD');
const branch = git(root, 'branch', '--show-current');

assert(branch === 'main', `Expected branch main; found ${branch}.`);
assert(
  head === 'fdebc1c' || head.startsWith('fdebc1c'),
  `Expected Case #24 closure baseline fdebc1c; found ${head}.`
);

const state = read(root, statePath);
const history = read(root, historyPath);

assert(state.schemaVersion === 1, 'Unsupported current-case schema.');
assert(history.schemaVersion === 1, 'Unsupported case-history schema.');

assert(
  state.workflowStatus === 'idle',
  `Expected idle workflow; found ${state.workflowStatus}.`
);

assert(
  state.latestCompletedCase?.caseNumber === 22 &&
  state.latestCompletedCase?.slug === 'sky-lagoon-kopavogur',
  'Baseline latest completed case is not Case #22 Sky Lagoon.'
);

assert(
  state.expectedNextCase === 23,
  `Expected baseline next case 23; found ${state.expectedNextCase}.`
);

assert(state.researchAuthorized === false, 'Research authorization must be false.');
assert(state.authorization === null, 'Authorization must be null.');
assert(state.activeCase === null, 'No active case is permitted during reconciliation.');
assert(
  Array.isArray(state.disagreements) && state.disagreements.length === 0,
  'Baseline disagreements must be empty.'
);

const numbers = history.cases.map(c => c.caseNumber);

assert(
  JSON.stringify(numbers) === JSON.stringify([21, 22]),
  `Expected audited history [21,22]; found [${numbers.join(',')}].`
);

const case23Path =
  'khds/research/institutions/venues/reffen-copenhagen/';

const case24Path =
  'khds/research/institutions/venues/time-out-market-lisboa/';

assert(
  fs.existsSync(safe(root, case23Path)),
  'Case #23 canonical directory does not exist.'
);

assert(
  fs.existsSync(safe(root, case24Path)),
  'Case #24 canonical directory does not exist.'
);

assert(commitExists('cc5d586'), 'Case #23 evidence commit cc5d586 is unavailable.');
assert(commitExists('fdebc1c'), 'Case #24 evidence commit fdebc1c is unavailable.');

assert(
  gitDiffClean('cc5d586', case23Path),
  'Case #23 canonical dossier differs from reconciliation commit cc5d586.'
);

assert(
  gitDiffClean('fdebc1c', case24Path),
  'Case #24 canonical dossier differs from closure commit fdebc1c.'
);

const case23 = {
  caseNumber: 23,
  institutionName: 'Reffen',
  slug: 'reffen-copenhagen',
  institutionType:
    'Open-air street-food market and cultural hospitality venue',
  sector: 'venues',
  canonicalPath: case23Path,
  dossierComplete: true,
  administrativeReconciliation: true,
  evidenceCommit: 'cc5d586',
  completionScope:
    'Canonical public-evidence dossier and governance reconciliation committed in cc5d586. Retrospectively registered in KHDS machine-readable history because Cases #23-24 were completed outside the scripted staging/publication state transition.'
};

const case24 = {
  caseNumber: 24,
  institutionName: 'Time Out Market Lisboa',
  slug: 'time-out-market-lisboa',
  institutionType:
    'Indoor food-and-cultural market with multiple eateries and event spaces',
  sector: 'venues',
  canonicalPath: case24Path,
  dossierComplete: true,
  administrativeReconciliation: true,
  evidenceCommit: 'fdebc1c',
  completionScope:
    'Canonical public-evidence dossier and governance closure committed in fdebc1c. Retrospectively registered in KHDS machine-readable history because Cases #23-24 were completed outside the scripted staging/publication state transition. Legacy filename depature.md retained unchanged.'
};

const latestCompletedCase = {
  caseNumber: case24.caseNumber,
  institutionName: case24.institutionName,
  slug: case24.slug,
  institutionType: case24.institutionType,
  sector: case24.sector,
  canonicalPath: case24.canonicalPath,
  dossierComplete: true,
  administrativeReconciliation: true
};

const approvedAt = new Date().toISOString();

const nextHistory = {
  ...history,
  cases: [
    ...history.cases,
    case23,
    case24
  ]
};

const nextState = {
  ...state,
  workflowStatus: 'idle',
  latestCompletedCase,
  expectedNextCase: 25,
  researchAuthorized: false,
  authorization: null,
  activeCase: null,
  disagreements: [],
  publication: null,
  historyReconciliation: {
    approvedBy: 'Brian Kodawa',
    approvedAt,
    scope:
      'Administrative machine-readable history reconciliation for completed KHDS Cases #23 and #24 only; no research content altered and Case #25 not started.',
    mode: 'retrospective-canonical-registration',
    cases: [
      {
        caseNumber: 23,
        slug: 'reffen-copenhagen',
        evidenceCommit: 'cc5d586',
        scriptedPublicationJournal: null
      },
      {
        caseNumber: 24,
        slug: 'time-out-market-lisboa',
        evidenceCommit: 'fdebc1c',
        scriptedPublicationJournal: null
      }
    ]
  }
};

const result = {
  mode: dryRun ? 'dry-run' : 'confirm',
  baseline: {
    head,
    latestCompletedCase: state.latestCompletedCase.caseNumber,
    expectedNextCase: state.expectedNextCase,
    historyCases: numbers
  },
  proposed: {
    latestCompletedCase: nextState.latestCompletedCase,
    expectedNextCase: nextState.expectedNextCase,
    historyCases: nextHistory.cases.map(c => c.caseNumber),
    publication: nextState.publication,
    historyReconciliation: nextState.historyReconciliation
  },
  dossierChanges: 'none',
  case25Touched: false
};

if (dryRun) {
  console.log(JSON.stringify(result, null, 2));
  process.exit(0);
}

assert(confirm, 'Explicit --confirm required.');

atomic(root, historyPath, nextHistory);
atomic(root, statePath, nextState);

console.log(JSON.stringify({
  ...result,
  written: [
    historyPath,
    statePath
  ]
}, null, 2));
