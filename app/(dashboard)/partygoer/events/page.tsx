'use client';

import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function EventsPage() {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <p className="text-muted-foreground">Discover and book upcoming events</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((id) => (
          <Card key={id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
                alt="Event cover"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 right-4">
                <Button size="sm" variant="secondary">
                  Save
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Summer Rooftop Party</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Skybar NYC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Tonight, 10 PM - 4 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>250 attending</span>
                </div>
              </div>
              <div className="mt-4">
                <Button className="w-full">Get Tickets</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}