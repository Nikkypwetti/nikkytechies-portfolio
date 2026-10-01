# GrowAgency Lead-to-Client Revenue Operations System

## Recruiter / Client Overview

GrowAgency is a production-style Revenue Operations case study showing how an inbound lead can move through AI-assisted qualification, human commercial decision-making, governed CRM changes, stage-based sales operations, payment-controlled Closed Won handoff, and structured client onboarding.

The project is presented as a business operating system rather than a collection of disconnected automations.

### What I built

- Lead intake and normalization
- AI-assisted qualification with structured score, qualification status, package, priority, pain point, reason and next action
- Human Sales Decision: Create Opportunity, Nurture, or Not Fit
- Airtable CRM and Processing Log
- Opportunity conversion and CRM Change Review
- Human approval for sensitive qualification changes
- Batch-safe approval processing
- Stage-aware Sales Operations across six pipeline stages
- Closed Won + Payment Confirmed gating
- Idempotent client and onboarding creation
- Human onboarding approval
- Existing Make.com onboarding handoff
- Airtable project/task setup and Notion client workspace

Revenue Operations orchestration remains in n8n, while the already-validated client onboarding implementation remains in Make.com instead of being duplicated.

## Business Problem

A lead-scoring workflow is not enough for a reliable revenue process.

The sales operation also needs clear ownership of commercial decisions, controlled opportunity creation, governed CRM changes, stage-specific sales actions, protection against duplicate processing, a reliable Closed Won handoff, a payment safeguard before client creation, and a controlled transition from Sales into Client Operations.

GrowAgency was evolved from an early lead-qualification workflow into that broader lead-to-client operating process.

## Solution Architecture

Google Form → Google Sheets → n8n Lead Intake → validation, normalization and Groq AI qualification → Airtable Lead + Processing Log → Sales Operations → Human Sales Decision → Governed Opportunity → CRM Change Review → Stage-Based Sales Operations → Closed Won + Payment Confirmed → Idempotent Client Operations Handoff → Human Onboarding Approval → Make.com → Airtable Project + Package Tasks + Notion Workspace.

### Operating flow

1. Capture inbound lead
2. Validate and normalize lead data
3. AI-assisted qualification
4. Create CRM Lead and Processing Record
5. Notify Sales Operations
6. Human Sales Decision
7. Create governed Opportunity
8. Review sensitive CRM changes
9. Execute stage-based Sales Operations
10. Confirm Closed Won
11. Verify Payment Confirmed
12. Create Client and Onboarding Request
13. Human onboarding approval
14. Create Project and Package Tasks in Make.com
15. Create Notion Workspace
16. Update onboarding and delivery state

## Governance Design

### Human Commercial Decision

AI recommends qualification context, but it does not decide whether a commercial opportunity should be created.

A human Sales Decision controls Create Opportunity, Nurture, or Not Fit.

### Governed CRM Changes

Opportunity conversion creates a review set for eight governed Opportunity fields.

Lower-risk enrichment changes can follow the safe path, while sensitive qualification changes require explicit human approval.

### Batch-Safe Approval Processing

The CRM approval workflow was hardened after identifying a batch-processing defect. The affected code nodes were changed to process items independently, and a regression test confirmed that two simultaneous CRM approvals could both be applied in one execution.

### Stage-Aware Sales Operations

Sales Operations are tied to actual pipeline stage changes. The validated lifecycle covers New Lead, Discovery, Proposal Sent, Negotiation, Closed Won and Closed Lost.

Stage-entry actions use dedupe state so repeated scans do not continually recreate the same work.

### Payment-Controlled Handoff

Closed Won alone is not permission to onboard.

The handoff requires Payment Confirmed. When payment is not confirmed, the workflow does not create the downstream client or onboarding records.

After payment confirmation, the handoff searches for existing downstream records before creating new ones.

### Human Onboarding Approval

The onboarding request remains under human control. The Revenue Operations layer creates the onboarding request; the separate Make.com onboarding implementation starts only after the request is approved.

## Verified End-to-End Proof

The validated proof chain is:

Lead → Qualification → Sales Decision → Opportunity → CRM Governance → Stage Operations → Closed Won → Payment Confirmed → Client Handoff → Onboarding Approval → Project Delivery Setup.

Key evidence includes:

