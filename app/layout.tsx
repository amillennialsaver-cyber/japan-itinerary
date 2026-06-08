import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japan Itinerary — 3 Weeks",
  description: "A curated 3-week Japan travel itinerary for two",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
