import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verdant Landscapes | Design, Install & Maintain",
  description: "Transform your outdoor space with Verdant Landscapes. Expert design, installation, maintenance, hardscaping, and irrigation services.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="en"><body className="antialiased">{children}</body></html>);
}
