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
      detail: "Recomendado por quem experimentou",
    },
    {
      icon: Sparkles,
      value: "100%",
      label: "Bio-Ativos de Alta Pureza",
      detail: "Extratos nobres selecionados",
    },
  ];

  return (
    <section className="relative border-y border-cyan-500/20 bg-zinc-950/90 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center sm:items-start text-center sm:text-left space-y-2 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-zinc-200">{stat.label}</span>
                <span className="text-xs text-zinc-400">{stat.detail}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
