import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASAD - Association Sportive des Amis du Developpement",
  description:
    "ASAD is a community sports organization dedicated to promoting sports, unity, and development in Bonaberi, Douala, Cameroon since 2004.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
