'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, MapPin, Users, Calendar as CalendarIcon, Plus } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Summer Rooftop Party',
    date: '2024-08-15',
    time: '10:00 PM - 4:00 AM',
    venue: 'Skybar NYC',
    location: 'Manhattan, NY',
    attendees: 250,
    type: 'party',
    status: 'confirmed'
  },
  {
    id: 2,
    title: 'Corporate Event',
    date: '2024-08-20',
    time: '7:00 PM - 11:00 PM',
    venue: 'Grand Plaza Hotel',
    location: 'Manhattan, NY',
    attendees: 150,
    type: 'corporate',
    status: 'pending'
  }
];

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Manage your event schedule</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <Tabs value={view} onValueChange={(v) => setView(v as 'calendar' | 'list')}>
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Today</Button>
                  <Button variant="outline" size="sm">Week</Button>
                  <Button variant="outline" size="sm">Month</Button>
                </div>
              </div>

              <TabsContent value="calendar" className="mt-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <div className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{event.title}</h3>
                            <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                              {event.status}
                            </Badge>
                          </div>
                          <div className="grid gap-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.venue}, {event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{event.attendees} attendees</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Today's Schedule</h3>
            <div className="space-y-4">
              {events.slice(0, 1).map((event) => (
                <div key={event.id} className="flex items-start gap-4">
                  <div className="w-14 text-center">
                    <div className="text-sm font-medium">{event.time.split(' ')[0]}</div>
                    <div className="text-xs text-muted-foreground">{event.time.split(' ')[1]}</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-muted-foreground">{event.venue}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-muted flex flex-col items-center justify-center">
                    <div className="text-sm font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{event.title}</div>
                    <div className="text-sm text-muted-foreground">{event.venue}</div>
                  </div>
                  <Badge variant={event.status === 'confirmed' ? 'default' : 'secondary'}>
                    {event.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}