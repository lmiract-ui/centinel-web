/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fondos profundos "azul-noche" — la base material del sitio
        ink: {
          950: '#05080f',
          900: '#0a0f1c',
          800: '#0f1626',
          700: '#162033',
          600: '#1f2c45',
          500: '#2b3b5c',
        },
        // Azul de marca Centinel — color primario / acción
        brand: {
          50: '#e9f3ff',
          100: '#cfe5ff',
          200: '#a5d2ff',
          300: '#7cc0ff',
          400: '#3b9eff',
          500: '#1280ff',
          600: '#0a63d6',
          700: '#0b4ea3',
          800: '#0c3d7d',
        },
        // Verde-señal "en vivo / tracking activo"
        live: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        // Lima de alto contraste para CTAs puntuales
        signal: {
          300: '#e4ff66',
          400: '#dbff3a',
          500: '#d3fd00',
          600: '#aacf00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, #05080f 90%), radial-gradient(circle at 50% 0%, rgba(18,128,255,0.10), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,158,255,0.15), 0 20px 60px -20px rgba(18,128,255,0.45)',
        'glow-live': '0 0 0 1px rgba(16,185,129,0.20), 0 18px 50px -18px rgba(16,185,129,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -30px rgba(0,0,0,0.8)',
      },
      keyframes: {
        ping2: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(2.6)', opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        dash: {
          to: { strokeDashoffset: '-1000' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        ping2: 'ping2 2.4s cubic-bezier(0,0,0.2,1) infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        sweep: 'sweep 3.2s ease-in-out infinite',
        dash: 'dash 18s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
