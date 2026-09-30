# AI Revenue Intelligence & Revenue Systems Agent V2 — Recruiter & Interview Guide

## Positioning

This project is best presented as a **Revenue Systems / Revenue Operations platform with governed AI**, not as a chatbot and not as a collection of n8n automations.

It demonstrates end-to-end ownership across:

- Revenue Operations and management reporting
- CRM and Revenue Systems architecture
- Business requirements translated into deterministic controls
- AI-assisted intent interpretation and management communication
- PostgreSQL governance and least-privilege access
- HubSpot integration and source-to-canonical data modeling
- Multi-channel report delivery
- Reliability, observability, incident recovery and auditability
- Deployment, testing, CI and handover documentation

## 30-second interview answer

> I designed and built a production-style Revenue Intelligence and Revenue Systems platform that lets an authorized manager ask a natural-language revenue question and receive a governed answer from CRM data. I used Groq only for intent interpretation and grounded summaries; KPI definitions, permissions and database execution remain deterministic. I built reusable CRM adapters, least-privilege PostgreSQL roles, Gmail delivery, reliability and observability controls, and a live Control Center. I validated the system with a read-only HubSpot source, authenticated API requests, security rejection tests, incident recovery and end-to-end Gmail delivery.

## 90-second interview answer

> The business problem I wanted to solve was inconsistent and unsafe revenue reporting. A manager may want a quick answer such as “What is our open pipeline this month?”, but a normal AI-to-database design can create problems: the model can misunderstand the KPI, generate arbitrary SQL, ignore role permissions or mix CRM-specific logic into the reporting layer.
>
> I separated those responsibilities. The AI interprets the question and later summarizes already-governed facts. A PostgreSQL semantic layer validates the KPI, period, filters, dimensions, user role and data scope, then resolves an approved deterministic query path. CRM sources such as HubSpot, Salesforce, Airtable and REST map into a canonical deal contract so the reporting logic is not tied to one CRM.
>
> I also treated operations as part of the product. I added retries, circuit breakers, dead letters, audit events, runtime observability and a read-only Control Center. In live validation, the system returned a governed $1,200 open-pipeline result, delivered the same fact through Gmail, rejected an unauthenticated caller with HTTP 403, ignored a caller-supplied fake admin identity and bound the request to the server-controlled service principal, and reached a healthy Control Center state with zero open dead letters.

## What I personally owned

I owned the project across the full lifecycle:

1. Framed the revenue-reporting problem and reusable client model.
2. Designed the Agent V2 architecture and workflow boundaries.
3. Defined the governed Revenue Question Pack and 37 KPI contracts.
4. Built the n8n workflows and PostgreSQL governance/reporting functions.
5. Designed role, identity and data-scope controls.
6. Built reusable CRM source adapters and canonical ingestion.
7. Integrated Groq for bounded intent and summary use cases.
8. Implemented Gmail delivery and server-side destination governance.
9. Added retries, circuit breakers, dead letters, audit and observability.
10. Built the local read-only Revenue Intelligence Control Center.
11. Added guarded deployment scripts and GitHub Actions verification.
12. Ran regression tests and real integration tests.
13. Investigated runtime incidents and restored healthy state.
14. Created implementation, security and handover documentation.

## Business problem

Revenue teams often have CRM data but still struggle to answer management questions consistently because:

- KPI definitions differ across tools or people.
- CRM fields and stage names vary by source.
- missing data can be mistaken for zero.
- users may have different reporting permissions.
- ad-hoc AI queries can create unsupported metrics or arbitrary SQL.
- delivery and audit history can become fragmented.
- automation failures may be invisible until someone notices bad reporting.

The project treats those as **Revenue Systems governance problems**, not only automation problems.

## Architecture in plain English

The system follows this sequence:

1. An authenticated caller asks a revenue question.
2. The platform binds the caller to a trusted server-side identity.
3. Groq converts the natural-language request into bounded structured intent.
4. Deterministic controls validate the KPI, period, dimension, filters and role.
5. PostgreSQL executes an approved reporting function/query path.
6. Groq may summarize the already-governed facts for management readability.
7. A presentation layer builds a KPI card, table or chart structure.
8. The result returns through API or an approved delivery adapter such as Gmail.
9. Audit, reliability and observability state are recorded.
10. The Control Center surfaces current health, connector state and incidents.

## Why AI is not allowed to control SQL

This is one of the most important design decisions.

The model is useful for interpreting language and explaining results, but it is not trusted to decide:

- which principal is calling
- which role they have
- which tenant they belong to
- which KPI is authorized
- which database table to read
- what SQL to execute
- which external recipient receives the report

Those decisions are deterministic and server-controlled.

This is the core principle:

> AI interprets. Deterministic controls authorize. PostgreSQL permissions enforce the final boundary.

## Reusable CRM design

The reporting core is source-neutral.

Source-specific adapters handle:

- credentials
- field names
- stage values
- timestamps
- incremental cursors
- normalization and rejection rules

They then send validated records into the canonical deal contract.

This means KPI logic does not need to be rewritten for every CRM.

Current connector state:

- HubSpot — live read-only source validated
- REST ingestion — live
- Salesforce — adapter implemented, intentionally safe-disabled pending least-privilege user activation and client UAT
- Airtable — adapter implemented, intentionally safe-disabled pending API quota/schema verification

## Live proof

### Governed manager question

Question:

`What is our open pipeline this month?`

Verified response:

- KPI: `open_pipeline`
- period: `this_month`
- value: `$1,200 USD`
- presentation: KPI card

### Governed Gmail delivery

The same governed $1,200 fact was delivered through Gmail to the trusted server-side recipient.

