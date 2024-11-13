'use client';

import { PlannerNavigation } from '@/components/planner/navigation';
import { ThemeProvider } from '@/components/providers/theme-provider';

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex min-h-screen">
        <PlannerNavigation />
        <div className="flex-1 lg:pl-[280px]">
          <main className="min-h-screen">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}