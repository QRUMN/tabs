'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, MapPin, Edit, Calendar, Ticket, Plane } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { useGreeting } from '@/hooks/use-greetings';
import Link from 'next/link';
import { WalletOverview } from '@/components/wallet/wallet-overview';
import { EventCalendar } from '@/components/dashboard/event-calendar';
import { TicketManager } from '@/components/dashboard/ticket-manager';
import { TravelPlanner } from '@/components/dashboard/travel-planner';
import { EventHistory } from '@/components/dashboard/event-history';
import { ArtistGallery } from '@/components/dashboard/artist-gallery';
import { FriendsActivity } from '@/components/dashboard/friends-activity';
import { GroupList } from '@/components/dashboard/group-list';

export default function PartygoerDashboard() {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Guest';
  const greeting = useGreeting(firstName);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="flex-1 min-w-0">
          <h1 className="text-4xl font-bold mb-2">{greeting}</h1>
          <p className="text-muted-foreground">The night is calling...</p>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
          <Link href="/partygoer/explore">Explore Events</Link>
        </Button>
      </div>

      {/* Profile Overview */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback>{firstName[0]}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">{firstName}</h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                New York City
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Verified Member</Badge>
                  <Badge variant="secondary">
                    <Star className="h-3 w-3 mr-1 fill-primary" />
                    4.9
                  </Badge>
                </div>
                <p className="text-muted-foreground">
                  Living for the music and good vibes! Always down for underground events.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/partygoer/settings">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="upcoming" className="space-y-4">
            <TabsList>
              <TabsTrigger value="upcoming">
                <Calendar className="h-4 w-4 mr-2" />
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="tickets">
                <Ticket className="h-4 w-4 mr-2" />
                Tickets
              </TabsTrigger>
              <TabsTrigger value="travel">
                <Plane className="h-4 w-4 mr-2" />
                Travel
              </TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <EventCalendar />
            </TabsContent>
            <TabsContent value="tickets">
              <TicketManager />
            </TabsContent>
            <TabsContent value="travel">
              <TravelPlanner />
            </TabsContent>
          </Tabs>

          <EventHistory />
          <ArtistGallery />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <WalletOverview />
          <FriendsActivity />
          <GroupList />
        </div>
      </div>
    </div>
  );
}