# HyperDexa - Real Estate CRM

A modern, responsive real estate Customer Relationship Management (CRM) system built for real estate agents and agencies. HyperDexa provides comprehensive tools to manage leads, properties, appointments, and client relationships in one intuitive platform.

## 🏢 Project Overview

HyperDexa is a full-featured real estate management application that helps agents:

- Track and manage leads effectively
- Organize property listings and details
- Schedule and manage appointments
- Handle agent requests and collaboration
- Monitor performance with dashboard analytics
- Maintain client relationships with follow-up systems

## 🎨 Design Resources

### **Figma Design Files**

> **📋 Note**: Please add the Figma design file link here when available
>
> To access the design files:
>
> 1. Contact the design team for the Figma workspace invitation
> 2. Request access to the HyperDexa design system
> 3. The design files include:
>    - Component library
>    - Page layouts and wireframes
>    - Color palette and typography guide
>    - Responsive breakpoints
>    - Icon specifications

**Design File Access**: https://www.figma.com/design/PdWOVGHNZuwNla1HaICMXz/HyperDexa-Design--GIT-?node-id=0-1&t=sVaVr3tQFKiahSRm-1

## ✨ Key Features

### 🎯 **Dashboard**

- **Today's Appointments** - Timeline view of scheduled meetings and calls
- **Follow-up Management** - Track inactive leads and schedule follow-ups
- **Quick Stats** - Overview of total leads and properties
- **Quick Actions** - Add new leads and properties directly

### 👥 **Lead Management**

- **Lead Profiles** - Comprehensive client information and requirements
- **Lead Tracking** - Monitor lead status and communication history
- **Search & Filter** - Quickly find leads by various criteria
- **Add New Leads** - Streamlined lead creation process

### 🏠 **Property Management**

- **Property Listings** - Detailed property information and media
- **Property Search** - Advanced search and filtering options
- **Price Range Filtering** - Dynamic price range selection
- **Property Details** - Comprehensive property information pages

### 📅 **Calendar Integration**

- **Appointment Scheduling** - Visual calendar for managing meetings
- **Event Management** - Track all scheduled activities
- **Time Management** - Optimize daily schedules

### 🤝 **Agent Requests**

- **Collaboration Tools** - Request assistance from other agents
- **Request Management** - Track and manage agent requests
- **Team Communication** - Streamlined agent-to-agent communication

### 👤 **Profile Management**

- **User Profiles** - Personal information and preferences
- **Account Settings** - Customize user experience
- **Professional Information** - Agent credentials and details

## 🚀 Tech Stack

### **Frontend Framework**

- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### **UI & Styling**

- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible components
- **Radix UI** - Low-level UI primitives
- **Lucide React** - Beautiful icons
- **Hero Icons** - Additional icon set

### **Routing & State**

- **React Router Dom 6.26.2** - Client-side routing
- **TanStack Query 5.56.2** - Server state management
- **React Hook Form 7.53.0** - Form state management

### **Additional Libraries**

- **date-fns** - Date manipulation
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **Zod** - Schema validation
- **Class Variance Authority** - Component variant management

## 🛠️ Local Setup & Installation

### **Prerequisites**

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### **Installation Steps**

1. **Clone the Repository**

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd hyperdexa-ui
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or (if using Bun)
   bun install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:8080`
   - The application will automatically reload on file changes

### **Available Scripts**

```bash
# Development server (runs on port 8080)
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Code linting
npm run lint

# Preview production build
npm run preview
```

### **Environment Setup**

The application runs on **port 8080** by default and is configured to accept connections from all network interfaces (`::`) for development convenience.

## 🎨 Design System

### **Color Scheme**

- **Primary Blue**: `#1e3a8a` (Blue 950)
- **Secondary Blue**: `#012267` (Deep Blue)
- **Background**: `#fffcf4` (Warm White)
- **Accent Colors**: Various shades of blue and neutral grays

### **Typography**

- System fonts with fallbacks for optimal performance
- Responsive sizing using Tailwind's responsive utilities

### **Components**

- Built using shadcn/ui component system
- Fully responsive design
- Accessible components following WCAG guidelines
- Dark mode support (configured but not actively used)

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1400px and up

### **Responsive Features**

- Mobile-first design approach
- Collapsible navigation for mobile devices
- Touch-optimized interfaces
- Adaptive layouts and component sizing

## 🔧 Development Guidelines

### **Code Structure**

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets (icons, images)
└── styles/             # Global styles
```

### **Naming Conventions**

- **Components**: PascalCase (`UserProfile.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Classes**: Tailwind utility classes
- **Variables**: camelCase

### **State Management**

- **Local State**: React useState/useReducer
- **Server State**: TanStack Query
- **Form State**: React Hook Form
- **Global State**: React Context (when needed)

## 🚀 Deployment

### **Development Deployment**

The project is integrated with **Lovable** (formerly GPT Engineer) platform:

- **Platform URL**: https://lovable.dev/projects/6c2383b8-be42-4738-9ac4-6fd0c4fc65c9
- **Auto-deployment**: Changes pushed to the repository are automatically deployed
- **Preview**: Available through Lovable's sharing features

### **Production Deployment**

For production deployment:

1. Build the application: `npm run build`
2. Deploy the `dist/` folder to your hosting platform
3. Configure your web server to serve the single-page application

### **Hosting Options**

- **Vercel** (Recommended for React apps)
- **Netlify**
- **AWS S3 + CloudFront**
- **GitHub Pages**
- **Traditional web hosting**

## 🤝 Contributing

### **Development Workflow**

1. Create a feature branch from `main`
2. Make your changes following the coding guidelines
3. Test thoroughly across different screen sizes
4. Submit a pull request with detailed description
5. Code review and merge

### **Code Quality**

- ESLint configuration for code consistency
- TypeScript for type safety
- Responsive design testing required
- Component reusability preferred

## 📦 Build Configuration

### **Vite Configuration**

- **Development Server**: Port 8080, IPv6 support
- **Path Aliases**: `@/` points to `src/` directory
- **Hot Module Replacement**: Enabled for fast development
- **TypeScript**: Configured with strict mode

### **PostCSS & Tailwind**

- **Tailwind CSS**: Configured with custom theme extensions
- **PostCSS**: Autoprefixer for browser compatibility
- **Purge**: Unused CSS removed in production builds

## 📄 License

[Add your license information here]

## 🏢 About HyperDexa

HyperDexa is designed to streamline real estate operations and improve agent productivity. The platform combines modern web technologies with intuitive user experience design to create a comprehensive CRM solution for the real estate industry.

---

**For technical support or questions, please contact the development team.**

_Last updated: September 2024_
