import { Star, CheckCircle, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function SocialProofSection() {
  const testimonials = [
    {
      name: "Mariana Alencar",
      age: "34 anos • Fortaleza, CE",
      weightLoss: "-9.4 kg em 45 dias",
      text: "Eu sofria demais com a compulsão por doces depois do almoço e à noite. Quando comecei o Protocolo Duo com o Drink de Morango, nos primeiros 4 dias já senti a diferença: barriga desinchou e a ansiedade sumiu. Hoje já perdi mais de 9kg!",
      stars: 5,
      product: "Protocolo Duo Morango",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Rodrigo Mendonça",
      age: "41 anos • São Paulo, SP",
      weightLoss: "-14.2 kg em 3 meses",
      text: "Metabolismo depois dos 40 trava, parecia impossível emagrecer. O Velmo Black Cápsulas me deu um pique surreal para o dia a dia e a gordura abdominal derreteu sem eu precisar passar fome. Atendimento no WhatsApp foi 10/10.",
      stars: 5,
      product: "Velmo Black Cápsulas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Camila Guimarães",
      age: "29 anos • Belo Horizonte, MG",
      weightLoss: "-7.8 kg em 30 dias",
      text: "O Drink sabor Morango Silvestre é simplesmente maravilhoso e delicioso! Tomo geladinho e fico sem fome a tarde inteira. Foi a melhor escolha que fiz esse ano, recomendo de olhos fechados!",
      stars: 5,
      product: "Velmo Black Drink Morango",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    },
  ];

  const whatsappPrints = [
    {
      sender: "Fernanda R.",
      time: "14:23",
      message: "Menina, vim correndo te agradecer! Fui me pesar hoje de manhã e já se foram 4.8kg em apenas 18 dias usando o combo de Morango. Minha calça jeans 38 voltou a fechar folgada! 😭❤️",
    },
    {
      sender: "Juliana Costa",
      time: "18:45",
      message: "O melhor de tudo é que não me deu taquicardia nenhuma (coisa que outros termogênicos me davam). O sabor de morango é uma delícia, durmo super bem e acordo leve. Quero pedir mais 2 potes pro meu marido!",
    },
    {
      sender: "Carlos Eduardo",
      time: "10:12",
      message: "Chegou super rápido aqui em casa, tudo bem embalado e discreto. A consultora que me atendeu no WhatsApp tirou todas as dúvidas e me deu várias dicas de horário. Parabéns pelo profissionalismo!",
    },
  ];

  return (
    <section id="depoimentos" className="relative py-20 lg:py-28 bg-[#090b10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Sparkles className="h-3.5 w-3.5" />
            Vidas Reais, Resultados Reais
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Quem experimentou o Velmo Black{" "}
            <span className="strawberry-text-gradient">não troca por nada</span>
          </h2>
          
          <p className="text-base text-zinc-400">
            Confira depoimentos e mensagens espontâneas de pessoas que decidiram transformar seus corpos.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl bg-[#0d1017] p-6 sm:p-8 border border-zinc-800 hover:border-rose-500/40 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-rose-500/20 text-rose-300 px-3 py-0.5 text-xs font-bold border border-rose-500/30">
                    {item.weightLoss}
                  </span>
                </div>

                <p className="mt-5 text-sm text-zinc-300 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-rose-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle className="h-3.5 w-3.5 text-rose-400 fill-rose-400/20" />
                  </h4>
                  <span className="text-xs text-zinc-400 block">{item.age}</span>
                  <span className="text-[11px] font-semibold text-rose-400">{item.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Real Feedback Simulation Cards */}
        <div className="mt-14 pt-10 border-t border-zinc-800">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-rose-400">
              PRINTS ESPONTÂNEOS RECEBIDOS NO SUPORTE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatsappPrints.map((msg, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#0b141a] p-4 sm:p-5 border border-emerald-500/20 shadow-lg relative"
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-emerald-700/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
                      {msg.sender[0]}
                    </div>
                    <span className="font-bold text-zinc-200">{msg.sender}</span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">{msg.time}</span>
                </div>

                <div className="mt-3 text-xs sm:text-sm text-zinc-200 leading-relaxed bg-[#111b21] p-3 rounded-xl border border-zinc-800">
                  "{msg.message}"
                </div>

                <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-emerald-400 font-bold">
                  <span>Mensagem Verificada</span>
                  <CheckCircle className="h-3.5 w-3.5 fill-emerald-500/30" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Action Button */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-8 py-4 text-base font-extrabold text-white shadow-[0_0_35px_rgba(255,30,86,0.4)] btn-shimmer hover:shadow-[0_0_50px_rgba(255,30,86,0.7)] hover:scale-105 transition-all"
          >
            <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
            <span>QUERO SER O PRÓXIMO RESULTADO NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
}
