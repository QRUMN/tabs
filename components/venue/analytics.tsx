'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', attendance: 3200, revenue: 48000, events: 16 },
  { name: 'Feb', attendance: 3800, revenue: 52000, events: 18 },
  { name: 'Mar', attendance: 4200, revenue: 58000, events: 20 },
  { name: 'Apr', attendance: 4800, revenue: 62000, events: 24 },
];

export function VenueAnalytics() {
  return (
    <div className="space-y-6">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Events</p>
              <h2 className="text-2xl font-bold">78</h2>
              <p className="text-xs text-green-500">+12% from last quarter</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Revenue</p>
              <h2 className="text-2xl font-bold">$220K</h2>
              <p className="text-xs text-green-500">+8% from last quarter</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Attendance</p>
              <h2 className="text-2xl font-bold">16K</h2>
              <p className="text-xs text-green-500">+15% from last quarter</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg. Capacity</p>
              <h2 className="text-2xl font-bold">85%</h2>
              <p className="text-xs text-green-500">+5% from last quarter</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <Card className="p-6">
        <Tabs defaultValue="revenue">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Last 30 Days</Button>
              <Button variant="outline" size="sm">Export</Button>
            </div>
          </div>

          <TabsContent value="revenue" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#85BCD8" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="attendance" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#85BCD8" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="events" className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="events" 
                  stroke="#85BCD8" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Popular Times */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Peak Hours Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Busiest Day</h4>
            <p className="text-2xl font-bold">Saturday</p>
            <p className="text-sm text-muted-foreground">95% capacity</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Peak Hours</h4>
            <p className="text-2xl font-bold">11 PM - 2 AM</p>
            <p className="text-sm text-muted-foreground">85% capacity</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Popular Genre</h4>
            <p className="text-2xl font-bold">House</p>
            <p className="text-sm text-muted-foreground">42% of events</p>
          </div>
        </div>
      </Card>
    </div>
  );
}