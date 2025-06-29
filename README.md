# Vue E-Commerce Project

A modern, responsive e-commerce web application built with Vue.js 3, TypeScript, and Vite. This project showcases a complete online shopping experience with product browsing, detailed views, shopping cart functionality, and more.

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

- **Vuex 4** - Centralized state management for the application
- **Vuex Persisted State** - Keeps cart data between browser sessions

### Build Tools & Development

- **Vite** - Fast build tool and development server
- **Sass** - CSS preprocessor for better styling
- **ESLint** - Code linting for consistent code quality
- **Prettier** - Code formatting for clean, readable code

### Testing

- **Vitest** - Fast unit testing framework
- **Vue Test Utils** - Official testing utilities for Vue components
- **jsdom** - DOM implementation for testing

### UI & Icons

- **FontAwesome** - Beautiful icons throughout the application
- **Custom CSS/SCSS** - Handcrafted responsive styles

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
   git clone <your-repository-url>
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
│   ├── ProductCard.vue  # Product display card
│   ├── SideCart.vue     # Shopping cart sidebar
│   └── SortDropdown.vue # Product sorting dropdown
├── pages/               # Page components (routes)
│   ├── ProductList.vue  # Main product catalog
│   ├── Product-details.vue # Individual product page
│   ├── ContactUs.vue    # Contact form page
│   └── NotFound.vue     # 404 error page
├── router/              # Vue Router configuration
├── store/               # Vuex state management
│   └── modules/         # Vuex modules
│       ├── products.ts  # Product state & API calls
│       ├── cart.ts      # Shopping cart management
│       └── selectedProduct.ts # Selected product state
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

1. Update the API URL in `src/store/modules/products.ts`
2. Adjust the Product interface in `src/types/types.ts` if needed

## 🧪 Testing

The project includes unit tests for components. Tests are located in:

- `src/components/__tests__/` - Component tests
- `src/pages/__tests__/` - Page component tests

Run tests with:

```bash
npm run test        # Run once
npm run test:watch  # Run in watch mode
```

## 🚀 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. The `netlify.toml` file is already configured for SPA routing

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service like:

- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3

## 📝 Code Quality

This project maintains high code quality through:

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for consistent formatting
- **Unit tests** for component reliability
- **Modular architecture** for maintainability

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
