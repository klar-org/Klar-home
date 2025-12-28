# Klar Landing Page

A minimalist, static landing page for **Klar**, a Danish word learning application powered by the FSRS algorithm.

This repository features the design and source code for the landing page located at [klar.rimlys.org](https://klar.rimlys.org).

## Features

- **Minimalist Design**: Clean, typography-focused aesthetic.
- **Responsive**: Fully responsive layout for all device sizes.
- **Tech Stack**:
  - [React](https://react.dev/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/) (via CDN)
  - [Lucide React](https://lucide.dev/) (Icons)

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/klar-org/Klar-home.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

The app will generally run on `http://localhost:3000` (or `3001` if the port is busy).

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## License

All rights reserved.

## Deployment to Next.js Application

To integrate this landing page into your main Next.js application (`klar.rimlys.org`) at the `/about` path, follow these steps:

### Option 1: Static Integration (Recommended)

Since this is a static site, the simplest method is to copy the build output directly into your Next.js project's public directory.

1.  **Build the project**:
    ```bash
    npm run build
    ```
    This generates a `dist` folder with the configured `/about/` base path.

2.  **Copy to Next.js**:
    Copy the contents of the `dist` folder into `public/about/` in your Next.js project.
    
    Structure should look like:
    ```
    nextjs-app/
    └── public/
        └── about/
            ├── index.html
            └── assets/
                └── ...
    ```

3.  **Deploy Next.js**:
    Deploy your Next.js app as usual. `klar.rimlys.org/about` will now serve this landing page.

### Option 2: Multi-Zone / Rewrites

If you prefer to keep the deployments separate (e.g., this repo is automatically deployed to Vercel/Netlify), use Next.js rewrites.

1.  **Deploy this repo** to a URL (e.g., `https://klar-home-landing.vercel.app`).
2.  **Configure Next.js**:
    In your Next.js app's `next.config.js`:

    ```javascript
    module.exports = {
      async rewrites() {
        return [
          {
            source: '/about',
            destination: 'https://klar-home-landing.vercel.app/about/index.html',
          },
          {
            source: '/about/:path*',
            destination: 'https://klar-home-landing.vercel.app/about/:path*',
          },
        ]
      },
    }
    ```

*Note: The project is currently configured with `base: '/about/'` in `vite.config.ts` to support these storage paths.*
