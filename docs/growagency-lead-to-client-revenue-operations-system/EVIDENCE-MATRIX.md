# GrowAgency Evidence Matrix

This document maps the recruiter-facing claims in the GrowAgency case study to the evidence that should be used when presenting the project.

| Capability | Evidence to show | Verified state |
|---|---|---|
| Lead intake + AI qualification | Lead Intake workflow + completed Airtable Processing Log | Verified |
| Qualified lead context | Qualified Intake Slack message with score, qualification, pain point and next action | Verified |
| CRM governance | CRM Change Review showing governed fields, proposed values and evidence | Verified |
| Applied CRM changes | CRM Change Review showing Applied status and applied values | Verified |
| Batch approval hardening | CRM Change Approval Handler + successful two-item regression evidence | Verified |
| Stage-based Sales Operations | Proposal Sent, Negotiation and Closed Won execution evidence | Verified |
| Payment safeguard | Closed Won record with Payment Confirmed false and no downstream client records | Verified |
| Client handoff | GrowAgency Client + Client Operations Client + Onboarding Request records | Verified |
| Idempotency | Second handoff scan with no duplicate downstream records | Verified |
| Onboarding approval boundary | Onboarding Request remaining Pending Approval until explicitly approved | Verified |
| Make.com onboarding | Completed onboarding request → project → package tasks → Notion workspace | Verified |
| Onboarding Slack/Gmail delivery | Fresh message evidence for the specific onboarding event | Not yet claimed |
| Client delivery workspace | Active Client Workspace / Notion workspace | Verified for the validated onboarding project |

## Recommended recruiter walkthrough

1. Lead Intake & AI Qualification — explain how the inbound record becomes structured CRM context.
2. Qualified Intake — show the AI score and recommended next action.
3. Human Sales Decision — explain why AI does not make the final commercial decision.
4. CRM Change Review — show the eight governed fields and evidence.
5. Approval Regression — explain the batch defect and how it was hardened.
6. Opportunity Stage Operations — show stage-specific execution evidence.
7. Closed Won + Payment Confirmed — explain why revenue confirmation is a separate gate.
8. Client Handoff — show the linked client and onboarding records.
9. Make.com Client Onboarding — show the project, tasks and Notion workspace.
10. Architecture boundary — explain that GrowAgency owns Revenue Operations while Client Operations Hub owns delivery provisioning.

## Evidence language

Use: validated, verified, tested, proved through execution evidence.

Do not use: live client deployment, production customer, or fully automated onboarding notifications unless new evidence supports those statements.
