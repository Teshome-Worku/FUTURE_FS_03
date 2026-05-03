# ASTU Gym 🏋️‍♂️

A modern, responsive gym website built with React, TypeScript, and Tailwind CSS. This project showcases a professional fitness center website with smooth animations and a clean, user-friendly interface.

![ASTU Gym Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=ASTU+Gym+Preview)

## ✨ Features

- **Modern UI/UX**: Clean, professional design with dark theme and red accents
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type Safety**: Full TypeScript support for better code quality
- **Component-Based Architecture**: Modular, reusable React components
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Tech Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **React Icons** - Popular icon library for React

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with Autoprefixer
- **Babel** - JavaScript transpilation

## 📁 Project Structure

```
astu-gym/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   └── images/        # Image assets
│   ├── components/        # Reusable React components
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Hero.tsx       # Hero section component
│   │   └── Footer.tsx     # Footer component
│   ├── pages/             # Page components
│   │   └── Home.tsx       # Home page component
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles with Tailwind
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md             # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/astu-gym.git
   cd astu-gym
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
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Components Overview

### 🏠 Home Page (`pages/Home.tsx`)
The main landing page that combines all components into a cohesive layout.

### 🧭 Navbar (`components/Navbar.tsx`)
- Responsive navigation bar
- Mobile-friendly hamburger menu
- Smooth scroll navigation links

### 🌟 Hero Section (`components/Hero.tsx`)
- Full-screen hero with gym background image
- Animated text and call-to-action buttons
- Responsive design with mobile optimizations

### 📄 Footer (`components/Footer.tsx`)
- Contact information and social media links
- Quick navigation links
- Copyright information

## 🎯 Key Features Explained

### Responsive Design
The website adapts seamlessly across all screen sizes:
- **Mobile**: Stacked layout with centered content
- **Tablet**: Optimized spacing and typography
- **Desktop**: Full-width layouts with left-aligned content

### Animation System
Using Framer Motion for smooth, performant animations:
- **Hero animations**: Fade-in and slide-up effects with staggered timing
- **Hover effects**: Interactive button animations
- **Page transitions**: Smooth component mounting/unmounting

### Dark Theme with Red Accents
- **Primary colors**: Dark backgrounds (#1a1a1a, #000000)
- **Accent color**: Red (#dc2626) for CTAs and highlights
- **Text colors**: White and light gray for optimal contrast

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all components
- Follow React functional component patterns
- Use Tailwind CSS utility classes for styling
- Maintain consistent naming conventions

### Component Structure
```typescript
// Example component structure
import React from 'react';

interface ComponentProps {
  // Define props interface
}

const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    <div className="component-classes">
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### Adding New Components
1. Create the component file in the appropriate directory
2. Export it as default
3. Import and use it in the parent component
4. Ensure proper TypeScript typing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Hosting Platforms
The built files can be deployed to:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Ensure all tests pass
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please reach out:

- **Project Link**: [https://github.com/your-username/astu-gym](https://github.com/your-username/astu-gym)
- **Email**: your-email@example.com

---

**Built with ❤️ for fitness enthusiasts everywhere**

*Transform your fitness journey with ASTU Gym - where strength meets consistency!* 💪

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
