import { Check, X, ShieldAlert, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function ComparisonTable() {
  const criteria = [
    {
      label: "Sensação de fome e fraqueza",
      velmo: "Zero fome (Saciedade e modulação do apetite)",
      dietas: "Fome extrema, tonturas e mau humor",
      remedios: "Enjoos fortes, náuseas e vômitos",
    },
    {
      label: "Efeito Rebote / Sanfona",
      velmo: "Metabolismo reprogramado sem ganho rebote",
      dietas: "Recupera tudo e mais um pouco em semanas",
      remedios: "Ganho acelerado de peso logo após parar",
    },
    {
      label: "Ação na Gordura Visceral",
      velmo: "Aceleração lipolítica direta (Laranja Moro)",
      dietas: "Perde mais água e massa muscular do que gordura",
      remedios: "Perda severa de massa magra e tônus muscular",
    },
    {
      label: "Compulsão Noturna por Doces",
      velmo: "Bloqueada pelo Cromo + Triptofano",
      dietas: "Piora à noite gerando ataques à geladeira",
      remedios: "Ansiedade e insônia frequentes",
    },
    {
      label: "Efeitos Colaterais Perigosos",
      velmo: "100% Seguro, sem taquicardia ou tremor",
      dietas: "Desidratação, fadiga crônica e anemia",
      remedios: "Risco cardíaco, dependência e irritabilidade",
    },
  ];

  return (
    <section id="comparativo" className="relative py-20 lg:py-28 bg-[#07080a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Comparativo Definitivo
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Por que insistir em métodos que{" "}
            <span className="tiffany-text-gradient">só destroem seu corpo?</span>
          </h2>
          
          <p className="text-base text-zinc-400">
            Veja a diferença brutal entre a biotecnologia inteligente da Velmo Black e os métodos convencionais.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-14 overflow-x-auto">
          <div className="min-w-[640px] rounded-3xl border border-cyan-500/30 bg-[#0d1017] shadow-2xl backdrop-blur-xl">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b border-zinc-800 p-6 text-sm font-black text-zinc-300 bg-zinc-950/80 rounded-t-3xl items-center">
              <div className="col-span-4 text-left font-bold text-zinc-400">Aspecto Avaliado</div>
              
              {/* Velmo Black Winner Column */}
              <div className="col-span-4 text-center rounded-2xl bg-cyan-950/70 border border-cyan-400/50 py-3 text-cyan-300 font-extrabold shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                ✦ VELMO BLACK
              </div>

              <div className="col-span-2 text-center text-zinc-400">Dietas Restritivas</div>
              <div className="col-span-2 text-center text-zinc-400">Medicamentos / Injeções</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-zinc-800/80">
              {criteria.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-6 text-xs sm:text-sm items-center hover:bg-zinc-900/30 transition-colors">
                  <div className="col-span-4 font-bold text-white pr-4">
                    {item.label}
                  </div>

                  {/* Velmo Black Column */}
                  <div className="col-span-4 text-center px-3 py-2 rounded-xl bg-cyan-950/30 border border-cyan-500/30 font-semibold text-cyan-200 flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                    <span>{item.velmo}</span>
                  </div>

                  {/* Dietas Column */}
                  <div className="col-span-2 text-center text-zinc-400 px-2 flex flex-col items-center justify-center gap-1">
                    <X className="h-4 w-4 text-rose-500 flex-shrink-0" />
                    <span className="text-[11px] leading-tight">{item.dietas}</span>
                  </div>

                  {/* Remedios Column */}
                  <div className="col-span-2 text-center text-zinc-400 px-2 flex flex-col items-center justify-center gap-1">
                    <X className="h-4 w-4 text-rose-500 flex-shrink-0" />
                    <span className="text-[11px] leading-tight">{item.remedios}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-4 text-sm sm:text-base font-extrabold text-black shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:scale-105 transition-all"
          >
            <MessageCircle className="h-5 w-5 fill-black" />
            <span>ESCOLHER A FORMA SEGURA NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
