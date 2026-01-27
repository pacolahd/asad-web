import { getYearsOfExcellence } from "@/lib/stats";

interface StatItem {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsProps {
  stats?: StatItem[];
}

// Generate default stats with calculated values
function getDefaultStats(): StatItem[] {
  return [
    {
      value: getYearsOfExcellence(),
      label: "Years of Excellence",
      suffix: "+",
    },
    {
      value: 100,
      label: "Active Members",
      suffix: "+",
    },
    {
      value: 6,
      label: "Community Programs",
    },
    {
      value: 50,
      label: "Competitions Played",
      suffix: "+",
    },
  ];
}

export function Stats({ stats }: StatsProps) {
  const displayStats = stats || getDefaultStats();
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {displayStats.map((stat, index) => (
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
