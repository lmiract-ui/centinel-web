// ============================================================================
//  CONTENIDO DE LA WEB  —  editá acá los textos de cada sección
// ============================================================================
//  Todo el contenido "de marketing" vive en este archivo. Los componentes
//  de sección solo lo renderizan. Para cambiar copy, agregar/quitar cards o
//  reordenar, editá los arrays de abajo — no hace falta tocar los componentes.
// ============================================================================

import {
  Route,
  Truck,
  Bus,
  Bike,
  Tractor,
  Building2,
  Signal,
  BatteryCharging,
  Wrench,
  Cpu,
  Video,
  AlertTriangle,
  ShieldCheck,
  Eye,
  Users,
  Fuel,
  ClipboardList,
  PackageSearch,
  SlidersHorizontal,
  PlugZap,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'

export interface Card {
  icon: LucideIcon
  titulo: string
  texto: string
}

// --- 2. Soluciones por rubro -------------------------------------------------
export const soluciones: Card[] = [
  {
    icon: Route,
    titulo: 'Distribución y logística',
    texto: 'Control de recorridos, paradas, entregas, desvíos y tiempos improductivos.',
  },
  {
    icon: Truck,
    titulo: 'Transporte pesado',
    texto:
      'Rastreo robusto, sensores, CAN bus, mantenimiento, control de conducción y alertas críticas.',
  },
  {
    icon: Bus,
    titulo: 'Transporte de pasajeros',
    texto: 'Combis, charters, rent a car y remises: recorridos, malos tratos, paradas y seguridad.',
  },
  {
    icon: Tractor,
    titulo: 'Maquinaria / equipos especiales',
    texto: 'Horómetros, zonas de trabajo, uso real y alertas de movimiento.',
  },
  {
    icon: Building2,
    titulo: 'Flotas comerciales chicas',
    texto: 'Soluciones simples, escalables y sin complicaciones técnicas.',
  },
  {
    icon: Bike,
    titulo: 'Motos corporativas',
    texto: 'Rastreo discreto, bajo consumo, corte remoto y control operativo.',
  },
]

// --- 3. Hardware serio -------------------------------------------------------
export const hardware: Card[] = [
  {
    icon: Signal,
    titulo: 'Conectividad estable',
    texto: 'Equipos seleccionados para mantener comunicación confiable.',
  },
  {
    icon: BatteryCharging,
    titulo: 'Bajo consumo',
    texto: 'Ideal para motos, vehículos detenidos o unidades con riesgo de descarga.',
  },
  {
    icon: Wrench,
    titulo: 'Instalación profesional',
    texto: 'Cableado prolijo, oculto y pensado para evitar fallas futuras.',
  },
  {
    icon: Cpu,
    titulo: 'Equipos según uso real',
    texto: 'OBD, cableados, 4G, sensores, corte remoto, cámaras y soluciones avanzadas.',
  },
]

// --- 4. Plataformas ----------------------------------------------------------
export interface Plataforma {
  nombre: string
  /** Logo de la plataforma en /public. Reemplazar por el archivo oficial si está. */
  logo: string
  nivel: string
  resumen: string
  texto: string
  features: string[]
  destacada: boolean
}

export const plataformas: Plataforma[] = [
  {
    nombre: 'WhatsGPS',
    logo: '/whatsgps.svg',
    nivel: 'Control simple y claro',
    resumen:
      'Para empresas que necesitan una plataforma simple, clara y funcional para controlar ubicación, historial, alertas, geocercas y eventos principales.',
    texto: 'Una solución práctica para flotas que buscan control diario sin complejidad innecesaria.',
    features: ['Ubicación e historial', 'Alertas y geocercas', 'Eventos principales', 'App móvil'],
    destacada: false,
  },
  {
    nombre: 'Wialon',
    logo: '/wialon.svg',
    nivel: 'Telemetría avanzada',
    resumen:
      'Para operaciones que necesitan telemetría avanzada, reportes, mantenimiento, sensores, conducción, combustible, CAN bus y análisis profundo.',
    texto:
      'Una de las plataformas más reconocidas del mundo en gestión de flotas, pensada para empresas que quieren convertir datos en decisiones.',
    features: [
      'Reportes y mantenimiento',
      'Sensores y CAN bus',
      'Conducción y combustible',
      'Análisis profundo de datos',
    ],
    destacada: true,
  },
]

// --- 5. Dashcams / videotelemática ------------------------------------------
export const dashcams: Card[] = [
  {
    icon: Video,
    titulo: 'Video en ruta',
    texto: 'Visualizá eventos importantes y situaciones críticas.',
  },
  {
    icon: AlertTriangle,
    titulo: 'Conducción riesgosa',
    texto: 'Frenadas bruscas, maniobras, distracciones o hábitos peligrosos.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Respaldo ante siniestros',
    texto: 'Evidencia para reclamos, seguros o conflictos operativos.',
  },
  {
    icon: Eye,
    titulo: 'Control real de operación',
    texto: 'No solo dónde está la unidad, sino qué está pasando.',
  },
]

// --- 5b. Qué pueden filmar las cámaras (vistas) -----------------------------
export const vistasCamara: Card[] = [
  {
    icon: Route,
    titulo: 'Cámara a la ruta',
    texto: 'Lo que pasa adelante del vehículo: tránsito, maniobras y siniestros.',
  },
  {
    icon: Users,
    titulo: 'Cámara al habitáculo',
    texto: 'El interior y la cabina: chofer, pasajeros y uso real de la unidad.',
  },
  {
    icon: Fuel,
    titulo: 'Cámara al exterior',
    texto: 'Un tercer ángulo para el tanque de combustible, el depósito o la carga.',
  },
]

// --- 6. Cómo armamos tu solución --------------------------------------------
export interface Paso {
  n: number
  icon: LucideIcon
  titulo: string
  texto: string
}

export const proceso: Paso[] = [
  {
    n: 1,
    icon: ClipboardList,
    titulo: 'Diagnóstico de flota',
    texto: 'Cantidad de unidades, rubro, recorridos, riesgos, problemas actuales y objetivos.',
  },
  {
    n: 2,
    icon: PackageSearch,
    titulo: 'Selección de hardware',
    texto: 'Definimos el equipo correcto para cada tipo de vehículo.',
  },
  {
    n: 3,
    icon: SlidersHorizontal,
    titulo: 'Plataforma y configuración',
    texto: 'Elegimos WhatsGPS, Wialon u otra solución según el nivel de control requerido.',
  },
  {
    n: 4,
    icon: PlugZap,
    titulo: 'Instalación y prueba',
    texto: 'Instalación profesional, pruebas de señal, eventos y alertas.',
  },
  {
    n: 5,
    icon: GraduationCap,
    titulo: 'Capacitación y soporte',
    texto: 'Te enseñamos a usar el sistema y damos seguimiento postventa.',
  },
]

// --- 7. Comparativa ----------------------------------------------------------
export interface FilaComparativa {
  comun: string
  centinel: string
}

export const comparativa: FilaComparativa[] = [
  { comun: 'Equipo genérico', centinel: 'Hardware elegido según vehículo' },
  { comun: 'Plataforma básica', centinel: 'Plataforma según necesidad' },
  { comun: 'Señal inestable', centinel: 'Configuración y pruebas reales' },
  { comun: 'Sin seguimiento', centinel: 'Soporte humano postventa' },
  { comun: 'Solo ubicación', centinel: 'Datos, alertas, cámaras y reportes' },
  { comun: 'Instalación rápida y desprolija', centinel: 'Instalación profesional' },
]

// --- 8. Casos / autoridad ----------------------------------------------------
export interface Caso {
  rubro: string
  problema: string
  solucion: string
  resultado: string
}

export const casos: Caso[] = [
  {
    rubro: 'Roger Distribuidora',
    problema: 'No sabían dónde perdían tiempo.',
    solucion:
      'Planificación de rutas, detección de desvíos y ralentí, geocercas y alertas de paradas.',
    resultado: 'Sumaron 6 clientes más con la misma flota y el mismo personal.',
  },
  {
    rubro: 'Nieto Rent a Car',
    problema: 'Riesgo de uso indebido y pérdida de activos.',
    solucion: 'Geocercas, alertas y protocolo de recupero.',
    resultado: 'Más seguridad sobre cada unidad.',
  },
  {
    rubro: 'Serodino',
    problema: 'Necesitaban control avanzado y datos confiables de toda la flota.',
    solucion:
      'Lectura de combustible, scoring de conducción, dashcams y rastreo confiable con multioperador.',
    resultado: 'Datos reales para decidir.',
  },
]
