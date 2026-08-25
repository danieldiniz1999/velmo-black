import { useState } from "react";
import { Check, Flame, Sparkles, Shield, Zap } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"duo" | "capsulas" | "drink">("duo");
  const [selectedFlavor, setSelectedFlavor] = useState<"morango" | "tangerina">("morango");

  return (
    <section id="produtos" className="relative py-20 lg:py-28 bg-[#07080a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Sparkles className="h-3.5 w-3.5" />
            Catálogo Oficial Velmo Black
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Escolha a sua arma contra a{" "}
            <span className="strawberry-text-gradient">gordura e a indisposição</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-400">
            Fórmulas bioativas de alta concentração com o sabor irresistível e a potência do Morango Silvestre.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab("duo")}
            className={`flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-black transition-all duration-300 ${
              activeTab === "duo"
                ? "bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 text-white shadow-[0_0_30px_rgba(255,30,86,0.5)] scale-105"
                : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <Flame className={`h-5 w-5 ${activeTab === "duo" ? "text-white animate-pulse" : "text-rose-500"}`} />
            <span>⚡ PROTOCOLO DUO (MAIS DESEJADO)</span>
          </button>

          <button
            onClick={() => setActiveTab("capsulas")}
            className={`flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-black transition-all duration-300 ${
              activeTab === "capsulas"
                ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-[0_0_30px_rgba(255,30,86,0.5)] scale-105"
                : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <span>💊 VELMO BLACK CÁPSULAS</span>
          </button>

          <button
            onClick={() => setActiveTab("drink")}
            className={`flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-black transition-all duration-300 ${
              activeTab === "drink"
                ? "bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-[0_0_30px_rgba(255,30,86,0.5)] scale-105"
                : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
            }`}
          >
            <span>🍹 VELMO BLACK DRINK (MORANGO #1)</span>
          </button>
        </div>

        {/* Dynamic Tab Content */}
        <div className="mt-12">
          
          {/* TAB 1: PROTOCOLO DUO BLACK */}
          {activeTab === "duo" && (
            <div className="rounded-3xl border border-rose-500/40 bg-gradient-to-br from-[#120a0f] via-[#090b10] to-[#120a0f] p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,30,86,0.2)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-3.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/40">
                  <Flame className="h-4 w-4 text-rose-400 animate-pulse" />
                  SINERGIA MÁXIMA 24H: CÁPSULAS + DRINK MORANGO
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Protocolo Duo Velmo Black:{" "}
                  <span className="strawberry-text-gradient">O Poder da Ação Dupla</span>
                </h3>

                <p className="text-base text-zinc-300 leading-relaxed">
                  Por que escolher entre queimar gordura ou saciar a fome se você pode ter os dois? O **Protocolo Duo** combina a ação termogênica lipolítica das Cápsulas durante a manhã com o efeito desintoxicante e saciante do Drink sabor Morango durante a tarde/noite.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 rounded-full bg-rose-500/20 text-rose-400 items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-200">
                      <strong>Manhã</strong>: 2 Cápsulas Velmo Black para despertar o metabolismo, focar no dia e iniciar a termogênese profunda.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 rounded-full bg-rose-500/20 text-rose-400 items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-200">
                      <strong>Tarde</strong>: 1 dose do Drink Velmo Black Morango gelado para saciedade imediata, corte total de vontade de doces e desinchaço.
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 rounded-full bg-rose-500/20 text-rose-400 items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-200">
                      <strong>Noite</strong>: O L-Triptofano atua no relaxamento muscular, melhora da qualidade do sono e controle da ansiedade noturna.
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-8 py-4 text-base font-extrabold text-white shadow-[0_0_35px_rgba(255,30,86,0.45)] btn-shimmer hover:shadow-[0_0_50px_rgba(255,30,86,0.7)] hover:scale-105 transition-all"
                  >
                    <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
                    <span>GARANTIR PROTOCOLO DUO NO WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Right Visual Graphic */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm rounded-3xl bg-zinc-950 p-6 border border-rose-500/40 shadow-[0_0_40px_rgba(255,30,86,0.25)]">
                  <div className="absolute -top-3 right-4 rounded-full bg-rose-500 px-3 py-1 text-[11px] font-black text-white uppercase shadow-md">
                    Kit Campeão de Vendas
                  </div>
                  <div className="flex items-center justify-center gap-4 py-8">
                    <div className="w-32 text-center p-3 rounded-2xl bg-zinc-900 border border-rose-500/40">
                      <div className="h-16 w-16 mx-auto rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-400/40 mb-2">
                        <span className="text-xl font-black text-white">60</span>
                      </div>
                      <span className="font-bold text-xs text-white block">Cápsulas</span>
                      <span className="text-[10px] text-rose-400">Laranja Moro</span>
                    </div>

                    <div className="text-rose-500 font-black text-2xl">+</div>

                    <div className="w-32 text-center p-3 rounded-2xl bg-zinc-900 border border-red-600/40">
                      <div className="h-16 w-16 mx-auto rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/40 mb-2">
                        <span className="text-xl font-black text-white">150g</span>
                      </div>
                      <span className="font-bold text-xs text-white block">Drink Morango</span>
                      <span className="text-[10px] text-rose-300">Fibras & Detox</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/90 p-3 text-center border border-zinc-800 text-xs text-zinc-300">
                    🏆 <strong>87% dos clientes</strong> optam pelo Protocolo Duo por acelerar a queima em até 3x mais.
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: VELMO BLACK CÁPSULAS */}
          {activeTab === "capsulas" && (
            <div className="rounded-3xl border border-rose-500/40 bg-gradient-to-br from-[#120a0f] via-[#090b10] to-[#120a0f] p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,30,86,0.2)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-3.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/40">
                  <Zap className="h-4 w-4 text-rose-400" />
                  TERMOGÊNICO LIPOLÍTICO DE ALTA ABSORÇÃO
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Velmo Black Cápsulas:{" "}
                  <span className="strawberry-text-gradient">Foco, Energia & Queima</span>
                </h3>

                <p className="text-base text-zinc-300 leading-relaxed">
                  Desenvolvido para destravar o metabolismo lento e ativar a termogênese celular. Sua fórmula exclusiva age no combate à gordura abdominal e na regulação dos neurotransmissores do apetite.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-xs font-bold text-rose-400 block">Laranja Moro</span>
                    <span className="text-xs text-zinc-300">Queima direta de gordura visceral</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-xs font-bold text-rose-400 block">Picolinato de Cromo</span>
                    <span className="text-xs text-zinc-300">Zero compulsão por doces</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-xs font-bold text-rose-400 block">L-Triptofano</span>
                    <span className="text-xs text-zinc-300">Equilíbrio da ansiedade e humor</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <span className="text-xs font-bold text-rose-400 block">Cafeína Anidra</span>
                    <span className="text-xs text-zinc-300">Energia limpa e foco prolongado</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-8 py-4 text-base font-extrabold text-white shadow-[0_0_35px_rgba(255,30,86,0.4)] btn-shimmer hover:shadow-[0_0_50px_rgba(255,30,86,0.7)] hover:scale-105 transition-all"
                  >
                    <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
                    <span>SOLICITAR VELMO BLACK CÁPSULAS NO WHATSAPP</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-zinc-950 p-8 border border-rose-500/30 text-center shadow-xl">
                  <div className="h-28 w-28 mx-auto rounded-full bg-gradient-to-tr from-rose-500/20 to-red-600/40 flex items-center justify-center border border-rose-400/40 mb-4">
                    <span className="text-3xl font-black text-white">60</span>
                    <span className="text-xs text-rose-300 font-bold ml-1">CAPS</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-white">Frasco 60 Cápsulas</h4>
                  <p className="text-xs text-zinc-400 mt-1">Tratamento para 30 dias (2 caps ao dia)</p>
                  <div className="mt-4 pt-4 border-t border-zinc-800 text-xs text-zinc-300 space-y-1">
                    <p>✓ Não causa tremores ou palpitação</p>
                    <p>✓ Rápida absorção estomacal</p>
                    <p>✓ Fórmula 100% livre de glúten</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: VELMO BLACK DRINK SOLÚVEL */}
          {activeTab === "drink" && (
            <div className="rounded-3xl border border-red-500/40 bg-gradient-to-br from-[#120a0f] via-[#090b10] to-[#120a0f] p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-[0_0_60px_rgba(255,30,86,0.2)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/20 px-3.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/40">
                  <Sparkles className="h-4 w-4 text-rose-400" />
                  BEBIDA FUNCIONAL EM PÓ • DRENAGEM & SACIEDADE
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Velmo Black Drink:{" "}
                  <span className="strawberry-text-gradient">Desinchaço & Sabor Morango</span>
                </h3>

                <p className="text-base text-zinc-300 leading-relaxed">
                  Uma bebida refrescante com o irresistível sabor de Morango Silvestre para dissolver em água gelada. Suas fibras solúveis expandem no estômago, garantindo saciedade prolongada e drenando o inchaço abdominal.
                </p>

                {/* Sabor Selector */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    Escolha seu sabor favorito:
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedFlavor("morango")}
                      className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold border transition-all ${
                        selectedFlavor === "morango"
                          ? "bg-rose-950/90 border-rose-500 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.4)] scale-105"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>🍓 Morango Silvestre (Mais Vendido)</span>
                    </button>

                    <button
                      onClick={() => setSelectedFlavor("tangerina")}
                      className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold border transition-all ${
                        selectedFlavor === "tangerina"
                          ? "bg-amber-950/80 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                          : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span>🍊 Tangerina Refrescante</span>
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 px-8 py-4 text-base font-extrabold text-white shadow-[0_0_35px_rgba(255,30,86,0.4)] btn-shimmer hover:shadow-[0_0_50px_rgba(255,30,86,0.7)] hover:scale-105 transition-all"
                  >
                    <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
                    <span>PEDIR VELMO DRINK NO WHATSAPP</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-zinc-950 p-8 border border-rose-500/40 text-center shadow-xl">
                  <div className="h-28 w-28 mx-auto rounded-full bg-gradient-to-tr from-rose-500/30 to-red-600/50 flex items-center justify-center border border-rose-400/50 mb-4">
                    <span className="text-3xl font-black text-white">150</span>
                    <span className="text-xs text-rose-200 font-bold ml-1">G</span>
                  </div>
                  <h4 className="text-xl font-extrabold text-white">Pote 150g Solúvel</h4>
                  <p className="text-xs text-zinc-400 mt-1">Rende até 30 doses refrescantes</p>
                  <div className="mt-4 pt-4 border-t border-zinc-800 text-xs text-zinc-300 space-y-1">
                    <p>✓ Inulina & Polidextrose puras</p>
                    <p>✓ Zero açúcar e baixíssimas calorias</p>
                    <p>✓ Ação desinchar e regular o intestino</p>
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