- Fresh lead intake producing a qualified CRM record with an AI score of 85 and structured sales context.
- Populated Sales Operations Slack notification after fixing the Airtable record-shape mapping issue.
- Eight governed Opportunity fields with evidence, proposed values and applied results.
- Two simultaneous CRM approvals successfully applied after batch hardening.
- Proposal Sent → Negotiation → Closed Won stage behavior.
- Closed Won with payment not confirmed producing zero client/onboarding records.
- Payment confirmation producing exactly one GrowAgency Client, one Client Operations Client and one Onboarding Request.
- A subsequent handoff scan creating no duplicate downstream records.
- Existing Make.com onboarding producing the linked project, four package-specific tasks and a Notion client workspace.

### Evidence boundary

The Make.com onboarding workflow itself has been validated.

The case study does not claim a fresh verified Gmail or Slack onboarding-delivery message unless that specific delivery evidence has been captured.

## Recruiter-Facing Skills Demonstrated

### Revenue Operations
- Lead lifecycle design
- Qualification
- Sales decision gates
- Opportunity governance
- Pipeline-stage operations
- Closed Won handoff
- Client onboarding transition

### CRM / Business Systems
- Airtable CRM architecture
- Processing logs
- Linked records
- Data governance
- Approval workflows
- Idempotent processing
- Cross-system state management

### Automation
- n8n workflow orchestration
- Make.com onboarding orchestration
- Groq AI qualification
- Slack notifications
- Gmail and Calendar actions
- Notion workspace generation

### Operational Engineering
- Runtime data-shape debugging
- Regression testing
- Batch-processing hardening
- Duplicate prevention
- Human-in-the-loop controls
- Downstream state verification

## Interview Explanation

### 30-second version

I evolved GrowAgency from a lead-qualification workflow into a complete lead-to-client Revenue Operations system. An inbound lead is validated and AI-qualified, but a human still decides whether it becomes an opportunity. Important CRM changes are governed, pipeline stages drive Sales Operations actions, and Closed Won cannot create a client until payment is confirmed. The handoff is idempotent, and after onboarding approval my existing Make.com workflow creates the project, package tasks and Notion workspace.

### If asked: Where did you use AI?

I use AI for qualification context such as score, pain point, suggested package, reason and next action. I deliberately keep commercial decisions, sensitive CRM approvals and onboarding approval under human control.

### If asked: How did you make CRM changes safer?

Opportunity conversion creates a governed review set for eight fields. Lower-risk changes can follow the safe path while sensitive qualification changes require human approval. I also found and fixed a batch-processing defect and verified that two simultaneous approvals could both be applied successfully.

### If asked: How did you prevent duplicate client creation?

The Closed Won handoff checks existing GrowAgency and Client Operations records before creating anything and stores downstream IDs and handoff state. I then ran a later handoff scan and confirmed that it did not create duplicate records.

### If asked: Why n8n and Make.com?

They have different responsibilities. n8n handles Revenue Operations and CRM orchestration, while the existing Make.com scenario handles the validated client-onboarding implementation. I integrated the systems instead of rebuilding a working onboarding workflow.

### If asked: What did you personally own?

I owned the process design, Airtable CRM structure, n8n architecture, AI qualification contract, Sales Decision flow, opportunity governance, stage-based Sales Operations, client-handoff logic, testing, debugging and the boundary with the existing Make.com onboarding system.

## Evidence Gallery

The portfolio currently uses these recruiter-facing visuals:

- Airtable Revenue Operations CRM — public/images/projects/growagency/dashboard.png
- Lead Intake & AI Qualification — public/images/projects/growagency/workflow-1.png
- Sales Operations Routing & Follow-Up — public/images/projects/growagency/workflow-2.png
- Sales Operations Notification — public/images/projects/growagency/slack-alert.png

Additional screenshots from the CRM Change Review, approval regression and Closed Won/payment/handoff tests should be added as evidence assets when the corresponding image files are available in the repository.

## Project Stack

Airtable, n8n, Google Forms, Google Sheets, Groq AI, Slack, Gmail, Google Calendar, Make.com and Notion.

## Relationship to Client Operations Hub

GrowAgency and the Client Operations Hub are connected but separate systems.

GrowAgency owns revenue lifecycle, lead qualification, sales decisions, opportunity governance, Sales Operations, Closed Won/payment controls and the handoff into onboarding.

Client Operations Hub owns approved onboarding requests, project creation, package/task generation, Notion client workspace creation and delivery-state management.

This separation prevents the revenue workflow and delivery workflow from becoming one large, difficult-to-govern automation.

## Status

Completed — portfolio-grade Revenue Operations case study.

The implementation is presented as a production-style system with verified workflow behavior and explicit evidence boundaries. It is not presented as a live third-party client deployment.
