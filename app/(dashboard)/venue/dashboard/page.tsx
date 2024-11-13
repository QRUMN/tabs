'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VenueStats } from '@/components/venue/dashboard/venue-stats';
import { VenueCalendar } from '@/components/venue/dashboard/venue-calendar';
import { UpcomingEvents } from '@/components/venue/dashboard/upcoming-events';
import { DJDirectory } from '@/components/venue/dashboard/dj-directory';

export default function VenueDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Skybar NYC</h1>
          <p className="text-muted-foreground">Manage your venue operations</p>
        </div>
        <Button>Create Event</Button>
      </div>

      <VenueStats />

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="djs">DJs</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Live Operations</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Current Capacity</p>
                    <p className="text-2xl font-bold">245/300</p>
                  </div>
                  <Button variant="outline">View Details</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Active Staff</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <Button variant="outline">Manage Staff</Button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Bar Status</p>
                    <p className="text-2xl font-bold">Well Stocked</p>
                  </div>
                  <Button variant="outline">Check Inventory</Button>
                </div>
              </div>
            </Card>

            <VenueCalendar />
          </div>

          <UpcomingEvents />
        </TabsContent>

        <TabsContent value="events">
          <UpcomingEvents />
        </TabsContent>

        <TabsContent value="djs">
          <DJDirectory />
        </TabsContent>

        <TabsContent value="staff">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Staff Management</h3>
            <p className="text-muted-foreground">Staff management features coming soon...</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}