The model generated slightly different narrative wording between runs, but the deterministic KPI value remained identical.

### Authentication

A request without the report credential returned:

`HTTP/1.1 403 Forbidden`

### Identity binding

A valid authenticated request deliberately included:

`principal_key=fake-revenue-admin`

The audit record showed:

`bound_principal=service:report-api`

The caller could not elevate itself by supplying a principal in JSON.

### HubSpot ingestion

The active HubSpot adapter successfully feeds the canonical reporting layer.

Verified canonical state included:

- 3 HubSpot deal rows
- 1 open
- 2 lost

A later manual incremental run completed successfully with zero new/changed records and zero rejected records, showing the incremental watermark and no-change path worked correctly.

### Reliability recovery

The Control Center surfaced three unresolved historical dead letters caused by:

`Invalid JSON in 'Response Body' field`

The incidents were investigated, later successful executions confirmed recovery, the dead letters were marked resolved without deleting the audit trail, and a safe-disabled Slack observability mismatch was corrected.

Final live Control Center state:

- HEALTHY
- 37 governed KPI contracts
- 6 active managed components
- 0 open dead letters
- 0 recent failures
- HubSpot active
- REST ingestion active
- Salesforce safe-disabled
- Airtable safe-disabled

## How this maps to target roles

### Revenue Operations

The project demonstrates KPI governance, pipeline reporting, data quality thinking, management reporting, source integration and operational visibility.

### Revenue Systems / Business Systems

The project demonstrates system architecture, source-to-canonical data contracts, permissions, integration boundaries, environment configuration, failure handling and handover.

### CRM Operations / CRM Administrator

The project demonstrates CRM field/stage normalization, incremental synchronization, read-only integration design, data-quality rejection and reusable CRM adapters.

### Sales Operations / GTM Operations

The project demonstrates governed pipeline visibility, role-aware reporting, operational controls, source consistency and manager-facing delivery.

### Workflow Automation

The project demonstrates n8n orchestration, sub-workflows, APIs, database functions, OAuth/service credentials, conditional routing, retries, error handling and observability without making automation the only value proposition.

## Strong answers to common interview questions

### “What was the hardest part?”

The hardest part was balancing natural-language flexibility with deterministic business control. It would have been easy to let the LLM generate SQL, but that would weaken KPI consistency, authorization and auditability. I instead designed a structured-intent contract and semantic layer so the AI can understand the question while the system still controls execution.

### “Tell me about a problem you found and fixed.”

The live Control Center showed a degraded state with three open dead letters. I traced them to historical Agent Core failures caused by invalid JSON in the response body. Later successful executions showed the runtime had recovered, so I resolved the dead-letter records while preserving audit history. The dashboard then exposed a separate unknown Slack component; I traced that to a reliability policy being active while Slack was intentionally disabled. I corrected the activation policy and restored the system to a healthy state.

### “How did you test security?”

I tested both unauthenticated and authenticated abuse cases. An unauthenticated report request returned HTTP 403. For an authenticated request, I deliberately supplied a fake admin principal in the payload. The Agent ignored it and bound the request to the server-controlled report service principal, which I verified in the audit table.

### “How do you know the AI is not inventing the number?”

The KPI value comes from a deterministic governed query path before the AI summary stage. I ran the same open-pipeline question through API and Gmail delivery. The narrative wording changed slightly, but both runs returned the same $1,200 governed fact.

### “Why is Salesforce not active?”

The Salesforce adapter is built, but I intentionally did not activate it under my personal System Administrator account. The production-style design requires a dedicated least-privilege integration user. I paused activation until that identity can be configured correctly rather than weakening the control just to make the dashboard show another active connector.

### “Why is the project still marked In Progress?”

The functional Agent V2 core is live locally and validated. The status remains In Progress because public SSO/domain deployment and some source adapters are intentionally pending real client or least-privilege activation requirements. I separate “implemented” from “activated” so the portfolio does not claim controls that have not been verified in the target environment.

## STAR story

### Situation

Revenue managers need fast answers from CRM data, but ad-hoc reporting and unrestricted AI create inconsistent metrics, weak access control and poor auditability.

### Task

Design a reusable Revenue Intelligence system that can answer management questions naturally while preserving deterministic KPI definitions, CRM governance, security and reliability.

### Action

I built Agent V2 using n8n, PostgreSQL, Docker and Groq. I created 37 governed KPI contracts, identity/RBAC controls, least-privilege database roles, reusable CRM adapters, deterministic reporting functions, Gmail delivery, retries/circuits/dead letters, observability and a Control Center. I validated the system with HubSpot data, real API requests, security tests and incident recovery.

### Result

The platform returned a live governed $1,200 open-pipeline report, delivered the same fact through Gmail, rejected unauthenticated requests, prevented caller identity spoofing, synchronized HubSpot into the canonical reporting layer and reached a healthy runtime state with zero open dead letters.

## What not to say in an interview

Avoid:

- “I just built an AI agent in n8n.”
- “The AI queries my database.”
- “Everything is production ready.”
- “Salesforce and Airtable are connected” when they are still safe-disabled.

Prefer:

- “I built a governed Revenue Intelligence and Revenue Systems platform.”
- “AI interprets the request, but deterministic controls authorize and execute it.”
- “The functional core is validated locally; client-specific adapters activate only after least-privilege and UAT checks.”
- “I designed the system for reusable isolated client deployments rather than one shared credential or tenant.”

## One-line closing statement

> This project shows that I can connect Revenue Operations requirements to CRM data, automation, governance, reporting, security and operational reliability—and carry the system from design through testing, incident recovery and handover.
