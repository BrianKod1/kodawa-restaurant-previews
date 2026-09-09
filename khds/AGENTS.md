# KHDS controlled research

Repository files and `state/current-case.json` record workflow state. Explicit user authorization must be recorded by the supported start command; never infer permission from an open editor or a prior case. Read `.codex/skills/khds-research/SKILL.md` and its schema before operating.

Every run begins read-only: confirm `git rev-parse --show-toplevel`, `git branch --show-current`, run `git status --short`, read the manifest, and verify case number, institution name, slug, institution type, sector, canonical path, next case and workflow status against disk. Run `node scripts/khds-validate.mjs --control-only` from the root.

Research requires explicit user authorization. From a clean, reconciled repository, pass `--authorize-by "<actual approving user>"` with the exact identity to `node scripts/khds-start-case.mjs`. This records authorization, required files and a recoverable lock before generation; no manual JSON edit or intermediate authorization commit is needed. `--dry-run` writes nothing. An interrupted start uses `--recover-start` (optionally `--dry-run`); conflicting artifacts require review and are never overwritten. After successful start use `--resume`, which preserves completed files. Generate only inside locked case staging, never over existing dossiers or governance.

Validation failure stops publication. Obtain explicit user approval of the successful validation report and exact proposed changes before publication. Promote only locked staging content and individually approved tracking changes. Never stage, commit, push or deploy automatically. Update completion state only after validation and approved publication succeed.

After full validation, `node scripts/khds-publish.mjs --dry-run --report <digest>` previews staging without approval assertions or writes. It does not mark the case publishable or complete. Actual publication still requires publishable state, reconciliation review, explicit user approval and `--confirm`.

Preserve historical material and distinguish it from active state. Use focused governance updates, never append a whole historical snapshot when a focused update suffices. Identity, numbering, paths, required files, prior-case contamination, active-state conflicts, duplicate substantial sections, unexpected Git changes and excessive growth must pass validation.

Read current completion and authorization from state/current-case.json, not a hard-coded baseline here. Administrative closure of public-evidence research does not validate operational outcomes or promote patterns. Control validation does not itself certify research closure. Do not repair historical files or authorize a new case without a separately approved task.
