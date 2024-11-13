'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Music, Users, MapPin, Search, Filter } from 'lucide-react';

const bookings = [
  {
    id: 1,
    event: 'Summer House Night',
    date: 'Aug 15, 2024',
    time: '10 PM - 4 AM',
    dj: 'DJ Shadow',
    genre: 'House',
    capacity: 300,
    revenue: '$12,500',
    status: 'confirmed'
  },
  {
    id: 2,
    event: 'Tech House Party',
    date: 'Aug 20, 2024',
    time: '11 PM - 5 AM',
    dj: 'DJ Pulse',
    genre: 'Tech House',
    capacity: 300,
    revenue: '$9,000',
    status: 'pending'
  }
];

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Bookings</h1>
          <p className="text-muted-foreground">Manage your venue bookings and events</p>
        </div>
        <Button>Create Booking</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bookings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="p-6">
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-semibold">{booking.event}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {booking.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {booking.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      {booking.dj} • {booking.genre}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Capacity: {booking.capacity}
                    </div>
                  </div>

                  <div className="text-lg font-semibold">
                    Revenue: {booking.revenue}
                  </div>
                </div>

                <div className="flex gap-2 lg:flex-col lg:justify-between">
                  <Button variant="outline">Edit</Button>
                  <Button>View Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending">
          <Card className="p-6">
            <p className="text-muted-foreground">No pending bookings</p>
          </Card>
        </TabsContent>

        <TabsContent value="past">
          <Card className="p-6">
            <p className="text-muted-foreground">No past bookings</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}