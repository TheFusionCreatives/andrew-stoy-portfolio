/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark backdrop colors
        'dark-bg': '#0A0A0B',
        'dark-surface': '#1A1A1C',
        'dark-border': '#2A2A2E',
        
        // Calming blues
        'blue-primary': '#3B82F6',
        'blue-light': '#06B6D4',
        'blue-dark': '#1E40AF',
        
        // Calming greens
        'green-primary': '#10B981',
        'green-light': '#34D399',
        'green-dark': '#047857',
        
        // Supernova pop colors
        'purple-electric': '#A855F7',
        'coral-pop': '#F97316',
        'pink-glow': '#EC4899',
        
        // Professional grays
        'gray-light': '#E5E7EB',
        'gray-medium': '#9CA3AF',
        'gray-dark': '#4B5563',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.6' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
