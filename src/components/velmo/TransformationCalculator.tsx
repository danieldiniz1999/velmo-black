import { useState } from "react";
import { Sparkles, Target } from "lucide-react";
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
        kit: "Protocolo Duo Black Morango 3 Meses (Mais Recomendado)",
        days: "90 Dias",
        desc: "O protocolo completo para reprogramar o metabolismo, queimar a gordura visceral profunda e eliminar de vez o efeito sanfona com a força do Morango Silvestre.",
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
    <section id="simulador" className="relative py-20 lg:py-28 bg-[#090b10] border-y border-rose-500/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Target className="h-3.5 w-3.5" />
            Diagnóstico Inteligente Personalizado
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Descubra o protocolo ideal para o seu{" "}
            <span className="strawberry-text-gradient">objetivo corporal</span>
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400">
            Responda em 30 segundos e receba uma recomendação sob medida para o seu metabolismo.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="mt-12 rounded-3xl border border-rose-500/30 bg-[#0d1017] p-6 sm:p-10 shadow-[0_0_50px_rgba(255,30,86,0.15)] backdrop-blur-xl">
          
          {/* Step 1: Weight Goal */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-rose-500 text-white text-xs font-black items-center justify-center">
                  1
                </span>
                Quantos quilos você gostaria de eliminar?
              </label>
              <span className="text-2xl font-black text-rose-500 font-mono">
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
              className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />

            <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
              <span>2 kg (Leve inchaço)</span>
              <span>15 kg (Metabolismo travado)</span>
              <span>30 kg+ (Transformação profunda)</span>
            </div>
          </div>

          {/* Step 2: Main Obstacle */}
          <div className="mt-10 space-y-4 pt-8 border-t border-zinc-800">
            <label className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="flex h-6 w-6 rounded-full bg-rose-500 text-white text-xs font-black items-center justify-center">
                2
              </span>
              Qual é a sua principal dificuldade hoje?
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: "doces", label: "🍫 Vontade incontrolável de doces / carboidratos à noite" },
                { id: "metabolismo", label: "🐢 Metabolismo muito lento / parece que nada queima" },
                { id: "inchaco", label: "💧 Retenção de líquidos e barriga estufada/inchada" },
                { id: "sanfona", label: "🔄 Efeito sanfona (emagreço um pouco e engordo o dobro)" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setChallenge(item.id)}
                  className={`p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all border ${
                    challenge === item.id
                      ? "bg-rose-950/70 border-rose-500 text-rose-200 shadow-[0_0_20px_rgba(255,30,86,0.25)]"
                      : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Real-time Recommendation Result */}
          <div className="mt-10 rounded-2xl bg-gradient-to-br from-rose-950/50 via-zinc-900/80 to-zinc-950 p-6 sm:p-8 border border-rose-500/40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-400">
                  DIAGNÓSTICO PERSONALIZADO GERADO
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {rec.kit}
                </h4>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
                Tempo Estimado: {rec.days}
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
              {rec.desc}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-8 py-4 text-sm sm:text-base font-extrabold text-white shadow-[0_0_30px_rgba(255,30,86,0.4)] btn-shimmer hover:shadow-[0_0_45px_rgba(255,30,86,0.7)] hover:scale-[1.03] transition-all"
              >
                <WhatsAppIcon className="h-5 w-5 fill-white flex-shrink-0" />
                <span>INICIAR ESTE PROTOCOLO NO WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
