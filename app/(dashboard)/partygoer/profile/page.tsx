'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Edit, MapPin, Star, Users } from 'lucide-react';
import { ProfileStats } from '@/components/profile/profile-stats';
import { PastEvents } from '@/components/profile/past-events';
import { Reviews } from '@/components/profile/reviews';
import { Friends } from '@/components/profile/friends';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold">John</h1>
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
                    Living for the music and good vibes! Always down for underground events and discovering new artists.
                  </p>
                </div>
                <Button className="self-start">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Stats */}
      <ProfileStats />

      {/* Profile Content */}
      <Tabs defaultValue="past-events" className="space-y-6">
        <TabsList>
          <TabsTrigger value="past-events">Past Events</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="friends">
            <Users className="h-4 w-4 mr-2" />
            Friends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="past-events">
          <PastEvents />
        </TabsContent>

        <TabsContent value="reviews">
          <Reviews />
        </TabsContent>

        <TabsContent value="friends">
          <Friends />
        </TabsContent>
      </Tabs>
    </div>
  );
}