import { useEffect } from 'react'
import { site } from '../config/site'
import Hero from '../components/sections/Hero'
import QuoteBand from '../components/sections/QuoteBand'
import Soluciones from '../components/sections/Soluciones'
import Hardware from '../components/sections/Hardware'
import Plataformas from '../components/sections/Plataformas'
import Dashcams from '../components/sections/Dashcams'
import Proceso from '../components/sections/Proceso'
import Comparativa from '../components/sections/Comparativa'
import Casos from '../components/sections/Casos'
import Diagnostico from '../components/sections/Diagnostico'

export default function Home() {
  useEffect(() => {
    document.title = `${site.brand} — ${site.tagline}`
  }, [])

  return (
    <>
      <Hero />
      <QuoteBand>
        Rastreo es saber dónde está.{' '}
        <span className="text-signal-400">Gestión es saber qué hacer con esa información.</span>
      </QuoteBand>
      <Soluciones />
      <Hardware />
      <Plataformas />
      <Dashcams />
      <Proceso />
      <Comparativa />
      <Casos />
      <QuoteBand>
        No instalamos GPS.{' '}
        <span className="text-signal-400">Diseñamos sistemas de control vehicular.</span>
      </QuoteBand>
      <Diagnostico />
    </>
  )
}
