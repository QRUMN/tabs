'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UpcomingGigs } from '@/components/dj/events/upcoming-gigs';
import { PendingRequests } from '@/components/dj/events/pending-requests';
import { VenueInterests } from '@/components/dj/events/venue-interests';

const upcomingGigs = [
  {
    id: 1,
    event: 'Summer Music Festival',
    venue: 'Rooftop Garden',
    date: 'Aug 15, 2024',
    time: '10 PM - 4 AM',
    capacity: 300,
    payment: '$800',
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
  },
  {
    id: 2,
    event: 'Underground House Night',
    venue: 'The Basement',
    date: 'Aug 20, 2024',
    time: '11 PM - 5 AM',
    capacity: 200,
    payment: '$600',
    status: 'confirmed',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1'
  }
];

const pendingRequests = [
  {
    id: 3,
    event: 'Private Beach Party',
    venue: 'Hampton Beach Club',
    date: 'Sep 5, 2024',
    time: '8 PM - 2 AM',
    capacity: 150,
    payment: '$1,200',
    status: 'pending',
    image: 'https://images.unsplash.com/photo-1511795409834-432f7b1728b2'
  }
];

const venueInterests = [
  {
    id: 4,
    venue: 'Skyline Lounge',
    location: 'Manhattan',
    capacity: 400,
    rating: 4.8,
    genre: 'House, Techno',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2'
  }
];

export default function DjEventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground">Manage your gigs and bookings</p>
        </div>
        <Button>Create Event</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming Gigs</TabsTrigger>
          <TabsTrigger value="pending">Pending Requests</TabsTrigger>
          <TabsTrigger value="interests">Venue Interests</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <UpcomingGigs gigs={upcomingGigs} />
        </TabsContent>

        <TabsContent value="pending">
          <PendingRequests requests={pendingRequests} />
        </TabsContent>

        <TabsContent value="interests">
          <VenueInterests venues={venueInterests} />
        </TabsContent>
      </Tabs>
    </div>
  );
}