React TypeScript Component Library

A modern, production-ready React component library built with TypeScript, Vite, Tailwind CSS, and Styled Components. This project showcases a comprehensive collection of reusable UI components with full accessibility support, testing, and Storybook documentation.

Features

- Modern Stack: React 18, TypeScript, Vite
- Styling: Tailwind CSS + Styled Components
- Icons: Lucide React icons
- Testing: Vitest + Testing Library
- Documentation: Storybook integration
- Linting: ESLint with TypeScript support
- Accessibility: WCAG compliant components
- Production Ready: Optimized build with Vite

📁 Project Structure

project/                  
├── dist/                           # Production build output
│   ├── assets/                     # Bundled assets
│   └── index.html                  # Built HTML file
├── node_modules/                   # Dependencies
├── src/                            # Source code
│   ├── components/                 # Reusable UI components
│   │   ├── Button/                 # Button component
│   │   │   ├── Button.tsx          # Main component
│   │   │   ├── Button.stories.tsx  # Storybook stories
│   │   │   └── Button.test.tsx     # Unit tests
│   │   ├── Card/                   # Card component
│   │   │   ├── Card.tsx
│   │   │   ├── Card.stories.tsx
│   │   │   └── Card.test.tsx
│   │   ├── Input/                  # Input component
│   │   │   ├── Input.tsx
│   │   │   ├── Input.stories.tsx
│   │   │   └── Input.test.tsx
│   │   ├── Modal/                  # Modal component
│   │   │   ├── Modal.tsx
│   │   │   ├── Modal.stories.tsx
│   │   │   └── Modal.test.tsx
│   │   ├── theme/                  # Theme configuration
│   │   │   └── theme.ts
│   │   └── index.ts                # Component exports
│   ├── test/                       # Test configuration
│   │   └── setup.ts                # Test setup file
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   ├── index.css                   # Global styles
│   └── vite-env.d.ts               # Vite type definitions
├── .storybook/                     # Storybook configuration (if present)
├── dist/                           # Build output
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── package-lock.json               # Dependency lock file
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # App-specific TypeScript config
├── tsconfig.node.json              # Node-specific TypeScript config
├── vite.config.ts                  # Vite configuration
└── vitest.config.ts                # Vitest configuration

Prerequisites

Before running this project, make sure you have the following installed:

-Node.js (version 16 or higher)
- npm (comes with Node.js)

You can check your versions by running:
bash
node --version
npm --version


Installation

1. Clone or navigate to the project directory:
   cd /home/kirthika/Downloads/new_frontend/project

2. Install dependencies:
   npm install

Running the Project

Development Server

Start the development server with hot reload:
npm run dev

The application will be available at `http://localhost:5173` (or the next available port).

Build for Production

Create an optimized production build:
npm run build


The built files will be in the `dist/` directory.

Preview Production Build

Preview the production build locally:
npm run preview

Testing

Run Tests

Run all tests:
npm test

Run Tests with UI

Open the Vitest UI for interactive testing:
npm run test:ui

Storybook

Start Storybook

Launch Storybook for component documentation:
npm run storybook

Storybook will be available at `http://localhost:6006`.

Build Storybook

Build Storybook for deployment:
npm run build-storybook

Linting

Check code quality and style:
npm run lint

 🎨 Available Components

Button
- Multiple variants: `primary`, `secondary`, `outline`, `ghost`, `danger`
- Different sizes: `sm`, `md`, `lg`
- States: `loading`, `disabled`, `fullWidth`

Input
- Form inputs with validation
- Icon support (start/end icons)
- Error states and helper text
- Full accessibility support

Modal
- Accessible modal dialogs
- Focus management
- Multiple sizes
- Customizable content

Card
- Multiple variants: `default`, `outlined`, `elevated`
- Interactive states: `hoverable`, `clickable`
- Flexible content areas: `Header`, `Content`, `Footer`

🎯 Key Features

Accessibility
- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- Focus management

TypeScript
- Full type safety
- IntelliSense support
- Compile-time error checking

Performance
- Optimized bundle size
- Tree shaking support
- Fast development server
- Production optimizations

Developer Experience
- Hot module replacement
- Comprehensive testing setup
- Storybook documentation
- ESLint configuration

🛠️ Technology Stack

- Frontend Framework: React 18
- Language: TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS + Styled Components
- Icons: Lucide React
- Testing: Vitest + Testing Library
- Documentation: Storybook
- Linting**: ESLint
- **Package Manager**: npm

📝 Development Guidelines

Based on the project configuration, follow these guidelines:

1. Design Philosophy: Create beautiful, production-worthy components that are not cookie-cutter
2. Styling: Use Tailwind CSS classes with Styled Components for complex styling
3. Icons: Use Lucide React icons exclusively (no other icon libraries)
4. Components: Build fully featured, accessible components
5. Testing: Write comprehensive tests for all components
6. Documentation: Document components in Storybook

🚀 Deployment

Static Hosting

The project builds to static files that can be deployed to any static hosting service:

1. Build the project:
   npm run build


2. Deploy the `dist/` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

Environment Variables

If you need environment variables, create a `.env` file in the project root:
```env
VITE_API_URL=your_api_url_here
VITE_APP_TITLE=Your App Title
```

Access them in your code with `import.meta.env.VITE_VARIABLE_NAME`.

🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Update Storybook stories
6. Run tests and linting
7. Submit a pull request

📄 License

This project is open source and available under the [MIT License](LICENSE).

🆘 Troubleshooting

Common Issues

1. Port already in use: Change the port in `vite.config.ts` or kill the process using the port
2. Node version issues: Ensure you're using Node.js 16 or higher
3. Dependency conflicts: Delete `node_modules` and `package-lock.json`, then run `npm install`
4. TypeScript errors: Check your TypeScript configuration and ensure all types are properly imported

Getting Help

- Check the [Vite documentation](https://vitejs.dev/)
- Review [React documentation](https://react.dev/)
- Consult [Tailwind CSS docs](https://tailwindcss.com/)
- Check [Storybook documentation](https://storybook.js.org/)


