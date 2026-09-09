---
name: khds-research
description: Operate the repository's controlled KHDS case workflow, including preflight, locked staging, validation, resume and approved publication. Use for KHDS research work, not unrelated site changes.
---

Read `khds/AGENTS.md` and [case-schema.md](references/case-schema.md) before operating. Resolve all commands from the Git root.

Begin read-only: confirm root and branch, run `git status --short`, read `khds/state/current-case.json`, and compare identity, type, sector, canonical destination, case sequence and workflow status to disk. Record explicit user authorization through the supported start command; permission for one case never implies permission for another.

Run `node scripts/khds-validate.mjs --control-only`. Unresolved reconciliation blocks new research. From clean idle state, use the exact case identity plus `--authorize-by "<actual approving user>"` to record authorization and lock the case in one recoverable start. Existing committed `research-authorized` state remains supported. Start `--dry-run` writes nothing. Recover interrupted start with `node scripts/khds-start-case.mjs --recover-start`; preview recovery with `--dry-run`. Conflicting or incomplete artifacts stop recovery for review. After successful start use `node scripts/khds-start-case.mjs --resume`; it checks existing content and never rewrites files. Generate exclusively in locked case staging. Ordinary older-institution comparisons are legitimate; distinguish retained historical status snapshots from active instructions.

Run full validation before requesting publication approval. Stop on any failure. Preview with `node scripts/khds-publish.mjs --dry-run --report <digest>`; this requires no approval assertion and leaves staging state unchanged. Actual publication requires publishable state, administrative review and user approval of the report and exact content, then `--confirm --report <digest>`. The confirmation flag asserts actual approval; it is not permission itself. Scripts never stage, commit, push or deploy. Create a local checkpoint only when explicitly requested, within exact scope.

Use focused tracking updates, preserve historical records separately from active state, and never append wholesale governance snapshots. Completion state advances only after successful approved publication. Read current authorization and reconciliation from the manifest, not historical baseline descriptions.
