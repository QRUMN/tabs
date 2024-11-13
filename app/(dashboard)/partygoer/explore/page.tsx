'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Search, Filter, MapPin, Heart, Share2, Calendar } from 'lucide-react';
import { EventCard } from '@/components/events/event-card';
import { EventFilters } from '@/components/events/event-filters';
import { EventMap } from '@/components/events/event-map';
import { CategoryPills } from '@/components/events/category-pills';

export default function ExplorePage() {
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Search and Filters Header */}
      <div className="flex flex-col gap-4 p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events, venues, or artists..."
              className="pl-9 bg-background"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
          >
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

        <ScrollArea className="w-full whitespace-nowrap">
          <CategoryPills />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {showFilters && <EventFilters />}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="trending" className="flex-1">
        <div className="px-4 py-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <TabsList>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="recommended">For You</TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 overflow-auto">
          <TabsContent value="trending" className="m-0 h-full">
            {view === 'grid' ? (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            ) : (
              <EventMap />
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="m-0 h-full">
            {view === 'grid' ? (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <EventCard />
                <EventCard />
              </div>
            ) : (
              <EventMap />
            )}
          </TabsContent>

          <TabsContent value="recommended" className="m-0 h-full">
            {view === 'grid' ? (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            ) : (
              <EventMap />
            )}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}