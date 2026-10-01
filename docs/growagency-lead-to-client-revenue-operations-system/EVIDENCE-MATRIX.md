# GrowAgency Evidence Matrix

This document maps the recruiter-facing claims in the GrowAgency case study to the evidence already captured during development.

| Capability | Evidence already captured | Status |
|---|---|---|
| Lead intake + AI qualification | n8n Lead Intake & AI Qualification workflow screenshot | Verified |
| Qualified lead context | Airtable Processing Log + Qualified Intake Slack screenshot | Verified |
| Human Sales Decision | Processing Log showing Sales Decision state and next action | Verified |
| CRM governance | CRM Change Review showing eight governed fields, proposed values and evidence | Verified |
| Applied CRM changes | CRM Change Review showing Applied status and Applied Value | Verified |
| Batch approval hardening | Development regression result: execution 3321 successfully processed two simultaneous approvals | Verified; execution screenshot unavailable |
| Stage-based Sales Operations | Opportunity lifecycle / Sales Operations execution evidence including Closed Won | Verified |
| Closed Won state | Opportunities table showing Qualified, AI Score 85, Standard package and Closed Won | Verified |
| Payment safeguard | Opportunity evidence showing Payment Confirmed and downstream record links | Verified |
| Client handoff | Closed Won → Client Operations Handoff successful execution + Airtable Completed handoff | Verified |
| Idempotent handoff | Downstream client/handoff state from the validated handoff flow | Verified |
| Onboarding approval boundary | Onboarding Requests showing Pending Approval state | Verified |
| Completed onboarding examples | Onboarding Requests showing completed onboarding examples | Verified |
| Project provisioning | Projects table showing generated client project | Verified |
| Task provisioning | Tasks table showing four generated onboarding tasks | Verified |
| Client delivery workspace | Notion Client Workspace screenshot | Verified |
| Make.com onboarding architecture | Professional Client Onboarding workflow canvas | Verified |
| Fresh "NEW CLIENT ONBOARDING COMPLETED" Slack message | Not captured | Not claimed |

## Evidence already supplied in the project review

- Lead Intake & AI Qualification — n8n
- Airtable Processing Log
- Qualified Intake — Slack
- CRM Change Review — proposed and applied governed fields
- Opportunities — Closed Won / Qualified / AI Score 85
- Payment Confirmed and CRM relationship fields
- Closed Won → Client Operations Handoff — n8n
- Client Operations Handoff — Airtable
- Onboarding Requests — Pending Approval and completed examples
- Projects — Airtable
- Tasks — Airtable
- Client Workspace — Notion
- Professional Client Onboarding — Make.com

## The one missing execution screenshot

The unavailable screenshot is the **successful CRM Change Approval Handler batch execution, execution 3321**. The workflow later could not be republished after a node-position-only edit because n8n returned a "too many requests" activation warning, and the user's screenshot/file-upload limit was reached.

The test result itself remains part of the verified development record: two simultaneous approvals were processed successfully after batch hardening.

## Recommended recruiter walkthrough

1. Lead Intake & AI Qualification
2. Processing Log + Qualified Intake notification
3. Human Sales Decision
4. CRM Change Review
5. Batch approval hardening
6. Opportunity Stage Operations
7. Closed Won + Payment Confirmed
8. Client Handoff
9. Client Operations Hub
10. Client Workspace
11. Make.com onboarding architecture

## Evidence language

Use: **validated, verified, tested, proved through execution evidence**.

Do not use: **live client deployment, production customer, or fully automated onboarding notifications** unless new evidence supports those statements.
