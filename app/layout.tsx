import type { Metadata } from "next";
import "./globals.css";
import "dynamic-color-background";

export const metadata: Metadata = {
  title: "Social Media Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="dynamic-color-background"></div>
      </body>
    </html>
  );
}
