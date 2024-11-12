# Project Overview

### Purpose

Tulsa Custom Websites builds professional websites for businesses and brands using a custom design process and tech stack. It is easy to build something overly complex fast, so we are proud to have a system based on simplicity that we continue to spend an immense amount of time and effort on. Our streamlined system reduces development time, allowing us to focus on our clients' brand and business needs.

### Tech Stack

- **Framework & Libraries**: Astro (+ Vite), Node.js, React, Tailwind CSS
- **Backend & Hosting**: Firebase, Google Cloud Functions, Docker
- **CMS**: Decap CMS
- **Tooling & Utilities**: Prettier, TypeScript, GitHub, GitHub Actions

---

# Project Setup

### Prerequisites

Please reference `package.json` for all dependencies.

### Installation Steps

1. Start new projects by creating a GitHub repo based on this template.
2. For access to the template, contact [Nathan Hall](https://github.com/nathanhall762) or [Ethan Wakeford](https://github.com/EthanWakeford).

### Configuration Files

Contact [Nathan Hall](https://github.com/nathanhall762) or [Ethan Wakeford](https://github.com/EthanWakeford) for `.env` setup details.

---

# Project Structure

### Folders and Key Files

- **`.astro`**: Contains Astro-specific components or libraries; used internally by Astro for handling certain framework files.
- **`settings.json`**: Holds project-specific settings or preferences, potentially for your editor or build tools.
- **`types.d.ts`**: A TypeScript declaration file, used to define types or add TypeScript type support to JavaScript libraries without built-in types.
- **`.firebase`**: Used by Firebase to configure deployment settings and cache the site’s build output. This acts as a Firebase-hosting-specific staging area based on the `dist` folder.
- **`.github`**: Contains YAML files for GitHub Actions to enable CI/CD (e.g., builds on push/merge).
- **`dist`**: Output directory for your Astro build, containing statically generated files ready for deployment.
- **`functions`**: Contains Google Cloud Functions, such as those for sending emails from form submissions.
- **`node_modules`**: Holds installed dependencies and packages managed by npm; generated after running `npm install`.
- **`public`**: Contains non-code, unprocessed assets (fonts, icons, etc.) that do not need to be processed during Astro’s build. Ideal for common assets like images, or special files like `robots.txt` and `manifest.webmanifest`.
- **`src`**: Project source code, including components, pages, styles, etc.
  - **`components`**: Reusable React and Astro components.
  - **`layouts`**: Astro components providing reusable UI structures, such as page templates.
  - **`media`**: Contains media assets (images, audio, or video files).
  - **`pages`**: Files here correspond to routes on the website, handling routing, data loading, and page layout.
- **`env.d.ts`**: TypeScript environment declaration file for defining type information for environment variables.
- **`firebase.ts`**: Contains Firebase-specific code or configuration for integrating Firebase services.
- **`googleReviews.ts`**: Function to request Google My Business reviews data from Google Places API.
- **`navMenu.ts`**: Object of navigation menu items.
- **`.env`**: Environment variables file storing sensitive data (e.g., API keys, Firebase credentials), not committed to version control.
- **`.firebaserc`**: Firebase configuration file defining the project’s Firebase configurations for deployment and CLI use. The project name in the file must match the Firebase project.
- **`.gitignore`**: Specifies files and directories for Git to ignore, preventing unnecessary or sensitive files from being committed.
- **`.prettierrc`**: Configuration file for Prettier, specifying code formatting rules.
- **`astro.config.mjs`**: Astro configuration file.
- **`firebase.json`**: Config file for Firebase hosting and functions.
- **`package-lock.json`**: Locks specific dependency versions for consistent installs, ensuring a reproducible environment.
- **`package.json`**: Manages dependencies and project metadata, including scripts for building, testing, or starting the project.
- **`README.md`**: Project documentation, setup instructions, and information for contributors or users.
- **`tailwind.config.mjs`**: Tailwind CSS configuration file, defining custom styles, themes, or plugin configurations.
- **`tsconfig.json`**: TypeScript configuration file, specifying compiler options and paths for type-checking.

---

# Component Explanation

Components are categorized as shared (`/components/shared`) and custom (`/components`). Shared components are used on all Tulsa Custom Website projects, greatly reducing development time and cost for clients. Custom components are specific to each project, fulfill unique business needs, and generally take more time to produce.

---

# Styling and Layout

### Tailwind CSS

Tailwind CSS is the primary styling framework. Typography and other global styles are located in the `<style>` tag of `BaseLayout.astro`.

---

# Static Site Generation (SSG)

### Build Process

Astro uses static site generation (SSG) by default. It pre-renders all pages at build time, so the browser receives fully rendered HTML, making the site lightweight and independent of backend performance. This approach enables fast and consistent loading times, as a full-site rebuild is required to update content.

---

# Form Handling and Client Notifications

### Form Submissions

Forms are built using React and submit data to Firestore. This data can trigger Google Cloud Functions for business logic, such as sending an email notification to the client.

---

# Development Workflow and Contribution Guide

### Branching Strategy

CI/CD is set up on the main branch of the project repository in GitHub. Use feature or staging branches for code pushes that should not trigger a build to the live site.
