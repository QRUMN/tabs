'use client';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { VenueNavigation } from '@/components/venue/navigation';

export default function VenueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <VenueNavigation />
        <main className="lg:pl-[280px] pt-16 lg:pt-0">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}