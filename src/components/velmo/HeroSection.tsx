import { CheckCircle2, Star, Zap, Shield, Sparkles, Flame } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-32 bg-[#07080a]">
      {/* Background Glows in Strawberry Red */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-rose-500/15 via-red-500/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-4 py-1.5 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-rose-300">
                🍓 Bio-Tecnologia Black Edition • Morango Silvestre
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Destrave seu metabolismo e{" "}
              <span className="strawberry-text-gradient underline decoration-rose-500/40 underline-offset-8">
                elimine a gordura profunda
              </span>{" "}
              sem passar fome.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed">
              A combinação definitiva entre o puro extrato de <strong className="text-rose-400 font-bold">Laranja Moro</strong>, <strong className="text-rose-400 font-bold">Picolinato de Cromo</strong> e o sabor irresistível de <strong className="text-rose-400 font-bold">Morango Silvestre</strong>. Queima acelerada 24h, zero compulsão alimentar por doces e desinchaço imediato.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-sm font-semibold text-zinc-200 pt-2">
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <span>Bloqueia a fome emocional e doces</span>
              </div>
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <span>Termogênico sem taquicardia</span>
              </div>
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <span>Efeito detox e desinchaço veloz</span>
              </div>
              <div className="flex items-center gap-2.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                <CheckCircle2 className="h-5 w-5 text-rose-400 flex-shrink-0" />
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-8 py-5 text-base sm:text-lg font-black text-white shadow-[0_0_35px_rgba(255,30,86,0.45)] btn-shimmer strawberry-glow-pulse transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-6 w-6 fill-white flex-shrink-0" />
                  <span>QUERO MEU ATENDIMENTO VIP NO WHATSAPP</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-rose-400" />
                  <span>Atendimento Humano e Sigiloso</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-rose-400" />
                  <span>Kits Exclusivos e Descontos do Dia</span>
                </div>
              </div>
            </div>

            {/* Trust and Social Proof Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/80 w-full max-w-xl">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeita"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeito"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeita"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
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
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-red-500/10 to-transparent rounded-3xl blur-2xl transform rotate-3" />

            {/* Luxury Showcase Card */}
            <div className="relative w-full max-w-md rounded-3xl border border-rose-500/30 bg-[#0d1017]/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(255,30,86,0.25)]">
              
              {/* Top Tag */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-extrabold uppercase tracking-widest text-rose-400">
                  LINHA PREMIUM VELMO
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-1 text-[11px] font-bold text-rose-300 border border-rose-500/30">
                  <Flame className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
                  Efeito Duo Ativo
                </span>
              </div>

              {/* Product Photo Showcase of the 2 Products */}
              <div className="relative my-6 flex items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#180a12] via-[#0d0f14] to-[#08090c] border border-rose-500/40 p-4 shadow-[0_0_35px_rgba(255,30,86,0.3)]">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center group">
                    <img
                      src="/images/velmo-duo-morango.png"
                      alt="Velmo Black Cápsulas e Velmo Drink Morango Silvestre"
                      className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback photographic composition if local image isn't yet placed
                        e.currentTarget.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80";
                      }}
                    />
                    
                    {/* Realistic Overlay Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                      <span className="rounded-full bg-rose-600/90 backdrop-blur-md px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-lg">
                        💊 Cápsulas (60 caps)
                      </span>
                      <span className="rounded-full bg-red-700/90 backdrop-blur-md px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-lg">
                        🍓 Drink Morango (150g)
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 rounded-xl bg-black/80 backdrop-blur-md px-3 py-1.5 border border-rose-500/50 text-[11px] font-extrabold text-rose-300 shadow-xl">
                      Combo Duo Oficial
                    </div>
                  </div>

                  {/* Caption underneath photo */}
                  <div className="mt-3 flex items-center justify-between text-xs px-1">
                    <span className="font-extrabold text-white">Protocolo Duo Black</span>
                    <span className="text-[11px] font-bold text-rose-400">Morango Silvestre + Laranja Moro</span>
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
                  <span className="font-semibold text-rose-400">Laranja Moro, Triptofano, Morango</span>
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
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-rose-400 border border-rose-500/30 py-3 text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-rose-400 flex-shrink-0" />
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
