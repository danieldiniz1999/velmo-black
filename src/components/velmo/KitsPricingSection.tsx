import { Check, Flame, ShieldCheck, Sparkles, Star, Truck } from "lucide-react";
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
      pots: "1 Frasco (60 Caps) ou 1 Drink (150g)",
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
      name: "Protocolo Duo 3 Meses",
      subtitle: "O tratamento completo para secar e não engordar mais",
      badge: "🔥 MAIS ESCOLHIDO (87% DAS VENDAS)",
      badgeColor: "bg-gradient-to-r from-cyan-400 to-teal-400 text-black border-cyan-300 font-black",
      highlight: true,
      pots: "Combo Completo: Cápsulas + Drink Solúvel",
      benefits: [
        "Queima contínua 24h (Dia e Noite)",
        "Eliminação definitiva da gordura visceral",
        "Fim absoluto da compulsão por doces",
        "Frete Expresso Prioritário",
        "Acompanhamento VIP no WhatsApp",
        "Maior economia por dose",
      ],
      ctaText: "GARANTIR O TRATAMENTO MAIS VENDIDO",
      discount: "Desconto Máximo de Lote + Frete Expresso",
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
    <section id="kits" className="relative py-20 lg:py-32 bg-[#07080a]">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Tratamentos Oficiais & Condições Especiais
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Escolha o seu plano de{" "}
            <span className="tiffany-text-gradient">transformação corporal</span>
          </h2>
          
          <p className="text-base text-zinc-400">
            Clique no kit desejado para falar diretamente com nossa equipe no WhatsApp e garantir o valor promocional com frete expresso.
          </p>
        </div>

        {/* Kits Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
                kit.highlight
                  ? "bg-gradient-to-b from-[#0f1722] via-[#0b1018] to-[#070a0e] border-2 border-cyan-400 shadow-[0_0_50px_rgba(0,229,255,0.3)] scale-[1.03] z-10"
                  : "bg-[#0d1017] border border-zinc-800 hover:border-cyan-500/30 shadow-xl"
              }`}
            >
              {/* Badge */}
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-wider border ${kit.badgeColor}`}
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
              <div className="mt-4 space-y-2">
                <h3 className="text-2xl font-black text-white">{kit.name}</h3>
                <p className="text-xs text-zinc-400">{kit.subtitle}</p>

                <div className="mt-4 rounded-xl bg-zinc-900/80 p-3 border border-zinc-800 text-xs font-bold text-cyan-300">
                  📦 {kit.pots}
                </div>

                <div className="py-2">
                  <span className="inline-block text-xs font-extrabold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    ✓ {kit.discount}
                  </span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mt-6 space-y-3 pt-4 border-t border-zinc-800/80 flex-grow">
                {kit.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <Check className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-extrabold tracking-wide transition-all duration-300 ${
                    kit.highlight
                      ? "bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 text-black shadow-[0_0_35px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.7)] hover:scale-105"
                      : "bg-zinc-900 hover:bg-zinc-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400"
                  }`}
                >
                  <WhatsAppIcon className="h-4 w-4 fill-current flex-shrink-0" />
                  <span>{kit.ctaText}</span>
                </a>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Atendimento oficial e imediato</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Shipping and Security Guarantee Notice */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-cyan-400" />
            <span>Envio com código de rastreamento pelos Correios/Transportadora</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span>Embalagem 100% discreta e lacrada de fábrica</span>
          </div>
        </div>

      </div>
    </section>
  );
}
