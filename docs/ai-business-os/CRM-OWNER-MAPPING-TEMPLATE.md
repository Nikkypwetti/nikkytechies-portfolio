# AI Business OS — CRM Owner Mapping Template

The Business OS uses a logical owner key internally and maps that identity to each provider. Never guess a provider owner ID and never map a demo rep to an unrelated real CRM user.

## Mapping table

| Business ID | Logical rep key | Display name | Eligible now? | HubSpot owner ID | HubSpot verified? | Salesforce user ID | Salesforce verified? | Notification identity | Notification verified? | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| default_dev | sales_practice | Practice / solo operator | Yes in current local solo mode | 95985686 | Yes | 005aj00000dZBBpAAO | Yes | Configured local destination | Yes | Controlled local validation identity |
| <client> | <rep_key> | <name> | <yes/no> | <id> | <yes/no> | <id> | <yes/no> | <email/slack/teams/internal> | <yes/no> | <notes> |

The demo identities sales_am, sales_sr and sales_dv remain reusable routing examples. They should not be assigned arbitrary HubSpot or Salesforce users.

## Verification procedure

1. Confirm the logical rep exists in the active routing policy.
2. Confirm the person is active and intended to receive new work.
3. Read the provider owner/user directory.
4. Match using verified company identity — not name similarity alone.
5. Store the provider owner/user ID in configuration.
6. Mark the mapping verified only after readback.
7. Confirm at least one internal notification destination.
8. Run the owner-mapping validator.
9. If a required mapping is missing, hold provider-owner sync and surface an operational alert.

## Provider requirement rules

- HubSpot writes ON + owner assignment required → verified HubSpot owner is mandatory.
- Salesforce writes OFF → Salesforce mapping may exist, but must not block a HubSpot-only path.
- Multi-CRM client → validate every required provider independently.

## Fail-closed behavior

Do not default to the first CRM owner, map by display name alone, reuse another rep's owner ID, or silently skip a required owner assignment.

Instead return a mapping hold/error and create an OWNER_MAPPING_ISSUE operational alert.