import { useState, useEffect } from "react";
import { Star, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Flame, Scale } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

interface Transformation {
  id: number;
  name: string;
  age: string;
  location: string;
  weightLoss: string;
  timeframe: string;
  waistReduction: string;
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
    waistReduction: "-14cm de cintura",
    protocol: "Protocolo Duo Morango (3 Meses)",
    testimonial: "Eu sofria com compulsão por doces e gordura acumulada na barriga após a gravidez. Quando iniciei o Protocolo Duo com o Drink de Morango, o inchaço desapareceu em duas semanas e meu corpo desinflamou de verdade!",
    beforeImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80",
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
    waistReduction: "-11cm de abdômen",
    protocol: "Velmo Black Cápsulas (60 caps)",
    testimonial: "Estava com aquela barriga de chopp estufada e metabolismo travado depois dos 40. O Velmo Black destravou minha queima de gordura sem dar coração acelerado. Hoje me sinto 10 anos mais jovem.",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80",
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
    waistReduction: "-9cm de cintura",
    protocol: "Protocolo Duo Morango Silvestre",
    testimonial: "Minhas roupas 44 estavam apertando. Em 45 dias com o drink sabor morango e as cápsulas, voltei a vestir 38 com folga! O sabor é maravilhoso e tira a fome por completo.",
    beforeImg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop&q=80",
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
    waistReduction: "-18cm de medidas",
    protocol: "Transformação Total (5 Meses)",
    testimonial: "Estava acima do peso há mais de 8 anos e já tinha tentado de tudo sem sucesso. A reeducação com o Velmo Black me fez secar 19kg sem efeito sanfona. Minha autoestima foi restaurada!",
    beforeImg: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80",
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
    waistReduction: "-8cm de cintura",
    protocol: "Velmo Black Drink Morango",
    testimonial: "Trabalho sentado no computador e comia por ansiedade. O drink me deu saciedade prolongada, regulou meu intestino e reduziu a gordura visceral rapidamente.",
    beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80",
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
    waistReduction: "-13cm de cintura",
    protocol: "Protocolo Duo Morango (3 Meses)",
    testimonial: "Eliminei 15kg com a pele firme e sem aquela flacidez horrível. O atendimento e suporte no WhatsApp durante o tratamento me deram total segurança.",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    afterImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&auto=format&fit=crop&q=80",
    stars: 5,
    verified: true,
  },
];

export function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto rotate carousel every 6 seconds when not interacting
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRANSFORMATIONS.length);
    }, 6000);
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
            Resultados Comprovados de Perda de Peso
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Transformações Reais de{" "}
            <span className="strawberry-text-gradient">Quem Usou Velmo Black</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400 max-w-2xl mx-auto">
            Veja a redução drástica de medidas e gordura corporal de clientes reais que seguiram o protocolo.
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
            
            {/* Left Column: True Before & After Body Images */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full rounded-2xl bg-black/70 p-3 sm:p-4 border border-zinc-800 shadow-2xl">
                
                {/* Photo Grid of Physical Body Transformation */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  
                  {/* Before Photo (Overweight / Belly / Measuring) */}
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-950 border border-zinc-700/80 group">
                    <img
                      src={item.beforeImg}
                      alt={`Antes - ${item.name} com sobrepeso`}
                      className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-rose-300 border border-zinc-700 shadow-md">
                      Antes (Início)
                    </div>
                  </div>

                  {/* After Photo (Slim / Flat stomach / In shape) */}
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-zinc-950 border-2 border-rose-500 shadow-[0_0_20px_rgba(255,30,86,0.35)] group">
                    <img
                      src={item.afterImg}
                      alt={`Depois - ${item.name} corpo transformado`}
                      className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-gradient-to-r from-rose-500 to-red-600 text-[9px] font-black uppercase tracking-wider text-white shadow-lg">
                      Depois (Resultado)
                    </div>
                  </div>

                </div>

                {/* Measurable Transformation Badges */}
                <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between px-1">
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-zinc-400">
                    <Scale className="h-3 w-3 text-rose-400" />
                    <span>{item.waistReduction}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/20 px-2.5 py-0.5 text-xs font-black text-rose-300 border border-rose-500/40 shadow-sm">
                    <Flame className="h-3 w-3 text-rose-400" />
                    {item.weightLoss} ({item.timeframe})
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
                  Transformação Verificada
                </span>
              </div>

              {/* Protocol Badge */}
              <div className="rounded-xl bg-zinc-900/80 p-2.5 border border-zinc-800 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-extrabold text-rose-300">
                  💊 Tratamento: {item.protocol}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {item.timeframe}
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
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    Sem efeito rebote
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-5 py-3 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_20px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.02] transition-all"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-white flex-shrink-0" />
                  <span>QUERO UMA TRANSFORMAÇÃO COMO ESTA</span>
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
            <span>Mais de 14.800 pessoas transformadas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" />
            <span>Redução visível de medidas e gordura visceral</span>
          </div>
        </div>

      </div>
    </section>
  );
}
