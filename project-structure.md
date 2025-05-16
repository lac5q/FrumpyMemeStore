# Headless Commerce Monorepo - Unified Project Structure

## Overview

This document outlines the unified project structure for the headless commerce application, combining both frontend and backend into a single Replit project. The structure follows the provided guidelines for code organization, modularization, and maintainability.

## Folder Structure

```
headless-commerce-monorepo/
├── src/                           # All source files
│   ├── components/                # React components (frontend)
│   │   ├── common/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   ├── layout/                # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── products/              # Product-related components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ...
│   │   ├── auth/                  # Authentication components
│   │   │   ├── LoginForm.tsx
│   │   │   └── ...
│   │   └── customize/             # Product customization components
│   │       ├── ImageUploader.tsx
│   │       ├── MockupPreview.tsx
│   │       └── ...
│   ├── pages/                     # Next.js pages
│   │   ├── index.tsx              # Home page
│   │   ├── products/              # Product pages
│   │   │   ├── index.tsx          # Product listing
│   │   │   └── [id].tsx           # Product detail
│   │   ├── auth/                  # Auth pages
│   │   │   └── index.tsx          # Auth page
│   │   └── customize/             # Customization pages
│   │       └── index.tsx          # Customization page
│   ├── api/                       # API routes (backend)
│   │   ├── routes/                # API route handlers
│   │   │   ├── shopify.ts         # Shopify API routes
│   │   │   ├── pod.ts             # Print-on-Demand API routes
│   │   │   └── auth.ts            # Authentication routes
│   │   ├── middleware/            # API middleware
│   │   │   ├── auth.ts            # Auth middleware
│   │   │   ├── error.ts           # Error handling middleware
│   │   │   └── ...
│   │   └── server.ts              # API server setup
│   ├── services/                  # Service layer (business logic)
│   │   ├── shopify/               # Shopify service
│   │   │   ├── products.ts        # Product-related operations
│   │   │   ├── cart.ts            # Cart operations
│   │   │   └── checkout.ts        # Checkout operations
│   │   ├── pod/                   # Print-on-Demand service
│   │   │   ├── products.ts        # POD product operations
│   │   │   └── mockup.ts          # Mockup generation
│   │   └── auth/                  # Auth service
│   │       └── shopifyAuth.ts     # Shopify OAuth
│   ├── hooks/                     # Custom React hooks
│   │   ├── useProducts.ts         # Hook for product data
│   │   ├── useAuth.ts             # Hook for authentication
│   │   └── ...
│   ├── utils/                     # Utility functions
│   │   ├── api.ts                 # API client utilities
│   │   ├── formatting.ts          # Data formatting utilities
│   │   └── ...
│   ├── styles/                    # Global and component styles
│   │   ├── globals.css            # Global styles
│   │   ├── components/            # Component-specific styles
│   │   └── ...
│   ├── types/                     # TypeScript type definitions
│   │   ├── product.ts             # Product-related types
│   │   ├── auth.ts                # Auth-related types
│   │   └── ...
│   └── assets/                    # Static assets
│       ├── images/                # Image assets
│       └── ...
├── public/                        # Public static files
│   ├── favicon.ico
│   └── ...
├── __tests__/                     # Test files
│   ├── components/                # Component tests
│   ├── api/                       # API tests
│   └── ...
├── .env.example                   # Example environment variables
├── next.config.js                 # Next.js configuration
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Project documentation
```

## Key Design Principles

### 1. Single Responsibility Principle (SRP)

- Each file handles one specific responsibility
- Components are broken down by feature and function
- API routes are separated by domain (Shopify, POD, Auth)
- Services encapsulate business logic for specific domains

### 2. Lines of Code (LOC) Limits

- React Components: < 200 lines
- API route handlers: < 200 lines
- Service files: < 300 lines
- Utility functions: < 100 lines

### 3. Modularization

- Code is grouped by logical domains
- Frontend components are organized by feature
- Backend code is separated into routes, services, and middleware
- Shared utilities and types are centralized

### 4. Avoiding Complexity

- Functions are kept small and focused
- Complex logic is broken down into smaller, testable units
- Cyclomatic complexity is kept under 10 per function

### 5. Testing Strategy

- Tests are organized alongside the code they test
- Component tests focus on rendering and user interactions
- API tests verify endpoint behavior
- Service tests validate business logic

## Implementation Notes

### Frontend (Next.js)

- Uses Next.js App Router for page routing
- Components follow atomic design principles
- Custom hooks abstract data fetching and state management
- Tailwind CSS for styling

### Backend (API Routes)

- Implemented as Next.js API routes
- Middleware for authentication and error handling
- Services for business logic and external API communication
- Mock implementations for development and testing

### Integration

- Frontend and backend share the same TypeScript types
- API client utilities for frontend-to-backend communication
- Environment variables for configuration
