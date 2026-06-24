# Centinel Flotas

Sitio web de **Centinel Flotas** (rastreo, control y videotelemática para flotas, Córdoba, AR).

Es una **landing de autoridad + diagnóstico** de una sola página: posicionamiento técnico
("no instalamos GPS, diseñamos sistemas de control vehicular a medida"), no una web genérica
de "vendemos GPS". La conversión es el **formulario de diagnóstico**, que arma un mensaje de
WhatsApp (sin backend), más el botón flotante de WhatsApp.

- **Mobile-first:** la mayoría del tráfico es mobile. Verificar siempre en viewport móvil primero.
- **Tono:** autoridad técnica + soporte humano + soluciones a medida.

## Stack

Vite + React + TypeScript + Tailwind CSS · `react-router-dom` · `lucide-react` · deploy en Vercel.

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo (puerto 5175)
npm run build    # type-check + build de producción
npm run preview  # previsualizar el build
```

## Estructura

```
src/
  config/
    site.ts          # marca, ciudad, WhatsApp y navegación (anclas)
  content/
    flotas.ts        # ⭐ todo el copy de cards/listas — editar acá los textos
  components/
    Layout.tsx       # shell: Header + Outlet + Footer + WhatsApp flotante
    Header.tsx       # nav por anclas + menú móvil + CTA diagnóstico
    Footer.tsx, WhatsAppFloat.tsx, ScrollToTop.tsx, Icons.tsx
    FleetDashboard.tsx  # mockup de panel de flota (visual del hero)
    sections/        # una por sección de la home
      SectionHeading.tsx, QuoteBand.tsx
      Hero.tsx, Soluciones.tsx, Hardware.tsx, Plataformas.tsx,
      Dashcams.tsx, Proceso.tsx, Comparativa.tsx, Casos.tsx, Diagnostico.tsx
  pages/
    Home.tsx         # compone todas las secciones en orden
    NotFound.tsx     # 404
```

## Secciones de la home

Hero → frase → Soluciones por rubro → Hardware → Plataformas (WhatsGPS / Wialon) → Dashcams →
Cómo armamos tu solución (proceso) → Comparativa → Casos de uso → frase → Diagnóstico (formulario).

## Editar contenido

- **Textos de cards/listas/casos:** `src/content/flotas.ts`.
- **Marca, ciudad, WhatsApp y links de nav:** `src/config/site.ts`.
- No hace falta tocar los componentes de sección para cambiar copy.

## Notas

- El número de WhatsApp en `src/config/site.ts` es un placeholder (el del proyecto Centinel).
  Confirmar el definitivo para Flotas.
- El formulario de diagnóstico no usa backend: arma un mensaje prellenado y abre WhatsApp.
- Routing SPA en Vercel resuelto con `vercel.json` (rewrites a `/index.html`).
- Pendiente (opcional): logos/pruebas reales de WhatsGPS y Wialon, fotos reales de vehículos.
