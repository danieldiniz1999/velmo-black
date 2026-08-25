import { ShieldCheck, Award, Lock, Sparkles, RefreshCw } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function GuaranteeSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-[#090b10] border-t border-rose-500/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl sm:rounded-3xl border border-rose-500/40 bg-gradient-to-b from-[#150a10] via-[#090c12] to-[#07080a] p-5 sm:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,30,86,0.15)] text-center relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute -top-20 -left-20 w-52 sm:w-72 h-52 sm:h-72 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Icon */}
          <div className="mx-auto flex h-14 w-14 sm:h-18 sm:w-18 items-center justify-center rounded-2xl sm:rounded-3xl bg-rose-950/80 border-2 border-rose-500/60 shadow-[0_0_25px_rgba(255,30,86,0.4)] text-rose-400">
            <ShieldCheck className="h-7 w-7 sm:h-9 sm:w-9" />
          </div>

          <div className="mt-4 sm:mt-5 space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-rose-300 border border-rose-500/30">
              <Award className="h-3 w-3" />
              COMPROMISSO DE QUALIDADE VELMO
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Sua Transformação com <span className="strawberry-text-gradient">Total Confiança</span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              O Velmo Black é formulado dentro dos padrões de qualidade para suplementos alimentares (RDC Anvisa). Cada frasco passa por testes de pureza e concentração ativa para garantir máxima eficácia.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs sm:text-sm">
                <Lock className="h-3.5 w-3.5" />
                <span>Originalidade Garantida</span>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-zinc-400">
                Produto 100% autêntico lacrado direto do lote oficial.
              </p>
            </div>

            <div className="p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs sm:text-sm">
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Acompanhamento VIP</span>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-zinc-400">
                Suporte humanizado no WhatsApp durante todo seu tratamento.
              </p>
            </div>

            <div className="p-3.5 rounded-xl sm:rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs sm:text-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Pureza & Eficácia</span>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-zinc-400">
                Matéria-prima nobre selecionada para alta absorção.
              </p>
            </div>
          </div>

          {/* Action Link */}
          <div className="mt-6 pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.02] transition-all"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
              <span>TIRAR DÚVIDAS COM ESPECIALISTA NO WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
