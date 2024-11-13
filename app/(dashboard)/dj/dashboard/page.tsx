'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Music, Users, DollarSign, Clock, Star, Mic, MapPin } from 'lucide-react';
import { UpcomingGigs } from '@/components/dj/upcoming-gigs';
import { FanEngagement } from '@/components/dj/fan-engagement';
import { BookingRequests } from '@/components/dj/booking-requests';
import { MusicLibrary } from '@/components/dj/music-library';
import { DjProfile } from '@/components/dj/profile';
import { Analytics } from '@/components/dj/analytics';
import { useAuth } from '@/lib/auth';
import { useGreeting } from '@/hooks/use-greetings';

export default function DjDashboard() {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Artist';
  const greeting = useGreeting(firstName);

  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold mb-2">{greeting}</h1>
          <p className="text-muted-foreground">Your performance dashboard</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Set Availability
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Mic className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Upcoming Gigs</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Fans</p>
              <h2 className="text-2xl font-bold">2.4K</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
              <h2 className="text-2xl font-bold">$5.2K</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Star className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Rating</p>
              <h2 className="text-2xl font-bold">4.9</h2>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-background">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="gigs">Upcoming Gigs</TabsTrigger>
          <TabsTrigger value="bookings">Booking Requests</TabsTrigger>
          <TabsTrigger value="music">Music Library</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="fans">Fan Engagement</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <DjProfile />
        </TabsContent>

        <TabsContent value="gigs">
          <UpcomingGigs />
        </TabsContent>

        <TabsContent value="bookings">
          <BookingRequests />
        </TabsContent>

        <TabsContent value="music">
          <MusicLibrary />
        </TabsContent>

        <TabsContent value="analytics">
          <Analytics />
        </TabsContent>

        <TabsContent value="fans">
          <FanEngagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}