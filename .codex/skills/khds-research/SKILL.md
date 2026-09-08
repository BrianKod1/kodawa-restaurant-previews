---
name: khds-research
description: Operate the repository's controlled KHDS case workflow, including preflight, locked staging, validation, resume and approved publication. Use for KHDS research work, not unrelated site changes.
---

Read `khds/AGENTS.md` and [case-schema.md](references/case-schema.md) before operating. Resolve all commands from the Git root.

Begin read-only: confirm root and branch, run `git status --short`, read `khds/state/current-case.json`, and compare identity, type, sector, canonical destination, case sequence and workflow status to disk. Repository evidence and manifest govern; chat history does not grant research authorization.

Run `node scripts/khds-validate.mjs --control-only`. Unresolved reconciliation blocks new research. Only explicit `research-authorized` state with recorded authorization permits the start command. Lock all identity fields before generating files. Generate exclusively in locked case staging, without overwriting research or governance. On interruption use `node scripts/khds-start-case.mjs --resume`; it permits the locked staging changes, checks existing content and never rewrites files. Ordinary older-institution comparisons are legitimate; distinguish retained historical status snapshots from active instructions.

Run full validation before requesting publication approval. Stop on any failure. Obtain user approval after presenting the report and exact content, then use the report digest with `khds-publish.mjs --confirm --report <digest>`. Dry-run first. The confirmation flag records the operator's assertion of actual approval; it is not permission by itself. The scripts never stage, commit, push or deploy. Create a local checkpoint only when the user explicitly requests one, within their exact scope.

Use focused tracking updates, preserve historical records separately from active state, and never append wholesale governance snapshots. Completion state advances only after successful approved publication. The initial Case #21 state explicitly preserves reconciliation disagreements; Case #22 remains unauthorized.
