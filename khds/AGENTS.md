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
