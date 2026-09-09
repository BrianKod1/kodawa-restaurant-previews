# KHDS controlled research

Repository files and `state/current-case.json` record workflow state. Explicit user authorization must be recorded by the supported start command; never infer permission from an open editor or a prior case. Read `.codex/skills/khds-research/SKILL.md` and its schema before operating.

Every run begins read-only: confirm `git rev-parse --show-toplevel`, `git branch --show-current`, run `git status --short`, read the manifest, and verify case number, institution name, slug, institution type, sector, canonical path, next case and workflow status against disk. Run `node scripts/khds-validate.mjs --control-only` from the root.

Research requires explicit user authorization. From a clean, reconciled repository, pass `--authorize-by "<actual approving user>"` with the exact identity to `node scripts/khds-start-case.mjs`. This records authorization, required files and a recoverable lock before generation; no manual JSON edit or intermediate authorization commit is needed. `--dry-run` writes nothing. An interrupted start uses `--recover-start` (optionally `--dry-run`); conflicting artifacts require review and are never overwritten. After successful start use `--resume`, which preserves completed files. Generate only inside locked case staging, never over existing dossiers or governance.

Validation failure stops publication. Obtain explicit user approval of the successful validation report and exact proposed changes before publication. Promote only locked staging content and individually approved tracking changes. Never stage, commit, push or deploy automatically. Update completion state only after validation and approved publication succeed.

After full validation, `node scripts/khds-publish.mjs --dry-run --report <digest>` previews staging without approval assertions or writes. It does not mark the case publishable or complete. Actual publication still requires publishable state, reconciliation review, explicit user approval and `--confirm`.

Proposed canonical tracking must describe successful publication, not the staging snapshot. Use a KHDS-CURRENT summary with the resulting latest case, audited institution count and unstarted next case; preserve historical references separately. Index entries may be appended to a locked tracking plan through `khds-start-case.mjs --append-tracking-file <JSON-file> --authorize-by "<approving user>"`. Never edit the identity lock to add destinations. The amendment also records exact reviewed hashes for explicitly authorized control changes during staging; test and review those changes first. Later control edits require renewed review, not an allowlist bypass.

Preserve historical material and distinguish it from active state. Use focused governance updates, never append a whole historical snapshot when a focused update suffices. Identity, numbering, paths, required files, prior-case contamination, active-state conflicts, duplicate substantial sections, unexpected Git changes and excessive growth must pass validation.

Read current completion and authorization from state/current-case.json, not a hard-coded baseline here. Administrative closure of public-evidence research does not validate operational outcomes or promote patterns. Control validation does not itself certify research closure. Do not repair historical files or authorize a new case without a separately approved task.

Use the supported `khds-review.mjs` administrative transition before publication; see the schema's complete commands. Review records the exact approved identity/content and control hashes recoverably. Revalidate after transition, and use the fresh publication digest. Later content edits require renewed review, not just a new publication digest. Never advance the manifest manually.

Review command sequence (substitute actual report digests):
```powershell
node scripts/khds-validate.mjs --for-review --review-controls
node scripts/khds-review.mjs --case 22 --slug sky-lagoon-kopavogur --destination khds/research/institutions/wellness/sky-lagoon-kopavogur/ --approve-by "Brian Kodawa" --review-controls yes --report <review-validation-digest>
node scripts/khds-validate.mjs
node scripts/khds-publish.mjs --confirm --report <fresh-publication-digest>
```
The optional control-review flags attest explicitly authorized and tested control changes; they allow only exact control paths and hashes, never unrelated files. Omit them without control changes. The read-only `--for-review` validator prepares initial or renewed review; it cannot approve publication. The review command requires matching case/slug/destination, approval and a fresh report. It writes review.json before the publishable manifest, binding identity, lock, start record, tracking plan, dossier, tracking fragments, tracking baseline, history and controls. Subsequent edits invalidate ordinary validation and require a renewed approved review. Review `--dry-run` is read-only. No command authenticates human approval: the named approver must actually have authorized it.

Recover an interrupted review with `node scripts/khds-review.mjs --recover true --dry-run`, then `node scripts/khds-review.mjs --recover true`. Recovery accepts only journal previous/next state and unchanged content. Complete temporary journal/state files can be finalized; truncated or conflicting files remain blocked for review. Retain review and publication journals as workflow evidence. Publication recovery is unchanged.

## Evidence coverage and source access

