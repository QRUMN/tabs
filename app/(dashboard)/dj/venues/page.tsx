'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VenueCard } from '@/components/dj/venue-card';
import { Search, Filter, MapPin } from 'lucide-react';

export default function VenuesPage() {
  const [view, setView] = useState<'grid' | 'map'>('grid');

  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Venues</h1>
          <p className="text-muted-foreground">Discover and connect with venues</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">Submit Press Kit</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search venues..." className="pl-9" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setView(view === 'grid' ? 'map' : 'grid')}
          >
            <MapPin className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Venues</TabsTrigger>
          <TabsTrigger value="interested">Interested</TabsTrigger>
          <TabsTrigger value="played">Played Here</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VenueCard
              name="Skybar NYC"
              type="Rooftop Lounge"
              image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
              capacity={300}
              rating={4.8}
              location="Manhattan, NY"
              genres={['House', 'Lounge', 'Deep House']}
              status="Hiring"
            />
            <VenueCard
              name="The Basement"
              type="Underground Club"
              image="https://images.unsplash.com/photo-1598387993441-a364f854c3e1"
              capacity={200}
              rating={4.5}
              location="Brooklyn, NY"
              genres={['Techno', 'House', 'Electronic']}
              status="Open to submissions"
            />
            <VenueCard
              name="Blue Note"
              type="Jazz Club"
              image="https://images.unsplash.com/photo-1511192336575-5a79af67a629"
              capacity={150}
              rating={4.9}
              location="Greenwich Village, NY"
              genres={['Jazz', 'Live Music', 'Soul']}
              status="Hiring"
            />
          </div>
        </TabsContent>

        <TabsContent value="interested" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VenueCard
              name="Output"
              type="Nightclub"
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
              capacity={400}
              rating={4.7}
              location="Brooklyn, NY"
              genres={['House', 'Techno', 'Electronic']}
              status="Reviewing submissions"
            />
          </div>
        </TabsContent>

        <TabsContent value="played" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VenueCard
              name="House of Yes"
              type="Performance Venue"
              image="https://images.unsplash.com/photo-1574434311536-61aab7b3e1c4"
              capacity={500}
              rating={4.9}
              location="Brooklyn, NY"
              genres={['Electronic', 'Live Performance', 'House']}
              status="Regular bookings"
            />
          </div>
        </TabsContent>

        <TabsContent value="bookmarked" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VenueCard
              name="Le Bain"
              type="Rooftop Club"
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
              capacity={250}
              rating={4.6}
              location="Manhattan, NY"
              genres={['House', 'Disco', 'Electronic']}
              status="Open to submissions"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}