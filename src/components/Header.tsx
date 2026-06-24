import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../config/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Bloquea el scroll del body cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <div className="container-app flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.brand} — inicio`}>
          <img src={site.logo} alt="" className="h-8 w-8" />
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-tight text-white">
              {site.brandShort}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-300/80">
              Flotas
            </span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#diagnostico"
          className="hidden rounded-xl bg-signal-500 px-4 py-2.5 text-sm font-bold text-ink-950 transition hover:bg-signal-400 active:scale-[0.98] lg:inline-flex"
        >
          Solicitar diagnóstico
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="border-t border-white/5 bg-ink-950/95 backdrop-blur-md lg:hidden">
          <div className="container-app flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#diagnostico"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-signal-500 px-4 py-3 text-center text-base font-bold text-ink-950"
            >
              Solicitar diagnóstico
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
