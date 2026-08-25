import { Check, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function KitsPricingSection() {
  const kits = [
    {
      id: "start",
      name: "Kit 1 Mês (Start)",
      subtitle: "Para quem quer experimentar os primeiros resultados",
      badge: "EXPERIÊNCIA INICIAL",
      badgeColor: "bg-zinc-800 text-zinc-300 border-zinc-700",
      highlight: false,
      pots: "1 Frasco (60 Caps) ou 1 Drink Morango (150g)",
      benefits: [
        "Desinchaço inicial visível",
        "Primeiro destravamento metabólico",
        "Controle suave da fome",
        "Acesso à consultoria WhatsApp",
      ],
      ctaText: "QUERO COMEÇAR COM 1 MÊS",
      discount: "Desconto Básico Liberado",
    },
    {
      id: "duo-3",
      name: "Protocolo Duo 3 Meses (Morango)",
      subtitle: "O tratamento completo para secar e não engordar mais",
      badge: "🍓 MAIS ESCOLHIDO (87% DAS VENDAS)",
      badgeColor: "bg-gradient-to-r from-rose-500 to-red-600 text-white border-rose-400 font-black shadow-md",
      highlight: true,
      pots: "Combo Completo: Cápsulas + Drink Morango Silvestre",
      benefits: [
        "Queima contínua 24h (Dia e Noite)",
        "Eliminação definitiva da gordura visceral",
        "Fim absoluto da compulsão por doces",
        "Frete Expresso Prioritário",
        "Acompanhamento VIP no WhatsApp",
        "Maior economia por dose",
      ],
      ctaText: "GARANTIR O TRATAMENTO MAIS VENDIDO",
      discount: "Desconto Máximo + Frete Expresso",
    },
    {
      id: "duo-5",
      name: "Transformação Total 5 Meses",
      subtitle: "Para quem precisa eliminar 15kg+ e blindar o metabolismo",
      badge: "💎 MELHOR CUSTO-BENEFÍCIO",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30 font-bold",
      highlight: false,
      pots: "Tratamento Máximo (5 Meses de Duração)",
      benefits: [
        "Reestruturação metabólica definitiva",
        "Máximo poder de definição corporal",
        "Zero risco de efeito rebote pós-uso",
        "Frete Grátis com Seguro Total",
        "Atendimento Prioritário com Especialista",
      ],
      ctaText: "QUERO A TRANSFORMAÇÃO TOTAL",
      discount: "Maior Desconto da Linha Velmo",
    },
  ];

  return (
    <section id="kits" className="relative py-12 sm:py-16 lg:py-24 bg-[#07080a]">
      {/* Glow Effect in Strawberry Red */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] bg-rose-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Tratamentos Oficiais & Ofertas
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Escolha o seu plano de{" "}
            <span className="strawberry-text-gradient">transformação corporal</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
            Clique no kit desejado para falar diretamente com nossa equipe no WhatsApp e garantir o valor promocional com frete expresso.
          </p>
        </div>

        {/* Kits Cards Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className={`relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-7 backdrop-blur-xl transition-all duration-300 ${
                kit.highlight
                  ? "bg-gradient-to-b from-[#190a12] via-[#0f0a0d] to-[#07080a] border-2 border-rose-500 shadow-[0_0_35px_rgba(255,30,86,0.25)] lg:scale-[1.02] z-10"
                  : "bg-[#0d1017] border border-zinc-800 hover:border-rose-500/40 shadow-xl"
              }`}
            >
              {/* Badge */}
              <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] uppercase tracking-wider border ${kit.badgeColor}`}
                >
                  {kit.badge}
                </span>
                {kit.highlight && (
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="h-3.5 w-3.5 fill-amber-400" />
                    Top 1
                  </div>
                )}
              </div>

              {/* Kit Info */}
              <div className="mt-3.5 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-black text-white">{kit.name}</h3>
                <p className="text-[11px] sm:text-xs text-zinc-400">{kit.subtitle}</p>

                {/* Kit Product Visual Thumbnail */}
                <div className="my-2 p-2 rounded-xl bg-black/50 border border-zinc-800/80 flex items-center justify-center gap-2">
                  {kit.id === "start" && (
                    <div className="h-20 flex items-center justify-center">
                      <img
                        src="/images/velmo-capsulas.png"
                        alt="Velmo Black Cápsulas"
                        className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,229,255,0.2)]"
                      />
                    </div>
                  )}
                  {kit.id === "duo-3" && (
                    <div className="h-20 flex items-center justify-center gap-2">
                      <img
                        src="/images/velmo-capsulas.png"
                        alt="Velmo Black Cápsulas"
                        className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,229,255,0.2)]"
                      />
                      <span className="text-rose-500 font-black text-sm">+</span>
                      <img
                        src="/images/velmo-drink-morango.png"
                        alt="Velmo Black Drink Morango"
                        className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(255,30,86,0.25)]"
                      />
                    </div>
                  )}
                  {kit.id === "duo-5" && (
                    <div className="h-20 flex items-center justify-center gap-2">
                      <img
                        src="/images/velmo-capsulas.png"
                        alt="Velmo Black Cápsulas"
                        className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,229,255,0.2)]"
                      />
                      <span className="text-amber-400 font-black text-sm">+</span>
                      <img
                        src="/images/velmo-drink-morango.png"
                        alt="Velmo Black Drink Morango"
                        className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(255,30,86,0.25)]"
                      />
                    </div>
                  )}
                </div>

                <div className="rounded-xl bg-zinc-900/80 p-2 border border-zinc-800 text-[11px] font-bold text-rose-300">
                  📦 {kit.pots}
                </div>

                <div className="py-0.5">
                  <span className="inline-block text-[10px] font-extrabold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    ✓ {kit.discount}
                  </span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mt-4 space-y-2 pt-3 border-t border-zinc-800/80 flex-grow">
                {kit.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                    <Check className="h-3.5 w-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6 pt-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2.5 rounded-2xl px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-extrabold tracking-wide text-center leading-snug transition-all duration-300 ${
                    kit.highlight
                      ? "bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer strawberry-glow-pulse hover:scale-[1.02]"
                      : "bg-zinc-900 hover:bg-zinc-800 text-rose-300 border border-rose-500/40 hover:border-rose-400 btn-shimmer hover:scale-[1.02]"
                  }`}
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current flex-shrink-0" />
                  <span className="text-balance">{kit.ctaText}</span>
                </a>

                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-zinc-500">
                  <ShieldCheck className="h-3 w-3 text-rose-400" />
                  <span>Atendimento oficial e imediato</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Shipping and Security Guarantee Notice */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-zinc-400 text-center">
          <div className="flex items-center gap-1.5">
            <Truck className="h-3.5 w-3.5 text-rose-400" />
            <span>Envio com rastreamento expresso</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-rose-400" />
            <span>Embalagem 100% discreta e lacrada</span>
          </div>
        </div>

      </div>
    </section>
  );
}
