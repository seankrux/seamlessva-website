# Cloudflare deployment

OpenNext deploys the complete Next.js application to Sean's personal account
`7a7a08127b6d6744c838413b4473ecf1`, as Worker `seankrux-seamlessva-website`.
Server routes and authentication remain part of the application.

```bash
pnpm install --frozen-lockfile
pnpm build:cloudflare
pnpm deploy:cloudflare
```

The Cloudflare workflow validates pull requests and deploys `main` only after
checks pass. Its `CLOUDFLARE_API_TOKEN` secret grants access to the personal account.
This app does not require production environment variables.
The original Vercel project is retained with Git deployments disabled.
