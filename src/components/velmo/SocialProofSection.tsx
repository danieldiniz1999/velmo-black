import { useState, useEffect } from "react";
import { Star, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

interface Transformation {
  id: number;
  name: string;
  age: string;
  location: string;
  weightLoss: string;
  timeframe: string;
  protocol: string;
  testimonial: string;
  beforeImg: string;
  afterImg: string;
  stars: number;
  verified: boolean;
}

const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    name: "Juliana Medeiros",
    age: "36 anos",
    location: "Curitiba, PR",
    weightLoss: "-16.4 kg",
    timeframe: "em 75 dias",
    protocol: "Protocolo Duo Morango (3 Meses)",
    testimonial: "Eu tentava dietas restritivas há anos e sempre desistia por causa da compulsão. Com o Drink de Morango e as cápsulas, meu apetite normalizou já na primeira semana e a barriga desinchou muito rápido sem fraqueza.",
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    stars: 5,
    verified: true,
  },
  {
    id: 2,
    name: "Renato Silveira",
    age: "42 anos",
    location: "Campinas, SP",
    weightLoss: "-13.8 kg",
    timeframe: "em 60 dias",
    protocol: "Velmo Black Cápsulas (60 caps)",
    testimonial: "Gordura abdominal que me incomodava há quase 10 anos foi embora. Tive muito mais disposição para o dia a dia e treino, com zero taquicardia ou tremor. O atendimento no WhatsApp foi essencial.",
    beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    stars: 5,
    verified: true,
  },
  {
    id: 3,
    name: "Carla Albuquerque",
    age: "31 anos",
    location: "Belo Horizonte, MG",
    weightLoss: "-11.2 kg",
    timeframe: "em 45 dias",
    protocol: "Protocolo Duo Morango Silvestre",
    testimonial: "Voltei a usar vestidos antigos que estavam guardados no armário há 3 anos! O sabor de Morango Silvestre é super gostoso e refrescante, tomo geladinho e fico sem vontade de comer doce a tarde toda.",
    beforeImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    stars: 5,
    verified: true,
  },
  {
    id: 4,
    name: "Patrícia Farias",
    age: "45 anos",
    location: "Florianópolis, SC",
    weightLoss: "-19.5 kg",
    timeframe: "em 90 dias",
    protocol: "Transformação Total (Duo 5 Meses)",
    testimonial: "Minha autoestima foi totalmente restaurada. Não sinto mais aquele peso e estufamento depois das refeições. Minha disposição física é outra e todos da minha família notaram a diferença.",
    beforeImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    stars: 5,
    verified: true,
  },
  {
    id: 5,
    name: "Lucas Guimarães",
    age: "28 anos",
    location: "Brasília, DF",
    weightLoss: "-9.8 kg",
    timeframe: "em 35 dias",
    protocol: "Velmo Black Drink Morango",
    testimonial: "Trabalho sentado o dia todo e comia por ansiedade. O drink me deu saciedade prolongada, regulou o intestino e desinchou a região da cintura logo nas primeiras semanas.",
    beforeImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    stars: 5,
    verified: true,
  },
  {
    id: 6,
    name: "Beatriz Rocha",
    age: "39 anos",
    location: "Rio de Janeiro, RJ",
    weightLoss: "-15.1 kg",
    timeframe: "em 70 dias",
    protocol: "Protocolo Duo Morango (3 Meses)",
    testimonial: "O melhor investimento que fiz na minha saúde. Perdi peso de forma limpa, sem dor de cabeça e com a pele firme. Indico para todas as minhas amigas!",
    beforeImg: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=80",
    stars: 5,
    verified: true,
  },
];

export function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto rotate carousel every 5 seconds when not interacting
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRANSFORMATIONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? TRANSFORMATIONS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TRANSFORMATIONS.length);
  };

  const item = TRANSFORMATIONS[currentIndex];

  return (
    <section id="depoimentos" className="relative py-12 sm:py-16 lg:py-24 bg-[#090b10] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[350px] sm:h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Resultados Comprovados
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Transformações Reais de{" "}
            <span className="strawberry-text-gradient">Quem Usou Velmo Black</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400 max-w-2xl mx-auto">
            Histórias autênticas de clientes que recuperaram a autoestima, desincharam e transformaram o corpo.
          </p>
        </div>

        {/* Dynamic Carousel Card */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="mt-8 sm:mt-12 relative max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-rose-500/40 bg-gradient-to-b from-[#140a10] via-[#0d090d] to-[#07080a] p-4 sm:p-8 shadow-[0_0_40px_rgba(255,30,86,0.2)] backdrop-blur-xl"
        >
          {/* Main Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Left Column: Photos (Before vs After) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full rounded-2xl bg-black/60 p-2.5 sm:p-3 border border-zinc-800 shadow-xl">
                
                {/* Photo Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {/* Before */}
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-zinc-700/60">
                    <img
                      src={item.beforeImg}
                      alt={`Antes - ${item.name}`}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-zinc-300 border border-zinc-700">
                      Antes
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-900 border-2 border-rose-500/80 shadow-[0_0_15px_rgba(255,30,86,0.3)]">
                    <img
                      src={item.afterImg}
                      alt={`Depois - ${item.name}`}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-gradient-to-r from-rose-500 to-red-600 text-[9px] font-black uppercase tracking-wider text-white shadow-md">
                      Depois
                    </div>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="mt-2.5 flex items-center justify-between px-1">
                  <span className="text-[10px] sm:text-[11px] font-bold text-zinc-400">
                    {item.timeframe}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/20 px-2.5 py-0.5 text-xs font-black text-rose-300 border border-rose-500/40">
                    {item.weightLoss}
                  </span>
                </div>

              </div>
            </div>

            {/* Right Column: Story & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-3 sm:space-y-4">
              
              {/* Stars & Verified */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="h-3 w-3" />
                  Resultado Verificado
                </span>
              </div>

              {/* Protocol Badge */}
              <div>
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-rose-400">
                  Protocolo: {item.protocol}
                </span>
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic bg-zinc-900/60 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-zinc-800">
                "{item.testimonial}"
              </blockquote>

              {/* User Identity */}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm sm:text-base font-black text-white">{item.name}</h4>
                  <p className="text-[11px] text-zinc-400">{item.age} • {item.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-500 font-medium">Uso contínuo</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_20px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.02] transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-white flex-shrink-0" />
                  <span>QUERO RESULTADOS COMO ESTES</span>
                </a>
              </div>

            </div>

          </div>

          {/* Carousel Navigation Arrows */}
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
            <button
              onClick={prevSlide}
              aria-label="Depoimento Anterior"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {TRANSFORMATIONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Ir para história ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_10px_rgba(255,30,86,0.5)]"
                      : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Próximo Depoimento"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Bottom Trust Line */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-zinc-400 text-center">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-rose-400" />
            <span>Mais de 14.800 clientes transformados</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" />
            <span>Resultados graduais e saudáveis</span>
          </div>
        </div>

      </div>
    </section>
  );
}
