"use client";

import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  className?: string;
}

export function DesktopNav({ className }: DesktopNavProps) {
  const t = useTranslations("nav");

  const navigation = [
    {
      title: t("home"),
      href: "/",
    },
    {
      title: t("about"),
      href: "/about",
      children: [
        {
          title: t("aboutAsad"),
          href: "/about",
          description: t("aboutDescription"),
        },
        {
          title: t("history"),
          href: "/about/history",
          description: t("historyDescription"),
        },
        {
          title: t("leadership"),
          href: "/about/leadership",
          description: t("leadershipDescription"),
        },
        {
          title: t("statutes"),
          href: "/about/statutes",
          description: t("statutesDescription"),
        },
      ],
    },
    {
      title: t("sports"),
      href: "/sports",
      children: [
        {
          title: t("sportsOverview"),
          href: "/sports",
          description: t("sportsDescription"),
        },
        {
          title: t("competitions"),
          href: "/sports/competitions",
          description: t("competitionsDescription"),
        },
        {
          title: t("friendlyMatches"),
          href: "/sports/friendly-matches",
          description: t("friendlyMatchesDescription"),
        },
        {
          title: t("internalChallenge"),
          href: "/sports/internal-challenge",
          description: t("internalChallengeDescription"),
        },
        {
          title: t("jerseys"),
          href: "/sports/jerseys",
          description: t("jerseysDescription"),
        },
      ],
    },
    {
      title: t("community"),
      href: "/community",
      children: [
        {
          title: t("communityOverview"),
          href: "/community",
          description: t("communityDescription"),
        },
        {
          title: t("asadSundays"),
          href: "/community/asad-sundays",
          description: t("asadSundaysDescription"),
        },
        {
          title: t("babyShower"),
          href: "/community/baby-shower",
          description: t("babyShowerDescription"),
        },
        {
          title: t("backToSchool"),
          href: "/community/back-to-school",
          description: t("backToSchoolDescription"),
        },
        {
          title: t("soapOilThrift"),
          href: "/community/soap-oil-thrift",
          description: t("soapOilThriftDescription"),
        },
        {
          title: t("ndjangi"),
          href: "/community/ndjangi",
          description: t("ndjangiDescription"),
        },
        {
          title: t("socialFund"),
          href: "/community/social-fund",
          description: t("socialFundDescription"),
        },
      ],
    },
    {
      title: t("members"),
      href: "/members",
      children: [
        {
          title: t("membership"),
          href: "/members",
          description: t("membershipDescription"),
        },
        {
          title: t("inMemoriam"),
          href: "/members/in-memoriam",
          description: t("inMemoriamDescription"),
        },
      ],
    },
    {
      title: t("media"),
      href: "/media",
      children: [
        {
          title: t("mediaOverview"),
          href: "/media",
          description: t("mediaDescription"),
        },
        {
          title: t("photoGallery"),
          href: "/media/gallery",
          description: t("photoGalleryDescription"),
        },
        {
          title: t("programOfYear"),
          href: "/media/program",
          description: t("programOfYearDescription"),
        },
      ],
    },
    {
      title: t("contact"),
      href: "/contact",
    },
  ];

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {navigation.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.children ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:w-[500px] md:grid-cols-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={child.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {child.title}
                            </div>
                            {child.description && (
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={item.href}>
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
