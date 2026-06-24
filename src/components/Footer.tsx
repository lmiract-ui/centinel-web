import { MapPin } from 'lucide-react'
import { site, waLink } from '../config/site'
import { WhatsAppIcon } from './Icons'

export default function Footer() {
  const year = 2026 // actualizar al desplegar; evita drift de fecha en build

  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-app py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <img src={site.logo} alt="" className="h-8 w-8" />
              <span className="text-[15px] font-extrabold tracking-tight text-white">
                {site.brand}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{site.tagline}.</p>
            <p className="mt-4 flex w-fit items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4 shrink-0 text-brand-400" />
              {site.ciudad}, {site.pais}
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-fit items-center gap-2 rounded-xl bg-live-500 px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-live-400"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Hablar con un asesor
            </a>
          </div>

          <nav aria-label="Secciones">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Secciones
            </h3>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-brand-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#diagnostico"
                  className="text-sm font-medium text-signal-400 transition hover:text-signal-300"
                >
                  Solicitar diagnóstico
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-slate-500">
          © {year} {site.brand}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
