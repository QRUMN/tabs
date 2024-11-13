'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FanList } from '@/components/dj/fans/fan-list';
import { FanEngagement } from '@/components/dj/fan-engagement';
import { FanAnalytics } from '@/components/dj/fans/fan-analytics';
import { MessageCenter } from '@/components/dj/fans/message-center';

export default function FansPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Fan Management</h1>
        <p className="text-muted-foreground">Connect and engage with your audience</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="fans">Fan List</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <FanAnalytics />
        </TabsContent>

        <TabsContent value="fans">
          <FanList />
        </TabsContent>

        <TabsContent value="engagement">
          <FanEngagement />
        </TabsContent>

        <TabsContent value="messages">
          <MessageCenter />
        </TabsContent>
      </Tabs>
    </div>
  );
}