# KHDS state schema, version 1

## Authority

current-case.json is active machine-readable state; case-history.json preserves audited completion and known prior identities. The initial record is Case #21, Fogo Island Inn, slug fogo-island-inn-newfoundland, institutionType Boutique-scale luxury hotel / inn, sector hotels, canonicalPath khds/research/institutions/hotels/fogo-island-inn-newfoundland/. Dossier completion is true at public-evidence level; administrative reconciliation is false; next case is 22; researchAuthorized is false; workflowStatus is reconciliation-required. Disagreements explicitly preserve pending/completed conflicts and obsolete paths. Control validation does not certify legacy reconciliation.

## Fields

- schemaVersion: integer 1.
- expectedBranch: required Git branch.
- latestCompletedCase: six identity fields plus dossierComplete and administrativeReconciliation booleans.
- expectedNextCase: latest completed number plus one.
- workflowStatus: reconciliation-required, idle, research-authorized, staging, publishable, publishing.
- researchAuthorized: boolean, false initially and after publication.
- authorization: null or {approvedBy, approvedAt, identity}, recording actual user authorization and ISO date. Identity fields must match the start request; JSON key order is immaterial.
- activeCase: null or immutable lock object.
- disagreements: array of {path, reason}. Resolve only under a separately approved reconciliation task.
- reconciliationReview: {approvedBy, approvedAt}, required for publishable status, recording review of administrative closure. Separate from publication approval.
- publication: null or {journalPath, status}.

Identity fields in serialization order: caseNumber (positive integer), institutionName, slug (lowercase hyphenated identifier), institutionType, sector (lowercase directory identifier), canonicalPath (khds/research/institutions/<sector>/<slug>/). Paths are repository-relative, without traversal or symlinks. Future cases use the generalized institution layout; existing restaurant folders remain untouched.

History has schemaVersion, cases (audited completed identities and status) and priorIdentities (name/slug contamination hints). It records audited #21 without inventing completion records for #1-20; additional restaurant names/slugs come from existing directories.

## Preflight and start

Every run: confirm Git root and branch, git status --short, read manifest, verify identity, type, sector, canonical path, case sequence and workflow status against disk. Explicit user authorization is recorded by start; historical case permission never authorizes another case.

Run node scripts/khds-validate.mjs --control-only. It may PASS with an unresolved-reconciliation notice; that still blocks research. After reconciliation, start accepts actual user authorization through `--authorize-by "<approving user>"` with all six exact identity fields. The operator asserts that the user actually approved that identity; the flag cannot authenticate approval.

Start requires a clean tree and no active or unfinished case:

node scripts/khds-start-case.mjs --case <number> --name "<name>" --slug <slug> --type "<type>" --sector <sector> --destination khds/research/institutions/<sector>/<slug>/ --authorize-by "<approving user>" --dry-run

Remove --dry-run only for an authorized start. Optional --tracking takes a JSON array of {path,beforeSha256} for proposed tracking changes, locked at start. The six governance destinations plus institution and wellness indexes defined by validation are supported. Empty means dossier-only; administrative review must confirm sufficient scope before marking publishable.

Start checks the initial clean tree, branch, reconciliation, exact identity, duplicate names/slugs/numbers, destination and tracking baselines before writing. It records authorization and staging state without an intermediate commit. Existing committed research-authorized manifests remain supported without the flag.

Start first atomically writes `khds/state/start-pending.json`, containing previous manifest bytes, next state and baseline hashes. It creates dossier/, atomically writes lock.json, atomically updates the manifest, then moves the journal to staging/start.json. Lock adds stagingPath, trackingChanges, requiredFiles, lockedAt and baseCommit; it must exactly equal activeCase. Final resume validation must pass before success is returned. This is recoverable, not multi-file crash-atomic.

