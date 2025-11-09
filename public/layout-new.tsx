import "./globals.css";

export const metadata = {
  title: "CopyCart",
  description: "AI E-commerce copy generator with TikTok Hook Generator"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
