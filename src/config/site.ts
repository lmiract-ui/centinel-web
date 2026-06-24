// ============================================================================
//  CONFIGURACIÓN DEL SITIO  —  editá SOLO este archivo para datos de marca
// ============================================================================
//  Marca, ciudad, WhatsApp y navegación. El contenido de cada sección vive
//  en `src/content/flotas.ts`.
// ============================================================================

export const site = {
  // --- Marca -----------------------------------------------------------------
  brand: 'Centinel Flotas',
  brandShort: 'Centinel',
  tagline: 'Control vehicular diseñado para la realidad de tu flota',
  subtagline:
    'Hardware confiable, plataformas líderes y soporte humano para empresas que necesitan saber qué pasa con cada unidad, sin renegar todos los días.',
  logo: '/centinel-logo.svg',
  ciudad: 'Córdoba',
  pais: 'Argentina',

  // --- Contacto / WhatsApp ---------------------------------------------------
  // Número en formato internacional SIN "+" ni espacios.
  // TODO: confirmar número definitivo para Flotas (placeholder del proyecto Centinel).
  whatsapp: '5493515575131',
  whatsappMsg: 'Hola, quiero que analicen mi flota y me recomienden una solución.',

  // --- Navegación (anclas de la home) ---------------------------------------
  nav: [
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Plataformas', href: '#plataformas' },
    { label: 'Dashcams', href: '#dashcams' },
    { label: 'Casos de uso', href: '#casos' },
    { label: 'Soporte', href: '#proceso' },
  ],
} as const

// --- Helpers -----------------------------------------------------------------

/** Arma el link de WhatsApp. Pasá un mensaje custom si querés. */
export function waLink(customMsg?: string): string {
  const msg = encodeURIComponent(customMsg || site.whatsappMsg)
  return `https://wa.me/${site.whatsapp}?text=${msg}`
}
