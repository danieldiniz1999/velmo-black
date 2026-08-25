import { useState } from "react";
import { Target } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function TransformationCalculator() {
  const [targetWeight, setTargetWeight] = useState<number>(8);
  const [challenge, setChallenge] = useState<string>("doces");

  const getRecommendation = () => {
    if (targetWeight <= 5) {
      return {
        kit: "Kit 1 Mês (Start Black)",
        days: "30 Dias",
        desc: "Ideal para eliminar o inchaço acumulado, destravar a digestão e queimar os primeiros quilos com o sabor Morango.",
        focus: "Desinchaço & Ativação Metabólica",
      };
    } else if (targetWeight <= 12) {
      return {
        kit: "Protocolo Duo Morango 3 Meses (Mais Recomendado)",
        days: "90 Dias",
        desc: "O protocolo completo para reprogramar o metabolismo, queimar a gordura visceral profunda e eliminar o efeito sanfona.",
        focus: "Queima Profunda & Zero Compulsão",
      };
    } else {
      return {
        kit: "Protocolo Transformação Total 5 Meses",
        days: "150 Dias",
        desc: "A transformação corporal definitiva com consolidação metabólica duradoura e reestruturação estética completa.",
        focus: "Secagem Extrema & Definição",
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="simulador" className="relative py-8 sm:py-12 bg-[#090b10] border-y border-rose-500/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-300">
            <Target className="h-3 w-3" />
            Diagnóstico Inteligente Personalizado
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Descubra o protocolo ideal para o seu{" "}
            <span className="strawberry-text-gradient">objetivo corporal</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-zinc-400">
            Responda em 30 segundos e receba uma recomendação sob medida.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-rose-500/30 bg-[#0d1017] p-4 sm:p-8 shadow-[0_0_40px_rgba(255,30,86,0.15)] backdrop-blur-xl">
          
          {/* Step 1: Weight Goal */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span className="flex h-5 w-5 rounded-full bg-rose-500 text-white text-[10px] font-black items-center justify-center">
                  1
                </span>
                Quantos quilos você gostaria de eliminar?
              </label>
              <span className="text-xl sm:text-2xl font-black text-rose-500 font-mono">
                {targetWeight} kg
              </span>
            </div>

            <input
              type="range"
              min="2"
              max="30"
              step="1"
              value={targetWeight}
              onChange={(e) => setTargetWeight(Number(e.target.value))}
              className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />

            <div className="flex justify-between text-[10px] sm:text-[11px] text-zinc-500 font-mono">
              <span>2 kg (Leve inchaço)</span>
              <span>15 kg (Metabolismo travado)</span>
              <span>30 kg+ (Transformação profunda)</span>
            </div>
          </div>

          {/* Step 2: Main Obstacle */}
          <div className="mt-6 sm:mt-8 space-y-3 pt-6 border-t border-zinc-800">
            <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
              <span className="flex h-5 w-5 rounded-full bg-rose-500 text-white text-[10px] font-black items-center justify-center">
                2
              </span>
              Qual é a sua principal dificuldade hoje?
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {[
                { id: "doces", label: "🍫 Vontade de doces / carboidratos à noite" },
                { id: "metabolismo", label: "🐢 Metabolismo lento / parece que nada queima" },
                { id: "inchaco", label: "💧 Retenção de líquidos e barriga estufada" },
                { id: "sanfona", label: "🔄 Efeito sanfona (emagreço e engordo de volta)" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setChallenge(item.id)}
                  className={`p-2.5 sm:p-3 rounded-xl text-left text-xs font-semibold transition-all border ${
                    challenge === item.id
                      ? "bg-rose-950/70 border-rose-500 text-rose-200 shadow-[0_0_15px_rgba(255,30,86,0.25)]"
                      : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Real-time Recommendation Result */}
          <div className="mt-6 sm:mt-8 rounded-2xl bg-gradient-to-br from-rose-950/50 via-zinc-900/80 to-zinc-950 p-4 sm:p-6 border border-rose-500/40">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-zinc-800">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400">
                  DIAGNÓSTICO PERSONALIZADO GERADO
                </span>
                <h4 className="text-base sm:text-xl font-black text-white mt-0.5">
                  {rec.kit}
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-bold border border-rose-500/30">
                Tempo: {rec.days}
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {rec.desc}
            </p>

            <div className="mt-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-5 sm:px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-[0_0_25px_rgba(255,30,86,0.4)] btn-shimmer hover:scale-[1.02] transition-all"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 fill-white flex-shrink-0" />
                <span>INICIAR ESTE PROTOCOLO NO WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
