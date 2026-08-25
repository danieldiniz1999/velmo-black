import { Truck, Flame } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-zinc-950 via-rose-950/60 to-zinc-950 border-b border-rose-500/30 py-2.5 text-xs font-semibold text-zinc-200">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2 text-rose-300">
          <Flame className="h-4 w-4 text-rose-400 animate-pulse" />
          <span>Fórmula Black Edition • A Base de Morango Silvestre</span>
        </div>

        <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center rounded-full bg-rose-500/20 px-2.5 py-0.5 text-[11px] font-bold text-rose-300 border border-rose-500/40 animate-pulse">
            ATENDIMENTO VIP LIBERADO
          </span>
          <span className="text-zinc-200">
            Consultoria e Condições Especiais no WhatsApp hoje!
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-zinc-300 text-[11px]">
          <Truck className="h-3.5 w-3.5 text-rose-400" />
          <span>Envio com Rastreio Expresso para todo Brasil</span>
        </div>
      </div>
    </div>
  );
}
