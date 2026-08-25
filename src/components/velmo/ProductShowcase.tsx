import { useState } from "react";
import { Check, Flame, Sparkles, Zap } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"duo" | "capsulas" | "drink">("duo");
  const [selectedFlavor, setSelectedFlavor] = useState<"morango" | "tangerina">("morango");

  return (
    <section id="produtos" className="relative py-12 sm:py-16 lg:py-24 bg-[#07080a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Sparkles className="h-3 w-3" />
            Catálogo Oficial Velmo Black
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
            Escolha sua fórmula contra a{" "}
            <span className="strawberry-text-gradient">gordura e a indisposição</span>
          </h2>
          
          <p className="text-xs sm:text-sm lg:text-base text-zinc-400">
            Fórmulas bioativas de alta concentração com o sabor irresistível e a potência do Morango Silvestre.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab("duo")}
            className={`flex items-center gap-2 rounded-xl sm:rounded-2xl px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all duration-300 ${
              activeTab === "duo"
                ? "bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] scale-105"
                : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <Flame className={`h-4 w-4 ${activeTab === "duo" ? "text-white animate-pulse" : "text-rose-500"}`} />
            <span>⚡ PROTOCOLO DUO (TOP 1)</span>
          </button>

          <button
            onClick={() => setActiveTab("capsulas")}
            className={`flex items-center gap-2 rounded-xl sm:rounded-2xl px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all duration-300 ${
              activeTab === "capsulas"
                ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] scale-105"
                : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <span>💊 CÁPSULAS</span>
          </button>

          <button
            onClick={() => setActiveTab("drink")}
            className={`flex items-center gap-2 rounded-xl sm:rounded-2xl px-3.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all duration-300 ${
              activeTab === "drink"
                ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] scale-105"
                : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <span>🍹 DRINK MORANGO</span>
          </button>
        </div>

        {/* Dynamic Tab Content */}
        <div className="mt-8 sm:mt-10">
          
          {/* TAB 1: PROTOCOLO DUO BLACK */}
          {activeTab === "duo" && (
            <div className="rounded-2xl sm:rounded-3xl border border-rose-500/40 bg-gradient-to-br from-[#120a0f] via-[#090b10] to-[#120a0f] p-4 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,30,86,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-rose-300 border border-rose-500/40">
                  <Flame className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
                  SINERGIA 24H: CÁPSULAS + DRINK MORANGO
                </div>

                <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
                  Protocolo Duo Velmo Black:{" "}
                  <span className="strawberry-text-gradient">O Poder da Ação Dupla</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Por que escolher entre queimar gordura ou saciar a fome se você pode ter os dois? O **Protocolo Duo** combina a ação termogênica das Cápsulas durante a manhã com o efeito desintoxicante do Drink de Morango à tarde/noite.
                </p>

                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 rounded-full bg-rose-500/20 text-rose-400 items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-200">
                      <strong>Manhã</strong>: 2 Cápsulas para despertar o metabolismo e acelerar a termogênese.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 rounded-full bg-rose-500/20 text-rose-400 items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-200">
                      <strong>Tarde</strong>: 1 dose do Drink Morango gelado para saciedade imediata e desinchaço.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 rounded-full bg-rose-500/20 text-rose-400 items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-200">
                      <strong>Noite</strong>: L-Triptofano para relaxamento, sono reparador e zero ansiedade noturna.
                    </span>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.03] transition-all"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
                    <span>GARANTIR PROTOCOLO DUO NO WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Right Visual Graphic with Real Images */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm rounded-2xl sm:rounded-3xl bg-zinc-950 p-4 sm:p-6 border border-rose-500/40 shadow-xl">
                  <div className="absolute -top-2.5 right-3 rounded-full bg-rose-500 px-2.5 py-0.5 text-[10px] font-black text-white uppercase shadow-md">
                    Kit Campeão
                  </div>
                  <div className="grid grid-cols-2 gap-3 py-3 sm:py-5 items-center">
                    <div className="text-center p-2 rounded-xl bg-black/60 border border-cyan-500/30">
                      <div className="h-28 sm:h-36 w-full flex items-center justify-center overflow-hidden mb-1">
                        <img
                          src="/images/velmo-capsulas.png"
                          alt="Velmo Black Cápsulas"
                          className="h-full w-auto object-contain drop-shadow-[0_5px_15px_rgba(0,229,255,0.2)]"
                        />
                      </div>
                      <span className="font-bold text-[11px] text-white block">Cápsulas</span>
                      <span className="text-[9px] text-cyan-400">60 caps • Termogênico</span>
                    </div>

                    <div className="text-center p-2 rounded-xl bg-black/60 border border-rose-500/40">
                      <div className="h-28 sm:h-36 w-full flex items-center justify-center overflow-hidden mb-1">
                        <img
                          src="/images/velmo-drink-morango.png"
                          alt="Velmo Black Drink Morango"
                          className="h-full w-auto object-contain drop-shadow-[0_5px_15px_rgba(255,30,86,0.25)]"
                        />
                      </div>
                      <span className="font-bold text-[11px] text-white block">Drink Morango</span>
                      <span className="text-[9px] text-rose-400">150g • Saciedade & Detox</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/90 p-2.5 text-center border border-zinc-800 text-[11px] text-zinc-300">
                    🏆 <strong>87% dos clientes</strong> escolhem o Duo para queima acelerada.
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: VELMO BLACK CÁPSULAS */}
          {activeTab === "capsulas" && (
            <div className="rounded-2xl sm:rounded-3xl border border-rose-500/40 bg-gradient-to-br from-[#120a0f] via-[#090b10] to-[#120a0f] p-4 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,30,86,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-rose-300 border border-rose-500/40">
                  <Zap className="h-3.5 w-3.5 text-rose-400" />
                  TERMOGÊNICO LIPOLÍTICO DE ALTA ABSORÇÃO
                </div>

                <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
                  Velmo Black Cápsulas:{" "}
                  <span className="strawberry-text-gradient">Foco, Energia & Queima</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Desenvolvido para destravar o metabolismo lento e ativar a termogênese celular sem palpitações.
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                  <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[11px] sm:text-xs font-bold text-rose-400 block">Laranja Moro</span>
                    <span className="text-[10px] sm:text-xs text-zinc-300">Queima visceral</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[11px] sm:text-xs font-bold text-rose-400 block">Picolinato Cromo</span>
                    <span className="text-[10px] sm:text-xs text-zinc-300">Zero doce</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[11px] sm:text-xs font-bold text-rose-400 block">L-Triptofano</span>
                    <span className="text-[10px] sm:text-xs text-zinc-300">Humor e sono</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-[11px] sm:text-xs font-bold text-rose-400 block">Cafeína Anidra</span>
                    <span className="text-[10px] sm:text-xs text-zinc-300">Energia limpa</span>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.03] transition-all"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
                    <span>SOLICITAR CÁPSULAS NO WHATSAPP</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-sm rounded-2xl sm:rounded-3xl bg-zinc-950 p-4 sm:p-6 border border-rose-500/30 text-center shadow-xl">
                  <div className="h-44 sm:h-56 w-full flex items-center justify-center overflow-hidden my-2">
                    <img
                      src="/images/velmo-capsulas.png"
                      alt="Frasco Velmo Black 60 Cápsulas"
                      className="h-full w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,229,255,0.25)]"
                    />
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">Frasco 60 Cápsulas</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Tratamento para 30 dias (2 caps/dia)</p>
                  <div className="mt-3 pt-3 border-t border-zinc-800 text-[11px] text-zinc-300 space-y-0.5">
                    <p>✓ Sem taquicardia ou tremor</p>
                    <p>✓ Rápida absorção</p>
                    <p>✓ 100% sem glúten</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: VELMO BLACK DRINK SOLÚVEL */}
          {activeTab === "drink" && (
            <div className="rounded-2xl sm:rounded-3xl border border-red-500/40 bg-gradient-to-br from-[#120a0f] via-[#090b10] to-[#120a0f] p-4 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,30,86,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/20 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-rose-300 border border-rose-500/40">
                  <Sparkles className="h-3.5 w-3.5 text-rose-400" />
                  BEBIDA FUNCIONAL • DRENAGEM & SACIEDADE
                </div>

                <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
                  Velmo Black Drink:{" "}
                  <span className="strawberry-text-gradient">Desinchaço & Sabor Morango</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Uma bebida refrescante com sabor de Morango Silvestre para dissolver em água gelada e promover saciedade e drenagem de líquidos.
                </p>

                {/* Sabor Selector */}
                <div className="space-y-2 pt-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 block">
                    Escolha seu sabor:
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedFlavor("morango")}
                      className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold border transition-all ${
                        selectedFlavor === "morango"
                          ? "bg-rose-950/90 border-rose-500 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>🍓 Morango (#1)</span>
                    </button>

                    <button
                      onClick={() => setSelectedFlavor("tangerina")}
                      className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold border transition-all ${
                        selectedFlavor === "tangerina"
                          ? "bg-amber-950/80 border-amber-500 text-amber-300"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>🍊 Tangerina</span>
                    </button>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-5 sm:px-7 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.03] transition-all"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
                    <span>PEDIR VELMO DRINK NO WHATSAPP</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-sm rounded-2xl sm:rounded-3xl bg-zinc-950 p-4 sm:p-6 border border-rose-500/40 text-center shadow-xl">
                  <div className="h-44 sm:h-56 w-full flex items-center justify-center overflow-hidden my-2">
                    <img
                      src="/images/velmo-drink-morango.png"
                      alt="Pote Velmo Black Drink Sabor Morango 150g"
                      className="h-full w-auto object-contain drop-shadow-[0_10px_25px_rgba(255,30,86,0.3)]"
                    />
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white">Pote 150g Solúvel</h4>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Rende até 30 doses refrescantes</p>
                  <div className="mt-3 pt-3 border-t border-zinc-800 text-[11px] text-zinc-300 space-y-0.5">
                    <p>✓ Inulina & Polidextrose puras</p>
                    <p>✓ Zero açúcar e poucas calorias</p>
                    <p>✓ Desincha e regula</p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
