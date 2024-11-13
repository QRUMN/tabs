'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Users, Music, DollarSign } from 'lucide-react';

const upcomingGigs = [
  {
    id: 1,
    date: '2024-03-15',
    event: 'Summer Rooftop Party',
    venue: 'Skybar NYC',
    time: '10 PM - 4 AM',
    attendees: 250,
    genre: 'House',
    payment: '$800',
    status: 'confirmed'
  },
  {
    id: 2,
    date: '2024-03-20',
    event: 'Underground House Night',
    venue: 'The Basement',
    time: '11 PM - 5 AM',
    attendees: 180,
    genre: 'Tech House',
    payment: '$600',
    status: 'pending'
  }
];

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-muted-foreground">Manage your upcoming performances</p>
        </div>
        <Button>Add Event</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="p-6 lg:col-span-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </Card>

        {/* Availability */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Quick Availability</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Set Available Hours
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="mr-2 h-4 w-4" />
              Set Location Preferences
            </Button>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Gigs</TabsTrigger>
          <TabsTrigger value="pending">Pending Requests</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {upcomingGigs.map((gig) => (
                <Card key={gig.id} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{gig.event}</h3>
                          <Badge variant={gig.status === 'confirmed' ? 'default' : 'secondary'}>
                            {gig.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {gig.venue}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {gig.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {gig.attendees} expected
                          </div>
                          <div className="flex items-center gap-2">
                            <Music className="h-4 w-4" />
                            {gig.genre}
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            {gig.payment}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline">View Details</Button>
                      <Button>Equipment List</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="pending">
          <Card className="p-6">
            <p className="text-muted-foreground">No pending requests</p>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card className="p-6">
            <p className="text-muted-foreground">No past events</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}