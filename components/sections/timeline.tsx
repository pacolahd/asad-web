import { TimelineEvent } from "@/types";

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={event.year}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 h-4 w-4 rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

            {/* Content */}
            <div
              className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {event.year}
                </div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-muted-foreground">{event.description}</p>
              </div>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
