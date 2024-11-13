'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { SocialMediaMetrics } from '@/components/venue/marketing/social-media-metrics';
import { EmailCampaigns } from '@/components/venue/marketing/email-campaigns';
import { PromotionalEvents } from '@/components/venue/marketing/promotional-events';
import { MarketingAnalytics } from '@/components/venue/marketing/marketing-analytics';

export default function MarketingPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Marketing</h1>
          <p className="text-muted-foreground">Manage your venue's marketing campaigns and promotions</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Campaign
        </Button>
      </div>

      {/* Marketing Analytics Overview */}
      <MarketingAnalytics />

      {/* Main Content */}
      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="email">Email Marketing</TabsTrigger>
          <TabsTrigger value="promotions">Promotions</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns">
          <Card className="p-6">
            <PromotionalEvents />
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card className="p-6">
            <SocialMediaMetrics />
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="p-6">
            <EmailCampaigns />
          </Card>
        </TabsContent>

        <TabsContent value="promotions">
          <Card className="p-6">
            <PromotionalEvents />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}