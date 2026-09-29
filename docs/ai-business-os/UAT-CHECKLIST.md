# AI Business OS — UAT & Regression Checklist

This checklist separates **last fully verified core evidence** from the **self-use Sales Ops extension still being wired locally**. Do not mark an extension item complete until the n8n/API/UI implementation and regression evidence exist.

## Last fully verified core release

| Area | Acceptance evidence | Status |
| --- | --- | --- |
| Agent access security | Centralized internal auth; protected agent/MCP boundary | **PASS — 21/21** |
| RBAC & tenant isolation | OWN/BUSINESS scope, wrong-owner denial, cross-tenant denial | **PASS — 11/11** |
| Production readiness | Workflow packaging, recovery, integrations, security, runtime configuration | **PASS — 22/22** |
| Production bundle | Governed production export | **54 workflows / 646 documented nodes** |
| HubSpot implementation | Contact + deal creation, association, readback, idempotent replay | **PASS** |
| Salesforce implementation | Lead + approved Opportunity creation, readback, idempotent replay | **PASS** |
| Recovery state at core cutover | Open recovery / errors / DLQ | **0 / 0 / 0** |
| TEST workflow activation | Production boundary | **0 active TEST workflows** |

## Sales routing & capacity

- [ ] solo_operator mode routes only to the configured operator.
- [ ] Existing demo owner cannot bypass active solo_operator mode.
- [ ] multi_rep mode preserves configured reusable routing behavior.
- [ ] Rep at capacity is excluded.
- [ ] All eligible reps at capacity returns NO_CAPACITY.
- [ ] NO_CAPACITY creates one deduplicated Sales Ops alert.
- [ ] Routing replay does not duplicate an assignment or notification.
- [ ] follow_up_due uses the configured SLA for the qualification status.

## Sales-rep activity & SLA

- [ ] Assigned rep can record ACKNOWLEDGED.
- [ ] Assigned rep can record CONTACTED.
- [ ] Assigned rep can record FOLLOW_UP_SCHEDULED.
- [ ] Assigned rep can record QUALIFIED.
- [ ] Assigned rep can record CLOSED.
- [ ] Assigned rep can add NOTE.
- [ ] Overdue assigned lead with no valid activity creates SLA_BREACH.
- [ ] Valid rep activity resolves the lead's open SLA breach.
- [ ] Repeated monitor scans do not duplicate the alert or internal notification.

## Human approval

- [x] Eligible deal action can pause for human decision in the verified core.
- [x] Wrong rep / unauthorized principal is denied in the verified RBAC core.
- [x] Cross-tenant approval lookup fails closed in the verified RBAC core.
- [ ] Self-use Control Center lead card exposes the final approved action flow after SYS-11/UI wiring.
- [ ] Expired approval behavior is visible in the final Sales Ops dashboard.

## CRM owner mapping

- [ ] Every currently eligible logical rep has a verified HubSpot owner when HubSpot writes are required.
- [ ] Every currently eligible logical rep has a verified Salesforce owner when Salesforce writes are required.
- [ ] Every eligible rep has an internal notification destination.
- [ ] Missing required mapping produces OWNER_MAPPING_ISSUE.
- [ ] Provider sync is held/fails closed rather than assigning to an arbitrary CRM owner.

## CRM synchronization

- [x] HubSpot contact create/update controlled E2E.
- [x] HubSpot deal creation controlled E2E.
- [x] HubSpot contact–deal association readback.
- [x] HubSpot idempotent replay.
- [x] Salesforce Lead controlled E2E.
- [x] Salesforce approved Opportunity controlled E2E.
- [x] Salesforce readback + idempotent replay.
- [ ] Synthetic CRM failure creates CRM_SYNC_FAILURE alert without external provider mutation.
- [ ] Recovery/regression proves failed sync remains observable.

## Notification reliability

- [x] Internal sales notification architecture exists in the verified core.
- [ ] Synthetic delivery failure creates NOTIFICATION_FAILURE.
- [ ] Repeated scan does not duplicate a failure alert.
- [ ] Resolution is reflected after delivery status recovers.

## Security

- [x] Browser does not receive the internal service key.
- [x] Missing service authentication is denied.
- [x] Missing principal identity is denied.
- [x] Cross-tenant request is denied.
- [x] OWN-scope rep is restricted to owned records.
- [x] BUSINESS-scope manager/admin can operate within the authorized tenant.
- [ ] SYS-11 activity API repeats the same server-derived identity boundary.
- [ ] Monitoring regression performs zero external provider writes.

## Final acceptance gate for the self-use extension

- [ ] MON-01 Sales Operations Monitor active and published.
- [ ] ROUTE-01 explicitly enforces solo_operator.
- [ ] SYS-11 Sales Lead Activity API active, published and protected.
- [ ] SYS-07 returns Sales Ops, owner mapping and open-alert payloads.
- [ ] Control Center records rep activity and shows operational exceptions.
- [ ] Sales Ops + owner-mapping regression validators pass.
- [ ] Production readiness depends on the new validators.
- [ ] Production bundle is regenerated.
- [ ] Zero active TEST workflows.
- [ ] Zero secret leakage.
- [ ] Final regression run uses zero external provider writes.