Use `node scripts/khds-start-case.mjs --recover-start --dry-run` to inspect an interrupted start without writes, then `--recover-start` to finish it. Recovery verifies HEAD, branch, source hashes, manifest bytes and every existing artifact, allows only transaction-owned changes and never overwrites conflicting data. A fully written journal .tmp or lock/state .tmp can be finalized; truncated or conflicting bytes are preserved and require scoped review. Completed start.json remains audit evidence. Legacy orphaned locks without a journal require scoped recovery, not regeneration.

After successful start, `node scripts/khds-start-case.mjs --resume` verifies the lock and existing inventory without writes. Missing files do not block resume but do block publication. Unrelated changes and identity changes block resume. Do not edit lock identity or regenerate completed files.

## Append-only tracking-plan amendment

During staging, extend the original plan with `node scripts/khds-start-case.mjs --append-tracking-file <JSON-file> --authorize-by "<actual approving user>" --dry-run`, then remove `--dry-run`. The input is an array of additional existing tracking destinations with exact beforeSha256 and optional unique anchors. This cannot replace or reorder the original plan, change case identity, or target paths outside the allowlist. Institution and wellness indexes are supported destinations. Existing source bytes must match their declared hashes.

The command first runs control validation, rejecting unrelated changes. It writes a single atomic staging/tracking-plan.json containing the original lock hash, appended records and authorization. Original lock, manifest and start journal are unchanged. Existing or interrupted amendments cannot be overwritten; preserve a leftover .tmp for scoped recovery. No general automatic amendment recovery is provided. Resume/publication read the effective plan as original records followed by additions and bind the amendment bytes into their report.

When the user authorizes focused control changes during staging, this same amendment records each changed control file's current SHA256 and original HEAD blob. Only those exact reviewed bytes are allowed by subsequent full validation; later edits or changes to their baseline invalidate the review. This grants neither a commit nor publication approval. Unrelated files remain forbidden. Run regression tests and review controls before recording the amendment.

Every tracking fragment must contain exactly one `<!-- KHDS-CURRENT-START -->` / `<!-- KHDS-CURRENT-END -->` block. Required lines describe the successful publication result: `Latest completed case: #<case> — <institution>`, `Completed institution dossiers: <audited institution history count + 1>`, and `Next case: #<case+1> — unselected and unstarted; research not authorized.` Earlier closure references belong outside active identity declarations or in explicit KHDS-HISTORY blocks. Full publication validation rejects stale latest/count fields and actionable staging-only language in new text; historical blocks are excluded. The assembled file must retain exactly one current summary. Resume permits incomplete editing, but never confers publication validity. Existing unchanged baseline bodies remain historical under the explicit summary rule; inspect the assembled diff to verify that interpretation.

## Content contract

Required files: README.md, discovery.md, reservation.md, pre-arrival.md, arrival.md, stay.md, dining.md, departure.md, atmosphere.md, photography.md, story.md, knowledge-extraction.md.

Every staged Markdown file begins with <!-- KHDS {identity JSON} --> on one line, followed by a newline. Include all six identity fields. Put research under dossier/. Put tracking replacements under tracking/0.md, tracking/1.md, etc. in locked list order. Never modify live governance during generation.

For focused governance edits, a tracking lock may additionally contain `anchors`, an ordered array of unique exact baseline passages. Each must exist exactly once and not overlap another. The corresponding staged Markdown contains the normal identity metadata followed by one replacement per anchor, separated by a line `<!-- KHDS-EDIT -->`. Validation checks all new text using the normal identity, link, duplicate and 100000-byte rules, verifies the full baseline hash, assembles the proposed file and enforces the existing total growth limits. Publication replaces only those locked passages, preserving all other bytes. Without anchors, legacy whole-file replacement remains supported with unchanged checks. This avoids copying historical governance into new findings. Review the assembled diff as well as the fragments.

Active identity and status declarations must use the locked institution and case number. Ordinary comparisons mentioning older institutions and case numbers are allowed without special markers. Mark retained historical status snapshots between <!-- KHDS-HISTORY-START --> and <!-- KHDS-HISTORY-END -->. Historical blocks cannot contain active current/next instructions or conceal new content. Relative dossier links resolve against canonical destination with staging substituted until publication. Use repository-relative paths in tracking replacements.

