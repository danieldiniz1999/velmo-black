import { CheckCircle2, Star, Zap, Shield, Sparkles, Flame } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-32 bg-[#07080a]">
      {/* Background Glows and Radials */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-teal-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                ✦ Bio-Tecnologia Black Edition Original
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Destrave seu metabolismo e{" "}
              <span className="tiffany-text-gradient underline decoration-cyan-400/40 underline-offset-8">
                elimine a gordura profunda
              </span>{" "}
              sem passar fome.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed">
              A combinação definitiva entre o puro extrato de <strong className="text-cyan-400 font-bold">Laranja Moro</strong>, <strong className="text-cyan-400 font-bold">Picolinato de Cromo</strong> e <strong className="text-cyan-400 font-bold">Triptofano</strong>. Queima acelerada 24h, zero compulsão alimentar por doces e desinchaço imediato.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-sm font-semibold text-zinc-200 pt-2">
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>Bloqueia a fome emocional e doces</span>
              </div>
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>Termogênico sem taquicardia</span>
              </div>
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>Efeito detox e desinchaço veloz</span>
              </div>
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span>100% natural, seguro e sem rebote</span>
              </div>
            </div>

            {/* CTAs & Conversion Area */}
            <div className="w-full pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 px-8 py-5 text-base sm:text-lg font-black text-black shadow-[0_0_35px_rgba(0,229,255,0.45)] transition-all duration-300 hover:shadow-[0_0_55px_rgba(0,229,255,0.75)] hover:scale-[1.03] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-6 w-6 fill-black flex-shrink-0" />
                  <span>QUERO MEU ATENDIMENTO VIP NO WHATSAPP</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-cyan-400" />
                  <span>Atendimento Humano e Sigiloso</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                  <span>Kits Exclusivos e Descontos do Dia</span>
                </div>
              </div>
            </div>

            {/* Trust and Social Proof Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80 w-full max-w-xl">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cyan-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeita"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cyan-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeito"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cyan-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeita"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cyan-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeito"
                />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-white">4.9/5.0</span>
                </div>
                <p className="text-xs text-zinc-400">
                  <strong className="text-white">+14.800 pessoas</strong> já transformaram seus corpos
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product 3D Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-teal-400/10 to-transparent rounded-3xl blur-2xl transform rotate-3" />

            {/* Luxury Showcase Card */}
            <div className="relative w-full max-w-md rounded-3xl border border-cyan-500/30 bg-[#0d1017]/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,229,255,0.25)]">
              
              {/* Top Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">
                  LINHA PREMIUM VELMO
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-2.5 py-1 text-[11px] font-bold text-cyan-300 border border-cyan-500/30">
                  <Flame className="h-3.5 w-3.5 text-cyan-400" />
                  Efeito Duo Ativo
                </span>
              </div>

              {/* Product Visual Mockup Container */}
              <div className="relative my-6 flex items-center justify-center py-6">
                
                {/* Visual Graphic Representation */}
                <div className="relative flex items-center justify-center gap-4">
                  
                  {/* Cápsulas Pote */}
                  <div className="relative w-36 sm:w-40 rounded-2xl bg-gradient-to-b from-zinc-900 via-[#0a0c10] to-black p-4 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,229,255,0.25)] flex flex-col items-center text-center">
                    <div className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-cyan-400 text-[10px] font-black text-black uppercase tracking-wider">
                      Cápsulas
                    </div>
                    <div className="h-20 w-20 my-2 rounded-full bg-gradient-to-tr from-cyan-500/20 to-teal-500/40 flex items-center justify-center border border-cyan-400/40">
                      <span className="text-2xl font-black text-white">60</span>
                      <span className="text-[10px] text-cyan-300 font-bold ml-0.5">caps</span>
                    </div>
                    <span className="font-extrabold text-sm text-white">VELMO BLACK</span>
                    <span className="text-[10px] font-semibold text-cyan-400">Laranja Moro + Cromo</span>
                    <div className="mt-3 w-full py-1 rounded bg-zinc-900 text-[10px] text-zinc-400 font-mono">
                      TERMOGÊNICO
                    </div>
                  </div>

                  {/* Drink Pote */}
                  <div className="relative w-36 sm:w-40 rounded-2xl bg-gradient-to-b from-zinc-900 via-[#0a0c10] to-black p-4 border border-teal-500/40 shadow-[0_0_30px_rgba(14,217,181,0.25)] flex flex-col items-center text-center">
                    <div className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-teal-400 text-[10px] font-black text-black uppercase tracking-wider">
                      Drink Solúvel
                    </div>
                    <div className="h-20 w-20 my-2 rounded-full bg-gradient-to-tr from-teal-500/20 to-cyan-500/40 flex items-center justify-center border border-teal-400/40">
                      <span className="text-2xl font-black text-white">150</span>
                      <span className="text-[10px] text-teal-300 font-bold ml-0.5">g</span>
                    </div>
                    <span className="font-extrabold text-sm text-white">VELMO DRINK</span>
                    <span className="text-[10px] font-semibold text-teal-300">Morango & Tangerina</span>
                    <div className="mt-3 w-full py-1 rounded bg-zinc-900 text-[10px] text-zinc-400 font-mono">
                      SACIEDADE & DETOX
                    </div>
                  </div>

                </div>

              </div>

              {/* Product Spec Highlights */}
              <div className="space-y-2.5 pt-2 border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <span className="text-zinc-400">Ação principal:</span>
                  <span className="font-semibold text-white">Queima visceral + Saciedade 24h</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <span className="text-zinc-400">Ativos nobres:</span>
                  <span className="font-semibold text-cyan-400">Laranja Moro, Triptofano, Cromo</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-300">
                  <span className="text-zinc-400">Disponibilidade:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Lote Exclusivo Liberado
                  </span>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="mt-5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-cyan-400 border border-cyan-500/30 py-3 text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-cyan-400 flex-shrink-0" />
                  <span>Consultar Lote no WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
