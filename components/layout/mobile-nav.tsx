"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Image
              src="/images/logo/asad-logo.png"
              alt={siteConfig.name}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-primary">{siteConfig.name}</span>
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => toggleExpanded(item.href)}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expandedItems.includes(item.href) && "rotate-180"
                      )}
                    />
                  </Button>
                  {expandedItems.includes(item.href) && (
                    <div className="ml-4 flex flex-col gap-1 border-l pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => onOpenChange(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={item.href} onClick={() => onOpenChange(false)}>
                    {item.title}
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
