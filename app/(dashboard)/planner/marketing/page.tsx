'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Mail, 
  Share2, 
  Plus,
  ArrowUpRight,
  BarChart2
} from 'lucide-react';

export default function MarketingPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Marketing Hub</h1>
          <p className="text-muted-foreground">Manage campaigns and track performance</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Campaign
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Reach</p>
              <p className="text-2xl font-bold">24.5K</p>
              <p className="text-sm text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                12% increase
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-full">
              <Mail className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email Opens</p>
              <p className="text-2xl font-bold">68%</p>
              <p className="text-sm text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                5% increase
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-full">
              <Share2 className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Social Shares</p>
              <p className="text-2xl font-bold">1.2K</p>
              <p className="text-sm text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                8% increase
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-6">Active Campaigns</h2>
          <div className="space-y-4">
            {[
              {
                name: 'Summer Rooftop Launch',
                status: 'active',
                progress: 75,
                reach: '12.3K',
                engagement: '8.2K'
              },
              {
                name: 'Early Bird Tickets',
                status: 'scheduled',
                progress: 0,
                reach: '---',
                engagement: '---'
              }
            ].map((campaign) => (
              <div key={campaign.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{campaign.name}</h3>
                    <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <BarChart2 className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                </div>
                {campaign.status === 'active' && (
                  <>
                    <Progress value={campaign.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Reach: {campaign.reach}</span>
                      <span>Engagement: {campaign.engagement}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-6">Channel Performance</h2>
          <div className="space-y-4">
            {[
              { name: 'Email Marketing', performance: 85, trend: '+12%' },
              { name: 'Social Media', performance: 72, trend: '+8%' },
              { name: 'Partner Networks', performance: 64, trend: '+5%' },
              { name: 'Direct Traffic', performance: 58, trend: '+3%' }
            ].map((channel) => (
              <div key={channel.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{channel.name}</span>
                  <span className="text-green-500">{channel.trend}</span>
                </div>
                <Progress value={channel.performance} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}