# AsterNova Revenue Systems Business Requirements

**Context:** Simulated B2B SaaS Revenue Operations environment  
**Purpose:** Translate business requirements into Salesforce controls, exception paths and measurable validation criteria.

The requirements below were defined for the portfolio simulation and then implemented and tested in Salesforce. This demonstrates **requirements definition and translation** rather than stakeholder interview-based Requirements Gathering.

| ID | Business requirement | Business rationale | Salesforce / system implementation | Exception behavior | Validation expectation |
| --- | --- | --- | --- | --- | --- |
| BR-01 | Capture inbound Leads through more than one channel | Avoid dependence on a single intake path | Web-to-Lead plus Google Forms → Google Sheets → n8n → Salesforce | Invalid external data is stopped before CRM submission | Both channels create valid test Leads |
| BR-02 | Route Leads only to eligible reps | Reduce incorrect ownership and missed follow-up | Territory, active, available, capacity and enterprise-eligibility checks | Route to Inbound Queue if no rep qualifies | Eligible assignment and queue fallback both pass |
| BR-03 | Balance active Lead workload | Prevent overloading one seller when alternatives exist | Least-loaded eligible-rep selection | Queue fallback if no capacity exists | Capacity behavior reconciles after routing |
| BR-04 | Keep rep capacity accurate after ownership/lifecycle changes | Maintain reliable routing inputs | Capacity maintenance automation | Recalculate current and previous owner where needed | User-to-user, user-to-queue and lifecycle changes validate |
| BR-05 | Provide controlled Nurture follow-up | Prevent Leads from disappearing after qualification review | 30-day follow-up date plus owner task | Missing task/date is a failure | Nurture test creates expected follow-up |
| BR-06 | Prepare Qualified Leads for conversion while retaining human judgment | Avoid uncontrolled Account/Contact creation | High-priority conversion task + standard Salesforce conversion | Human decides matching during conversion | Qualified path and conversion mapping validate |
| BR-07 | Preserve qualification context downstream | Keep sales context available at Opportunity stage | Primary Need Lead-to-Opportunity field mapping | Mapping failure is visible in UAT | Converted Opportunity retains Primary Need |
| BR-08 | Govern proposal-stage follow-up | Keep late-stage opportunities active and accountable | Scheduled Proposal Sent path | High-value Opportunity escalates to manager | Scheduled path validated with Flow Debug |
| BR-09 | Create structured Closed Won handoff | Reduce post-sale ownership ambiguity | Won Date + onboarding tasks for Sales / Customer Success | Missing handoff task is treated as failure | Closed Won automation validates |
| BR-10 | Enforce structured Closed Lost data | Improve loss analysis quality | Lost Reason validation + Lost Date automation | Record cannot close correctly without required data | Closed Lost behavior validates |
| BR-11 | Prevent uncontrolled duplicate creation | Protect CRM data quality | Exact-email Matching Rule and Duplicate Rule | User reviews and merges when appropriate | Warning and controlled cleanup validate |
| BR-12 | Enforce least-privilege access | Protect CRM data while preserving management oversight | Private sharing, role hierarchy, profiles and permission sets | Lower-role access remains restricted | Manager/lower-role visibility tests pass |
| BR-13 | Provide management reporting that reconciles to test data | Support reliable operational decisions | Pipeline, conversion, aging, forecast, rep performance and data-quality reports | Unrelated sample data excluded | Dashboard/report totals reconcile |
| BR-14 | Document system behavior for users and future changes | Support system adoption and maintainability | CRM data dictionary, sales user guide, Rules of Engagement and traceability documentation | Ambiguous rules are documented before change | User-facing documentation remains aligned with build |

## Process map

1. Inbound Lead capture
2. Validate and normalize external data
3. Create Salesforce Lead
4. Apply duplicate and data-quality controls
5. Evaluate territory, availability, capacity and enterprise eligibility
6. Assign eligible rep or Inbound Queue
7. Work Lead
8. Nurture follow-up or Qualified conversion preparation
9. Convert to Account + Contact + Opportunity
10. Progress Opportunity through governed stages
11. Proposal follow-up and high-value escalation
12. Closed Won handoff or Closed Lost governance
13. Reporting and management review
14. UAT and documentation review

## Scope boundary

The project covers Revenue Systems governance from inbound Lead through Opportunity outcomes and Customer Success handoff. Full **Lead-to-Cash** is not claimed because quote, contract, invoice, billing and payment processes have not been implemented or validated.
