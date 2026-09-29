# AI Business OS — Sales Operations Monitoring Dashboard Specification

## Goal

Provide one operational view for routing, assignments, approvals, CRM synchronization, notification delivery, SLA exceptions, errors and system health.

This specification describes the intended self-use/local extension. The database foundation exists; final n8n/API/Control Center wiring remains in progress until regression-tested.

## Executive strip

Display system readiness, active integrations, open high-priority alerts, unresolved errors, pending approvals and last refresh time.

## Sales routing

Display assigned active leads, unassigned routable leads, routed in the last 24 hours, NO_CAPACITY events, current operating mode, current eligible reps and active-load-versus-capacity per rep.

Operational question answered: **Who owns the work, and what is blocked?**

## SLA monitoring

Display open SLA breaches, overdue duration, owner, lead/company, qualification status, original follow-up due and latest valid rep activity.

Actions: Acknowledge, Contacted, Follow-up scheduled, Add note.

A valid rep activity should resolve the open SLA breach according to policy.

## Deal approvals

Display approval ID, lead/deal context, required approver, requested action, status, decision time and decision reason.

Only the authorized rep/manager may decide according to RBAC scope.

## CRM synchronization

Per provider display availability, credential validation, read/write gates, last success, failed sync count and latest failure.

Providers: HubSpot, Salesforce, Airtable, Gmail and Google Calendar.

## CRM owner mapping health

Per eligible rep display logical rep key, HubSpot mapping, Salesforce mapping, notification destination, provider requirement state and overall mapping health.

Missing required mapping must be visible as an exception.

## Notifications

Display queued, delivered/sent, failed/bounced, recipient logical identity, related lead/alert and latest failure reason.

Notification failure should create one deduplicated NOTIFICATION_FAILURE alert.

## Sales Ops alerts

Alert types: SLA_BREACH, NO_CAPACITY, OWNER_MAPPING_ISSUE, CRM_SYNC_FAILURE, NOTIFICATION_FAILURE.

Each alert should include severity, status, entity, owner, subject, detected time, last detected time, notification state and resolution state.

## Reliability & recovery

Display pending recovery, unresolved errors, unresolved DLQ, recovery attempts, exhausted recovery and latest incident.

## Agent/system health

Display agent execution health, advisory vs mutation authority, provider fallback status, PostgreSQL health, queue/runtime state and Control Center status.

## Security boundary

The browser must never receive the internal service key, provider secrets, database password, trusted tenant override or trusted principal override.

Trusted identity must be injected server-side.

## Acceptance criteria

1. SYS-07 exposes authorized monitoring payloads.
2. SYS-11 records authorized rep activity.
3. Control Center renders all required Sales Ops metrics and open alerts.
4. Alert deduplication is regression-tested.
5. SLA resolution after rep activity is regression-tested.
6. Owner mapping issues fail closed.
7. Cross-tenant and wrong-owner access are denied.
8. Monitoring regression performs zero external provider writes.