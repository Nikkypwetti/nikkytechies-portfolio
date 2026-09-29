# NikkyTechies — Operations, RevOps & Business Systems Portfolio

A recruiter-focused portfolio for **Ganiyu Basirat Olanike**, combining 7+ years of professional experience in sales account management and executive administration with hands-on work across Revenue Operations, CRM, project coordination, reporting, business systems and AI-enabled workflow automation.

**Live portfolio:** https://nikkytechies-portfolio.vercel.app/

## Professional Focus

- Revenue Operations & Sales Operations
- CRM Administration & Data Quality
- Project & Client Operations
- Customer & Account Operations
- Reporting, Dashboards & Process Improvement
- SOP & Workflow Documentation
- AI & Workflow Automation
- Agent Skills & Reusable AI Workflows
- Business Systems Integration

## Featured Case Studies

### AI Business OS — Production-Hardened RevOps & Business Systems Platform
- Last fully verified core release: **54 governed production workflows / 646 documented nodes** across CRM, client operations, project delivery, communications, customer success, finance, RevOps analytics, security, approvals, integrations and recovery
- 8 specialist AI agents with Groq primary reasoning and Gemini cross-provider fallback
- Human approvals, deterministic guardrails, idempotency, replay-safe provider writes and bounded recovery
- 5 integration adapters; HubSpot, Salesforce, Gmail and Google Calendar completed controlled staging-write validation
- Passed the last fully verified core release with **21/21 agent-access security**, **11/11 RBAC/tenant isolation**, and **22/22 production-readiness checks**
- Detailed GitHub case study: [docs/ai-business-os/README.md](docs/ai-business-os/README.md)
- Recruiter/client evidence pack: UAT checklist, client implementation checklist, CRM owner-mapping template, monitoring dashboard specification and demo script under `docs/ai-business-os/`
- Live case study: https://nikkytechies-portfolio.vercel.app/projects/ai-business-os-multi-agent-operations

### HubSpot Revenue Operations Implementation — Business OS
- Implemented HubSpot as a governed downstream CRM projection rather than duplicating core operating logic inside the CRM
- Validated contact create/update, approved deal creation, contact–deal association, readback and idempotent replay
- Verified logical-owner → HubSpot-owner mapping before provider ownership assignment
- Preserved human deal approval and fail-closed mapping behavior
- Detailed case study: [docs/hubspot-business-os-implementation.md](docs/hubspot-business-os-implementation.md)
- Live project route after merge: /projects/hubspot-revenue-operations-business-os

### FlowBridge RevOps CRM Audit & Lead Qualification Agent
- Translated fictional company requirements into a lifecycle-aware RevOps Agent Skill
- Deterministic 100-point scoring model with explicit override precedence
- CRM validation across ownership, follow-up, deal value, stale opportunities and closed-stage controls
- Blind-tested 16 synthetic CRM records with no embedded answer key
- Validated 24 rule-defined CRM issues: 2 Critical, 12 High and 10 Medium
- Qualification outcome: 5 hot_lead, 6 qualified, 2 needs_discovery, 1 nurture and 2 not_fit
- Detailed GitHub case study: [docs/flowbridge-revops-agent.md](docs/flowbridge-revops-agent.md)

### RevOps CRM Audit & Lead Qualification Agent Skill
- Reusable Manus Agent Skill for CSV/XLSX CRM exports
- Deterministic 100-point lead-scoring model
- Business-rule overrides for missing timeline and low-budget qualification
- CRM data-quality and pipeline-control audit with structured priority actions
- Validated against 5 synthetic CRM records
- Added visual workflow evidence to the portfolio case study


### Client Onboarding Automation System
- 18-step automated onboarding workflow
- 5 service packages supported
- 4 core business systems connected
- Automated project creation, package-based tasks, workspace creation and notifications

### AI Meeting Notes & CRM Sync
- 14-step AI meeting workflow
- 7 structured insights extracted
- 4 business systems synchronized
- Automated CRM logging, project updates, follow-up tasks and team summaries

### GrowAgency CRM + AI Pipeline
- 2 connected n8n workflows
- 5 lead qualification routes
- AI-assisted qualification, CRM creation, routing and follow-up

### Business Operations & Client Delivery System
- 6 operational areas centralized
- 3 core SOPs documented
- Structured client, project, task, deadline and delivery management

## Core Platforms

**CRM & Business Systems:** HubSpot, Airtable, Notion, ClickUp  
**Automation & Agent Workflows:** n8n, Make.com, Zapier, Manus Agent Skills, webhooks, REST APIs  
**Data & Reporting:** Google Sheets, Microsoft Excel, CRM dashboards, data validation  
**Collaboration:** Google Workspace, Gmail, Google Calendar, Slack  
**Technical:** Git/GitHub, Linux, JavaScript, TypeScript, Next.js, Node.js, Docker, AWS, Terraform

## Portfolio Structure

- `/` — professional positioning, capabilities, quantified experience and featured work
- `/projects` — searchable case studies
- `/projects/[slug]` — detailed problem → solution → workflow → impact case studies
- `/about` — professional background and approach
- `/resume` — master ATS-oriented resume
- `/contact` — contact details and role interests

## Built With

Next.js, TypeScript, Tailwind CSS, reusable React components, dynamic project data, SEO metadata, Open Graph metadata and Vercel deployment.

## Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Contact

- Portfolio: https://nikkytechies-portfolio.vercel.app/
- LinkedIn: https://www.linkedin.com/in/ganiyu-basirat-308ab9403
- GitHub: https://github.com/Nikkypwetti
- Email: olanike.basirat30@gmail.com
