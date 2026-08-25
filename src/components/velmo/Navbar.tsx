import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, VELMO_WHATSAPP_DISPLAY } from "../../lib/whatsapp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-500/20 bg-[#07080a]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center flex-shrink-0 group">
          <img
            src="/images/velmo-logo.png"
            alt="Velmo Black Oficial"
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,30,86,0.3)]"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-medium text-zinc-300">
          <a href="#produtos" className="whitespace-nowrap transition-colors hover:text-rose-400">
            Produtos
          </a>
          <a href="#como-funciona" className="whitespace-nowrap transition-colors hover:text-rose-400">
            Como Funciona
          </a>
          <a href="#simulador" className="whitespace-nowrap transition-colors hover:text-rose-400 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-rose-500 flex-shrink-0" />
            Simulador
          </a>
          <a href="#comparativo" className="whitespace-nowrap transition-colors hover:text-rose-400">
            Diferenciais
          </a>
          <a href="#depoimentos" className="whitespace-nowrap transition-colors hover:text-rose-400">
            Depoimentos
          </a>
          <a href="#atendimento" className="whitespace-nowrap transition-colors hover:text-rose-400">
            Atendimento VIP
          </a>
          <a href="#faq" className="whitespace-nowrap transition-colors hover:text-rose-400">
            FAQ
          </a>
        </nav>

        {/* Action Button Area */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <div className="hidden 2xl:flex items-center gap-2 text-xs text-zinc-400 font-medium bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Consultores Online</span>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,30,86,0.7)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <WhatsAppIcon className="h-4 w-4 fill-white flex-shrink-0" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile / Tablet Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 ml-2"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden border-b border-rose-500/20 bg-[#0a0c10] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-zinc-300">
            <a onClick={() => setIsOpen(false)} href="#produtos" className="hover:text-rose-400 py-1">Linha de Produtos</a>
            <a onClick={() => setIsOpen(false)} href="#como-funciona" className="hover:text-rose-400 py-1">Como Funciona a Fórmula</a>
            <a onClick={() => setIsOpen(false)} href="#simulador" className="hover:text-rose-400 py-1 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose-500" />
              Simulador de Metas
            </a>
            <a onClick={() => setIsOpen(false)} href="#comparativo" className="hover:text-rose-400 py-1">Diferenciais Velmo Black</a>
            <a onClick={() => setIsOpen(false)} href="#depoimentos" className="hover:text-rose-400 py-1">Depoimentos Reais</a>
            <a onClick={() => setIsOpen(false)} href="#atendimento" className="hover:text-rose-400 py-1 font-bold text-rose-400">Atendimento Consultivo VIP</a>
            <a onClick={() => setIsOpen(false)} href="#faq" className="hover:text-rose-400 py-1">Perguntas Frequentes</a>
          </nav>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 py-3 text-center text-sm font-bold text-white shadow-[0_0_20px_rgba(255,30,86,0.4)] btn-shimmer"
            >
              <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
              <span>Chamar no WhatsApp ({VELMO_WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
