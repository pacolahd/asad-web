import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "ASAD",
  fullName: "Association Sportive des Amis du Developpement",
  description:
    "ASAD is a community sports organization dedicated to promoting sports, unity, and development in Bonaberi, Douala, Cameroon since 2004.",
  slogan: "Unity Through Sport, Strength Through Community",
  founded: 2004,
  location: {
    neighborhood: "Bonaberi",
    city: "Douala",
    country: "Cameroon",
  },
  contact: {
    email: "contact@asad-bonaberi.org",
    phone: "+237 6XX XXX XXX",
    address: "Bonaberi, Douala, Cameroon",
  },
  social: {
    facebook: "https://facebook.com/asadbonaberi",
    instagram: "https://instagram.com/asadbonaberi",
  },
};

export const stats = [
  {
    value: new Date().getFullYear() - 2004,
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
