# AsterNova Source Attribution Reporting Extension

**Status: Planned — not yet presented as implemented evidence**

This design extends the existing AsterNova Salesforce project so Lead Source can be connected to downstream conversion, pipeline and Closed Won outcomes. It is intentionally separated from completed evidence until the reports are built and validated in Salesforce.

## Goal

Answer four management questions:

1. Which sources generate the most Leads?
2. Which sources convert Leads at the highest rate?
3. Which sources generate the most open pipeline?
4. Which sources generate the most Closed Won revenue?

## Required data path

**Lead Source → Lead → Converted Account/Contact/Opportunity → Opportunity Amount → Opportunity Stage / Closed Won**

The implementation should preserve source context during Lead conversion so reporting can connect acquisition source to downstream revenue outcomes.

## Planned reports

| Report | Definition | Decision supported |
| --- | --- | --- |
| Leads by Source | Count of AsterNova Leads grouped by Lead Source | Where is inbound volume coming from? |
| Conversion Rate by Source | Converted Leads ÷ total Leads by source | Which sources create qualified sales opportunities? |
| Open Pipeline by Source | Sum of open Opportunity Amount grouped by originating source | Which sources contribute current pipeline? |
| Closed Won Revenue by Source | Sum of Closed Won Opportunity Amount grouped by originating source | Which sources contribute booked revenue? |

## Governance requirements

- Source values must use a controlled picklist or documented mapping.
- Blank/unknown source values must remain visible as a data-quality issue.
- Lead Source must be mapped or otherwise retained through conversion.
- Reports must exclude unrelated Salesforce sample data.
- Revenue figures must be labeled as simulated portfolio data.
- Report totals must reconcile to the underlying test records before publication.

## Completion criteria

This extension can move from **Planned** to **Completed** only after:

- source mapping is configured,
- conversion preservation is tested,
- all four reports are created,
- sample-data contamination is excluded,
- totals are reconciled,
- screenshots / evidence are captured,
- the UAT register is updated.

Until those steps are complete, the portfolio should not claim implemented attribution reporting.
