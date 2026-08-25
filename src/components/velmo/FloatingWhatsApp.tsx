import { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { getWhatsAppUrl, VELMO_WHATSAPP_DISPLAY } from "../../lib/whatsapp";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds of scrolling or browsing
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowPopup(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Floating Speech Bubble / Lead Generator */}
      {showPopup && (
        <div className="relative max-w-xs rounded-2xl bg-[#0c1017] p-4 text-xs shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-cyan-500/40 backdrop-blur-xl animate-fade-in">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-300 p-1"
            aria-label="Fechar aviso"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Consultora Especialista Velmo Black"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-emerald-400"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-zinc-950"></span>
            </div>

            <div className="pr-4">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <span>Dra. Beatriz • Velmo Black</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Olá! Quer descobrir o protocolo ideal para o seu corpo? Fale comigo agora! ✨
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 py-2 px-3 text-[11px] font-extrabold text-black shadow-md hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-black" />
            <span>Iniciar Atendimento no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse Ripple Effect */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 pointer-events-none" />

        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 fill-white text-white drop-shadow-md" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400 border-2 border-zinc-950"></span>
        </span>
      </a>
    </div>
  );
}
