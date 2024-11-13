'use client';

import dynamic from 'next/dynamic';
import { SearchBar } from '@/components/map/search-bar';
import { RoleSelector } from '@/components/role-selector';
import { EventCarousel } from '@/components/events/carousel';
import { QuickActions } from '@/components/quick-actions';
import { AuthButtons } from '@/components/auth/auth-buttons';
import { Footer } from '@/components/footer';
import { ThemeToggle } from '@/components/theme-toggle';

const MapComponent = dynamic(() => import('@/components/map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-4rem)] bg-background animate-pulse" />
  ),
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Map */}
      <div className="relative w-full h-[calc(100vh-4rem)]">
        {/* Logo */}
        <div className="absolute top-6 left-6 z-10">
          <h1 className="text-2xl font-bold tracking-tight">TABS</h1>
        </div>

        {/* Search Bar and Theme Toggle */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4 w-full max-w-xl px-4">
          <SearchBar />
          <ThemeToggle />
        </div>

        {/* Auth Buttons */}
        <AuthButtons />
        
        {/* Map */}
        <MapComponent />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20 relative z-10 space-y-8">
        <RoleSelector />
        <EventCarousel />
        <QuickActions />
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}