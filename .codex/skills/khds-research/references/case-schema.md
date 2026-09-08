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

Every run: confirm Git root and branch, git status --short, read manifest, verify identity, type, sector, canonical path, case sequence and workflow status against disk. Repository evidence governs; chat history does not authorize work.

Run node scripts/khds-validate.mjs --control-only. It may PASS with the explicit unresolved-reconciliation notice. Research remains blocked until authorized reconciliation resolves the disagreements and actual user approval is recorded in research-authorized state.

Start requires a clean tree and no active or unfinished case:

node scripts/khds-start-case.mjs --case <number> --name "<name>" --slug <slug> --type "<type>" --sector <sector> --destination khds/research/institutions/<sector>/<slug>/ --dry-run

Remove --dry-run only for an authorized start. Optional --tracking takes a JSON array of {path,beforeSha256} for proposed tracking changes, locked at start. Only the six tracking destinations defined by validation are supported. Empty means dossier-only; administrative review must confirm sufficient scope before marking publishable.

Start creates khds/staging/case-<number>-<slug>/lock.json, dossier/ and active manifest state. Lock adds stagingPath, trackingChanges, lockedAt and baseCommit; it must exactly equal activeCase. Do not change locked identity. Never overwrite completed staged files. Use node scripts/khds-start-case.mjs --resume to read and verify the lock and inventory without writing. Existing state and locked staging changes are allowed; unrelated changes and identity changes block resume. Missing files do not block resume, but still fail publication validation. New destinations must be absent and resolve safely within the canonical institution directory; only the latest completed dossier must already exist. An orphaned lock after interruption blocks restart; preserve it and request scoped recovery instead of regenerating.

## Content contract

Required files: README.md, discovery.md, reservation.md, pre-arrival.md, arrival.md, stay.md, dining.md, departure.md, atmosphere.md, photography.md, story.md, knowledge-extraction.md.

Every staged Markdown file begins with <!-- KHDS {identity JSON} --> on one line, followed by a newline. Include all six identity fields. Put research under dossier/. Put tracking replacements under tracking/0.md, tracking/1.md, etc. in locked list order. Never modify live governance during generation.

Active identity and status declarations must use the locked institution and case number. Ordinary comparisons mentioning older institutions and case numbers are allowed without special markers. Mark retained historical status snapshots between <!-- KHDS-HISTORY-START --> and <!-- KHDS-HISTORY-END -->. Historical blocks cannot contain active current/next instructions or conceal new content. Relative dossier links resolve against canonical destination with staging substituted until publication. Use repository-relative paths in tracking replacements.

Checks include identity metadata, known prior names/slugs in identity declarations and titles, numbered active statements, required files, internal paths, repeated 12-nonblank-line blocks of at least 400 characters, 100000-byte staged-file limit, and tracking growth above 20000 bytes or 50 percent (10000-byte minimum allowance). These gates require review, never automatic cleanup. Do not append whole governance snapshots; make focused updates and preserve explicitly historical records.

## Validate and publish

node scripts/khds-validate.mjs --resume checks existing staged content without requiring all files. Control, resume and publication reports have distinct modes and digests. node scripts/khds-validate.mjs validates all staged content and exits nonzero on failure with exact paths/reasons. --control-only uses an explicit control-file allowlist, verifies a staged lock if present, and never certifies research completion. For an authorized local reconciliation, repeat --allow-path <exact-repository-file> to declare additional changed files. Extra allowlist paths are rejected in publication and resume modes. Full validation permits only state files and exact locked staging files. Establish a clean control baseline separately before research; scripts never stage, commit, push or deploy. An explicit user request may separately authorize an agent to create a local checkpoint; it does not authorize a push or research.

After completion and administrative review, set workflowStatus to publishable within the authorized workflow. Present the successful report and exact proposed content to the user. Only after explicit approval:

node scripts/khds-publish.mjs --confirm --report <validation-digest> --dry-run

Then run without --dry-run. The digest binds state, history, controls and staged content. The flag asserts actual user approval; it does not itself grant permission. Publication revalidates and rejects a stale digest, wrong state or existing destination.

All operations are checked before writing. Publication writes a durable journal containing source/destination hashes, previous state/history and original tracking bytes, marks publishing, renames the dossier, replaces approved tracking files, then updates history and active state. Authorization resets false. Lock and journal remain recovery evidence.

Multi-file publication is not crash-atomic. On interruption STOP and compare journal hashes and destinations with disk. Recovery requires review; never rerun start or blindly overwrite destinations. Leftover .tmp, .khds-pending or publication journals block ordinary retry. If final state writing fails after promotion, reconstruct state from journal and disk under explicit approval. No automatic recovery command is provided.

## Limits

Known names/slugs and deterministic patterns cannot detect every alias, paraphrased conflict or semantic duplicate; human review remains required. Scripts do not externally verify research claims. Initial disagreements are recorded, not repaired. The skill and flags cannot authenticate human approval. Tests use isolated temporary Git repositories; commits there only create test baselines and never touch the user's Git index.
