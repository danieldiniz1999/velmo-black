import { ShieldCheck, Lock, Truck } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, VELMO_WHATSAPP_DISPLAY } from "../../lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-zinc-800/80 text-zinc-400 text-xs pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-red-700 text-white font-black text-base shadow-[0_0_15px_rgba(255,30,86,0.4)]">
                V
              </div>
              <span className="text-xl font-extrabold text-white tracking-wider">
                VELMO <span className="text-rose-500">BLACK</span>
              </span>
            </div>
            
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              A linha de suplementos bioativos de alta performance desenvolvida para acelerar o metabolismo, modular a saciedade e promover o emagrecimento saudável e sustentável.
            </p>

            <div className="flex items-center gap-3 pt-2 text-zinc-300">
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 text-xs">
                <ShieldCheck className="h-4 w-4 text-rose-500" />
                <span>RDC ANVISA 240/2018</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 text-xs">
                <Lock className="h-4 w-4 text-rose-500" />
                <span>Compra & Atendimento 100% Seguros</span>
              </div>
            </div>
          </div>

          {/* Col 2: Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white text-xs">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#produtos" className="hover:text-rose-400 transition-colors">Linha de Produtos</a></li>
              <li><a href="#como-funciona" className="hover:text-rose-400 transition-colors">Como Funciona a Fórmula</a></li>
              <li><a href="#simulador" className="hover:text-rose-400 transition-colors">Simulador de Metas</a></li>
              <li><a href="#depoimentos" className="hover:text-rose-400 transition-colors">Resultados & Prova Social</a></li>
              <li><a href="#atendimento" className="hover:text-rose-400 transition-colors">Atendimento VIP WhatsApp</a></li>
              <li><a href="#faq" className="hover:text-rose-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Atendimento Oficial */}
          <div className="space-y-3">
            <h4 className="font-extrabold uppercase tracking-wider text-white text-xs">
              Atendimento Oficial
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Dúvidas sobre dosagens, prazos de entrega ou pedidos especiais:
            </p>
            <div className="pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 font-bold text-sm bg-rose-950/50 px-3 py-2 rounded-xl border border-rose-500/40 btn-shimmer"
              >
                <WhatsAppIcon className="h-4 w-4 fill-rose-400 flex-shrink-0" />
                <span>{VELMO_WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer / Legal Notice */}
        <div className="mt-8 space-y-4 text-[11px] text-zinc-500 leading-relaxed">
          <p>
            <strong>AVISO LEGAL E INFORMAÇÕES DE SAÚDE:</strong> Este produto é classificado como suplemento alimentar, nos termos da RDC nº 240/2018 e RDC 27/2010 da ANVISA, sendo dispensado da obrigatoriedade de registro de medicamento. Não é um medicamento e não substitui uma alimentação equilibrada e a orientação de médicos ou nutricionistas. Os resultados podem variar de acordo com o metabolismo individual, rotina e hábitos de vida de cada pessoa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-900 text-zinc-600">
            <p>© {new Date().getFullYear()} Velmo Black Oficial. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">
              Feito com excelência para resultados extraordinários.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
