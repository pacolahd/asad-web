import { stats as defaultStats } from "@/data/site-config";

interface StatItem {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsProps {
  stats?: StatItem[];
}

export function Stats({ stats = defaultStats }: StatsProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary md:text-5xl">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm text-muted-foreground md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
