'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', bookings: 4, revenue: 3200, followers: 1200 },
  { name: 'Feb', bookings: 6, revenue: 4800, followers: 1400 },
  { name: 'Mar', bookings: 8, revenue: 6400, followers: 1800 },
  { name: 'Apr', bookings: 12, revenue: 9600, followers: 2400 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
              <h2 className="text-2xl font-bold">30</h2>
              <p className="text-xs text-green-500">+12% from last month</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <h2 className="text-2xl font-bold">$24K</h2>
              <p className="text-xs text-green-500">+8% from last month</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Profile Views</p>
              <h2 className="text-2xl font-bold">1.2K</h2>
              <p className="text-xs text-green-500">+15% from last month</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg. Set Time</p>
              <h2 className="text-2xl font-bold">4.5h</h2>
              <p className="text-xs text-muted-foreground">Per event</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <Card className="p-6">
        <Tabs defaultValue="bookings">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Last 30 Days</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>

          <TabsContent value="bookings" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="bookings" stroke="#85BCD8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="revenue" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#85BCD8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="engagement" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="followers" stroke="#85BCD8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Popular Time Slots */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Popular Booking Times</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Most Requested Day</h4>
            <p className="text-2xl font-bold">Saturday</p>
            <p className="text-sm text-muted-foreground">42% of bookings</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Peak Hours</h4>
            <p className="text-2xl font-bold">10 PM - 2 AM</p>
            <p className="text-sm text-muted-foreground">65% of sets</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Average Duration</h4>
            <p className="text-2xl font-bold">4.5 Hours</p>
            <p className="text-sm text-muted-foreground">Per event</p>
          </div>
        </div>
      </Card>
    </div>
  );
}