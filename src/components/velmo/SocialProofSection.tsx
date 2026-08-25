import { useState, useEffect } from "react";
import { Star, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Flame, Scale } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

interface Story {
  id: number;
  name: string;
  age: string;
  location: string;
  weightLoss: string;
  timeframe: string;
  waistReduction: string;
  protocol: string;
  testimonial: string;
  image: string;
  stars: number;
  verified: boolean;
}

const STORIES: Story[] = [
  {
    id: 1,
    name: "Juliana Medeiros",
    age: "36 anos",
    location: "Curitiba, PR",
    weightLoss: "-16.4 kg",
    timeframe: "em 75 dias",
    waistReduction: "-14cm de cintura",
    protocol: "Protocolo Duo Morango (3 Meses)",
    testimonial: "Eu sofria com compulsão por doces no final da tarde e retenção de líquidos após a gestação. Quando iniciei o Protocolo Duo com o Drink de Morango Silvestre, meu apetite normalizou já nos primeiros dias e desinchei muito rápido sem fraqueza.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
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
    testimonial: "Estava com metabolismo travado depois dos 40 e gordura visceral que não saía por nada. O Velmo Black me deu muita disposição para o dia a dia e acelerou a queima sem dar coração acelerado. Atendimento no WhatsApp nota 10.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
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
    testimonial: "Voltei a usar vestidos e calças que estavam guardados há 3 anos! O sabor de Morango Silvestre é super gostoso e refrescante, tomo geladinho e fico saciada a tarde inteira sem vontade de beliscar.",
    image: "/images/carla-albuquerque.jpg",
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
    testimonial: "Minha autoestima e exames de saúde mudaram completamente. Não sinto mais aquele peso e inchaço constante depois das refeições. O melhor foi emagrecer sem perder a firmeza da pele e sem efeito sanfona.",
    image: "/images/patricia-farias.jpg",
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
    testimonial: "Trabalho muito tempo sentado e comia besteira por ansiedade. O drink me deu saciedade prolongada, regulou meu intestino e afinou a cintura logo nas primeiras semanas de uso diário.",
    image: "/images/lucas-guimaraes.jpg",
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
    testimonial: "Eliminei 15kg com saúde e sem passar fome. O suporte das consultoras no WhatsApp tirou todas as minhas dúvidas de dosagem e horários. Recomendo de olhos fechados!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
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
      setCurrentIndex((prev) => (prev + 1) % STORIES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % STORIES.length);
  };

  const item = STORIES[currentIndex];

  return (
    <section id="depoimentos" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#090b10] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[350px] sm:h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Depoimentos Reais & Verificados
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Quem Usa Velmo Black{" "}
            <span className="strawberry-text-gradient">Transforma o Corpo de Verdade</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400 max-w-2xl mx-auto">
            Histórias autênticas de clientes que recuperaram a autoestima, desincharam e atingiram seus objetivos.
          </p>
        </div>

        {/* Dynamic Carousel Card with 1 Single Photo */}
        <div
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="mt-8 sm:mt-12 relative max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-rose-500/40 bg-gradient-to-b from-[#140a10] via-[#0d090d] to-[#07080a] p-4 sm:p-8 shadow-[0_0_40px_rgba(255,30,86,0.2)] backdrop-blur-xl"
        >
          {/* Main Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
            
            {/* Left Column: 1 Single Authentic Customer Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full rounded-2xl bg-black/70 p-2.5 sm:p-3 border border-zinc-800 shadow-2xl">
                
                {/* Single Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-950 border-2 border-rose-500/60 shadow-[0_0_20px_rgba(255,30,86,0.25)] group">
                  <img
                    src={item.image}
                    alt={`${item.name} - Cliente Velmo Black`}
                    className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Photo Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 pointer-events-none">
                    <span className="rounded-full bg-black/85 backdrop-blur-md px-2.5 py-1 text-[10px] font-black text-rose-300 border border-rose-500/40 shadow-md">
                      {item.timeframe}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 px-3 py-1 text-xs font-black text-white shadow-xl flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5 fill-white" />
                    <span>{item.weightLoss}</span>
                  </div>
                </div>

                {/* Sub-photo specs */}
                <div className="mt-3 pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] px-1">
                  <span className="text-zinc-400 font-medium">Redução de medidas:</span>
                  <span className="font-extrabold text-white flex items-center gap-1">
                    <Scale className="h-3 w-3 text-rose-400" />
                    {item.waistReduction}
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
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Cliente Verificada
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
                    Resultado Real
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
              {STORIES.map((_, idx) => (
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
            <span>Mais de 14.800 clientes atendidos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" />
            <span>Acompanhamento personalizado no WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
}
