# Headless Commerce Monorepo - README

## Overview

This is a unified headless commerce application that combines both frontend and backend into a single Replit project. It follows a modular architecture with clear separation of concerns, making it easy to maintain and extend.

## Architecture

The application follows a headless commerce architecture:

- **Frontend**: Next.js React application with App Router
- **Middleware**: API Gateway for Shopify and POD services
- **Backend Services**: Shopify API (commerce) and Printful/Gelato API (fulfillment)
- **Authentication**: Shopify OAuth

## Features

- Product browsing and detail views
- Authentication with Shopify
- Product customization with image upload
- Cart and checkout integration
- Print-on-demand fulfillment

## Project Structure

The project follows a modular structure with clear separation of concerns:

```
headless-commerce-monorepo/
├── src/                           # All source files
│   ├── components/                # React components
│   │   ├── common/                # Reusable UI components
│   │   ├── layout/                # Layout components
│   │   ├── products/              # Product-related components
│   │   ├── auth/                  # Authentication components
│   │   └── customize/             # Product customization components
│   ├── app/                       # Next.js App Router pages
│   │   ├── page.tsx               # Home page
│   │   ├── products/              # Product pages
│   │   ├── auth/                  # Auth pages
│   │   └── customize/             # Customization pages
│   ├── api/                       # API routes (backend)
│   │   ├── routes/                # API route handlers
│   │   ├── middleware/            # API middleware
│   │   └── server.ts              # API server setup
│   ├── services/                  # Service layer (business logic)
│   │   ├── shopify/               # Shopify service
│   │   ├── pod/                   # Print-on-Demand service
│   │   └── auth/                  # Auth service
│   ├── hooks/                     # Custom React hooks
│   ├── utils/                     # Utility functions
│   ├── types/                     # TypeScript type definitions
│   └── assets/                    # Static assets
├── public/                        # Public static files
├── SETUP.md                       # Setup instructions
└── package.json                   # Project dependencies
```

## Design Principles

This project follows these key design principles:

1. **Single Responsibility Principle (SRP)**: Each file handles one specific responsibility.
2. **Lines of Code (LOC) Limits**: All files are kept under 200 lines for maintainability.
3. **Modularization**: Code is grouped by logical domains.
4. **Avoiding Complexity**: Functions are kept small and focused.
5. **Testing Strategy**: The structure supports easy testing.

## Getting Started

See [SETUP.md](./SETUP.md) for detailed setup instructions.

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

## License

This project is licensed under the MIT License.
