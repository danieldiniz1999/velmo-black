import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

interface Buyer {
  id: number;
  name: string;
  location: string;
  product: string;
  timeAgo: string;
  initials: string;
}

const BUYERS: Buyer[] = [
  { id: 1, name: "Mariana Alencar", location: "Fortaleza, CE", product: "Protocolo Duo Morango (3 Meses)", timeAgo: "há 2 min", initials: "MA" },
  { id: 2, name: "Rodrigo Mendonça", location: "São Paulo, SP", product: "Velmo Black Cápsulas (60 caps)", timeAgo: "há 3 min", initials: "RM" },
  { id: 3, name: "Camila Guimarães", location: "Belo Horizonte, MG", product: "Velmo Black Drink Morango", timeAgo: "há 5 min", initials: "CG" },
  { id: 4, name: "Juliana Silveira", location: "Curitiba, PR", product: "Protocolo Duo Black (5 Meses)", timeAgo: "há 7 min", initials: "JS" },
  { id: 5, name: "Lucas Ferreira", location: "Rio de Janeiro, RJ", product: "Velmo Black Cápsulas (Kit 3)", timeAgo: "há 9 min", initials: "LF" },
  { id: 6, name: "Patricia Albuquerque", location: "Recife, PE", product: "Protocolo Duo Morango", timeAgo: "há 11 min", initials: "PA" },
  { id: 7, name: "Fernanda Ribeiro", location: "Porto Alegre, RS", product: "Velmo Black Drink Morango", timeAgo: "há 13 min", initials: "FR" },
  { id: 8, name: "Eduardo Vasconcelos", location: "Brasília, DF", product: "Protocolo Transformação 5 Meses", timeAgo: "há 15 min", initials: "EV" },
  { id: 9, name: "Beatriz Nogueira", location: "Salvador, BA", product: "Protocolo Duo Morango (3 Meses)", timeAgo: "há 16 min", initials: "BN" },
  { id: 10, name: "Thiago Azevedo", location: "Goiânia, GO", product: "Velmo Black Cápsulas (60 caps)", timeAgo: "há 18 min", initials: "TA" },
  { id: 11, name: "Renata Castilho", location: "Florianópolis, SC", product: "Protocolo Duo Morango (3 Meses)", timeAgo: "há 20 min", initials: "RC" },
  { id: 12, name: "Gabriel Sampaio", location: "Campinas, SP", product: "Velmo Black Drink Morango", timeAgo: "há 22 min", initials: "GS" },
  { id: 13, name: "Vanessa Martins", location: "Manaus, AM", product: "Protocolo Duo Morango", timeAgo: "há 25 min", initials: "VM" },
  { id: 14, name: "Diego Oliveira", location: "Vitória, ES", product: "Protocolo Transformação 5 Meses", timeAgo: "há 28 min", initials: "DO" },
  { id: 15, name: "Aline Barreto", location: "Natal, RN", product: "Velmo Black Cápsulas (Kit 3)", timeAgo: "há 30 min", initials: "AB" },
  { id: 16, name: "Guilherme Santos", location: "Campo Grande, MS", product: "Velmo Black Drink Morango", timeAgo: "há 33 min", initials: "GS" },
  { id: 17, name: "Larissa Farias", location: "João Pessoa, PB", product: "Protocolo Duo Morango (3 Meses)", timeAgo: "há 35 min", initials: "LF" },
  { id: 18, name: "Marcelo Rocha", location: "Ribeirão Preto, SP", product: "Velmo Black Cápsulas (60 caps)", timeAgo: "há 38 min", initials: "MR" },
  { id: 19, name: "Bruna Cavalcante", location: "Maceió, AL", product: "Protocolo Duo Black (5 Meses)", timeAgo: "há 40 min", initials: "BC" },
  { id: 20, name: "Fabiana Medeiros", location: "Cuiabá, MT", product: "Protocolo Duo Morango", timeAgo: "há 42 min", initials: "FM" },
];

export function RecentBuyersPopup() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;
    let cycleInterval: NodeJS.Timeout;

    // First buyer appears after 3 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);

      // Duration of each popup is 3 seconds
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      // Total cycle: 3s visible + 4s pause = 7000ms
      cycleInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % BUYERS.length);
        setIsVisible(true);

        hideTimeout = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }, 7000);
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimeout);
      clearInterval(cycleInterval);
    };
  }, []);

  const currentBuyer = BUYERS[currentIndex];

  if (!currentBuyer) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 max-w-[290px] sm:max-w-[360px] transition-all duration-500 ease-out pointer-events-none ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95"
      }`}
    >
      <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl bg-[#0c1017]/95 p-2.5 sm:p-3.5 border border-rose-500/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.85),0_0_15px_rgba(255,30,86,0.2)] pointer-events-auto">
        
        {/* Buyer Avatar / Initial */}
        <div className="relative flex-shrink-0">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-red-600/40 border border-rose-400/50 text-rose-300 font-extrabold text-[11px] sm:text-xs shadow-inner">
            {currentBuyer.initials}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[8px] text-white ring-1 ring-zinc-950">
            ✓
          </span>
        </div>

        {/* Buyer Information */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center justify-between gap-1 leading-none">
            <span className="text-[11px] sm:text-xs font-black text-white truncate">
              {currentBuyer.name}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 flex-shrink-0">
              {currentBuyer.timeAgo}
            </span>
          </div>

          <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium truncate mt-0.5">
            📍 {currentBuyer.location}
          </div>

          <div className="mt-0.5 flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-rose-400 truncate">
            <ShoppingBag className="h-2.5 w-2.5 sm:h-3 sm:w-3 flex-shrink-0 text-rose-400" />
            <span className="truncate">{currentBuyer.product}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
