import { ShieldCheck, Award, Lock, Sparkles, RefreshCw, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function GuaranteeSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#090b10] border-t border-cyan-500/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-[#0e131d] via-[#090c12] to-[#07080a] p-8 sm:p-12 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,229,255,0.15)] text-center relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-950/80 border-2 border-cyan-400/60 shadow-[0_0_35px_rgba(0,229,255,0.4)] text-cyan-300">
            <ShieldCheck className="h-10 w-10" />
          </div>

          <div className="mt-6 space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
              <Award className="h-3.5 w-3.5" />
              COMPROMISSO DE QUALIDADE VELMO
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Sua Transformação com <span className="tiffany-text-gradient">Total Confiança</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              O Velmo Black é formulado dentro dos mais rigorosos padrões de qualidade e segurança estabelecidos para suplementos alimentares (RDC Anvisa). Cada frasco passa por testes de pureza e concentração ativa para assegurar que você receba o produto original com a máxima eficácia.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Lock className="h-4 w-4" />
                <span>Originalidade Garantida</span>
              </div>
              <p className="mt-1.5 text-xs text-zinc-400">
                Produto 100% autêntico lacrado direto do lote oficial.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <RefreshCw className="h-4 w-4" />
                <span>Acompanhamento VIP</span>
              </div>
              <p className="mt-1.5 text-xs text-zinc-400">
                Suporte humanizado no WhatsApp durante todo seu tratamento.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
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
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 px-8 py-4 text-sm sm:text-base font-extrabold text-black shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 transition-all"
            >
              <MessageCircle className="h-5 w-5 fill-black" />
              <span>TIRAR DÚVIDAS COM ESPECIALISTA NO WHATSAPP</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
