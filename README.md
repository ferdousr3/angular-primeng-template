# **ng-template**

A modern **Angular Starter Template** built with **pnpm**, **TailwindCSS 4**,
**PrimeNG**, **Biome**, and **Lefthook**. This template delivers a clean,
scalable, and production-ready architecture — perfect for enterprise Angular
applications with consistent code quality and an optimized developer workflow.

---

## ✨ **Features**

### 🚀 **Modern Angular 20 Setup**

- Angular **v20+** (compatible with future versions)

- TypeScript **>=5.9**

- Enterprise-ready file structure

- Fast and stable Angular build system

### 🎨 **TailwindCSS 4 + PrimeNG UI**

- TailwindCSS **v4.1** configured with PostCSS

- **PrimeNG 20** components integrated

- PrimeIcons included

- tailwindcss-primeui for seamless UI styling

### 🔐 **Authentication Ready**

- JWT handling with @auth0/angular-jwt

- Extendable for RBAC (role-based access control)

### ⚙ **Developer Experience Boosters**

- only-allow pnpm → enforce pnpm for consistency

- **Biome** (format + lint + diagnostics)

- **Lefthook** Git hooks (auto-lint & format on commit)

- Fully configured Angular CLI scripts

### 🧪 **Testing Tools**

- Jasmine + Karma setup

- Angular TestBed for unit/component tests

### 🧵 **Clean Build & Formatting**

- PostCSS configured

- Prettier + Tailwind plugin included

- ESNext optimized build

# How to Run the Project

## 1. Prerequisites

Make sure you have installed:

- **Node.js ≥ 22.x** → check with:

```bash
node -v
```

- **pnpm ≥ 10 → check with:** → check with:

```bash
pnpm -v
```

This project enforces `pnpm` with `only-allow pnpm`. Using npm or yarn will
fail.

- **Clone the Repository**

```bash
git clone <your-repo-url>
cd ng-template
```

- **Install Dependencies**

```bash
pnpm install
```

This will:

- Install all dependencies and devDependencies

- Run `lefthook install` automatically (prepares Git hooks)

- Set up Biome for linting & formatting

## 🔧 Lefthook (Automated Git Hooks)

Lefthook installs automatically:

```json
"prepare": "lefthook install"
```

It ensures:

- 🧹 Auto-formatting (Biome)

- 🔎 Auto-linting

- ❌ Prevents bad code commits

- ✔ Consistent and clean codebase

## 🧹 Biome (Lint, Format & Check)

Common commands:

```bash
pnpm format   # Format code
pnpm lint     # Lint code
pnpm check    # Type-aware diagnostics
```

Biome guarantees a clean, consistent, and reliable codebase.

## 📦 Package Manager Enforcement

This project strictly uses pnpm:

```bash
npx only-allow pnpm
```

Using npm or yarn will be blocked for consistency.

## ✅ Summary

To run the project:

1. Install Node ≥22 and pnpm ≥10

2. Clone the repo and `pnpm install`

3. Start dev server with `pnpm start` or `ng serve`

4. Open `http://localhost:4200/` in your browser

Additional commands:

- `pnpm build` → production build

- `pnpm run watch` → watch mode for development

- `pnpm test` → run unit tests

- `pnpm format`, `pnpm lint`, `pnpm check` → code quality checks
