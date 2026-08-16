import { stats } from "@/src/data/landing";


export default function Stats() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 pb-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl px-4 py-5 text-center">
            <div className="font-display text-2xl font-bold text-gradient">
              {s.value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
