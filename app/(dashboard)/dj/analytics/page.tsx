'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PerformanceMetrics } from '@/components/dj/analytics/performance-metrics';
import { BookingAnalytics } from '@/components/dj/analytics/booking-analytics';
import { RevenueChart } from '@/components/dj/analytics/revenue-chart';
import { AudienceInsights } from '@/components/dj/analytics/audience-insights';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics</h1>
        <p className="text-muted-foreground">Track your performance and growth</p>
      </div>

      <PerformanceMetrics />

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <BookingAnalytics />
            <RevenueChart />
          </div>
          <AudienceInsights />
        </TabsContent>

        <TabsContent value="bookings">
          <Card className="p-6">
            <BookingAnalytics detailed />
          </Card>
        </TabsContent>

        <TabsContent value="revenue">
          <Card className="p-6">
            <RevenueChart detailed />
          </Card>
        </TabsContent>

        <TabsContent value="audience">
          <Card className="p-6">
            <AudienceInsights detailed />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}