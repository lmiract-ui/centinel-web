import { Truck, Bike, Car, type LucideIcon } from 'lucide-react'

interface Unidad {
  icon: LucideIcon
  nombre: string
  estado: string
  activo: boolean
}

const unidades: Unidad[] = [
  { icon: Truck, nombre: 'Camión 01', estado: '88 km/h · en ruta', activo: true },
  { icon: Car, nombre: 'Utilitario 04', estado: 'reparto · 12 paradas', activo: true },
  { icon: Bike, nombre: 'Moto 09', estado: 'detenida · base', activo: false },
]

/**
 * Mockup de panel de control de flota. Firma visual del hero:
 * mapa con varias unidades + lista de estado en vivo.
 */
export default function FleetDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Halo */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-500/15 blur-3xl" />

      <div className="surface overflow-hidden p-0 shadow-card">
        {/* Barra superior del panel */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-signal-500" />
            <span className="text-xs font-semibold tracking-wide text-slate-300">
              Panel de flota
            </span>
          </div>
          <span className="pill-live">
            <span className="h-1.5 w-1.5 rounded-full bg-live-400" />
            3 en línea
          </span>
        </div>

        {/* Mapa con unidades */}
        <div className="map-grid relative h-44 bg-ink-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(18,128,255,0.16),transparent_60%)]" />
          <svg
            viewBox="0 0 400 176"
            className="absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M20 150 C 90 120, 110 70, 200 80 S 330 60, 380 30"
              stroke="rgba(124,192,255,0.22)"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M20 150 C 90 120, 110 70, 200 80 S 330 60, 380 30"
              stroke="#3b9eff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="5 9"
              className="animate-dash"
            />
          </svg>

          {/* Marcadores */}
          <Marker className="left-[14%] top-[78%]" color="bg-live-400" pulse />
          <Marker className="left-[48%] top-[42%]" color="bg-brand-400" pulse />
          <Marker className="left-[84%] top-[20%]" color="bg-signal-500" />
        </div>

        {/* Lista de unidades */}
        <div className="divide-y divide-white/5">
          {unidades.map((u) => {
            const Icon = u.icon
            return (
              <div key={u.nombre} className="flex items-center gap-3 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5 text-brand-300" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-white">{u.nombre}</span>
                  <span className="block truncate text-xs text-slate-400">{u.estado}</span>
                </span>
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${u.activo ? 'bg-live-400' : 'bg-slate-600'}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Marker({
  className,
  color,
  pulse,
}: {
  className: string
  color: string
  pulse?: boolean
}) {
  return (
    <span className={`absolute flex h-3.5 w-3.5 items-center justify-center ${className}`}>
      {pulse && <span className={`absolute h-3.5 w-3.5 animate-ping2 rounded-full ${color} opacity-70`} />}
      <span className={`relative h-2.5 w-2.5 rounded-full ${color} ring-2 ring-ink-950`} />
    </span>
  )
}
