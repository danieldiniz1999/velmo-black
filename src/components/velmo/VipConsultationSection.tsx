import { ShieldCheck, Sparkles, MessageSquareHeart, UserCheck, Zap, Truck, CheckCircle2, Clock } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, VELMO_WHATSAPP_DISPLAY } from "../../lib/whatsapp";

export function VipConsultationSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Rápido e Gratuito",
      desc: "Você nos conta quantos quilos deseja eliminar e sua rotina. Nossa equipe faz uma triagem sem custo.",
      icon: MessageSquareHeart,
      highlight: "100% Individualizado",
    },
    {
      number: "02",
      title: "Indicação do Protocolo Exato",
      desc: "Avaliamos se para você o ideal é o Velmo Black Cápsulas, o Drink sabor Morango ou a sinergia do Protocolo Duo.",
      icon: Zap,
      highlight: "Dose & Tempo Sob Medida",
    },
    {
      number: "03",
      title: "Desconto de Lote & Envio Imediato",
      desc: "Você recebe as melhores condições promocionais do dia direto da fábrica com código de rastreamento no WhatsApp.",
      icon: Truck,
      highlight: "Frete Expresso Seguro",
    },
  ];

  return (
    <section id="atendimento" className="relative py-12 sm:py-16 lg:py-24 bg-[#07080a] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[350px] sm:h-[500px] bg-rose-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Atendimento Consultivo Exclusivo
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Não sabe qual o protocolo ideal?{" "}
            <span className="strawberry-text-gradient">Nós cuidamos de tudo no WhatsApp</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400 max-w-2xl mx-auto">
            Você não precisa escolher pacotes ou adivinhar dosagens no site. Nossos especialistas avaliam seu perfil para indicar a quantidade certa e aplicar as melhores condições do dia.
          </p>
        </div>

        {/* 3 Step Consultation Flow */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#0d1017] p-5 sm:p-7 border border-zinc-800 hover:border-rose-500/40 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-zinc-600 font-mono">
                      {step.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-[10px] sm:text-[11px] font-bold text-rose-300">
                      {step.highlight}
                    </span>
                  </div>

                  <div className="my-3 sm:my-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-rose-950/60 border border-rose-500/30 text-rose-400 shadow-inner group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] sm:text-xs text-rose-400 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Sem compromisso de compra</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central VIP Call to Action Box */}
        <div className="mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl border-2 border-rose-500/40 bg-gradient-to-b from-[#180a12] via-[#0e0a0d] to-[#07080a] p-6 sm:p-10 shadow-[0_0_40px_rgba(255,30,86,0.25)] text-center relative overflow-hidden">
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-950/60 px-3 py-1 text-[11px] sm:text-xs font-bold text-emerald-300 border border-emerald-500/40 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Equipe de Consultoria Pronta para Atender</span>
          </div>

          <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight max-w-2xl mx-auto">
            Receba sua orientação personalizada e garanta as ofertas exclusivas de hoje
          </h3>

          <p className="mt-2 text-xs sm:text-sm lg:text-base text-zinc-300 max-w-xl mx-auto">
            Clique no botão abaixo para conversar diretamente com uma consultora especializada no WhatsApp oficial da Velmo Black.
          </p>

          {/* Mini product visual preview */}
          <div className="my-5 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-16 sm:h-20 flex items-center justify-center p-1.5 rounded-xl bg-black/50 border border-cyan-500/30">
              <img
                src="/images/velmo-capsulas.png"
                alt="Velmo Black Cápsulas"
                className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,229,255,0.2)]"
              />
            </div>
            <span className="text-rose-500 font-black text-lg">+</span>
            <div className="h-16 sm:h-20 flex items-center justify-center p-1.5 rounded-xl bg-black/50 border border-rose-500/40">
              <img
                src="/images/velmo-drink-morango.png"
                alt="Velmo Black Drink Morango"
                className="h-full w-auto object-contain drop-shadow-[0_4px_10px_rgba(255,30,86,0.25)]"
              />
            </div>
          </div>

          {/* Main VIP WhatsApp Button */}
          <div className="max-w-md mx-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-6 sm:px-8 py-4 text-sm sm:text-base font-black text-white shadow-[0_0_30px_rgba(255,30,86,0.5)] btn-shimmer strawberry-glow-pulse transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
              <span>CONVERSAR COM ESPECIALISTA NO WHATSAPP</span>
            </a>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-[11px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-rose-400" />
                <span>Atendimento 100% Humano e Sigiloso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-rose-400" />
                <span>Resposta Rápida</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
