import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadershipMember } from "@/types";
import { User } from "lucide-react";

interface TeamGridProps {
  members: LeadershipMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <Card key={member.id} className="overflow-hidden">
          <div className="aspect-square bg-muted flex items-center justify-center">
            {member.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <User className="h-24 w-24 text-muted-foreground/50" />
            )}
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{member.name}</CardTitle>
            <CardDescription className="text-primary font-medium">
              {member.role}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {member.bio && (
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            )}
            {member.since && (
              <p className="mt-2 text-xs text-muted-foreground">
                Member since {member.since}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
