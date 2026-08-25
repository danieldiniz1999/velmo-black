import { useState } from "react";
import { MessageCircle, Menu, X, Sparkles, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl, VELMO_WHATSAPP_DISPLAY } from "../../lib/whatsapp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/10 bg-[#07080a]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-700 p-[1px] shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#0a0c10]">
              <span className="font-black text-xl tracking-tighter text-cyan-400">V</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-wider text-white">VELMO</span>
              <span className="font-extrabold text-xl tracking-wider text-cyan-400 drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]">BLACK</span>
            </div>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-400">Official Bio-Performance</span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#produtos" className="transition-colors hover:text-cyan-400">Linha Black</a>
          <a href="#como-funciona" className="transition-colors hover:text-cyan-400">Fórmula & Ação</a>
          <a href="#simulador" className="transition-colors hover:text-cyan-400 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Simulador de Metas
          </a>
          <a href="#comparativo" className="transition-colors hover:text-cyan-400">Diferenciais</a>
          <a href="#depoimentos" className="transition-colors hover:text-cyan-400">Resultados</a>
          <a href="#kits" className="transition-colors hover:text-cyan-400">Tratamentos</a>
          <a href="#faq" className="transition-colors hover:text-cyan-400">Dúvidas</a>
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800">
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
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4 fill-black" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800"
          aria-label="Abrir Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-cyan-500/20 bg-[#0a0c10] px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-zinc-300">
            <a onClick={() => setIsOpen(false)} href="#produtos" className="hover:text-cyan-400 py-1">Linha Black</a>
            <a onClick={() => setIsOpen(false)} href="#como-funciona" className="hover:text-cyan-400 py-1">Fórmula & Ação</a>
            <a onClick={() => setIsOpen(false)} href="#simulador" className="hover:text-cyan-400 py-1 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Simulador de Metas
            </a>
            <a onClick={() => setIsOpen(false)} href="#comparativo" className="hover:text-cyan-400 py-1">Diferenciais</a>
            <a onClick={() => setIsOpen(false)} href="#depoimentos" className="hover:text-cyan-400 py-1">Resultados Reais</a>
            <a onClick={() => setIsOpen(false)} href="#kits" className="hover:text-cyan-400 py-1">Kits Promocionais</a>
            <a onClick={() => setIsOpen(false)} href="#faq" className="hover:text-cyan-400 py-1">Dúvidas Frequentes</a>
          </nav>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 py-3 text-center text-sm font-bold text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              <MessageCircle className="h-5 w-5 fill-black" />
              <span>Chamar no WhatsApp ({VELMO_WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