For new research, include `--evidence-coverage yes` in the supported start command. Legacy version-1 locks retain their original inventory, but a file-count PASS never certifies evidence coverage. Revisions always require `coverage.json` and `sources.json` alongside the twelve Markdown files. New coverage-enabled cases require them before full validation. Every dimension records its original research question, explicit scope changes (or None), inspected source IDs, sourced observations, material unanswered questions, rating (sufficient/partial/blocked), reason and next evidence. Unanswered material questions cannot coexist with sufficient. Partial is an honest public-source result, not a failure of operational validation. Validators check structure and declared consistency; a human must assess source truth, relevance, attribution and whether scope was narrowed honestly. Pattern maturity and real-world outcomes remain separate.

Source access order: try browser-rendered official pages, then accessible official documents/operator materials, then relevant authoritative third parties with attribution. Inspect the available tools and the Browser skill before declaring browser access unavailable. Successful initialization is not successful reading: verify a real rendered page. Record browser connection requirements when unavailable, without attributing tool failures to the website. Log actual access dates, source dates or undated, method, exact inspected sections, partial reads, failures and next evidence. Search snippets and image alt text are discovery aids, not directly inspected facts or photographs. Do not bypass authentication or access controls. Desktop/mobile claims require actual viewport inspection. One image never establishes a whole experience.

The README should contain identity, scope/dates, concise findings and proposed applications, coverage, source ledger, limitations and file navigation. Keep scripts, digests and test/publication history in workflow records. Use location-relative Markdown links; filesystem paths belong in code spans. Mark links requiring the full repository; standalone dossier archives do not include those external dependencies.

## Revisions of the latest published case

Revision workflow is deliberately dossier-only: it cannot change identity, case counts, canonical tracking, pattern governance or main state/history. It records a separate lock/status in `khds/state/revision.json`. An unfinished revision blocks new-case start. Scope expansion to tracking changes requires a separately implemented/reviewed workflow; never manually bypass this constraint.

After committing tested controls, start an authorized revision:
```powershell
node scripts/khds-revise.mjs begin --case 22 --slug sky-lagoon-kopavogur --authorize-by "Brian Kodawa" --preserve-path khds/research/institutions/wellness/sky-lagoon-kopavogur.zip
node scripts/khds-revise.mjs resume
node scripts/khds-revise.mjs validate
node scripts/khds-revise.mjs publish --dry-run --report <validation-digest>
```
`--preserve-path` is optional: it records the exact hash of one pre-existing unrelated file and rejects later changes to it. All other unexpected dirt is rejected. Do not use it for state, controls, tracking or canonical dossier content. `begin --dry-run` writes nothing. A durable revision record precedes copying. `recover` finalizes complete pending metadata and missing copies without replacing edited staged files. The original dossier is preserved under revision workflow/original-dossier; published bytes stay unchanged until approval. Resume copies only missing original files and never overwrites progress.

After explicit approval of the revision (previous publication approval does not cover new research), use:
```powershell
node scripts/khds-revise.mjs validate --for-review true
node scripts/khds-revise.mjs review --case 22 --slug sky-lagoon-kopavogur --approve-by "Brian Kodawa" --report <review-validation-digest>
node scripts/khds-revise.mjs validate
node scripts/khds-revise.mjs publish --confirm --report <fresh-reviewed-digest>
```
Review and reports bind revision identity, control/state/history baselines, canonical source bytes and all revised dossier/workflow bytes. Later edits require renewed review. Publication journals its reviewed file hashes in the revision record before moving the old canonical directory into `previous`, promotes the revised dossier, and appends revision-history.json without incrementing completed cases. On interruption use `node scripts/khds-revise.mjs recover --dry-run`, then `node scripts/khds-revise.mjs recover`. Conflicting files or truncated pending metadata stop recovery. Retain the revision record and backup for audit; no automatic deletion occurs. The original new-case publication commands do not publish revisions.

### Preserve substance during research rewrites

Before rewriting, inventory substantive findings, source connections, scope/date limits and mechanism analysis that must survive. Restore concise claim-to-source links; record specific omissions as superseded, contradicted, duplicate, unsupported or outside the explicit scope. Readability alone is not grounds for deleting findings. Before declaring a gap, check relevant already-inspected sources: distinguish evidence absent from evidence available only through a seller or historical source. Preserve original questions and distinguish source coverage from operational outcomes. Automated validation checks declared consistency, not source truth. Instruction changes during a locked revision must respect its bound control baseline; never edit the lock manually to accommodate them.
