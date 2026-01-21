# Shepherd World

A modern, responsive website for Shepherd - a platform that helps creators and media teams publish videos globally without repetitive work. The platform automatically adapts videos for different languages, regions, and social platforms.

## 🚀 Features

- **Home Page** - Hero section with video background and call-to-action
- **Products Page** - Interactive radial orbital timeline showcasing product features
- **Pricing Page** - Animated pricing cards with monthly and yearly plans
- **Smooth Page Transitions** - Fade-in animations between routes
- **Responsive Design** - Mobile-first approach with desktop optimizations
- **Modern UI Components** - Built with shadcn/ui patterns and Tailwind CSS

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

## 📁 Project Structure

```
shepherd.world/
├── public/                 # Static assets
│   ├── logo.png
│   ├── whitelogo.png
│   └── video.mp4
├── src/
│   ├── components/         # Reusable components
│   │   ├── header/        # Header navigation components
│   │   ├── hero/          # Hero section components
│   │   ├── ui/            # UI components (buttons, cards, etc.)
│   │   └── PageTransition.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── Products.tsx
│   │   └── Pricing.tsx
│   ├── sections/          # Page sections
│   │   └── UseCasesSection/
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── App.tsx            # Main app component with routing
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🏃 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shepherd.world
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## 🎨 Key Components

### Header
- Responsive navigation with logo
- Centered navigation links (Home, Pricing)
- Mobile menu button
- Header actions (Log In, Get Started)

### Hero Section
- Video background (clickable to play/pause)
- Hero content with headline and CTA
- Responsive design

### Products Page
- Interactive radial orbital timeline
- Feature cards with animations
- Click to expand feature details

### Pricing Page
- Animated pricing cards
- Monthly and yearly plans
- Border trail animations
- Responsive grid layout

## 🎯 Routes

- `/` - Home page
- `/products` - Products page with timeline
- `/pricing` - Pricing page

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility classes
- **Custom CSS files** for complex components (e.g., `DesktopNav.css`)
- **CSS Modules** support available
- **Dark theme** throughout

## 📦 Dependencies

### Core
- `react` & `react-dom` - React framework
- `react-router-dom` - Routing
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - CSS framework
- `framer-motion` - Animations
- `lucide-react` - Icons

### Components
- `@radix-ui/react-slot` - Component composition
- `class-variance-authority` - Component variants

## 🔧 Configuration

### Path Aliases
- `@/` maps to `src/` directory
- Used for imports like `@/components/ui/button`

### Vite Config
- React plugin enabled
- Path aliases configured
- Public directory set to `./public`

## 📝 Notes

- The video in the hero section is clickable to play/pause
- Page transitions use fade-in animations
- Components follow a modular, component-based architecture
- TypeScript is used throughout for type safety

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

[Add your license here]

---

Built with ❤️ for Shepherd
