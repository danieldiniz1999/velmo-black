import { Star, CheckCircle, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Mariana Alencar",
      age: "34 anos • Fortaleza, CE",
      weightLoss: "-9.4 kg em 45 dias",
      text: "Eu sofria com a compulsão por doces. Quando comecei o Protocolo Duo com o Drink de Morango, em 4 dias já senti a barriga desinchar e a ansiedade sumir. Hoje já perdi mais de 9kg!",
      stars: 5,
      product: "Protocolo Duo Morango",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Rodrigo Mendonça",
      age: "41 anos • São Paulo, SP",
      weightLoss: "-14.2 kg em 3 meses",
      text: "Metabolismo travado depois dos 40. O Velmo Black Cápsulas me deu um pique surreal e a gordura abdominal derreteu sem passar fome. Atendimento no WhatsApp nota 10.",
      stars: 5,
      product: "Velmo Black Cápsulas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Camila Guimarães",
      age: "29 anos • Belo Horizonte, MG",
      weightLoss: "-7.8 kg em 30 dias",
      text: "O Drink sabor Morango Silvestre é simplesmente delicioso! Tomo geladinho e fico sem fome a tarde toda. Foi a melhor escolha que fiz, recomendo demais!",
      stars: 5,
      product: "Velmo Black Drink Morango",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    },
  ];

  const whatsappPrints = [
    {
      sender: "Fernanda R.",
      time: "14:23",
      message: "Menina, fui me pesar hoje e já foram 4.8kg em 18 dias com o combo de Morango! Minha calça 38 voltou a fechar folgada! 😭❤️",
    },
    {
      sender: "Juliana Costa",
      time: "18:45",
      message: "Zero taquicardia ou palpitação. O sabor de morango é uma delícia, durmo super bem e acordo leve. Quero pedir mais 2 potes!",
    },
    {
      sender: "Carlos Eduardo",
      time: "10:12",
      message: "Chegou super rápido, discreto e lacrado. A consultora no WhatsApp tirou todas as dúvidas e me deu dicas de horário.",
    },
  ];

  return (
    <section id="depoimentos" className="relative py-12 sm:py-16 lg:py-24 bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Vidas Reais, Resultados Reais
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Quem experimentou o Velmo Black{" "}
            <span className="strawberry-text-gradient">não troca por nada</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
            Confira depoimentos e mensagens espontâneas de quem transformou o corpo.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#0d1017] p-4 sm:p-6 border border-zinc-800 hover:border-rose-500/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-rose-500/20 text-rose-300 px-2.5 py-0.5 text-[11px] font-bold border border-rose-500/30">
                    {item.weightLoss}
                  </span>
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-rose-500/40"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                    {item.name}
                    <CheckCircle className="h-3 w-3 text-rose-400 fill-rose-400/20" />
                  </h4>
                  <span className="text-[11px] text-zinc-400 block">{item.age}</span>
                  <span className="text-[10px] font-semibold text-rose-400">{item.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Real Feedback Simulation Cards */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-800">
          <div className="text-center mb-5 sm:mb-6">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-rose-400">
              PRINTS ESPONTÂNEOS RECEBIDOS NO SUPORTE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            {whatsappPrints.map((msg, index) => (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl bg-[#0b141a] p-3.5 sm:p-4 border border-emerald-500/20 shadow-md relative"
              >
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-emerald-700/40 flex items-center justify-center text-emerald-400 font-bold text-[10px]">
                      {msg.sender[0]}
                    </div>
                    <span className="font-bold text-zinc-200">{msg.sender}</span>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500">{msg.time}</span>
                </div>

                <div className="mt-2 text-xs text-zinc-200 leading-relaxed bg-[#111b21] p-2.5 rounded-lg border border-zinc-800">
                  "{msg.message}"
                </div>

                <div className="mt-2 flex items-center justify-end gap-1 text-[9px] text-emerald-400 font-bold">
                  <span>Mensagem Verificada</span>
                  <CheckCircle className="h-3 w-3 fill-emerald-500/30" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Action Button */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.03] transition-all"
          >
            <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
            <span>QUERO SER O PRÓXIMO RESULTADO NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
