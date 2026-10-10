# AI Business OS — Evidence Matrix

**Project:** AI Business OS — Governed Revenue Operations & Business Systems Platform  
**Portfolio status:** Local production-style portfolio implementation; not a paid-client deployment.  
**Evidence principle:** Separate persisted database/provider evidence from workflow screenshots and from historical readiness snapshots. Do not claim business outcomes that were not measured.

## 1. Best evidence to show first

1. **Control Center** — `public/images/projects/ai-business-os/00-control-center-hero.webp` and `01-control-center.webp`. Use to orient a reviewer to the operating system; the screenshot is a UI/configuration artifact, not proof of every current incident state.
2. **Production-readiness snapshot** — `02-production-readiness.webp`. Supports the previously recorded local readiness result. State the counts as a *last fully verified core-release snapshot*: 21/21 agent-access security checks, 11/11 RBAC/tenant-isolation checks, and 22/22 readiness checks. Do not imply these were rerun in the latest evidence review.
3. **Supervisor and CRM gateway** — `03-supervisor.webp`, `04-crm-gateway.webp`. Show agent routing and the controlled tool boundary.
4. **Human approval** — `05-human-approval-gateway.webp`, `11-approval-decision-resume.webp`. Show the approval-request and decision-resume design. Database records show approval states historically, but the newer PENDING rows had expiry dates of 2026-10-01; do not present them as currently actionable.
5. **Recovery and replay safety** — `06-recovery-worker.webp`, `07-idempotent-retry.webp`. Pair the screenshots with the recovery-attempt records below.
6. **Provider integration** — `08-hubspot-adapter.webp`, `09-calendar-adapter.webp`. Pair with successful integration action logs and the separate HubSpot readback evidence.
7. **Analytics boundary** — `10-revops-analytics.webp`. Describe the specialist as advisory-only where that is the configured authority boundary.

All image paths are relative to `public/images/projects/ai-business-os/`. The committed screenshots are useful visual evidence, but they are not substitutes for database audit rows or live provider readback.

## 2. Persisted evidence confirmed in the read-only database review

| Capability | Evidence observed | Safe claim |
|---|---|---|
| Lead intake and agent decisions | `bos.agent_executions` has Supervisor and Sales CRM Agent records for `lead.created`; some records show `COMPLETED`, `READY`, and confidence around 0.95–0.99; some other records are `PLANNED`. | Agent decision records exist. Do not count PLANNED records as completed provider writes. |
| Lead qualification/routing | Controlled Google Form scenario recorded a lead scored 75/100, qualified, routed to `sales_practice`, with a 24-hour follow-up SLA. | Describe as a controlled test scenario, not a real customer conversion. |
| HubSpot contact projection | `bos.integration_action_log` records HubSpot `upsert_contact` SUCCESS with provider object ID `880647909565`; the successful action ID is `a44ae785-58bf-44cc-abcb-d11d7d42b0d3`. Separate live readback verified the HubSpot contact. | A specific contact projection was accepted, read back, and recorded in PostgreSQL audit evidence. |
| Notifications | `bos.provider_delivery_log` contained seven Slack rows marked SENT and one Gmail row marked SENT in the reviewed snapshot. | Delivery status was recorded. Do not infer recipient engagement or business impact. |
| Approval controls | Approval records include approved, rejected, and PENDING decisions. A historical HubSpot deal test was explicitly approved before deal creation. Newer PENDING requests had expiry dates of 2026-10-01. | Approval is a recorded control. Do not imply an expired PENDING request is actionable now. |
| Incident remediation | HTTP-method incident `INC-17060-1790799416723` and property-configuration incident `INC-17143-1790801414476` were recorded RESOLVED. | These two named HubSpot incidents were resolved in the verified remediation chain. |
| Outstanding exceptions | Other records, including `INC-16664-1790789946611`, `INC-16569-1790788371754`, and MCP-related incidents, remained OPEN or ESCALATED in the reviewed snapshot. | State clearly that separate incidents remain open/escalated; do not claim all incidents are resolved. |
| Recovery-policy tests | Recorded attempts: REPAIR RECOVERED; FALLBACK RECOVERED; RETRY success RECOVERED; simulated retry-exhaustion FAILED. | Demonstrates tested recovery branches, including a deliberate failure case—not universal incident recovery. |
| Workflow ledger | Query against `bos.workflow_executions` returned zero rows. | Do not use this table to claim a complete workflow execution history. |

## 3. Recovery test IDs

- `INC-RW-TEST-REPAIR-001` — `dev:test_repair_handoff` — `RECOVERED`.
- `INC-RW-TEST-FALLBACK-001` — `dev:test_fallback_handoff` — `RECOVERED`.
- `INC-RW-TEST-RETRY-SUCCESS-001` — `dev:test_retry_success` — `RECOVERED`.
- `INC-RW-TEST-RETRY-EXHAUST-001` — `dev:test_retry_exhaustion` — `FAILED`, with `Simulated retry exhaustion`.

These are explicit recovery test records, not proof that every live error has been resolved.

## 4. Claims to keep, qualify, or remove

**Keep**
- Reusable Revenue Operations/Business Systems architecture.
- Eight specialist agents, subject to the previously verified architecture snapshot.
- Governed CRM/provider adapters, authorization, idempotency, audit logging, human approval, monitoring, incident/DLQ handling and recovery tests.
- The specific verified HubSpot contact projection and readback.

**Qualify**
- 54 workflows / 646 documented nodes and the 21/21, 11/11, 22/22 checks: label as the *last fully verified core-release snapshot*.
- “Zero unresolved errors/DLQ”: only a historical cutover snapshot, not current health.
- “Two failures resolved”: name the two resolved HubSpot incidents and disclose separate OPEN/ESCALATED records.
- “Pending approval”: describe the recorded historical approval state, not a currently actionable request.

**Remove or do not claim**
- That all current incidents or dead-letter records are resolved.
- That the empty workflow-execution ledger proves every workflow ran successfully.
- Any client revenue, conversion, time-saved, productivity, or ROI result not measured.
- Any suggestion this is a paid-client deployment or public VPS/domain deployment.

## 5. Recommended recruiter walkthrough

1. Start at the Control Center and explain the business operating model.
2. Show Supervisor → governed gateway → specialist-agent boundary.
3. Show the approval gateway and exact-action resume.
4. Show the HubSpot adapter and connect it to the specific provider success/readback/audit chain.
5. Show recovery worker/retry design, then disclose both recovered test branches and the deliberately failed exhaustion test.
6. End with the incident status distinction: two named HubSpot incidents resolved; separate provider/MCP exceptions remain OPEN/ESCALATED in the reviewed snapshot.

**Integrity note:** This is a hands-on portfolio implementation using controlled/test scenarios and verified technical evidence. It is not represented as a paid-client deployment.
