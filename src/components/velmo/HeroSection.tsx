import { CheckCircle2, Star, Zap, Shield, Sparkles, Flame } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-28 bg-[#07080a]">
      {/* Background Glows in Strawberry Red */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-b from-rose-500/15 via-red-500/5 to-transparent blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-rose-600/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-rose-300">
                🍓 Bio-Tecnologia Black Edition • Morango Silvestre
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight text-white leading-[1.2] sm:leading-[1.15]">
              Destrave seu metabolismo e{" "}
              <span className="strawberry-text-gradient underline decoration-rose-500/40 underline-offset-4 sm:underline-offset-8">
                elimine a gordura profunda
              </span>{" "}
              sem passar fome.
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-normal max-w-2xl leading-relaxed">
              A combinação definitiva entre o puro extrato de <strong className="text-rose-400 font-bold">Laranja Moro</strong>, <strong className="text-rose-400 font-bold">Picolinato de Cromo</strong> e o sabor irresistível de <strong className="text-rose-400 font-bold">Morango Silvestre</strong>. Queima acelerada 24h, zero compulsão alimentar e desinchaço imediato.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 w-full max-w-xl text-xs sm:text-sm font-semibold text-zinc-200 pt-1">
              <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2 sm:p-2.5 text-left">
                <CheckCircle2 className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-rose-400 flex-shrink-0" />
                <span>Bloqueia a fome emocional e doces</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2 sm:p-2.5 text-left">
                <CheckCircle2 className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-rose-400 flex-shrink-0" />
                <span>Termogênico sem taquicardia</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2 sm:p-2.5 text-left">
                <CheckCircle2 className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-rose-400 flex-shrink-0" />
                <span>Efeito detox e desinchaço veloz</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2 sm:p-2.5 text-left">
                <CheckCircle2 className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-rose-400 flex-shrink-0" />
                <span>100% natural, seguro e sem rebote</span>
              </div>
            </div>

            {/* CTAs & Conversion Area */}
            <div className="w-full pt-2 sm:pt-4 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-base font-black text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer strawberry-glow-pulse transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5 fill-white flex-shrink-0" />
                  <span className="text-center">QUERO MEU ATENDIMENTO VIP NO WHATSAPP</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs text-zinc-400 pt-0.5">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-rose-400" />
                  <span>Atendimento Humano e Sigiloso</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-rose-400" />
                  <span>Kits Exclusivos e Descontos</span>
                </div>
              </div>
            </div>

            {/* Trust and Social Proof Bar */}
            <div className="flex items-center gap-3 sm:gap-4 pt-3 border-t border-zinc-800/80 w-full max-w-xl justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeita"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeito"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeita"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-rose-500/50 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Cliente satisfeito"
                />
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                  ))}
                  <span className="ml-1 text-[11px] sm:text-xs font-bold text-white">4.9/5.0</span>
                </div>
                <p className="text-[11px] sm:text-xs text-zinc-400">
                  <strong className="text-white">+14.800 pessoas</strong> já transformaram seus corpos
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product 3D Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">
            
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-red-500/10 to-transparent rounded-3xl blur-2xl transform rotate-3" />

            {/* Luxury Showcase Card */}
            <div className="relative w-full max-w-md rounded-3xl border border-rose-500/30 bg-[#0d1017]/90 p-4 sm:p-7 backdrop-blur-xl shadow-[0_0_35px_rgba(255,30,86,0.2)]">
              
              {/* Top Tag */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-rose-400">
                  LINHA PREMIUM VELMO
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-rose-300 border border-rose-500/30">
                  <Flame className="h-3 w-3 text-rose-400 animate-pulse" />
                  Efeito Duo Ativo
                </span>
              </div>

              {/* Product Real Photo Duo Showcase */}
              <div className="relative my-4 flex items-center justify-center">
                <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#180a12] via-[#0d0f14] to-[#08090c] border border-rose-500/40 p-3 sm:p-4 shadow-[0_0_30px_rgba(255,30,86,0.25)]">
                  
                  {/* Both Real Products Side-by-Side */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center justify-center py-2">
                    
                    {/* Real Cápsulas Image Card */}
                    <div className="relative flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-cyan-500/30 shadow-lg animate-float">
                      <div className="absolute -top-2 px-2 py-0.5 rounded-full bg-cyan-400 text-black text-[9px] font-black uppercase tracking-wider shadow-md">
                        60 Cápsulas
                      </div>
                      <div className="h-32 sm:h-44 w-full flex items-center justify-center overflow-hidden my-1">
                        <img
                          src="/images/velmo-capsulas.png"
                          alt="Velmo Black 60 Cápsulas"
                          className="h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,229,255,0.25)]"
                        />
                      </div>
                      <span className="font-extrabold text-xs text-white">VELMO BLACK</span>
                      <span className="text-[9px] sm:text-[10px] text-cyan-300 font-semibold">Termogênico Puro</span>
                    </div>

                    {/* Real Drink Morango Image Card */}
                    <div className="relative flex flex-col items-center text-center p-2 rounded-xl bg-black/60 border border-rose-500/40 shadow-lg animate-float-delayed">
                      <div className="absolute -top-2 px-2 py-0.5 rounded-full bg-rose-500 text-white text-[9px] font-black uppercase tracking-wider shadow-md">
                        🍓 Morango 150g
                      </div>
                      <div className="h-32 sm:h-44 w-full flex items-center justify-center overflow-hidden my-1">
                        <img
                          src="/images/velmo-drink-morango.png"
                          alt="Velmo Black Drink Sabor Morango"
                          className="h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(255,30,86,0.3)]"
                        />
                      </div>
                      <span className="font-extrabold text-xs text-white">VELMO DRINK</span>
                      <span className="text-[9px] sm:text-[10px] text-rose-300 font-semibold">Saciedade & Drenagem</span>
                    </div>

                  </div>

                  {/* Caption underneath */}
                  <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] sm:text-xs px-1">
                    <span className="font-extrabold text-white">Protocolo Duo Black Oficial</span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-rose-400">Cápsulas + Drink Morango</span>
                  </div>

                </div>
              </div>

              {/* Product Spec Highlights */}
              <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-zinc-800 text-[11px] sm:text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Ação principal:</span>
                  <span className="font-semibold text-white">Queima visceral + Saciedade 24h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Ativos nobres:</span>
                  <span className="font-semibold text-rose-400">Laranja Moro, Triptofano, Morango</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Disponibilidade:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Lote Exclusivo Liberado
                  </span>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="mt-3.5 sm:mt-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-rose-400 border border-rose-500/30 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-rose-400 flex-shrink-0" />
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
