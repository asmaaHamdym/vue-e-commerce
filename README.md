# Vue E-Commerce Project

A modern, responsive e-commerce web application built with Vue.js 3, TypeScript, and Vite. This project showcases a complete online shopping experience with product browsing, detailed views, shopping cart functionality, and more.

## 🔄 Project Evolution

This project has undergone a significant architectural upgrade:

- **🔧 State Management Migration**: Migrated from Vuex to Pinia for more intuitive and type-safe state management
- **⚡ API Upgrade**: Transitioned from Options API to Composition API for better code organization and reusability
- **🧪 Comprehensive Testing**: Added complete test coverage with unit tests for every component and page

## ✨ Features

### 🛍️ Core Shopping Features

- **Product Catalog**: Browse products fetched from a REST API
- **Product Details**: View detailed information about each product including ratings and descriptions
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Persistent Cart**: Your cart items are saved even after closing the browser
- **Product Sorting**: Organize products easily based on price(up and down), category and rating.

### 🎨 User Experience

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive interface with FontAwesome icons
- **Smooth Navigation**: Single Page Application (SPA) with Vue Router
- **Loading States**: User-friendly loading indicators during data fetching
- **Error Handling**: Graceful error messages when things go wrong

### 📱 Pages & Components

- **Home/Product List**: Main catalog page with all products
- **Product Details**: Individual product pages with full information
- **Contact Us**: Contact form for customer inquiries
- **Shopping Cart**: Side panel for cart management
- **Navigation**: Responsive navbar with hamburger menu for mobile

## 🛠️ Technologies Used

### Frontend Framework

- **Vue.js 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vue Router 4** - Official routing solution for Vue.js

### State Management

- **Pinia** - Modern, intuitive state management for Vue 3 (migrated from Vuex)
- **Pinia Persist** - Automatic state persistence for cart data between browser sessions

### Build Tools & Development

- **Vite** - Fast build tool and development server
- **Sass** - CSS preprocessor for better styling
- **ESLint** - Code linting for consistent code quality
- **Prettier** - Code formatting for clean, readable code

### Testing

- **Vitest** - Fast unit testing framework
- **Vue Test Utils** - Official testing utilities for Vue components
- **jsdom** - DOM implementation for testing
- **100% Component Coverage** - Every component and page has comprehensive unit tests

### UI & Icons

- **FontAwesome** - Beautiful icons throughout the application
- **Custom CSS/SCSS** - Handcrafted responsive styles
- **BEM Methodology** - Block Element Modifier naming convention for maintainable and scalable CSS

### API & Data

- **Fake Store API** - External REST API for product data
- **Fetch API** - Modern way to make HTTP requests

### Deployment

- **Netlify** - Configured for easy deployment with SPA routing

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/asmaaHamdym/vue-e-commerce
   cd Vue-commerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Check and fix code quality issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer/          # Footer components
│   ├── Layout/          # Main layout wrapper
│   ├── Navbar/          # Navigation components
│   ├── shared/          # Shared utility components
│   ├── __tests__/       # Component unit tests
│   ├── ProductCard.vue  # Product display card
│   ├── SideCart.vue     # Shopping cart sidebar
│   └── SortDropdown.vue # Product sorting dropdown
├── pages/               # Page components (routes)
│   ├── __tests__/       # Page component unit tests
│   ├── ProductList.vue  # Main product catalog
│   ├── ProductDetails.vue # Individual product page
│   ├── ContactUs.vue    # Contact form page
│   └── NotFound.vue     # 404 error page
├── router/              # Vue Router configuration
├── stores/              # Pinia state management (migrated from Vuex)
│   ├── cartStore.ts     # Shopping cart management
│   ├── productsStore.ts # Product state & API calls
│   └── selectedProductStore.ts # Selected product state
├── types/               # TypeScript type definitions
└── assets/              # Static assets (images, styles)
```

## 🔧 Configuration

### Environment Setup

The project uses Vite for building and development. Configuration can be found in:

- `vite.config.ts` - Main Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.ts` - ESLint rules and settings

### API Configuration

Currently using the Fake Store API (`https://fakestoreapi.com/products`). To use a different API:

1. Update the API URL in `src/stores/productsStore.ts`
2. Adjust the Product interface in `src/types/types.ts` if needed

## 🧪 Testing

The project includes comprehensive unit tests for all components and pages, ensuring reliability and maintainability:

### Test Coverage

- **Components**: Every component in `src/components/` has corresponding tests
- **Pages**: All page components in `src/pages/` are fully tested
- **Test Location**: Tests are organized in `__tests__/` directories alongside the components

### Test Features

- Component rendering and behavior validation
- User interaction testing (clicks, form submissions)
- State management testing with Pinia stores
- Router navigation testing
- Mock implementations for external dependencies

### Running Tests

```bash
npm run test              # Run all tests once
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report
```

Test files are located in:

- `src/components/__tests__/` - Component tests
- `src/pages/__tests__/` - Page component tests

## 🚀 Deployment

### Deploy to Netlify

1. **Connect Your Repository**: In Netlify, choose "New site from Git" and connect your GitHub repository
2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**: Netlify will automatically build and deploy your site
4. **SPA Configuration**: The `netlify.toml` file is already configured for proper SPA routing

## 📝 Code Quality & Architecture

This project maintains high code quality and modern architecture through:

### Modern Vue 3 Patterns

- **Composition API** for better code organization and reusability (migrated from Options API)
- **TypeScript** for comprehensive type safety
- **Pinia** for intuitive and type-safe state management (migrated from Vuex)

### Development Standards

- **ESLint** for code linting and consistency
- **Prettier** for automatic code formatting
- **Comprehensive Unit Testing** for component reliability
- **Modular architecture** for maintainability
- **BEM CSS Methodology** - Structured naming convention for scalable and maintainable stylesheets

### Migration Benefits

- **Better Developer Experience**: Composition API provides better TypeScript integration
- **Improved Performance**: Pinia offers better tree-shaking and smaller bundle size
- **Enhanced Maintainability**: Cleaner, more readable code structure
- **Type Safety**: Full TypeScript support throughout the application

## 🔮 Future Enhancements

Potential features to add:

- User authentication and accounts
- Product categories and filtering
- Wishlist functionality
- Order history
- Payment integration
- Product reviews and ratings
- Admin panel for product management
- Real-time inventory updates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Shopping! 🛒**
