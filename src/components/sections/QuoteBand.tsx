/** Banda de frase fuerte — separa secciones y refuerza el posicionamiento. */
export default function QuoteBand({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-y border-white/5 bg-ink-900/50">
      <div className="container-app py-12 sm:py-14">
        <p className="mx-auto max-w-3xl text-balance text-center text-xl font-bold leading-snug text-white sm:text-2xl">
          {children}
        </p>
      </div>
    </section>
  )
}
