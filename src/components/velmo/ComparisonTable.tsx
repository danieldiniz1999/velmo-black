import { Check, X, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function ComparisonTable() {
  const criteria = [
    {
      label: "Sensação de fome e fraqueza",
      velmo: "Zero fome (Saciedade & Sabor Morango)",
      dietas: "Fome extrema e tonturas",
      remedios: "Enjoos fortes e náuseas",
    },
    {
      label: "Efeito Rebote / Sanfona",
      velmo: "Metabolismo reprogramado sem rebote",
      dietas: "Recupera tudo em semanas",
      remedios: "Ganho acelerado ao parar",
    },
    {
      label: "Ação na Gordura Visceral",
      velmo: "Aceleração lipolítica direta (Laranja Moro)",
      dietas: "Perde mais água e massa magra",
      remedios: "Perda severa de massa muscular",
    },
    {
      label: "Compulsão Noturna por Doces",
      velmo: "Bloqueada pelo Cromo + Triptofano",
      dietas: "Piora à noite com ataques de fome",
      remedios: "Ansiedade e insônia frequentes",
    },
    {
      label: "Efeitos Colaterais Perigosos",
      velmo: "100% Seguro, sem taquicardia ou tremor",
      dietas: "Desidratação e fadiga crônica",
      remedios: "Risco cardíaco e irritabilidade",
    },
  ];

  return (
    <section id="comparativo" className="relative pt-6 sm:pt-10 pb-4 sm:pb-6 bg-[#07080a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Comparativo Definitivo
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Por que insistir em métodos que{" "}
            <span className="strawberry-text-gradient">só destroem seu corpo?</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
            Veja a diferença entre a biotecnologia da Velmo Black e métodos convencionais.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-8 sm:mt-12 overflow-x-auto">
          <div className="min-w-[540px] rounded-2xl sm:rounded-3xl border border-rose-500/30 bg-[#0d1017] shadow-xl backdrop-blur-xl">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b border-zinc-800 p-4 sm:p-5 text-xs sm:text-sm font-black text-zinc-300 bg-zinc-950/80 rounded-t-2xl sm:rounded-t-3xl items-center">
              <div className="col-span-4 text-left font-bold text-zinc-400">Aspecto</div>
              
              {/* Velmo Black Winner Column */}
              <div className="col-span-4 text-center rounded-xl sm:rounded-2xl bg-rose-950/80 border border-rose-500/60 py-2 sm:py-2.5 text-rose-200 font-extrabold shadow-[0_0_15px_rgba(255,30,86,0.25)] text-xs sm:text-sm">
                🍓 VELMO BLACK
              </div>

              <div className="col-span-2 text-center text-zinc-400 text-[11px] sm:text-xs">Dietas</div>
              <div className="col-span-2 text-center text-zinc-400 text-[11px] sm:text-xs">Remédios</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-zinc-800/80">
              {criteria.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-3.5 sm:p-5 text-xs sm:text-sm items-center hover:bg-zinc-900/30 transition-colors">
                  <div className="col-span-4 font-bold text-white pr-2 text-xs sm:text-sm">
                    {item.label}
                  </div>

                  {/* Velmo Black Column */}
                  <div className="col-span-4 text-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-rose-950/40 border border-rose-500/30 font-semibold text-rose-200 flex items-center justify-center gap-1.5 text-xs sm:text-sm">
                    <Check className="h-3.5 w-3.5 text-rose-400 flex-shrink-0" />
                    <span>{item.velmo}</span>
                  </div>

                  {/* Dietas Column */}
                  <div className="col-span-2 text-center text-zinc-400 px-1 flex flex-col items-center justify-center gap-1">
                    <X className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" />
                    <span className="text-[10px] sm:text-[11px] leading-tight">{item.dietas}</span>
                  </div>

                  {/* Remedios Column */}
                  <div className="col-span-2 text-center text-zinc-400 px-1 flex flex-col items-center justify-center gap-1">
                    <X className="h-3.5 w-3.5 text-zinc-600 flex-shrink-0" />
                    <span className="text-[10px] sm:text-[11px] leading-tight">{item.remedios}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.03] transition-all"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
            <span>ESCOLHER A FORMA SEGURA NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
