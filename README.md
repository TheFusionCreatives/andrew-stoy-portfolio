# Andrew Stoy Portfolio

**Live Site:** [andrew-stoy.com](https://andrew-stoy.com/)

A stunning personal portfolio website for Andrew Stoy, showcasing psychology and technology integration expertise. Built with Next.js 14, featuring a supernova-style design with calming blues and greens against a dark technological backdrop.

## Features

- 🚀 **Next.js 14** with App Router for optimal performance
- 🎨 **Tailwind CSS** with custom design system
- ✨ **Framer Motion** animations for smooth interactions
- 📱 **Responsive design** that works on all devices
- 🌟 **Supernova particle effects** for visual impact
- 🔧 **TypeScript** for type safety
- 📧 **Contact form** with validation
- 📖 **Immersive Story Section**: Interactive narrative with 8-phase journey
- 🎯 **Complete sections**: Hero, About, Experience, Story, Education, Projects, Contact

## Sections

- **Hero**: Animated introduction with particle effects and CTAs
- **About**: Psychology background and expertise areas
- **Experience**: Professional timeline with achievements
- **Story**: Immersive narrative "The Education That Couldn't Be Taught" with 8 phases, keyboard/swipe/scroll navigation
- **Education**: Academic background and certifications
- **Projects**: Case studies with metrics and impact
- **Contact**: Contact form and professional links

## Design System

### Color Palette
- **Dark Backdrop**: `#0A0A0B` (charcoal black)
- **Calming Blues**: `#3B82F6`, `#06B6D4`
- **Calming Greens**: `#10B981`, `#34D399`
- **Supernova Pops**: `#A855F7` (electric purple), `#F97316` (coral)

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter (paragraphs)

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page with all sections
│   └── globals.css             # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button component
│   │   └── Container.tsx       # Layout wrapper
│   ├── navigation/
│   │   └── Navigation.tsx      # Header navigation
│   ├── hero/
│   │   └── HeroSection.tsx     # Hero section with animations
│   ├── about/
│   │   └── AboutSection.tsx    # About section with expertise
│   ├── experience/
│   │   └── ExperienceSection.tsx # Experience timeline
│   ├── education/
│   │   └── EducationSection.tsx  # Education and certifications
│   ├── story/
│   │   └── StorySection.tsx      # Immersive narrative story
│   ├── projects/
│   │   └── ProjectsSection.tsx   # Projects and case studies
│   ├── contact/
│   │   └── ContactSection.tsx    # Contact form and info
│   └── footer/
│       └── Footer.tsx            # Footer with links
```

## Deployment

This project is configured for deployment on Netlify:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

The project includes a `netlify.toml` configuration file for optimal deployment settings.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Performance

- ✅ Optimized build (47.3 kB first load)
- ✅ Linting and type checking passed
- ✅ Static generation for optimal performance
- ✅ Responsive design for all devices

## License

MIT License - feel free to use this project for your own portfolio!
