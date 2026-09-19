# AsterNova Salesforce Revenue Operations & CRM Governance System

A hands-on Salesforce Sales Cloud portfolio implementation for a simulated B2B SaaS company. The project demonstrates Salesforce administration, Revenue Operations, Sales Operations, CRM governance, reporting, security, workflow automation, integrations, and structured UAT using test users and simulated data.

## What I Built

- Salesforce Lead, Account, Contact, and Opportunity operating model
- Capacity-aware Lead routing with territory, availability, capacity, and enterprise eligibility checks
- AsterNova Inbound Queue fallback when no eligible rep is available
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

## Salesforce Skills Demonstrated

Salesforce Sales Cloud · Salesforce Flow Builder · Lead Routing · Web-to-Lead · Validation Rules · Matching Rules · Duplicate Rules · Roles & Permission Sets · Private Sharing · CRM Data Quality · Reports & Dashboards · Pipeline Aging · Sales Forecasting · UAT · Lead Conversion · Sales Operations · Revenue Operations

## Portfolio Case Study

https://nikkytechies-portfolio.vercel.app/projects/asternova-salesforce-revops-system

## Evidence

Implementation screenshots are stored in:

`public/images/projects/asternova/`

The public case study presents selected evidence and implementation details.
