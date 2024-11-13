'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, DollarSign, Clock, Plus } from 'lucide-react';
import { EventOverview } from '@/components/planner/dashboard/event-overview';
import { GuestMetrics } from '@/components/planner/dashboard/guest-metrics';
import { VendorStatus } from '@/components/planner/dashboard/vendor-status';
import { TimelineView } from '@/components/planner/dashboard/timeline-view';

export default function PlannerDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome to Elite Events</h1>
          <p className="text-muted-foreground">Your event planning dashboard</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Events</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Guests</p>
              <h2 className="text-2xl font-bold">1.8K</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Revenue</p>
              <h2 className="text-2xl font-bold">$42.5K</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Upcoming</p>
              <h2 className="text-2xl font-bold">8</h2>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Event Overview</TabsTrigger>
          <TabsTrigger value="guests">Guest Management</TabsTrigger>
          <TabsTrigger value="vendors">Vendor Status</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <EventOverview />
        </TabsContent>

        <TabsContent value="guests">
          <GuestMetrics />
        </TabsContent>

        <TabsContent value="vendors">
          <VendorStatus />
        </TabsContent>

        <TabsContent value="timeline">
          <TimelineView />
        </TabsContent>
      </Tabs>
    </div>
  );
}