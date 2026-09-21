# AsterNova Salesforce Revenue Operations & CRM Governance System

A hands-on Salesforce Sales Cloud **Revenue Systems** portfolio implementation for a simulated B2B SaaS company. The project demonstrates Salesforce administration, Revenue Operations, Sales Operations, Salesforce Data Governance, process mapping, GTM Rules of Engagement, reporting, security, workflow automation, integrations, system adoption documentation, and structured User Acceptance Testing using test users and simulated data.

## What I Built

- Salesforce Lead, Account, Contact, and Opportunity operating model
- Business requirements translated into a Lead-to-Closed-Won process map and Salesforce decision rules
- GTM Rules of Engagement for ownership, territory, enterprise eligibility, capacity, qualification, lifecycle and opportunity-stage controls
- Capacity-aware Lead routing with territory, availability, capacity, and enterprise eligibility checks
- AsterNova Inbound Queue exception path when no eligible rep is available
- Lead lifecycle automation for Nurture and Qualified stages
- Human-controlled Lead conversion with Primary Need mapped into Opportunity
- Opportunity-stage governance with validation rules
- Proposal follow-up and high-value manager escalation
- Closed Won onboarding handoff and Closed Lost governance
- Lead data import, exact-email duplicate detection, duplicate review, and controlled merge cleanup
- CRM data-quality reporting and cleanup validation
- Private sharing model, role hierarchy, profile, and additive permission sets
- Salesforce reporting for pipeline, Closed Won revenue, losses, tasks, Lead data quality, Lead conversion, pipeline aging, weighted forecast, and rep performance
- Google Forms → Google Sheets → n8n → Salesforce inbound integration
- Direct website Web-to-Lead intake
- CRM data dictionary and sales user guide to support system adoption
- Revenue Systems requirements, governance and requirements-to-UAT traceability documentation

## Systems Governance & GTM Controls

The build treats CRM automation as governed Revenue Systems work rather than isolated Flow configuration:

- **Business requirements:** simulated operating requirements are documented before implementation and translated into Salesforce controls.
- **Decision rules:** territory, availability, capacity, enterprise eligibility, lifecycle and opportunity-stage rules are explicit.
- **Capacity-based routing:** the least-loaded eligible rep is selected.
- **Exception handling:** no-eligible-rep cases are routed to the AsterNova Inbound Queue.
- **Escalation path:** qualifying high-value Proposal Sent opportunities escalate to the Opportunity owner's manager.
- **Salesforce Data Governance:** import controls, Matching and Duplicate Rules, validation rules, role-based access, permission sets and data-quality reporting.
- **User Acceptance Testing:** the formal UAT register contains 41 passed scenarios.
- **System adoption:** CRM data dictionary, sales user guide, Rules of Engagement matrix and traceability documentation explain expected system behavior.

## Governance Documentation

- [GTM Rules of Engagement & Salesforce Governance Matrix](./gtm-rules-of-engagement.md)
- [Revenue Systems Business Requirements](./revenue-systems-business-requirements.md)
- [Requirements-to-UAT Traceability](./uat-requirements-traceability.md)
- [Scope & Evidence Boundaries](./scope-and-evidence-boundaries.md)
- [Source Attribution Reporting Extension — Planned](./source-attribution-reporting-design.md)

## Validation

The formal UAT matrix contains **41 documented scenarios**:

- **41 passed**
- **37 validated live**
- **4 validated with Salesforce Flow Debug**

Coverage includes routing, capacity maintenance, lifecycle automation, conversion, opportunity governance, scheduled proposal follow-up, Closed Won / Closed Lost behavior, security, permissions, duplicate governance, data quality, integrations, and reporting.

## Simulated Reporting Evidence

The test dataset includes:

- **$65K simulated open pipeline**
- **$23K simulated probability-weighted Expected Revenue**
- **$75K simulated Closed Won value**
- **14 simulated Opportunities totaling $253K** in the rep-performance report

These figures are portfolio test data, not client revenue or production sales results.

## Scope & Evidence Boundaries

Three claims are deliberately bounded to the evidence actually demonstrated in this simulation:

- **Requirements Gathering:** not claimed. Because AsterNova is a simulation rather than a stakeholder-interview engagement, the demonstrated capability is **Requirements Translation/Definition** — turning simulated operating needs into process maps, decision rules, Salesforce controls and UAT coverage.
- **Source Attribution:** **Planned**, not implemented evidence. Attribution will only be presented as completed after dedicated Salesforce source-attribution reports are built and validated.
- **Lead-to-Cash:** not claimed. AsterNova currently demonstrates a governed **Lead-to-Closed-Won / Customer Success handoff** lifecycle. Quoting, contracting, invoicing, billing and payment collection remain outside the validated scope.

This boundary is intentional so the case study distinguishes implemented evidence from planned extensions and adjacent capabilities.

## Salesforce & Revenue Systems Skills Demonstrated

Salesforce Sales Cloud · Revenue Systems · Salesforce Flow Builder · Lead Routing · Web-to-Lead · GTM Rules of Engagement · Process Mapping · Validation Rules · Matching Rules · Duplicate Rules · Roles & Permission Sets · Private Sharing · Salesforce Data Governance · CRM Data Quality · Reports & Dashboards · Pipeline Aging · Sales Forecasting · User Acceptance Testing · Requirements Translation · System Adoption · Lead Conversion · Sales Operations · Revenue Operations

## Portfolio Case Study

https://nikkytechies-portfolio.vercel.app/projects/asternova-salesforce-revops-system

## Evidence

Implementation screenshots are stored in:

`public/images/projects/asternova/`

The public case study presents selected evidence and implementation details.
