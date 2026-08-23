---
title: CI/CD Workflow Specification - CI
version: 1.0
date_created: 2026-08-23
last_updated: 2026-08-23
owner: seankrux
tags: [process, cicd, github-actions, pnpm, seamlessva-website]
---

## Workflow Overview

**Purpose**: Frozen-lockfile install, lint, typecheck, and production build.
**Trigger Events**: Push and pull requests to main/master.
**Target Environments**: Ephemeral Ubuntu CI.

## Execution Flow Diagram

```mermaid
graph TD
    A[Push / PR] --> B[validate]
    B --> C[End]
    style A fill:#e1f5fe
    style C fill:#e8f5e8
```

## Jobs & Dependencies

| Job Name | Purpose | Dependencies | Execution Context |
|---|---|---|---|
| validate | pnpm install + lint + typecheck + build | none | ubuntu-latest / Node 20 / pnpm 10 |

## Requirements Matrix

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| REQ-001 | Lockfile is authoritative | High | `--frozen-lockfile` |
| REQ-002 | Lint, typecheck, and build must pass | High | Each script exits 0 |
| SEC-001 | Contents read only | High | `permissions.contents: read` |

## Secrets & Variables

None.

## Change Management

| Version | Date | Changes | Author |
|---|---|---|---|
| 1.0 | 2026-08-23 | Initial specification | fleet audit |
