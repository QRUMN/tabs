'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Users, DollarSign, Clock, Download, TrendingUp } from 'lucide-react';
import { RevenueChart } from '@/components/venue/analytics/revenue-chart';
import { AttendanceChart } from '@/components/venue/analytics/attendance-chart';
import { PopularityChart } from '@/components/venue/analytics/popularity-chart';
import { PeakHoursChart } from '@/components/venue/analytics/peak-hours-chart';

export default function VenueAnalytics() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Track your venue's performance metrics</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
              <h2 className="text-2xl font-bold">$42.5K</h2>
              <p className="text-sm text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12.5%
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Attendance</p>
              <h2 className="text-2xl font-bold">4,821</h2>
              <p className="text-sm text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +8.2%
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Events This Month</p>
              <h2 className="text-2xl font-bold">24</h2>
              <p className="text-sm text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +4 vs last month
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg. Event Duration</p>
              <h2 className="text-2xl font-bold">4.2h</h2>
              <p className="text-sm text-muted-foreground">+0.3h vs last month</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="popularity">Genre Popularity</TabsTrigger>
          <TabsTrigger value="peak-hours">Peak Hours</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue">
          <Card className="p-6">
            <RevenueChart />
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card className="p-6">
            <AttendanceChart />
          </Card>
        </TabsContent>

        <TabsContent value="popularity">
          <Card className="p-6">
            <PopularityChart />
          </Card>
        </TabsContent>

        <TabsContent value="peak-hours">
          <Card className="p-6">
            <PeakHoursChart />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}