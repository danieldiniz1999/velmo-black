import { Flame, Brain, ShieldAlert, Droplets, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function MechanismSection() {
  const mechanisms = [
    {
      step: "01",
      title: "Extrato Puro de Laranja Moro",
      subtitle: "Ação Lipolítica Profunda",
      description:
        "Rico em antocianinas concentradas que atuam diretamente nos adipócitos, estimulando a queima da gordura visceral e abdominal profunda.",
      icon: Flame,
      tag: "Queima Visceral",
      color: "from-rose-500/20 to-red-500/10",
      border: "border-rose-500/40",
      textAccent: "text-rose-400",
    },
    {
      step: "02",
      title: "Picolinato de Cromo Quelato",
      subtitle: "Bloqueador da Compulsão",
      description:
        "Estabiliza os níveis de glicose no sangue, neutralizando picos de insulina que geram aquela vontade incontrolável de comer doces fora de hora.",
      icon: ShieldAlert,
      tag: "Zero Compulsão",
      color: "from-red-500/20 to-rose-500/10",
      border: "border-red-500/40",
      textAccent: "text-red-400",
    },
    {
      step: "03",
      title: "L-Triptofano + Vitamina C",
      subtitle: "Controle da Ansiedade & Sono",
      description:
        "Aminoácido precursor da serotonina e melatonina. Elimina o cortisol alto (que retém gordura) e combate a ansiedade noturna.",
      icon: Brain,
      tag: "Equilíbrio & Humor",
      color: "from-rose-500/20 to-pink-500/10",
      border: "border-rose-500/40",
      textAccent: "text-rose-300",
    },
    {
      step: "04",
      title: "Complexo Prebiótico do Drink",
      subtitle: "Desinchaço & Sabor Morango",
      description:
        "Fibras solúveis com extrato de Morango Silvestre que expandem no estômago, garantindo saciedade por horas e drenando líquidos.",
      icon: Droplets,
      tag: "Drenagem & Morango",
      color: "from-red-500/20 to-rose-600/10",
      border: "border-rose-500/40",
      textAccent: "text-rose-400",
    },
  ];

  return (
    <section id="como-funciona" className="relative pt-10 sm:pt-14 pb-4 sm:pb-6 bg-[#08090d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Engenharia Metabólica Inteligente
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Por que o Velmo Black funciona{" "}
            <span className="strawberry-text-gradient">onde nada deu certo?</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400 max-w-2xl mx-auto">
            Enquanto dietas comuns desaceleram seu metabolismo, a fórmula bioativa de Velmo Black ataca as 4 causas biológicas do sobrepeso simultaneamente.
          </p>
        </div>

        {/* 4 Mechanism Cards Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {mechanisms.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-gradient-to-b ${item.color} p-4 sm:p-6 border ${item.border} backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-[1.02]`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-zinc-600 font-mono">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 border border-zinc-700 text-[10px] sm:text-[11px] font-bold text-zinc-200">
                      {item.tag}
                    </span>
                  </div>

                  <div className="my-3 sm:my-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-black/80 border border-zinc-700/60 shadow-inner">
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.textAccent}`} />
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                    {item.title}
                  </h3>
                  <h4 className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 ${item.textAccent}`}>
                    {item.subtitle}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-zinc-400">
                  <span>Ação 24 Horas</span>
                  <span className={item.textAccent}>Eficácia Comprovada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-950/40 via-zinc-900/60 to-rose-950/40 p-5 sm:p-8 text-center max-w-4xl mx-auto shadow-[0_0_30px_rgba(255,30,86,0.15)]">
          <h3 className="text-lg sm:text-2xl font-black text-white leading-snug">
            Pronto para sentir a leveza e energia que você merece?
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 max-w-2xl mx-auto">
            Nossos consultores estão prontos no WhatsApp para orientar o melhor uso para o seu objetivo.
          </p>
          <div className="mt-4 sm:mt-5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-5 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.03] transition-all"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
              <span>FALAR COM UMA CONSULTORA NO WHATSAPP</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
