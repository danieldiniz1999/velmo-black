import { useState } from "react";
import { Sparkles, MessageCircle, ArrowRight, Target, Flame, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export function TransformationCalculator() {
  const [targetWeight, setTargetWeight] = useState<number>(8);
  const [challenge, setChallenge] = useState<string>("doces");
  const [step, setStep] = useState<number>(1);

  // Recommendations logic
  const getRecommendation = () => {
    if (targetWeight <= 5) {
      return {
        kit: "Kit 1 Mês (Start Black)",
        days: "30 Dias",
        desc: "Ideal para eliminar o inchaço acumulado, destravar a digestão e queimar os primeiros quilos com energia.",
        focus: "Desinchaço & Ativação Metabólica",
      };
    } else if (targetWeight <= 12) {
      return {
        kit: "Protocolo Duo Black 3 Meses (Mais Recomendado)",
        days: "90 Dias",
        desc: "O protocolo completo para reprogramar o metabolismo, queimar a gordura visceral profunda e eliminar de vez o efeito sanfona.",
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
    <section id="simulador" className="relative py-20 lg:py-28 bg-[#090b10] border-y border-cyan-500/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Target className="h-3.5 w-3.5" />
            Diagnóstico Inteligente Personalizado
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Descubra o protocolo ideal para o seu{" "}
            <span className="tiffany-text-gradient">objetivo corporal</span>
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400">
            Responda em 30 segundos e receba uma recomendação sob medida para o seu metabolismo.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="mt-12 rounded-3xl border border-cyan-500/30 bg-[#0d1017] p-6 sm:p-10 shadow-[0_0_50px_rgba(0,229,255,0.15)] backdrop-blur-xl">
          
          {/* Step 1: Weight Goal */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-cyan-400 text-black text-xs font-black items-center justify-center">
                  1
                </span>
                Quantos quilos você gostaria de eliminar?
              </label>
              <span className="text-2xl font-black text-cyan-400 font-mono">
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
              className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
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
              <span className="flex h-6 w-6 rounded-full bg-cyan-400 text-black text-xs font-black items-center justify-center">
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
                      ? "bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                      : "bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Real-time Recommendation Result */}
          <div className="mt-10 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-zinc-900/80 to-zinc-950 p-6 sm:p-8 border border-cyan-500/40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400">
                  DIAGNÓSTICO PERSONALIZADO GERADO
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {rec.kit}
                </h4>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
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
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 px-8 py-4 text-sm sm:text-base font-extrabold text-black shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="h-5 w-5 fill-black" />
                <span>INICIAR ESTE PROTOCOLO NO WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
