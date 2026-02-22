import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Activity, 
  Shield, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Briefcase, 
  AlertCircle,
  Clock,
  Lock,
  Smartphone,
  Mail, 
  Phone,
  AlertTriangle,
  Settings,
  ArrowDown,
  Map as MapIcon,
  ShieldCheck,
  Headset,
  Cpu,
  ClipboardList,
  Calendar,
  Globe,
  Layers,
  FileCheck
} from 'lucide-react';

// --- CONFIGURACIÓN ---
// Número mantenido: +5493518626405
// Mensaje actualizado: "Hola vengo de la Web, me gustaría hablar con un asesor"
const WHATSAPP_LINK = "https://wa.me/5493518626405?text=Hola%20vengo%20de%20la%20Web%2C%20me%20gustar%C3%ADa%20hablar%20con%20un%20asesor";

// --- COMPONENTES ---

// 1. NAVBAR
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Problemas Comunes", href: "#dolores" },
    { name: "Solución", href: "#solucion" },
    { name: "Modelo Económico", href: "#modelo" },
    { name: "Calculadora", href: "#roi" },
    { name: "Dashcam", href: "#dashcam" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (!targetId) return;
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#02255b]/95 backdrop-blur-md shadow-lg py-3 lg:py-4" : "bg-transparent py-4 lg:py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center w-full">
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-2 group cursor-pointer z-50 flex-shrink-0">
          <span className="text-xl lg:text-2xl font-black tracking-tighter text-white whitespace-nowrap">
            CENTINEL <span className="text-[#9fe43f]">FLOTAS</span>
          </span>
        </a>

        <div className="hidden lg:flex flex-1 justify-center items-center gap-8 px-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-bold text-gray-200 hover:text-[#9fe43f] transition-colors uppercase tracking-wide cursor-pointer whitespace-nowrap">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block flex-shrink-0">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#9fe43f] text-[#02255b] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-all shadow-lg hover:shadow-[#9fe43f]/20">
            HABLAR CON UN ASESOR
          </a>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#011a42] border-b border-white/10 absolute top-full left-0 w-full shadow-2xl overflow-hidden animate-slide-down">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-white font-bold text-lg hover:text-[#9fe43f] border-b border-white/5 pb-3 transition-colors">
                {link.name}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#9fe43f] text-[#02255b] w-full text-center py-4 rounded-xl font-black text-lg mt-4 shadow-lg flex items-center justify-center gap-2">
              HABLAR AHORA <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. SECCIÓN HERO
const Hero = () => {
  return (
    <section id="inicio" className="relative w-full pt-28 pb-16 lg:pt-48 lg:pb-32 px-4 sm:px-6 bg-[#02255b] overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02255b] via-[#02255b]/95 to-[#02255b]/40" />
      </div>

      <div className="max-w-7xl mx-auto z-10 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1.5 px-3 sm:px-4 rounded-lg bg-[#9fe43f]/10 border border-[#9fe43f]/30 text-[#9fe43f] text-[10px] sm:text-xs font-bold tracking-widest mb-4 sm:mb-6 uppercase">
            Rastreo y Control Satelital
          </span>
          
          <h1 className="mb-6 lg:mb-8 font-black text-white tracking-tight drop-shadow-2xl text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
            Gestioná tu flota con <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9fe43f] to-white">
               estándares de multinacional.
            </span>
          </h1>

          <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-8 lg:mb-10 max-w-xl leading-relaxed border-l-4 border-[#9fe43f] pl-4 sm:pl-6">
            No importa si son 2 o 500 vehículos: <strong>no tener el control cuesta plata.</strong><br className="mb-2 hidden sm:block"/>
            Gestioná y controlá toda tu flota satelitalmente desde una sola plataforma <span className="text-white font-bold underline decoration-[#9fe43f] decoration-2 underline-offset-4">sin pagar alquiler mensual</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#9fe43f] text-[#02255b] font-black py-4 px-8 sm:px-10 rounded-xl lg:rounded-lg text-lg sm:text-xl shadow-[0_0_25px_rgba(159,228,63,0.4)] hover:bg-white hover:scale-105 active:scale-95 transition-all text-center uppercase tracking-tight"
            >
              PEDIR PRUEBA DE 15 DÍAS
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block animate-fade-in-delayed">
            <div className="relative bg-[#011a42] rounded-2xl border border-white/10 p-2 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-[#02255b] rounded-xl overflow-hidden relative h-[400px]">
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur px-3 py-1 rounded text-xs text-white font-mono flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#9fe43f] rounded-full animate-pulse"></span> 
                        FLOTA ACTIVA: 100%
                    </div>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="absolute top-1/3 left-1/4 css-animate-float-1">
                        <div className="w-8 h-8 bg-[#9fe43f] rounded-full flex items-center justify-center shadow-[0_0_15px_#9fe43f]"><Truck className="w-4 h-4 text-[#02255b]" /></div>
                    </div>
                    <div className="absolute bottom-1/3 right-1/3 css-animate-float-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><Truck className="w-4 h-4 text-[#02255b]" /></div>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1a2c4e] p-6 rounded-xl border-l-4 border-[#9fe43f] shadow-xl max-w-xs">
                <div className="text-[#9fe43f] font-bold text-sm mb-1">ALERTA DETECTADA</div>
                <div className="text-white text-xs">Vehículo 04: Salida de zona no autorizada. (Córdoba Capital)</div>
            </div>
        </div>
      </div>
    </section>
  );
};

// 3. PUNTOS DE DOLOR
const PainPoints = () => {
  const pains = [
    { icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />, title: "Gestión por WhatsApp", desc: "Dependés de que el chofer te conteste el teléfono para saber dónde está o por qué demora." },
    { icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />, title: "Puntos ciegos", desc: "No sabés qué están haciendo ni por donde están los vehículos ahora." },
    { icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />, title: "Costos ocultos", desc: "Combustible, tiempos muertos, usos personales de la flota, paradas largas, rutas ineficientes, malos tratos al vehiculo." },
    { icon: <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />, title: "Reclamos sin defensa", desc: "Ante una queja de un cliente o una situación con costos legales / seguros, es tu palabra contra de ellos." },
    { icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />, title: "Alquileres eternos", desc: "Pagás mes a mes un servicio de rastreo (comodato) que nunca es tuyo. Un pasivo fijo que solo crece con la inflación." },
    { icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />, title: "Mantenimiento a ciegas", desc: "Te enterás que había que hacer un service cuando el vehículo ya se rompió en la calle por malos usos que no ves." }
  ];

  return (
    <section id="dolores" className="py-16 lg:py-24 px-4 sm:px-6 bg-[#011a42] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-6 text-white leading-tight">
            ¿Te pasa esto en tu día a día?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg">
            <span className="text-white font-semibold block sm:inline">Si te identificás con 2 o más puntos, necesitás profesionalizar la gestión.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {pains.map((pain, i) => (
                <div key={i} className="bg-[#02255b] p-6 lg:p-8 rounded-2xl border border-white/5 hover:border-red-400/30 transition-colors group flex flex-col">
                    <div className="bg-red-500/10 w-fit p-3 rounded-xl mb-4 lg:mb-6 group-hover:bg-red-500/20 transition-colors">
                        {pain.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg lg:text-xl mb-2 lg:mb-3">{pain.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{pain.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

// 4. SOLUCIÓN - BENEFICIOS
const Solution = () => {
    return (
        <section id="solucion" className="py-16 lg:py-24 px-4 sm:px-6 bg-[#02255b] relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="w-full">
                    <span className="text-[#9fe43f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 sm:mb-4 block">
                        La solucion no es solo un "GPS"
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                        Es un centro de control para tu flota.
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 lg:mb-8">
                        Plataforma y dispositivos GPS de primer nivel trabajando 24/7 para tu empresa.
                    </p>
                    
                    <ul className="space-y-4 lg:space-y-6">
                        {[
                            "Ves cada vehículo en tiempo real",
                            "Sabés qué pasó ayer y la semana pasada.",
                            "Detectás desvíos y paradas innecesarias al instante.",
                            "Alertas de velocidad, uso fuera de horario, ralenti, llegada a destino y más",
                            "Menos llamadas, menos discusiones y más datos",
                            "2 en 1: Rastreo Satelital + Video"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#9fe43f] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-200 text-sm sm:text-base lg:text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 lg:mt-8 text-xs sm:text-sm text-gray-400 italic mb-0">
                        Todo esto funciona con nuestra plataforma de rastreo y control satelital.
                    </p>
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-0 bg-[#9fe43f] blur-[100px] opacity-10"></div>
                    
                    <div className="relative bg-[#011a42] border border-white/10 rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full overflow-hidden aspect-[4/5] sm:aspect-video lg:aspect-square flex items-end">
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        >
                            <source src="https://res.cloudinary.com/deljv8cwp/video/upload/v1771703076/video_plataforma_rpnpal.mov" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#02255b]/95 via-[#02255b]/30 to-transparent pointer-events-none"></div>
                        <div className="absolute top-4 left-4 lg:top-6 lg:left-6 z-20">
                            <div className="bg-[#011a42]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg flex items-center gap-2 shadow-lg">
                                <span className="w-2 h-2 bg-[#9fe43f] rounded-full animate-pulse"></span>
                                <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider">MONITOREO EN VIVO</span>
                            </div>
                        </div>
                        <div className="relative z-20 w-full p-4 sm:p-6 lg:p-8 flex flex-col gap-2.5 lg:gap-3 items-end justify-end pointer-events-none overflow-hidden">
                            <div className="css-alert-1 bg-white/95 backdrop-blur-md border border-red-100 text-[#02255b] p-2.5 lg:p-3 rounded-xl shadow-[0_12px_24px_rgba(220,38,38,0.2)] w-full max-w-[190px] lg:max-w-[225px] pointer-events-auto">
                                <div className="flex items-center gap-1 lg:gap-1.5 font-black text-[9px] lg:text-[10px] mb-0.5 lg:mb-1 tracking-wide text-red-600 uppercase">
                                    <AlertTriangle className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                                    Exceso Velocidad
                                </div>
                                <p className="text-[9px] lg:text-[10px] text-gray-700 font-medium leading-tight">Móvil 12 superó 110km/h en Ruta 9.</p>
                            </div>
                            <div className="css-alert-2 bg-white/95 backdrop-blur-md border border-orange-100 text-[#02255b] p-2.5 lg:p-3 rounded-xl shadow-[0_12px_24px_rgba(249,115,22,0.2)] w-full max-w-[190px] lg:max-w-[225px] pointer-events-auto">
                                <div className="flex items-center gap-1 lg:gap-1.5 font-black text-[9px] lg:text-[10px] mb-0.5 lg:mb-1 tracking-wide text-orange-500 uppercase">
                                    <Clock className="w-3.5 h-3.5 lg:w-3.5 lg:h-3.5" />
                                    Fuera de Horario
                                </div>
                                <p className="text-[9px] lg:text-[10px] text-gray-700 font-medium leading-tight">Móvil 05 encendido a las 02:15 AM.</p>
                            </div>
                            <div className="css-alert-3 bg-white/95 backdrop-blur-md border border-emerald-100 text-[#02255b] p-2.5 lg:p-3 rounded-xl shadow-[0_12px_24px_rgba(16,185,129,0.2)] w-full max-w-[190px] lg:max-w-[225px] pointer-events-auto">
                                <div className="flex items-center gap-1 lg:gap-1.5 font-black text-[9px] lg:text-[10px] mb-0.5 lg:mb-1 tracking-wide text-emerald-600 uppercase">
                                    <CheckCircle className="w-3.5 h-3.5 lg:w-3.5 lg:h-3.5" />
                                    Llegada a Destino
                                </div>
                                <p className="text-[9px] lg:text-[10px] text-gray-700 font-medium leading-tight">Camión 14 llegó al C. de Distribución.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 5. MODELO DE NEGOCIO - ALQUILER VS COMPRA
const BusinessModel = () => {
    return (
        <section id="modelo" className="py-16 lg:py-24 px-4 sm:px-6 bg-[#00102b] relative overflow-hidden">
             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <span className="text-[#9fe43f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 block">
                    ALQUILER VS COMPRA
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6 leading-tight">
                    Sé dueño del sistema, <br className="hidden sm:block"/>dejá de alquilar.
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                    En Argentina tener un servicio de rastreo satelital con mensualidad (alquiler eterno) es un pasivo que crece con la inflación. 
                    <br /><br />
                    ✅ <strong>Nuestra propuesta:</strong> Comprás el hardware GPS que incluye la plataforma para manejar y ver todo. Eliminás el alquiler para siempre. El sistema se paga solo literalmente, con lo que ahorras de la mensualidad y con lo que ahorras en la calle.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-10 border-t border-white/10 text-left">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#9fe43f]/10 p-2 rounded-lg border border-[#9fe43f]/20">
                            <ShieldCheck className="w-5 h-5 text-[#9fe43f]" />
                        </div>
                        <span className="text-white font-bold text-sm lg:text-base">Garantía</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-[#9fe43f]/10 p-2 rounded-lg border border-[#9fe43f]/20">
                            <Headset className="w-5 h-5 text-[#9fe43f]" />
                        </div>
                        <span className="text-white font-bold text-sm lg:text-base">Post venta</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-[#9fe43f]/10 p-2 rounded-lg border border-[#9fe43f]/20">
                            <Cpu className="w-5 h-5 text-[#9fe43f]" />
                        </div>
                        <span className="text-white font-bold text-sm lg:text-base">Hardware de larga duración (+8 años)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-[#9fe43f]/10 p-2 rounded-lg border border-[#9fe43f]/20">
                            <ClipboardList className="w-5 h-5 text-[#9fe43f]" />
                        </div>
                        <span className="text-white font-bold text-sm lg:text-base">Contrato</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 6. CALCULADORA ROI
const ROICalculator = () => {
    const [vehicles, setVehicles] = useState(10);
    const [liters, setLiters] = useState(200);
    const [price, setPrice] = useState(1800);
    const [deviation, setDeviation] = useState(10);
    const [correctiveCost, setCorrectiveCost] = useState(40000);

    const fuelLoss = vehicles * liters * price * (deviation / 100);
    const maintenanceLoss = vehicles * correctiveCost;

    const monthlyLoss = fuelLoss + maintenanceLoss;
    const yearlyLoss = monthlyLoss * 12;

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS', maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <section id="roi" className="py-12 lg:py-16 px-4 sm:px-6 bg-[#02255b] relative overflow-hidden scroll-mt-20">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-8 lg:mb-10">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 lg:mb-4 border border-red-500/30">
                        <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Pérdida Invisible
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 lg:mb-4 leading-tight">
                        Tu flota puede estar perdiendo <br className="hidden md:block"/>dinero sin que lo veas.
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-medium">
                        Calculalo en 30 segundos.
                    </p>
                </div>

                <div className="bg-[#011a42] border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                        <div className="lg:col-span-7 w-full">
                            <div className="space-y-6 lg:space-y-8 mt-2">
                                <div>
                                    <label className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-300 mb-3">
                                        <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-[#9fe43f]"/> Vehículos</span>
                                        <span className="text-[#9fe43f] text-sm sm:text-base">{vehicles}</span>
                                    </label>
                                    <input 
                                        type="range" min="1" max="100" value={vehicles} onChange={(e) => setVehicles(Number(e.target.value))}
                                        className="w-full h-2 bg-[#02255b] rounded-lg appearance-none cursor-pointer accent-[#9fe43f]"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-300 mb-3">
                                        <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-[#9fe43f]"/> Litros / vehículo (Mensual)</span>
                                        <span className="text-[#9fe43f] text-sm sm:text-base">{liters} L</span>
                                    </label>
                                    <input 
                                        type="range" min="50" max="2000" step="50" value={liters} onChange={(e) => setLiters(Number(e.target.value))}
                                        className="w-full h-2 bg-[#02255b] rounded-lg appearance-none cursor-pointer accent-[#9fe43f]"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-300 mb-3">
                                        <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-[#9fe43f]"/> Precio del litro ($ ARS)</span>
                                        <span className="text-[#9fe43f] text-sm sm:text-base">${price}</span>
                                    </label>
                                    <input 
                                        type="range" min="500" max="2000" step="50" value={price} onChange={(e) => setPrice(Number(e.target.value))}
                                        className="w-full h-2 bg-[#02255b] rounded-lg appearance-none cursor-pointer accent-[#9fe43f]"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-300 mb-3">
                                        <span className="flex items-center gap-2 truncate"><Activity className="w-4 h-4 text-[#9fe43f] flex-shrink-0"/> % Desvío combustible (ralentí, robos, etc)</span>
                                        <span className="text-[#9fe43f] text-sm sm:text-base ml-2">{deviation}%</span>
                                    </label>
                                    <input 
                                        type="range" min="1" max="20" value={deviation} onChange={(e) => setDeviation(Number(e.target.value))}
                                        className="w-full h-2 bg-[#02255b] rounded-lg appearance-none cursor-pointer accent-[#9fe43f]"
                                    />
                                </div>
                                <div className="pt-2">
                                    <label className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-300 mb-3">
                                        <span className="flex items-center gap-2 truncate"><Settings className="w-4 h-4 text-[#9fe43f] flex-shrink-0"/> Costo correctivo mensual por mal uso (estimado)</span>
                                        <span className="text-[#9fe43f] text-sm sm:text-base ml-2">{formatCurrency(correctiveCost)}</span>
                                    </label>
                                    <input 
                                        type="range" min="0" max="200000" step="5000" value={correctiveCost} onChange={(e) => setCorrectiveCost(Number(e.target.value))}
                                        className="w-full h-2 bg-[#02255b] rounded-lg appearance-none cursor-pointer accent-[#9fe43f]"
                                    />
                                    <p className="text-[10px] sm:text-xs text-gray-500 mt-2 leading-tight">
                                        Este valor representa gastos por roturas evitables, desgastes prematuros o accidentes leves por conducción descuidada por vehículo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex flex-col gap-4 w-full">
                            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 sm:p-6 text-center relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>
                                
                                <p className="text-red-400 text-[7px] sm:text-[8px] font-black uppercase tracking-widest mb-3 animate-pulse">
                                    Simulación conservadora (podés ajustar valores)
                                </p>

                                <h3 className="text-red-400 font-bold mb-1 sm:mb-2 text-sm">Podrías estar perdiendo</h3>
                                <div className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-1 tracking-tighter">
                                    {formatCurrency(monthlyLoss)}
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-400 mb-1">por mes.</div>
                                
                                <div className="mt-3 pt-3 border-t border-red-500/20">
                                    <p className="text-red-200 text-[10px] sm:text-xs">
                                        Equivale a <strong className="text-white text-xs sm:text-sm">{formatCurrency(yearlyLoss)}</strong> al año.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#02255b] border border-white/5 rounded-2xl p-5 sm:p-6">
                                <h4 className="text-white font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm">
                                    <Shield className="w-4 h-4 sm:w-4 text-[#9fe43f]" />
                                    Cómo lo evitamos:
                                </h4>
                                <ul className="space-y-2 sm:space-y-2.5 mb-5">
                                    {[
                                        "Frenás desvíos y consumo innecesario",
                                        "Eliminás kilómetros improductivos",
                                        "Controlas uso, consumos o robos de combustible",
                                        "Detectás ineficiencias antes de que cuesten dinero",
                                        "Convertís datos en decisiones concretas"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-300">
                                            <CheckCircle className="w-3.5 h-3.5 text-[#9fe43f] flex-shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-[#9fe43f]/10 border border-[#9fe43f]/30 rounded-xl p-3 mb-4">
                                    <p className="text-[#9fe43f] text-[10px] sm:text-xs font-bold text-center leading-tight">
                                        Si detectás solo el 50% de esta pérdida, el sistema se paga solo.
                                    </p>
                                </div>
                                <a 
                                    href={WHATSAPP_LINK} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block w-full bg-[#9fe43f] text-[#02255b] text-center font-black py-3 rounded-xl hover:bg-white transition-colors shadow-lg text-xs sm:text-sm"
                                >
                                    DEJAR DE PERDER DINERO
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/10">
                        <h5 className="text-gray-400 text-[9px] sm:text-[10px] font-bold mb-2 uppercase tracking-wider">Fuentes y Referencias del Simulador:</h5>
                        <div className="text-[8px] sm:text-[9px] text-gray-500 space-y-1.5 leading-relaxed">
                            <p>Las estimaciones de ahorro usadas en este simulador se basan en informes y estudios del sector de telemetría y gestión de flotas:</p>
                            <ul className="list-disc pl-3 sm:pl-4 space-y-0.5">
                                <li><strong className="text-gray-400">Geotab – Fleet Profitability & ROI White Paper:</strong> análisis de cómo la telemetría reduce costos operativos y de combustible. <a href="https://www.geotab.com/white-paper/fleet-profitability-coi-roi/" target="_blank" rel="noopener noreferrer" className="text-[#9fe43f]/70 hover:text-[#9fe43f] underline decoration-dotted">Ver reporte</a></li>
                                <li><strong className="text-gray-400">Geotab – Fleet Fuel Management Solutions:</strong> datos sobre ahorro en consumo y uso eficiente. <a href="https://www.geotab.com/fleet-management-solutions/fleet-fuel-management/" target="_blank" rel="noopener noreferrer" className="text-[#9fe43f]/70 hover:text-[#9fe43f] underline decoration-dotted">Ver reporte</a></li>
                                <li><strong className="text-gray-400">Geotab – Greening the Fleet Survey:</strong> métricas reales de telemetría aplicadas a consumo, idling y kms recorridos. <a href="https://www.geotab.com/CMS-GeneralFiles-production/NA/ebooks/Geotab_Greening-the-Fleet-Survey_EN_AODA.pdf" target="_blank" rel="noopener noreferrer" className="text-[#9fe43f]/70 hover:text-[#9fe43f] underline decoration-dotted">Ver reporte</a></li>
                                <li><strong className="text-gray-400">Verizon Connect – Fleet Cost Savings Strategies:</strong> reporte con datos de ahorro en combustible, mantenimiento y siniestros. <a href="https://www.verizonconnect.com/resources/article/fleet-management-cost-savings-strategies/" target="_blank" rel="noopener noreferrer" className="text-[#9fe43f]/70 hover:text-[#9fe43f] underline decoration-dotted">Ver reporte</a></li>
                                <li><strong className="text-gray-400">U.S. Department of Energy – Telematics Federal Fleets Guide:</strong> guía sobre eficiencia y reducción de consumo con sistemas telemáticos. <a href="https://www.energy.gov/femp/telematics-federal-fleets-guide-efficient-fleet-management" target="_blank" rel="noopener noreferrer" className="text-[#9fe43f]/70 hover:text-[#9fe43f] underline decoration-dotted">Ver reporte</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 7. DASHCAMS - EVIDENCIA
const Dashcams = () => {
    const DashcamVisual = () => (
        <div className="relative z-10 bg-gradient-to-br from-[#02255b] to-[#00102b] rounded-3xl p-3 sm:p-4 border border-white/10 shadow-2xl w-full">
            <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-20">
                <span className="bg-[#9fe43f] text-[#02255b] text-[8px] lg:text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    RECOMENDADO
                </span>
                <h3 className="text-white font-black text-lg lg:text-2xl mt-1 lg:mt-2 tracking-tight">V7 PRO</h3>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-3 lg:mb-4 bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10 pointer-events-none"></div>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                >
                    <source src="https://res.cloudinary.com/deljv8cwp/video/upload/v1771690224/dash_ejemplo_jxi2aw.mov" />
                </video>
                <div className="absolute bottom-3 right-3 lg:bottom-6 lg:right-6 z-20 flex flex-col items-end gap-1.5 lg:gap-2 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 px-2 lg:px-3 py-1 lg:py-1.5 rounded-lg flex items-center gap-1.5 lg:gap-2">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-[8px] lg:text-[10px] font-bold">REC</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 px-2 lg:px-3 py-1 lg:py-1.5 rounded-lg text-white text-[8px] lg:text-[10px] font-mono">
                        1080P FHD
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 lg:gap-2">
                <div className="bg-[#011a42] rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-white/5">
                    <Video className="w-4 h-4 lg:w-5 lg:h-5 text-[#9fe43f] mx-auto mb-1" />
                    <span className="text-[8px] lg:text-[10px] text-gray-400 block truncate">Eventos</span>
                </div>
                <div className="bg-[#011a42] rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-white/5">
                    <MapIcon className="w-4 h-4 lg:w-5 lg:h-5 text-[#9fe43f] mx-auto mb-1" />
                    <span className="text-[8px] lg:text-[10px] text-gray-400 block truncate">GPS Int.</span>
                </div>
                <div className="bg-[#011a42] rounded-lg lg:rounded-xl p-2 lg:p-3 text-center border border-white/5">
                    <Smartphone className="w-4 h-4 lg:w-5 lg:h-5 text-[#9fe43f] mx-auto mb-1" />
                    <span className="text-[8px] lg:text-[10px] text-gray-400 block truncate">App</span>
                </div>
            </div>
        </div>
    );

    return (
        <section id="dashcam" className="py-16 lg:py-24 px-4 sm:px-6 bg-[#011a42] relative border-y border-white/5 scroll-mt-20 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0 lg:gap-x-16 items-center">
                
                <div className="w-full order-1 lg:col-start-1 lg:row-start-1 lg:self-end mb-2 lg:mb-6">
                    <div className="inline-flex items-center gap-2 bg-[#9fe43f]/10 text-[#9fe43f] px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-[#9fe43f]/30">
                        <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Dashcams con video y rastreo satelital
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                        Cuando los datos no alcanzan, <br className="hidden sm:block"/>necesitás evidencia.
                    </h2>
                </div>

                <div className="w-full order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative">
                    <div className="absolute inset-0 bg-[#9fe43f] blur-[60px] opacity-10 rounded-full"></div>
                    <DashcamVisual />
                </div>

                <div className="w-full order-3 lg:col-start-1 lg:row-start-2 lg:self-start lg:mt-4">
                    <ul className="space-y-4 mb-8">
                        {[
                            "Respaldo visual ante cualquier situación",
                            "Reducís fraudes y conflictos",
                            "Disuadis conductas riesgosas",
                            "Doble lente: ruta y cabina (opcional)",
                            "2 en 1: Rastreo Satelital + Video"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-gray-300 text-sm lg:text-base items-center">
                                <CheckCircle className="w-5 h-5 text-[#9fe43f] flex-shrink-0" /> 
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                         <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-400 hover:text-white underline decoration-dotted underline-offset-4 block text-center lg:text-left">
                            Consultar precio y stock de equipo →
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

// 8. PASOS Y PRUEBA
const StepsAndTrial = () => {
    return (
        <section id="prueba" className="py-16 lg:py-24 px-4 sm:px-6 bg-[#02255b] scroll-mt-20">
            <div className="max-w-6xl mx-auto mb-16 lg:mb-20">
                <div className="text-center mb-12 lg:mb-16">
                    <span className="text-[#9fe43f] font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 block">
                        TRANSICIÓN SIN DOLORES DE CABEZA
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                        Implementación simple y <br className="hidden md:block"/>sin frenar tu operación.
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                        Sabemos que cambiar de sistema o instalar equipos da pereza. Por eso diseñamos un proceso rápido y prolijo para que empieces a ver resultados sin fricciones.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 text-center relative">
                     <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    {[
                        { title: "Instalación", desc: "Se instalan los dispositivos. Fácil y Rápido." },
                        { title: "Configuración", desc: "Definimos reglas y alertas a tu medida." },
                        { title: "Control Total", desc: "Vos ves todo desde la App o Web." }
                    ].map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#011a42] border-4 border-[#9fe43f] rounded-full flex items-center justify-center text-white font-black text-xl lg:text-2xl mb-4 lg:mb-6 shadow-lg">
                                {i + 1}
                            </div>
                            <h4 className="text-white font-bold text-lg lg:text-xl mb-1 lg:mb-2">{step.title}</h4>
                            <p className="text-gray-400 text-xs sm:text-sm max-w-[200px] mx-auto">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#011a42] to-[#00102b] rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 text-center relative overflow-hidden group hover:border-[#9fe43f]/30 transition-colors w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9fe43f] to-transparent"></div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 lg:mb-6 leading-tight">
                    Probalo con datos reales.
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
                    No queremos que nos creas, queremos que lo pruebes en tu flota. Te ofrecemos <span className="text-[#9fe43f] font-bold">15 DÍAS DE PRUEBA GRATUITA</span> sin riesgo ni compromiso de compra.
                </p>
                <div className="flex justify-center w-full">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto bg-[#9fe43f] text-[#02255b] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-sm sm:text-lg hover:bg-white transition-all shadow-xl hover:scale-105 active:scale-95">
                        SOLICITAR PRUEBA EN MI FLOTA
                    </a>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-4 sm:mt-6 uppercase tracking-wider">Sin letra chica • Sin compromiso de compra</p>
            </div>
        </section>
    );
};

// 9. FOOTER Y CTA FINAL
const Footer = () => {
  return (
    <footer className="bg-[#000d21] border-t border-white/10 pt-16 lg:pt-20 pb-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6 leading-tight">
          No te vamos a vender nada por la web.
        </h2>
        <p className="text-gray-400 mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg px-2">
          Queremos entender tu operación, cuántos vehículos tenés y mostrarte si nuestro sistema realmente te sirve.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 sm:gap-3 text-[#9fe43f] font-bold text-sm sm:text-lg hover:text-white transition-colors border-b-2 border-[#9fe43f] pb-1">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5"/> Hablar con un asesor comercial
        </a>

        {/* BLOQUE "NOSOTROS" */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="group flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#9fe43f]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#9fe43f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5 text-[#9fe43f]" />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-[0.15em] text-center">Desde 2022</span>
            </div>

            <div className="group flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#9fe43f]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#9fe43f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5 text-[#9fe43f]" />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-[0.15em] text-center">Partners globales</span>
            </div>

            <div className="group flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#9fe43f]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#9fe43f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5 text-[#9fe43f]" />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-[0.15em] text-center leading-tight">Implementación por etapas</span>
            </div>

            <div className="group flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[#9fe43f]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#9fe43f]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileCheck className="w-5 h-5 text-[#9fe43f]" />
              </div>
              <span className="text-[10px] sm:text-xs text-gray-300 font-bold uppercase tracking-[0.15em] text-center">Soporte y contrato</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-8 lg:pt-12 border-t border-white/5 text-xs sm:text-sm">
        <div className="col-span-1 sm:col-span-2">
          <span className="text-lg lg:text-xl font-black tracking-tighter text-white block mb-3 lg:mb-4">
            CENTINEL <span className="text-[#9fe43f]">FLOTAS</span>
          </span>
          <p className="text-gray-500 max-w-sm leading-relaxed text-xs sm:text-sm">
            Software desarrollado en conjunto con partners tecnológicos globales. 
            Soluciones estandarizadas y a medida para flotas desde 2 unidades.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 lg:mb-4 text-sm sm:text-base">Contacto</h4>
          <ul className="space-y-2 lg:space-y-3 text-gray-500">
            <li className="flex items-center gap-2"><MapIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4"/> Juan Antonio Argarañaz 1715, Córdoba</li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4"/> 
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-dotted underline-offset-4">3518626405</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4"/> 
              <a href="mailto:contacto@centinelflotas.com" className="hover:text-white transition-colors">contacto@centinelflotas.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 lg:mb-4 text-sm sm:text-base">Servicios</h4>
          <ul className="space-y-2 lg:space-y-3 text-gray-500">
            <li>Rastreo Satelital</li>
            <li>Dashcams / Video</li>
            <li>Telemetría Avanzada</li>
            <li>Desarrollos a medida</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 lg:pt-8 mt-8 lg:mt-12 border-t border-white/5 text-center text-[10px] sm:text-xs text-gray-600">
        © {new Date().getFullYear()} Centinel Solutions. Todos los derechos reservados.
      </div>
    </footer>
  );
};

// --- APP PRINCIPAL ---
export default function App() {
  return (
    <div className="min-h-screen bg-[#02255b] font-sans text-white selection:bg-[#9fe43f] selection:text-[#02255b] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; overflow-x: hidden; }
        html { scroll-behavior: smooth; overflow-x: hidden; }
        input[type=range]::-webkit-slider-thumb { height: 24px; width: 24px; border-radius: 50%; cursor: pointer; margin-top: -8px; background: #9fe43f; }
        input[type=range]::-moz-range-thumb { height: 24px; width: 24px; border-radius: 50%; cursor: pointer; background: #9fe43f; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in-delayed { animation: fadeInUp 0.8s ease-out 0.3s forwards; opacity: 0; }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-down { animation: slideDown 0.3s ease-out forwards; }
        @keyframes slideInRight { 
            0% { opacity: 0; transform: translateX(50px); } 
            60% { transform: translateX(-10px); }
            100% { opacity: 1; transform: translateX(0); } 
        }
        .css-alert-1 { animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards; opacity: 0; }
        .css-alert-2 { animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 2.8s forwards; opacity: 0; }
        .css-alert-3 { animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 4.8s forwards; opacity: 0; }
        @keyframes float1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, -10px); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-30px, 20px); } }
        .css-animate-float-1 { animation: float1 5s ease-in-out infinite; }
        .css-animate-float-2 { animation: float2 7s ease-in-out infinite; }
      `}} />
      
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <BusinessModel />
      <ROICalculator />
      <Dashcams />
      <StepsAndTrial />
      <Footer />
      
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center border-[3px] border-[#02255b] hover:scale-110 transition-transform duration-300 animate-fade-in-delayed"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}