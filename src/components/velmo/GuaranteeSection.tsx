import { ShieldCheck, Award, Lock, Sparkles, RefreshCw } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function GuaranteeSection() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 bg-[#090b10] border-t border-rose-500/20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl sm:rounded-3xl border border-rose-500/40 bg-gradient-to-b from-[#150a10] via-[#090c12] to-[#07080a] p-4 sm:p-7 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,30,86,0.15)] text-center relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute -top-16 -left-16 w-40 sm:w-56 h-40 sm:h-56 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Icon */}
          <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-rose-950/80 border-2 border-rose-500/60 shadow-[0_0_20px_rgba(255,30,86,0.35)] text-rose-400">
            <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <div className="mt-3 space-y-1.5 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-rose-300 border border-rose-500/30">
              <Award className="h-2.5 w-2.5" />
              COMPROMISSO DE QUALIDADE VELMO
            </div>

            <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-tight">
              Sua Transformação com <span className="strawberry-text-gradient">Total Confiança</span>
            </h2>

            <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed max-w-md mx-auto">
              O Velmo Black segue os rigorosos padrões para suplementos alimentares (RDC Anvisa), com testes de pureza e concentração ativa para máxima eficácia.
            </p>
          </div>

          {/* 3 Pillars Compact */}
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left">
            <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px] sm:text-xs">
                <Lock className="h-3 w-3 flex-shrink-0" />
                <span>Originalidade</span>
              </div>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-zinc-400 leading-snug">
                100% autêntico lacrado direto do lote oficial.
              </p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px] sm:text-xs">
                <RefreshCw className="h-3 w-3 flex-shrink-0" />
                <span>Acompanhamento</span>
              </div>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-zinc-400 leading-snug">
                Suporte humanizado no WhatsApp durante o tratamento.
              </p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px] sm:text-xs">
                <Sparkles className="h-3 w-3 flex-shrink-0" />
                <span>Pureza & Eficácia</span>
              </div>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-zinc-400 leading-snug">
                Matéria-prima nobre de rápida absorção.
              </p>
            </div>
          </div>

          {/* Action Link */}
          <div className="mt-4 sm:mt-5 pt-1">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-5 sm:px-7 py-3 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_20px_rgba(255,30,86,0.35)] btn-shimmer hover:scale-[1.02] transition-all"
            >
              <WhatsAppIcon className="h-4 w-4 fill-white flex-shrink-0" />
              <span>TIRAR DÚVIDAS COM ESPECIALISTA NO WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
