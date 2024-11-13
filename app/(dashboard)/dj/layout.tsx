'use client';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { Sidebar } from '@/components/navigation/sidebar';

export default function DjLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="pl-[240px]">
          <div className="container mx-auto px-4 lg:px-8 py-6 max-w-[1600px]">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}