import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como devo tomar o Velmo Black (Cápsulas e Drink Morango)?",
      a: "Recomenda-se tomar 2 cápsulas de Velmo Black pela manhã (junto com água ou café da manhã) para despertar o metabolismo e queimar gordura durante o dia. O Velmo Black Drink sabor Morango Silvestre deve ser dissolvido (1 colher dosadora) em 200ml a 300ml de água bem gelada à tarde ou antes das principais refeições para promover saciedade prolongada e efeito detox.",
    },
    {
      q: "O Velmo Black possui algum efeito colateral ou causa taquicardia?",
      a: "Não! O Velmo Black é um suplemento alimentar 100% formulado com nutrientes, extratos botânicos e minerais equilibrados (Laranja Moro, Picolinato de Cromo, Triptofano). Ele não provoca palpitações, tremores, insônia ou irritabilidade, agindo de forma limpa e segura no seu organismo.",
    },
    {
      q: "Em quanto tempo começo a notar os primeiros resultados?",
      a: "Nas primeiras 48 a 72 horas a maioria dos clientes já relata sensação notável de desinchaço abdominal, redução drástica da compulsão por doces e maior disposição física. Entre 2 a 4 semanas de uso contínuo, a redução de medidas e perda de peso tornam-se altamente visíveis nas roupas e na balança.",
    },
    {
      q: "O que acontece quando eu parar de tomar? Tem efeito sanfona/rebote?",
      a: "Diferente de remédios agressivos que destroem a flora e desregulam os hormônios, o Velmo Black ajuda a reprogramar a sensibilidade à insulina e a regular o apetite natural. Seguindo o protocolo de 90 a 150 dias, seu corpo se acostuma ao novo ritmo metabólico, evitando o efeito rebote.",
    },
    {
      q: "O produto é autorizado pelos órgãos reguladores?",
      a: "Sim. O Velmo Black é um suplemento alimentar de acordo com a RDC nº 240/2018 e RDC 27/2010 da ANVISA, sendo dispensado de registro de medicamento por ser composto exclusivamente por ingredientes autorizados e seguros para o consumo humano.",
    },
    {
      q: "Qual é o prazo de entrega e como funciona o envio?",
      a: "Os pedidos são despachados em até 24 horas úteis após a confirmação. O prazo médio de entrega varia de 3 a 7 dias úteis para a maior parte do Brasil. Você recebe o código de rastreamento no seu WhatsApp para acompanhar cada etapa em tempo real.",
    },
    {
      q: "Quem não deve consumir o produto?",
      a: "O produto não é recomendado para gestantes, lactantes (mulheres que estão amamentando) e crianças/menores de 19 anos sem a orientação prévia de um médico ou nutricionista.",
    },
    {
      q: "Como faço para comprar com segurança e tirar dúvidas agora?",
      a: "Basta clicar em qualquer botão do site para ser redirecionado(a) imediatamente ao nosso WhatsApp oficial. Um(a) consultor(a) especializado(a) irá te atender, indicar o melhor kit e processar seu pedido com total discrição e agilidade.",
    },
  ];

  return (
    <section id="faq" className="relative py-12 sm:py-16 lg:py-24 bg-[#07080a]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <HelpCircle className="h-3 w-3" />
            Tire Suas Dúvidas
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Perguntas Frequentes sobre o{" "}
            <span className="strawberry-text-gradient">Velmo Black</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-zinc-400">
            Transparência total para você tomar a melhor decisão para a sua saúde.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="mt-8 sm:mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl border border-zinc-800 bg-[#0d1017] overflow-hidden transition-all duration-200 hover:border-rose-500/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-3.5 sm:p-5 text-left text-xs sm:text-base font-bold text-white transition-colors"
                >
                  <span className="pr-3 leading-snug">{faq.q}</span>
                  <div className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-900 text-rose-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-rose-950 text-rose-300" : ""}`}>
                    <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-zinc-800/80 px-3.5 sm:px-5 pt-2.5 pb-4 sm:pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed bg-[#0a0c12]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-8 sm:mt-10 text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-zinc-900/40 border border-zinc-800">
          <p className="text-xs sm:text-sm font-semibold text-zinc-300">
            Ainda tem alguma dúvida específica sobre o seu caso?
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider btn-shimmer transition-colors"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 fill-rose-400 flex-shrink-0" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
