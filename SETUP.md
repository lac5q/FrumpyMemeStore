# Headless Commerce Monorepo - Setup Instructions

This document provides setup instructions for the headless commerce application, which combines both frontend and backend into a single Replit project.

## Prerequisites

- Node.js 16+ and npm
- Replit account

## Project Structure

The project follows a modular structure with clear separation of concerns:

```
headless-commerce-monorepo/
├── src/                           # All source files
│   ├── components/                # React components
│   ├── pages/                     # Next.js API routes
│   ├── app/                       # Next.js App Router pages
│   ├── api/                       # API routes and middleware
│   ├── services/                  # Business logic
│   ├── hooks/                     # Custom React hooks
│   ├── utils/                     # Utility functions
│   ├── types/                     # TypeScript type definitions
│   └── assets/                    # Static assets
├── public/                        # Public static files
├── .env.example                   # Example environment variables
└── package.json                   # Project dependencies
```

## Setup on Replit

1. Create a new Replit project:
   - Choose "Next.js" as the template
   - Name your project (e.g., "headless-commerce")

2. Upload the project files:
   - Delete any existing files in the Replit project
   - Upload all files from this repository to your Replit project

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values as needed for your Shopify and POD services

5. Run the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

The project is set up for iterative development:

1. **Frontend Development**:
   - React components are in `src/components/`
   - Pages are in `src/app/` using Next.js App Router
   - Custom hooks for data fetching are in `src/hooks/`

2. **Backend Development**:
   - API routes are in `src/api/routes/`
   - Business logic is in `src/services/`
   - Middleware is in `src/api/middleware/`

3. **Testing**:
   - The frontend and backend run in the same Next.js server
   - API endpoints are available at `/api/*`
   - No separate server setup is needed

## Integration with External Services

### Shopify Integration

1. Create a Shopify Partner account
2. Create a new app in the Shopify Partner Dashboard
3. Configure the OAuth redirect URL to point to your Replit app
4. Update the `.env` file with your Shopify API credentials

### Printful/Gelato Integration

1. Create accounts with Printful and/or Gelato
2. Generate API keys from their developer portals
3. Update the `.env` file with your POD API credentials

## Deployment

For production deployment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Extending the Application

The modular architecture makes it easy to extend:

- Add new product types in `src/services/shopify/products.ts`
- Add new customization options in `src/services/pod/mockup.ts`
- Create new UI components in `src/components/`

Each module follows the Single Responsibility Principle and has clear boundaries, making the codebase maintainable and scalable.
