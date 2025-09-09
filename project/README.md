⚛️ React TypeScript Component Library

A modern, production-ready React component library built with TypeScript, **Vite**, **Tailwind CSS**, and **Styled Components**.  
This project showcases a comprehensive collection of reusable UI components with full accessibility support, testing, and Storybook documentation.

---

## ✨ Features

- Modern Stack: React 18, TypeScript, Vite  
- Styling: Tailwind CSS + Styled Components  
- Icons: Lucide React icons  
- Testing: Vitest + Testing Library  
- Documentation: Storybook integration  
- Linting: ESLint with TypeScript support  
- Accessibility: WCAG compliant components  
- Production Ready: Optimized build with Vite  

---

📁 Project Structure

project/
├── dist/ # Production build output
│ ├── assets/ # Bundled assets
│ └── index.html # Built HTML file
├── node_modules/ # Dependencies
├── src/ # Source code
│ ├── components/ # Reusable UI components
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ ├── Button.stories.tsx
│ │ │ └── Button.test.tsx
│ │ ├── Card/
│ │ │ ├── Card.tsx
│ │ │ ├── Card.stories.tsx
│ │ │ └── Card.test.tsx
│ │ ├── Input/
│ │ │ ├── Input.tsx
│ │ │ ├── Input.stories.tsx
│ │ │ └── Input.test.tsx
│ │ ├── Modal/
│ │ │ ├── Modal.tsx
│ │ │ ├── Modal.stories.tsx
│ │ │ └── Modal.test.tsx
│ │ ├── theme/
│ │ │ └── theme.ts
│ │ └── index.ts # Component exports
│ ├── test/ # Test configuration
│ │ └── setup.ts
│ ├── App.tsx
│ ├── main.tsx
│ ├── index.css
│ └── vite-env.d.ts
├── .storybook/ # Storybook configuration
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts


---

📦 Prerequisites

- Node.js (v16 or higher)  
- npm (comes with Node.js)  

Check versions:
```bash
node --version
npm --version

⚡ Installation

    Navigate to the project directory:

cd /home/kirthika/Downloads/new_frontend/project

Install dependencies:

    npm install

🚀 Running the Project
Development Server

npm run dev

App available at: http://localhost:5173
Build for Production

npm run build

Output will be in the dist/ folder.
Preview Production Build

npm run preview

✅ Testing

Run all tests:

npm test

Run tests with UI:

npm run test:ui

📖 Storybook

Start Storybook:

npm run storybook

Available at: http://localhost:6006

Build Storybook:

npm run build-storybook

🧹 Linting

Check code quality:

npm run lint

🎨 Available Components
🔘 Button

    Variants: primary, secondary, outline, ghost, danger

    Sizes: sm, md, lg

    States: loading, disabled, fullWidth

✏️ Input

    Validation support

    Start/end icons

    Error states + helper text

    Full accessibility support

🪟 Modal

    Accessible modal dialogs

    Focus management

    Multiple sizes

    Fully customizable

🃏 Card

    Variants: default, outlined, elevated

    States: hoverable, clickable

    Flexible slots: Header, Content, Footer

🎯 Key Features

    Accessibility: WCAG 2.1 compliant, screen reader friendly, focus management

    TypeScript: Type safety, IntelliSense, compile-time error checking

    Performance: Tree shaking, optimized bundle, fast dev server

    DX: Hot reload, Storybook, ESLint, testing setup

🛠️ Technology Stack

    React 18 (frontend framework)

    TypeScript (language)

    Vite (build tool)

    Tailwind CSS + Styled Components (styling)

    Lucide React (icons)

    Vitest + Testing Library (testing)

    Storybook (documentation)

    ESLint (linting)

    npm (package manager)

📝 Development Guidelines

    Design Philosophy: Production-worthy, accessible, non-cookie-cutter components

    Styling: Tailwind CSS + Styled Components for advanced styling

    Icons: Use Lucide React exclusively

    Testing: Comprehensive unit tests for every component

    Documentation: Add stories for all components in Storybook

🚀 Deployment
Static Hosting

    Build project:

    npm run build

    Deploy dist/ to hosting (Netlify, Vercel, GitHub Pages, etc.)

Environment Variables

Create .env file:

VITE_API_URL=your_api_url_here
VITE_APP_TITLE=Your App Title

Use in code:

import.meta.env.VITE_API_URL

🤝 Contributing

    Fork repo

    Create feature branch

    Make changes

    Add tests + Storybook stories

    Run lint + tests

    Submit PR

📄 License

This project is open source under the MIT License

.
🆘 Troubleshooting

    Port in use → Change in vite.config.ts or kill the process

    Node version issues → Use Node.js 16+

    Dependency conflicts → Delete node_modules + package-lock.json, reinstall

    TypeScript errors → Check tsconfig and import types correctly

Helpful Docs

    Vite Documentation

React Documentation


👉 This is GitHub-friendly, cleanly structured, and easy to read.  

Do you want me to also **add badges** (like build status, license, npm version) at the top of the README? That will make it look more professional.


- Consult [Tailwind CSS docs](https://tailwindcss.com/)
- Check [Storybook documentation](https://storybook.js.org/)


