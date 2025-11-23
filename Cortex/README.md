# Cortex — AI-Powered E‑Commerce Operations Hub

Cortex is an AI-powered operations hub for e‑commerce businesses. It integrates with any store backend to automate and orchestrate core business workflows across sales management, financials and compliance, inventory, competitors, growth analytics, customer management, and invoicing. A GenAI assistant surfaces insights and actions in a unified dashboard.

## Overview

- Automates daily operations and centralizes visibility in a single dashboard
- Connects to existing e‑commerce backends via APIs/webhooks and scheduled jobs
- Uses OpenAI models to summarize, recommend, and assist the owner via chat
- Provides compliant financial workflows and helper tools (CA work, ITR filing, deductions)
- Adds email triggers and alerts for critical events (inventory, website health)

## Core Features

- Sales Management
- Financial Management
- All CA work & ITR filing
- Help in tax deduction
- Automated inventory management
- Customer management
- Competitor analysis (web scraping)
- E‑commerce store/website growth analysis
- Financial & compliance automation
- Website health trigger
- “About Us” section with company overview
- Day‑wise overview on the homepage
- Automated invoice generation
- GenAI chatbot to assist owner
- All features reflected across dedicated dashboard pages

## Dashboard Modules

- Dashboard Overview: KPIs, day‑wise snapshot, recent changes, quick links
- Financials: P&L, revenue, cost breakdowns, transactions, compliance helpers
- Inventory: stock levels, reorder alerts, supplier contacts, SKU trends
- Customers: segments, cohorts, actions, recent activity
- Competitors: price comparison, market coverage, SKU tracking, alerts
- Growth: funnel metrics, experiments, retention insights
- Operations: invoice generation, workflows, email logs
- Chat Assistant: GenAI agent for questions and actions

## Architecture

- Frontend: Next.js App Router with React and TypeScript
- UI: Tailwind CSS, Radix UI components, animations with Framer Motion
- Charts/visualization: Recharts and custom SVG
- Integrations: 
  - Backend connectors (storefront APIs, ERP, payment gateways)
  - Webhooks for event-driven updates
  - Scheduled jobs for daily aggregation (financials, inventory)
- AI: OpenAI APIs for summarization, recommendations, and chat

### Data Flow (Prototype)

- Ingest data from the e‑commerce backend (orders, customers, products, stock)
- Normalize and cache data for dashboard modules
- Run analysis:
  - Financial calculations and compliance helpers
  - Inventory thresholds and triggers
  - Competitor price scraping and positioning
  - Growth funnel metrics and retention
- Surface insights in the dashboard and the GenAI chatbot

## Tech Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS 4, Radix UI, Framer Motion
- Recharts, SWR, Lucide Icons

## Getting Started

- Prerequisites: Node.js 18+
- Install dependencies:
  - `npm install`
- Run in development:
  - `npm run dev`
- Lint:
  - `npm run lint`
- Build:
  - `npm run build`
- Start (production):
  - `npm start`

## Configuration

Create an environment file and provide required keys.

- `OPENAI_API_KEY`: OpenAI API key for the GenAI assistant and analysis
- Store backend credentials (examples):
  - `SHOP_API_URL`, `SHOP_API_KEY`
  - `ERP_API_URL`, `ERP_API_KEY`
  - `PAYMENTS_API_URL`, `PAYMENTS_API_KEY`

Note: Do not commit secrets. Use environment variables and a secure secret manager in production.

## Integrations

- Backend integration strategy:
  - REST/GraphQL connectors to your store backend
  - Webhook subscriptions for near‑real‑time updates
  - Scheduled fetchers for daily financial summaries
- Competitor analysis:
  - Configurable scraping targets
  - Legal and ethical use only; comply with terms and robots.txt
  - Cache results and compute comparisons per SKU

## AI Capabilities

- Chat assistant powered by OpenAI models
- Summarizes dashboards, answers questions on sales, inventory, compliance
- Generates recommendations (pricing, campaigns, restocks)
- Extensible toolset for actions (e.g., generate invoice, trigger workflow)

## UX Details

- Responsive layout with mobile‑optimized navigation
- Desktop enhancements: animated sections, custom dropdowns, prefetching for fast navigation
- Consistent motion patterns: subtle fades and slide‑ins, viewport‑triggered animations

## Security & Compliance

- No secrets in the repository; environment variables only
- Respect rate limits and terms for web scraping
- Implement access controls when connecting to partner systems
- Use HTTPS, signed webhook verification, and audit logs in production

## Roadmap

- Backend connectors for common platforms (Shopify, WooCommerce, custom APIs)
- Data persistence and role‑based access control
- More automation workflows and experiment templates
- Extended financial compliance modules and filings
- Observability: metrics, tracing, error monitoring

## Project Structure (high‑level)

- `src/app/` — Next.js routes (dashboard pages)
- `src/components/dashboard/` — dashboard UI modules (header, sidebar, charts)
- `src/components/sections/` — home/marketing sections
- `src/components/ui/` — shared UI primitives (Radix wrappers)
- `src/lib/` — utilities and future data/connector helpers

## Deployment

- Build a static and server bundle: `npm run build`
- Configure environment variables on the hosting platform
- Run with `npm start` behind a reverse proxy (HTTPS)

## License

- Proprietary prototype for demonstration. Adapt licensing as needed for production.

