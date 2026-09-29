# AI Business OS — Recruiter / Client Demo Script

Target length: **8–12 minutes**.

The goal is to demonstrate business-systems judgment, not merely show a large n8n canvas.

## 1. Business problem — 45 seconds

Explain that disconnected CRM, email, approval and delivery automations create duplicate work, unclear ownership and weak recovery. The Business OS adds a governed operating layer.

## 2. Architecture — 60 seconds

Business Event → Supervisor → Domain Specialist → Tool Gateway → Guardrails → Human Approval when required → Idempotent Action → Evaluation → Audit / Recovery.

Emphasize: PostgreSQL is authoritative; CRMs are downstream projections; client differences are configuration; AI reasoning is separated from unrestricted mutation authority.

## 3. Verified core proof — 60 seconds

Use the latest fully verified core release:
- 54 governed production workflows
- 646 documented nodes
- 8 specialist reasoning agents
- 21/21 agent-access security
- 11/11 RBAC & tenant isolation
- 22/22 production readiness
- 0 active TEST workflows
- 0 open recovery / unresolved errors / unresolved DLQ at the verified cutover

Say **verified local production core**. Do not claim public/VPS production.

## 4. Lead-to-deal operations — 2 minutes

Narrate: lead enters → qualification → capacity-aware routing → rep notification → rep review → human deal approval → exact stored action resumes → idempotent CRM projection.

When the self-use extension is complete, demonstrate rep activity buttons and SLA state here.

## 5. HubSpot implementation — 90 seconds

Show contact create/update, qualification fields, verified owner mapping, deal creation, contact–deal association, readback and idempotent replay.

Explain that missing required owner mappings fail closed rather than assigning to an arbitrary user.

## 6. Salesforce implementation — 90 seconds

Show controlled Lead creation, approved Opportunity creation, owner mapping, readback and idempotent replay.

Distinguish this from the separate AsterNova Salesforce project, which demonstrates deeper CRM administration, routing, governance, reporting and UAT.

## 7. Security & governance — 90 seconds

Explain centralized internal auth, server-side trusted identity, OWN/BUSINESS RBAC, tenant isolation, wrong-owner denial, cross-tenant denial, human approval and audit evidence.

Key message: **the agent does not get unlimited permission just because it can reason.**

## 8. Error recovery — 60 seconds

Explain normalized incidents, retryable vs human-review classification, exact-match recovery handlers, idempotent retry, dead-letter escalation and no generic replay of ambiguous state-changing work.

## 9. Monitoring — 45 seconds

The verified core exposes operational status. The current self-use extension adds SLA breaches, NO_CAPACITY, owner mapping health, CRM sync failures, notification failures and rep activity.

Until final wiring/regression is complete, describe this as the **current extension in progress**, not completed production proof.

## 10. Client portability — 45 seconds

Explain that a client implementation keeps the operating model and changes tenant configuration: employees, roles, routing, qualification rules, CRM credentials, owner mappings, pipelines, SLAs and approval rules.

Internet-facing deployment would then add HTTPS, SSO/MFA, managed secrets, rate limiting and real production infrastructure.

## Claims to avoid

- publicly deployed production
- enterprise SSO already implemented
- Airtable E2E complete while API access is blocked
- self-use Sales Ops monitoring/UI extension complete before regression passes
- real customer production data