Checks include identity metadata, known prior names/slugs in identity declarations and titles, numbered active statements, required files, internal paths, repeated 12-nonblank-line blocks of at least 400 characters, 100000-byte staged-file limit, and tracking growth above 20000 bytes or 50 percent (10000-byte minimum allowance). These gates require review, never automatic cleanup. Do not append whole governance snapshots; make focused updates and preserve explicitly historical records.

## Validate and publish

node scripts/khds-validate.mjs --resume checks existing staged content without requiring all files. Control, resume and publication reports have distinct modes and digests. node scripts/khds-validate.mjs validates all staged content and exits nonzero on failure with exact paths/reasons. --control-only uses an explicit control-file allowlist, verifies a staged lock if present, and never certifies research completion. For an authorized local reconciliation, repeat --allow-path <exact-repository-file> to declare additional changed files. Extra allowlist paths are rejected in publication and resume modes. Full validation permits only state files and exact locked staging files. Establish a clean control baseline separately before research; scripts never stage, commit, push or deploy. An explicit user request may separately authorize an agent to create a local checkpoint; it does not authorize a push or research.

After full validation, preview staged content without changing status or asserting publication approval:

node scripts/khds-publish.mjs --dry-run --report <validation-digest>

Actual publication still requires publishable state with administrative reconciliation review and explicit user approval of the exact content/report, then `node scripts/khds-publish.mjs --confirm --report <validation-digest>`. The digest binds state, history, controls, start journal and staged content. Dry-run does not create that approval, mark publishable, or complete the case. Publication revalidates and rejects stale digests or existing destinations.

All operations are checked before writing. Publication writes a durable journal containing source/destination hashes, previous state/history and original tracking bytes, marks publishing, renames the dossier, replaces approved tracking files, then updates history and active state. Authorization resets false. Lock and journal remain recovery evidence.

Multi-file publication is not crash-atomic. On interruption STOP and compare journal hashes and destinations with disk. Recovery requires review; never rerun start or blindly overwrite destinations. Leftover .tmp, .khds-pending or publication journals block ordinary retry. If final state writing fails after promotion, reconstruct state from journal and disk under explicit approval. No automatic recovery command is provided.

## Limits

Known names/slugs and deterministic patterns cannot detect every alias, paraphrased conflict or semantic duplicate; human review remains required. Scripts do not externally verify research claims. Initial disagreements are recorded, not repaired. The skill and flags cannot authenticate human approval. Tests use isolated temporary Git repositories; commits there only create test baselines and never touch the user's Git index.

## Supported review transition
Use the complete review/validate/publish command sequence in khds/AGENTS.md. khds-review.mjs records previous/next state and bound content in staging/review.json, then advances publishable state atomically. Explicit approval and exact identity/report are required. Changed content requires renewed review. See AGENTS.md for exact control-review and interrupted-review recovery options.

## Evidence and published-case revisions
coverage.json schemaVersion 1 contains exactly ten dimensions: dimension, question, scopeChange, sources (inspected ledger IDs), observations (text and sources), unanswered (material questions), rating (sufficient/partial/blocked), reason, nextEvidence. sources.json schemaVersion 1 contains sources with id, HTTPS url, accessDate, sourceDate (or explicit undated), method, sections, access (inspected/partial/blocked/discovery-only). The validator checks consistency, never source truth. New agent research uses --evidence-coverage yes to lock this requirement. Revisions require it unconditionally; legacy file-count validation is not evidence certification.
The separate revision.json workflow preserves main state/history and all tracking. It records identity, revision number, original dossier hashes, exact controls/state/history/tracking baselines, explicitly preserved unrelated file hashes, authorization, staging path, review and publication record. See khds/AGENTS.md for begin/resume/validate/review/publish/recover commands and the source fallback order. Original dossier history lives under workflow/original-dossier; publication retains previous canonical bytes and appends revision-history without adding a completed case. Markdown links resolve from publication file locations; repository path examples are not links. Real revision content stays staged until explicitly approved.
