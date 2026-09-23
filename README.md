# Bibhab Talukdar — Portfolio & Engineering Showcase

A modern, fast, and recruiter-focused personal portfolio website built with **React 19**, **TanStack Start / Router**, **TypeScript**, and **Tailwind CSS**.

---

## Overview

This repository houses the personal portfolio and engineering showcase for **Bibhab Talukdar**, a full-stack engineer building production-grade web applications, robust backend services, and interactive user interfaces.

- **Fast & Responsive**: Powered by TanStack Start, Vite, and modern CSS for instant page transitions and high performance.
- **Recruiter & Engineer Friendly**: Clear presentation of technical background, featured projects, system architecture highlights, and verified credentials.
- **Interactive Motion**: Clean typography, card layouts, and polished visual interactions designed for an engaging recruiter experience.

---

## Tech Stack

### Frontend & Routing

- **Framework**: [React 19](https://react.dev/)
- **Routing & SSR Shell**: [TanStack Router](https://tanstack.com/router) & [TanStack Start](https://tanstack.com/start)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components & UI**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [Sonner](https://sonner.emilkowal.ski/)
- **Data & State**: [TanStack Query](https://tanstack.com/query)

### Tooling & Infrastructure

- **Bundler**: [Vite](https://vite.dev/)
- **Server Engine**: [Nitro](https://nitro.unjs.io/)
- **Linting & Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

---

## Featured Work

### [FairShare](https://fair-share-sand.vercel.app)

A three-tier expense-splitting application featuring dual authentication (Google OAuth 2.0 & JWT), real-time expense tracking, and an optimized debt engine that minimizes peer-to-peer settlement transactions.

- **Stack**: React, Node.js, Express, MongoDB, Recharts, Passport.js

---

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or your preferred package manager

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/bibhab2005/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) (or the port indicated in your console) to view the site.

---

## Available Scripts

| Script    | Command           | Description                           |
| :-------- | :---------------- | :------------------------------------ |
| `dev`     | `npm run dev`     | Runs the Vite development server      |
| `build`   | `npm run build`   | Builds the production bundle          |
| `preview` | `npm run preview` | Previews the production build locally |
| `lint`    | `npm run lint`    | Runs ESLint across the codebase       |
| `format`  | `npm run format`  | Formats files with Prettier           |

---

## Project Structure

```
├── public/               # Static assets (portrait, resume, icons)
├── src/
│   ├── components/ui/    # Accessible UI primitives & design components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions & helpers
│   ├── routes/           # TanStack file-based routes (__root, index, about)
│   ├── router.tsx        # Router setup & query client configuration
│   ├── server.ts         # Server entry point
│   └── styles.css        # Global design tokens & styling
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite & TanStack configuration
```

---

## Connect

- **GitHub**: [@bibhab2005](https://github.com/bibhab2005)
- **LinkedIn**: [Bibhab Talukdar](https://linkedin.com/in/bibhab)
- **Email**: [bibhabtalukdar2005@gmail.com](mailto:bibhabtalukdar2005@gmail.com)
