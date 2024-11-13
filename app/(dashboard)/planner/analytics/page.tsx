'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RevenueMetrics } from '@/components/planner/analytics/revenue-metrics';
import { AttendanceStats } from '@/components/planner/analytics/attendance-stats';
import { ClientSatisfaction } from '@/components/planner/analytics/client-satisfaction';
import { MarketingPerformance } from '@/components/planner/analytics/marketing-performance';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track your event performance metrics</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="satisfaction">Client Satisfaction</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
              <p className="text-2xl font-bold mt-2">$124,500</p>
              <p className="text-sm text-green-500 mt-1">+12.3% from last month</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground">Events Completed</h3>
              <p className="text-2xl font-bold mt-2">48</p>
              <p className="text-sm text-green-500 mt-1">+8.1% from last month</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground">Total Attendees</h3>
              <p className="text-2xl font-bold mt-2">12,845</p>
              <p className="text-sm text-green-500 mt-1">+15.2% from last month</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-sm font-medium text-muted-foreground">Client Satisfaction</h3>
              <p className="text-2xl font-bold mt-2">4.8/5.0</p>
              <p className="text-sm text-green-500 mt-1">+0.2 from last month</p>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <RevenueMetrics />
            <AttendanceStats />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ClientSatisfaction />
            <MarketingPerformance />
          </div>
        </TabsContent>

        <TabsContent value="revenue">
          <RevenueMetrics detailed />
        </TabsContent>

        <TabsContent value="attendance">
          <AttendanceStats detailed />
        </TabsContent>

        <TabsContent value="satisfaction">
          <ClientSatisfaction detailed />
        </TabsContent>

        <TabsContent value="marketing">
          <MarketingPerformance detailed />
        </TabsContent>
      </Tabs>
    </div>
  );
}