import { ShieldCheck, Award, Lock, Sparkles, RefreshCw, CheckCircle2, HeartHandshake } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function GuaranteeSection() {
  const guarantees = [
    {
      icon: Lock,
      title: "Originalidade & Autenticidade",
      desc: "Produto 100% original, lacrado direto da fábrica oficial com lote rastreado e selo de segurança.",
    },
    {
      icon: HeartHandshake,
      title: "Acompanhamento no WhatsApp",
      desc: "Nossa equipe não te deixa sozinho(a). Suporte humanizado para tirar dúvidas durante todo o tratamento.",
    },
    {
      icon: Sparkles,
      title: "Pureza & Alta Absorção",
      desc: "Compostos nobres biodisponíveis formulados dentro dos mais rigorosos padrões da RDC ANVISA.",
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#090b10] border-y border-rose-500/20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[300px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-rose-950/80 border border-rose-500/50 shadow-[0_0_25px_rgba(255,30,86,0.35)] text-rose-400 mb-2">
            <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-rose-300 border border-rose-500/30">
            <Award className="h-3 w-3" />
            COMPROMISSO DE QUALIDADE VELMO
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Sua Transformação com <span className="strawberry-text-gradient">Total Confiança & Segurança</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            O Velmo Black segue os rigorosos padrões para suplementos alimentares (RDC Anvisa nº 240/2018), com testes de pureza e concentração ativa para garantir máxima eficácia no seu corpo.
          </p>
        </div>

        {/* 3 Pillars Grid (Formato de Seção Aberto e Arejado) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0c0f16] p-5 sm:p-6 border border-zinc-800 hover:border-rose-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-400 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Padrão Oficial</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button Section Area */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-6 sm:px-10 py-4 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_30px_rgba(255,30,86,0.4)] btn-shimmer strawberry-glow-pulse hover:scale-[1.03] transition-all"
          >
            <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
            <span>TIRAR DÚVIDAS COM ESPECIALISTA NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
