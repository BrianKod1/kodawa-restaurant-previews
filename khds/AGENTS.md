# KHDS controlled research

Repository files and `state/current-case.json` are authoritative; never infer authorization from chat history or an open editor. Read `.codex/skills/khds-research/SKILL.md` and its schema before operating.

Every run begins read-only: confirm `git rev-parse --show-toplevel`, `git branch --show-current`, run `git status --short`, read the manifest, and verify case number, institution name, slug, institution type, sector, canonical path, next case and workflow status against disk. Run `node scripts/khds-validate.mjs --control-only` from the root.

Research requires explicit `research-authorized` manifest status and user authorization recorded there. Lock identity with the start script before generating anything. Generate only inside that case's staging directory. Never overwrite existing dossiers or governance during generation. Resume from the manifest, staging lock and existing files after interruption; do not regenerate completed files.

Validation failure stops publication. Obtain explicit user approval of the successful validation report and exact proposed changes before publication. Promote only locked staging content and individually approved tracking changes. Never stage, commit, push or deploy automatically. Update completion state only after validation and approved publication succeed.

Preserve historical material and distinguish it from active state. Use focused governance updates, never append a whole historical snapshot when a focused update suffices. Identity, numbering, paths, required files, prior-case contamination, active-state conflicts, duplicate substantial sections, unexpected Git changes and excessive growth must pass validation.

Current baseline: Case #21 dossier complete; administrative reconciliation unresolved; Case #22 unauthorized. Control validation does not certify legacy reconciliation. Do not repair historical files or authorize research without a separately approved task.
