import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/layout/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});
export const metadata = {
  ...siteConfig,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
        className={cn(
          "relative min-h-screen  bg-background antialiased",
          montserrat.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="absolute inset-0 -z-50 overflow-hidden">
              <div className="jumbo absolute -inset-[10px] opacity-50"></div>
            </div>
            <SiteHeader />
            {children}
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
