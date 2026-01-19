import Link from "next/link";
import {
  Calendar,
  Gift,
  GraduationCap,
  Heart,
  PiggyBank,
  Trophy,
  Users,
  Handshake,
  Swords,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Program } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  gift: Gift,
  "graduation-cap": GraduationCap,
  heart: Heart,
  "piggy-bank": PiggyBank,
  trophy: Trophy,
  users: Users,
  handshake: Handshake,
  swords: Swords,
};

interface FeatureGridProps {
  title: string;
  description?: string;
  programs: Program[];
}

export function FeatureGrid({ title, description, programs }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon
              ? iconMap[program.icon] || Calendar
              : Calendar;
            return (
              <Link key={program.id} href={program.href}>
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
