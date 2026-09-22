import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

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

function pathMatchesCommit(commit, repoPath) {
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

const dryRun = process.argv.includes('--dry-run');
const confirm = process.argv.includes('--confirm');

if (!dryRun && !confirm) {
  fail('Use --dry-run to preview or --confirm to perform the authorized Case #25 registration.');
}

assert(
  path.resolve(git(root, 'rev-parse', '--show-toplevel')) === path.resolve(root),
  'Run from the repository root.'
);

const head = git(root, 'rev-parse', 'HEAD');
const branch = git(root, 'branch', '--show-current');

assert(branch === 'main', `Expected branch main; found ${branch}.`);
assert(
  head === 'e8c3f72' || head.startsWith('e8c3f72'),
  `Expected Case #25 evidence checkpoint e8c3f72; found ${head}.`
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
  state.latestCompletedCase?.caseNumber === 24 &&
  state.latestCompletedCase?.slug === 'time-out-market-lisboa',
  'Baseline latest completed case is not Case #24 Time Out Market Lisboa.'
);

assert(
  state.expectedNextCase === 25,
  `Expected next case 25; found ${state.expectedNextCase}.`
);

assert(state.researchAuthorized === false, 'Research authorization must remain false.');
assert(state.authorization === null, 'Authorization must be null.');
assert(state.activeCase === null, 'No active case is permitted.');
assert(
  Array.isArray(state.disagreements) && state.disagreements.length === 0,
  'State disagreements must be empty.'
);

const numbers = history.cases.map(c => c.caseNumber);

assert(
  JSON.stringify(numbers) === JSON.stringify([21, 22, 23, 24]),
  `Expected audited history [21,22,23,24]; found [${numbers.join(',')}].`
);

assert(
  !history.cases.some(c => c.caseNumber === 25 || c.slug === 'generator-copenhagen'),
  'Case #25 is already registered.'
);

const case25Path =
  'khds/research/institutions/hostels/generator-copenhagen/';

assert(
  fs.existsSync(safe(root, case25Path)),
  'Case #25 canonical directory does not exist.'
);

assert(
  commitExists('e8c3f72'),
  'Case #25 evidence commit e8c3f72 is unavailable.'
);

assert(
  pathMatchesCommit('e8c3f72', case25Path),
  'Case #25 canonical dossier differs from evidence checkpoint e8c3f72.'
);

const case25 = {
  caseNumber: 25,
  institutionName: 'Generator Copenhagen',
  slug: 'generator-copenhagen',
  institutionType: 'Hostel / Social Stay',
  sector: 'hostels',
  canonicalPath: case25Path,
  dossierComplete: true,
  administrativeReconciliation: true,
  evidenceCommit: 'e8c3f72',
  completionScope:
    'Canonical public-evidence research, case-level review, administrative closure and governance reconciliation committed in e8c3f72. Retrospectively registered in KHDS machine-readable history after the Cases #23-24 control-lineage repair. No scripted staging/publication journal exists for Case #25.'
};

const latestCompletedCase = {
  caseNumber: case25.caseNumber,
  institutionName: case25.institutionName,
  slug: case25.slug,
  institutionType: case25.institutionType,
  sector: case25.sector,
  canonicalPath: case25.canonicalPath,
  dossierComplete: true,
  administrativeReconciliation: true
};

const approvedAt = new Date().toISOString();

const nextHistory = {
  ...history,
  cases: [
    ...history.cases,
    case25
  ]
};

const nextState = {
  ...state,
  workflowStatus: 'idle',
  latestCompletedCase,
  expectedNextCase: 26,
  researchAuthorized: false,
  authorization: null,
  activeCase: null,
  disagreements: [],
  publication: null,
  case25Registration: {
    approvedBy: 'Brian Kodawa',
    approvedAt,
    scope:
      'Administrative machine-readable registration of completed KHDS Case #25 Generator Copenhagen only; canonical research remains unchanged and Case #26 is unselected and unstarted.',
    mode: 'retrospective-canonical-registration',
    evidenceCommit: 'e8c3f72',
    scriptedPublicationJournal: null
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
    case25Registration: nextState.case25Registration
  },
  dossierChanges: 'none',
  case26Touched: false
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
