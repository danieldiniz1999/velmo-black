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
        "Rico em antocianinas concentradas que atuam diretamente nos adipócitos, estimulando a queima da gordura visceral e abdominal profunda que resiste a dietas comuns.",
      icon: Flame,
      tag: "Queima Visceral",
      color: "from-rose-500/20 to-red-500/10",
      border: "border-rose-500/40",
      textAccent: "text-rose-400",
    },
    {
      step: "02",
      title: "Picolinato de Cromo Quelato",
      subtitle: "Bloqueador da Compulsão por Açúcar",
      description:
        "Estabiliza os níveis de glicose no sangue, neutralizando picos de insulina que geram aquela vontade incontrolável de comer doces, pães e massas fora de hora.",
      icon: ShieldAlert,
      tag: "Zero Fome Emocional",
      color: "from-red-500/20 to-rose-500/10",
      border: "border-red-500/40",
      textAccent: "text-red-400",
    },
    {
      step: "03",
      title: "L-Triptofano + Vitamina C",
      subtitle: "Controle da Ansiedade & Sono Reparador",
      description:
        "Aminoácido nobre precursor da serotonina e melatonina. Elimina o cortisol alto (hormônio do estresse que retém gordura) e combate a ansiedade noturna.",
      icon: Brain,
      tag: "Equilíbrio & Disposição",
      color: "from-rose-500/20 to-pink-500/10",
      border: "border-rose-500/40",
      textAccent: "text-rose-300",
    },
    {
      step: "04",
      title: "Complexo Prebiótico do Drink",
      subtitle: "Desinchaço Celular & Saciedade Instantânea",
      description:
        "Fibras nobres solúveis com extrato de Morango Silvestre que expandem no estômago, promovendo saciedade prolongada, regulando o intestino e drenando líquidos.",
      icon: Droplets,
      tag: "Drenagem & Morango #1",
      color: "from-red-500/20 to-rose-600/10",
      border: "border-rose-500/40",
      textAccent: "text-rose-400",
    },
  ];

  return (
    <section id="como-funciona" className="relative py-20 lg:py-28 bg-[#08090d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Sparkles className="h-3.5 w-3.5" />
            Engenharia Metabólica Inteligente
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Por que o Velmo Black funciona{" "}
            <span className="strawberry-text-gradient">onde nada mais deu certo?</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-400">
            Enquanto dietas comuns desaceleram seu metabolismo e aumentam o estresse, a fórmula bioativa de Velmo Black ataca as 4 causas biológicas do sobrepeso simultaneamente.
          </p>
        </div>

        {/* 4 Mechanism Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mechanisms.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between rounded-3xl bg-gradient-to-b ${item.color} p-6 sm:p-7 border ${item.border} backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,30,86,0.25)]`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-zinc-600 font-mono">
                      {item.step}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/60 border border-zinc-700 text-[11px] font-bold text-zinc-200">
                      {item.tag}
                    </span>
                  </div>

                  <div className="my-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/80 border border-zinc-700/60 shadow-inner">
                    <Icon className={`h-7 w-7 ${item.textAccent}`} />
                  </div>

                  <h3 className="text-lg font-extrabold text-white leading-tight">
                    {item.title}
                  </h3>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mt-1 ${item.textAccent}`}>
                    {item.subtitle}
                  </h4>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-400">
                  <span>Ação 24 Horas</span>
                  <span className={item.textAccent}>Eficácia Comprovada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 rounded-3xl border border-rose-500/30 bg-gradient-to-r from-rose-950/40 via-zinc-900/60 to-rose-950/40 p-8 text-center max-w-4xl mx-auto shadow-[0_0_35px_rgba(255,30,86,0.2)]">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Pronto para sentir a leveza e a energia que você merece?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto">
            Nossos consultores estão prontos no WhatsApp para orientar a melhor forma de uso de acordo com a sua rotina.
          </p>
          <div className="mt-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_0_30px_rgba(255,30,86,0.4)] btn-shimmer hover:shadow-[0_0_45px_rgba(255,30,86,0.7)] hover:scale-105 transition-all"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
              <span>FALAR COM UMA CONSULTORA NO WHATSAPP</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
