import { Users, TrendingDown, Award, Sparkles } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      icon: Users,
      value: "+14.800",
      label: "Vidas e Corpos Transformados",
      detail: "Homens e mulheres em todo o país",
    },
    {
      icon: TrendingDown,
      value: "Zero",
      label: "Efeito Rebote / Sanfona",
      detail: "Manutenção do metabolismo ativo",
    },
    {
      icon: Award,
      value: "98.4%",
      label: "Índice de Satisfação",
      detail: "Recomendado por quem usou",
    },
    {
      icon: Sparkles,
      value: "100%",
      label: "Bio-Ativos de Alta Pureza",
      detail: "Extratos nobres selecionados",
    },
  ];

  return (
    <section className="relative border-y border-rose-500/20 bg-zinc-950/90 py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center sm:items-start text-center sm:text-left space-y-1 sm:space-y-1.5 p-3 sm:p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-rose-500/40 transition-all duration-300 group"
              >
                <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-400 group-hover:scale-105 transition-transform mb-1">
                  <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <span className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white group-hover:text-rose-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-zinc-200 leading-tight">{stat.label}</span>
                <span className="text-[10px] sm:text-xs text-zinc-400 leading-tight hidden sm:block">{stat.detail}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
