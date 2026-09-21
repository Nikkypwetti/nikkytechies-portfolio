# AsterNova Requirements-to-UAT Traceability

**Formal UAT register:** 41 documented scenarios  
**Result:** 41 passed, 0 failed  
**Execution:** 37 live validations + 4 Salesforce Flow Debug validations

This artifact connects the major Revenue Systems requirements to the controls and test evidence used in the AsterNova simulation. It summarizes the existing UAT register rather than inventing new scenario IDs.

| Requirement area | Implemented control | UAT evidence / method | Status |
| --- | --- | --- | --- |
| Multi-source Lead capture | Web-to-Lead and Google Forms → Sheets → n8n → Salesforce | Live intake tests | Passed |
| Territory / eligibility routing | Salesforce routing Flow | Live routing tests | Passed |
| Capacity-aware assignment | Least-loaded eligible-rep logic | Live capacity tests | Passed |
| No-eligible-rep exception | AsterNova Inbound Queue fallback | Live fallback test | Passed |
| Capacity maintenance | Current/previous owner recalculation | Live ownership/lifecycle tests | Passed |
| Nurture follow-up | Follow-up date + owner task | Live lifecycle test | Passed |
| Qualified conversion preparation | High-priority conversion task | Live lifecycle test | Passed |
| Lead conversion mapping | Primary Need → Opportunity | Live conversion test | Passed |
| Proposal follow-up | Scheduled Proposal Sent path | Salesforce Flow Debug | Passed |
| High-value escalation | Manager escalation path | Salesforce Flow Debug | Passed |
| Closed Won handoff | Won Date + onboarding tasks | Live opportunity-stage test | Passed |
| Closed Lost governance | Lost Reason + Lost Date controls | Live opportunity-stage test | Passed |
| Duplicate prevention | Matching Rule + Duplicate Rule | Live duplicate-warning test | Passed |
| Duplicate cleanup | Controlled review / merge | Live cleanup validation | Passed |
| Salesforce Data Governance | Import controls + data-quality reporting | Live data-quality validation | Passed |
| Least-privilege access | Private sharing + roles + permission sets | Live user/manager visibility tests | Passed |
| Pipeline reporting | AsterNova-only report filters | Report reconciliation | Passed |
| Weighted forecast | Amount × Probability reporting | Report reconciliation | Passed |
| User documentation | CRM data dictionary + sales user guide | Documentation review against implemented fields/process | Completed |

## Traceability principle

A control is considered complete only when the project can connect:

**Business requirement → decision rule / configuration → exception behavior → validation evidence → user documentation**

That traceability model is used to keep the AsterNova build explainable and maintainable rather than treating Salesforce automation as isolated Flow logic.
