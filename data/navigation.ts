import { NavItem } from "@/types";

export const navigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
    children: [
      {
        title: "About ASAD",
        href: "/about",
        description: "Learn about our organization and what ASAD stands for",
      },
      {
        title: "Our History",
        href: "/about/history",
        description: "The journey of ASAD since 2004",
      },
      {
        title: "Leadership",
        href: "/about/leadership",
        description: "Meet our dedicated leadership team",
      },
      {
        title: "Statutes",
        href: "/about/statutes",
        description: "Our governing documents and bylaws",
      },
    ],
  },
  {
    title: "Sports",
    href: "/sports",
    children: [
      {
        title: "Sports Overview",
        href: "/sports",
        description: "Our sporting activities and achievements",
      },
      {
        title: "Competitions",
        href: "/sports/competitions",
        description: "Tournaments and competitive events",
      },
      {
        title: "Friendly Matches",
        href: "/sports/friendly-matches",
        description: "Local and external friendly games",
      },
      {
        title: "Internal Challenge",
        href: "/sports/internal-challenge",
        description: "ASAD # ASAD internal competition",
      },
      {
        title: "Jersey Collection",
        href: "/sports/jerseys",
        description: "Our iconic jerseys through the years",
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    children: [
      {
        title: "Community Overview",
        href: "/community",
        description: "Our impact on the community",
      },
      {
        title: "ASAD Sundays",
        href: "/community/asad-sundays",
        description: "Weekly community gathering",
      },
      {
        title: "Baby Shower",
        href: "/community/baby-shower",
        description: "Celebrating new families",
      },
      {
        title: "Back to School",
        href: "/community/back-to-school",
        description: "Supporting children's education",
      },
      {
        title: "Soap & Oil Thrift",
        href: "/community/soap-oil-thrift",
        description: "Community savings initiative",
      },
      {
        title: "Ndjangi",
        href: "/community/ndjangi",
        description: "Traditional rotating savings",
      },
      {
        title: "Social Fund",
        href: "/community/social-fund",
        description: "Emergency support system",
      },
    ],
  },
  {
    title: "Members",
    href: "/members",
    children: [
      {
        title: "Membership",
        href: "/members",
        description: "How to join ASAD",
      },
      {
        title: "In Memoriam",
        href: "/members/in-memoriam",
        description: "Honoring departed members",
      },
    ],
  },
  {
    title: "Media",
    href: "/media",
    children: [
      {
        title: "Media Overview",
        href: "/media",
        description: "Photos, videos, and more",
      },
      {
        title: "Photo Gallery",
        href: "/media/gallery",
        description: "Browse our photo albums",
      },
      {
        title: "Program of the Year",
        href: "/media/program",
        description: "Annual activities schedule",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
