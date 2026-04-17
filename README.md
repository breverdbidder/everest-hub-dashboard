# Everest Hub Dashboard

Operational dashboard + SSOT viewer for Everest Marketing Hub (Agent Chain + Marketing OS).

**Live**: https://breverdbidder.github.io/everest-hub-dashboard/

## Stack

- [Astro 4](https://astro.build) (MIT) — static site generation
- [Tailwind CSS 3](https://tailwindcss.com) (MIT) — utility-first styling
- Deployed via GitHub Pages
- Design tokens: BrandGuard (Navy `#1E3A5F` · Orange `#F59E0B` · Inter · bg `#020617`)

## Routes

- `/` — Hub index, sprint status, route cards
- `/ssot` — Ratified architecture + gate decisions viewer
- `/gate` — EG14 14-criterion enterprise gate honest scorecard
- `/ops` — Live agent ops status (wires Day 5+)
- `/deferrals` — Cross-session open work

## Development

```bash
npm install
npm run dev      # local dev at localhost:4321
npm run build    # static build to dist/
npm run preview  # preview production build
```

## Deployment

Push to `main` → GitHub Actions builds → deploys to Pages automatically.
Workflow: `.github/workflows/deploy.yml`.

## Enterprise Gate (EG14) current state

See `/gate` route for full honest scorecard.

- ✅ Done: CI/CD, Secrets management, Rollback procedure
- ⚠️ Partial: Tests, Docs, Error handling, Logging, A11y, Infra
- ❌ Missing: Monitoring, SLOs, Runbook, Security audit, Load test

Not claiming enterprise-grade yet. Actively closing gaps.

## Day 0 → Day N status

| Day | Scope | Status |
|---|---|---|
| 0 | Repo + Astro scaffold + 5 routes + inventory 3/6 | ✅ **done Apr 16 2026** |
| 1 | Tenant schema + AWS SES domain auth | Day 1 schema skip (already populated); SES blocked on D0-2 |
| 2-4 | Live data wires (Supabase client, RLS, auth) | pending |
| 5-9 | Agent ops panels, Telegram, Cloudflare Access | pending |
| GTM unlock | May 4 target · Patent provisional may push | on track |

## License

MIT. Note: Hub architecture depends on CrewAI (MIT) as master agent hub.
Prior kortix-ai/suna path was REJECTED (Elastic License 2.0 incompatible with Everest multi-tenant SaaS model).

## Provenance

Scaffolded by Claude AI Architect via DIRECT GH PUSH pattern from Supabase vault → GH API, Apr 16 2026.
