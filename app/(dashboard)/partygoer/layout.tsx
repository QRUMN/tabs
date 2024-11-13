'use client';

import { ThemeProvider } from '@/components/providers/theme-provider';

export default function PartygoerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}