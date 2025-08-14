# ZenPrivata CDFI Cybersecurity Platform

## Overview

ZenPrivata is a professional marketing website and SaaS platform designed specifically for Community Development Financial Institutions (CDFIs). The platform provides comprehensive cybersecurity and privacy compliance management with AI-powered assistance, addressing the unique security challenges faced by CDFIs including limited resources, financial constraints, and the need for simplified security controls.

The application serves as both a marketing website to promote the platform and consulting services, and a foundation for the SaaS platform that helps CDFIs build, manage, and simplify their cybersecurity programs through a specialized framework.

## Recent Changes (January 2025)

### Hybrid Email System Implementation
- **Date**: January 14, 2025
- **Change**: Implemented dual email system supporting both Replit and GitHub Pages deployment
- **Features**: 
  - Automatic environment detection (GitHub Pages vs Replit)
  - Server-side Resend API for Replit hosting (full backend functionality)
  - Client-side EmailJS for GitHub Pages (static hosting compatibility)
  - Seamless switching between email providers based on hosting environment
- **EmailJS Config**: service_osoudyz, template_ho61775, public key tb1C0_QTUVGQNsZ3O
- **Status**: Fully functional on both platforms with proper error handling

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using **React 18** with **TypeScript** and follows a modern component-based architecture:

- **UI Framework**: Utilizes shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens for consistent theming (zen-orange, zen-dark, zen-light color palette)
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Form Handling**: React Hook Form with Zod schema validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The backend follows a **Node.js/Express** REST API pattern:

- **Runtime**: Node.js with TypeScript and ES modules
- **Framework**: Express.js with middleware for JSON parsing, logging, and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation (designed for easy PostgreSQL migration)
- **API Design**: RESTful endpoints for lead capture (`/api/leads`) and contact forms (`/api/contact`)
- **Validation**: Zod schemas for request validation and type safety

### Database Schema Design
The application uses **Drizzle ORM** with PostgreSQL-compatible schema:

- **Users Table**: Basic authentication structure with username/password
- **Leads Table**: Captures marketing qualified leads with GDPR consent tracking
- **Contacts Table**: Stores contact form submissions for sales inquiries
- **Migration System**: Drizzle-kit for database schema management and version control

### Authentication & Security
- Session-based authentication foundation (not fully implemented)
- GDPR compliance with explicit consent tracking
- Input validation and sanitization using Zod schemas
- CORS and security headers configured

### Development & Deployment
- **Development**: Hot module replacement with Vite dev server
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines
- **Environment**: Replit-optimized with development banners and error overlays
- **Type Safety**: Comprehensive TypeScript configuration with strict mode enabled
- **Folder Structure Constraint**: The frontend folder must remain named "client" as the Vite configuration file cannot be modified and is hardcoded to use this path

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and migrations
- **express**: Web application framework for the REST API server
- **react**: Frontend framework with React 18 features
- **@tanstack/react-query**: Server state management and data fetching

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (dialogs, forms, navigation, etc.)
- **tailwindcss**: Utility-first CSS framework with custom theme configuration
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variant management

### Form and Validation
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer between React Hook Form and validation libraries
- **zod**: Schema validation with TypeScript integration
- **drizzle-zod**: Automatic Zod schema generation from Drizzle tables

### Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking and enhanced developer experience
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Email Integration (Implemented)
- **EmailJS**: Email service integration for lead magnets and contact form notifications
- **Professional Templates**: Welcome emails with PDF attachments for users, notifications to scott@zenprivata.com
- **GitHub Pages Compatible**: Works perfectly with static hosting, no backend required
- **Graceful Degradation**: PDF downloads work even if email service fails

### Styling and Animation
- **embla-carousel-react**: Carousel component for content presentation
- **date-fns**: Date manipulation and formatting utilities
- **cmdk**: Command palette component for improved user experience

The architecture emphasizes type safety, developer experience, and scalability while maintaining a clean separation of concerns between the marketing website and the underlying SaaS platform infrastructure.