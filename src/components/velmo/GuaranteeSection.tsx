import { ShieldCheck, Award, Lock, Sparkles, RefreshCw } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function GuaranteeSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#090b10] border-t border-rose-500/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-rose-500/40 bg-gradient-to-b from-[#150a10] via-[#090c12] to-[#07080a] p-8 sm:p-12 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,30,86,0.2)] text-center relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-950/80 border-2 border-rose-500/60 shadow-[0_0_35px_rgba(255,30,86,0.4)] text-rose-400">
            <ShieldCheck className="h-10 w-10" />
          </div>

          <div className="mt-6 space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/30">
              <Award className="h-3.5 w-3.5" />
              COMPROMISSO DE QUALIDADE VELMO
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Sua Transformação com <span className="strawberry-text-gradient">Total Confiança</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              O Velmo Black é formulado dentro dos mais rigorosos padrões de qualidade e segurança estabelecidos para suplementos alimentares (RDC Anvisa). Cada frasco passa por testes de pureza e concentração ativa para assegurar que você receba o produto original com a máxima eficácia.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <Lock className="h-4 w-4" />
                <span>Originalidade Garantida</span>
              </div>
              <p className="mt-1.5 text-xs text-zinc-400">
                Produto 100% autêntico lacrado direto do lote oficial.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <RefreshCw className="h-4 w-4" />
                <span>Acompanhamento VIP</span>
              </div>
              <p className="mt-1.5 text-xs text-zinc-400">
                Suporte humanizado no WhatsApp durante todo seu tratamento.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <Sparkles className="h-4 w-4" />
                <span>Pureza & Eficácia</span>
              </div>
              <p className="mt-1.5 text-xs text-zinc-400">
                Matéria-prima nobre selecionada para biodisponibilidade alta.
              </p>
            </div>
          </div>

          {/* Action Link */}
          <div className="mt-8 pt-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_0_30px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-105 transition-all"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
              <span>TIRAR DÚVIDAS COM ESPECIALISTA NO WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
