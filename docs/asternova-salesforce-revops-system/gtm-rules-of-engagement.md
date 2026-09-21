# AsterNova GTM Rules of Engagement & Salesforce Governance Matrix

**Project type:** Simulated B2B SaaS Revenue Operations portfolio build  
**System of record:** Salesforce Sales Cloud  
**Status:** Completed and validated within the documented AsterNova test environment

This matrix documents how simulated GTM policy and operating requirements are translated into explicit Salesforce decision rules. It is portfolio evidence of Revenue Systems governance, not a claim about a production client environment.

| Business / GTM rule | Decision rule | Salesforce control | Exception / escalation behavior | Evidence |
| --- | --- | --- | --- | --- |
| Every inbound Lead must enter a controlled ownership process | Evaluate territory, availability, capacity and enterprise eligibility before assignment | Salesforce Flow and Lead routing fields | If no rep is eligible, route to AsterNova Inbound Queue | Live UAT validated eligible-rep assignment and queue fallback |
| Enterprise Leads require appropriate seller eligibility | Enterprise qualification must be satisfied before enterprise assignment | Flow decision logic and rep qualification fields | Ineligible reps are excluded from assignment | Routing UAT |
| Workload should be balanced across eligible sellers | Choose the least-loaded eligible rep | Capacity-aware Flow logic | Queue fallback when all eligible reps are at capacity | Capacity-routing UAT |
| Ownership changes must keep capacity accurate | Recalculate workload when ownership or lifecycle affects active Lead counts | Capacity maintenance automation | Recalculate both current and previous owner where applicable | Ownership/capacity UAT |
| Nurture Leads require a future follow-up action | Stamp follow-up date and create an owner task | Record-triggered Flow | Follow-up remains visible to the assigned owner | Lifecycle UAT |
| Qualified Leads require controlled conversion preparation | Create a high-priority conversion task before human-controlled conversion | Lifecycle Flow + Salesforce standard conversion | Human control is retained for Account/Contact matching | Qualification/conversion UAT |
| Qualification context must survive conversion | Carry Primary Need from Lead into Opportunity | Lead conversion field mapping | Missing/invalid mapping is treated as a test failure | Conversion UAT |
| Proposal-stage Opportunities require follow-up | Check Proposal Sent deals after three days and create a task | Scheduled path | Qualifying high-value deals escalate to the owner's manager | Flow Debug validation |
| Closed Won requires a structured handoff | Stamp Won Date and create onboarding work | Closed Won automation | Tasks support Sales-to-Customer-Success handoff | Opportunity-stage UAT |
| Closed Lost requires structured loss data | Lost Reason is required and Lost Date is stamped | Validation rule + automation | Incomplete loss records cannot pass the governed close process | Closed Lost UAT |
| Duplicate Leads should be reviewed before creation | Match exact email and warn on duplicates | Matching Rule + Duplicate Rule | User follows a controlled review/merge path | Duplicate-governance UAT |
| CRM access follows least privilege | Users receive only the access required for their role | Private sharing, role hierarchy, profiles and permission sets | Managers retain appropriate visibility while lower roles remain restricted | Security/permission UAT |
| Reporting must reconcile to AsterNova test data | Use AsterNova-only filters and approved definitions | Salesforce reports and dashboard | Sample/unrelated Salesforce data is excluded from governed reporting | Reporting reconciliation |

## Rules of Engagement themes

- **Ownership:** eligible-rep assignment, least-loaded selection, queue fallback.
- **Qualification:** enterprise eligibility, Nurture, Qualified and Disqualified paths.
- **Opportunity progression:** proposal follow-up, high-value escalation, Closed Won and Closed Lost controls.
- **Data governance:** imports, duplicate management, required data, permissions and data-quality reporting.
- **Accountability:** owner tasks, manager escalation, Customer Success handoff and management reporting.

## Scope note

AsterNova currently demonstrates a governed **Lead-to-Closed-Won / Customer Success handoff** lifecycle. It does **not** claim a complete Lead-to-Cash implementation because quoting, contracting, invoicing, billing and payment collection are outside the validated project scope.
