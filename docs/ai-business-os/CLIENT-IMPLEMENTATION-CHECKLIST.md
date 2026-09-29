# AI Business OS — Client Implementation Checklist

Use this when adapting the reusable Business OS to a real company. Client differences should be configuration, mappings and credentials — not hard-coded workflow forks.

## 1. Business identity & environment

- Client/company name
- business_id
- environment: development / staging / production
- primary timezone and operating hours
- escalation contacts
- production change owner
- data-retention and audit requirements

## 2. Employee identity & RBAC

Define every human or service principal before production use.

| Item | Required |
| --- | --- |
| Verified SSO/OIDC subject or trusted identity | Yes for real multi-user production |
| Principal ID | Yes |
| Role(s) | Yes |
| Sales rep key, if applicable | Yes |
| Business/tenant mapping | Yes |
| Active/inactive status | Yes |

Recommended pattern: SSO/OIDC + MFA → trusted backend → principal/business mapping → server-injected trusted headers → Business OS RBAC.

The browser must never choose its own trusted principal, tenant or internal service key.

## 3. Qualification policy

- qualification statuses
- lead-scoring rules
- required and non-blocking fields
- deal eligibility rules
- discovery criteria
- nurture criteria
- disqualification reasons
- human-review thresholds

## 4. Routing & capacity

For each rep configure logical rep key, display name, active status, skills, source affinity, territory, status affinity, priority, max active leads and SLA policy.

Explicitly test: no eligible rep, all reps at capacity, unavailable rep, existing owner, reassignment, manager override and Sales Ops escalation.

## 5. CRM configuration

### HubSpot
- credential and least-privilege scopes
- pipeline and stage IDs
- required contact/deal properties
- owner IDs
- custom-property mappings
- association behavior
- write gate and idempotency policy

### Salesforce
- org/environment and OAuth connected app
- Lead and Opportunity fields
- Salesforce user IDs
- Lead conversion policy
- stage and field mappings
- validation rules
- write gate and idempotency policy

### Airtable
- base and table IDs
- field names/types
- API credential
- billing/API availability
- write gate

Never enable a provider write gate solely because credentials exist; validate mapping and a controlled test path first.

## 6. Owner & notification mapping

Complete the CRM owner-mapping template for every eligible rep. Missing required mapping should fail closed.

## 7. Human approvals

Define actions requiring approval, approver role, ownership restrictions, expiration, rejection reason, resume behavior and audit evidence.

Approval must resume the exact stored action rather than asking the model to recreate it.

## 8. SLA & operational alerting

Configure follow-up SLA by lead status, breach recipients, NO_CAPACITY escalation, CRM failure escalation, notification failure escalation, owner-mapping alerts, deduplication and resolution rules.

## 9. Integration controls

For each provider record credential owner, least-privilege scopes, read/write gates, availability, credential validation, idempotency format, retry policy, readback proof and disable/rollback procedure.

## 10. UAT

Minimum scenarios: normal lead, discovery lead, nurture/not-fit, capacity routing, no capacity, wrong owner, missing CRM mapping, approval/rejection, duplicate event, CRM failure, notification failure, retry/recovery, cross-tenant denial, unauthorized caller, backup/restore verification.

## 11. Deployment & handover

Before internet-facing production add HTTPS/TLS, real SSO/OIDC + MFA, real employee mappings, managed secret storage, reverse proxy/zero-trust edge, rate limiting, request-size controls, backup schedule, restore drill, monitoring, incident runbook, key rotation drill and rollback procedure.

Deliver a client admin guide, sales-user guide, data dictionary and final UAT sign-off.

## 12. Client acceptance questions

1. Who owns each lead?
2. What happens when nobody has capacity?
3. Where does a rep see and act on assigned work?
4. Which actions require human approval?
5. Which CRM is authoritative for which data?
6. How are duplicate writes prevented?
7. How do we know a CRM sync failed?
8. What happens after an SLA breach?
9. Who can access each tenant's data?
10. How do we recover or roll back safely?