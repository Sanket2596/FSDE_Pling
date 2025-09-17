# Pling FSDE Assessment - Sports Selection App

A responsive React.js application that replicates the Figma design for sports selection with a modern dark theme interface.

## Features

- 🎨 **Pixel-perfect design** matching the provided Figma mockup
- 📱 **Fully responsive** - optimized for mobile, tablet, and desktop
- ⚡ **Modern React.js** with TypeScript and functional components
- 🎯 **Interactive sports selection** with multi-select capability
- 📊 **Progress tracking** with visual progress bar
- 🌙 **Dark theme** with proper contrast and accessibility
- ♿ **Accessible** with proper ARIA labels and keyboard navigation

## Tech Stack

- **React.js 18** with TypeScript
- **Tailwind CSS** for styling
- **Custom responsive layout** system
- **Error boundaries** for robust error handling
- **Modern CSS** with smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pling-fsde-assessment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Design Implementation

The application faithfully replicates the provided Figma design with:

- **Mobile-first approach** with responsive breakpoints
- **Dark theme** with proper color contrast
- **Sports selection cards** with hover and selection states
- **Progress indicator** showing current step
- **Navigation controls** (back, skip, continue)
- **Status bar** simulation for mobile experience

## Responsive Breakpoints

- **Mobile**: Default (320px+)
- **Tablet**: 640px+ (sm)
- **Desktop**: 1024px+ (lg)

## Component Structure

```
src/
├── components/
│   ├── SportsSelection.tsx    # Main sports selection interface
│   ├── ResponsiveLayout.tsx   # Responsive wrapper component
│   ├── StepNavigation.tsx     # Navigation and progress bar
│   ├── ErrorBoundary.tsx      # Error handling
│   └── LoadingSpinner.tsx     # Loading states
├── hooks/
│   └── useBaconIpsum.ts       # API integration hook
├── services/
│   └── api.ts                 # API service layer
└── App.tsx                    # Main application component
```

## Key Features

### Sports Selection
- Multi-select sports cards (Basketball, Football, Tennis)
- Visual feedback with selection states
- Practice count display for each sport
- Smooth hover animations

### Responsive Design
- Mobile-optimized layout
- Tablet and desktop adaptations
- Flexible grid system
- Touch-friendly interactions

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- High contrast design
- Screen reader friendly

## Customization

The design can be easily customized through:

- **Tailwind config** (`tailwind.config.js`) for colors and spacing
- **CSS variables** in `src/index.css` for theme customization
- **Component props** for different sports and configurations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Lazy loading where appropriate
- Smooth 60fps animations
- Efficient re-renders with React hooks

## License

This project is created for the Pling FSDE Assessment.
