'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, ExternalLink } from 'lucide-react';

const socialMetrics = [
  {
    platform: 'Instagram',
    followers: '25.6K',
    engagement: '4.8%',
    growth: '+2.3%',
    trending: 'up',
    posts: 128,
  },
  {
    platform: 'Twitter',
    followers: '12.3K',
    engagement: '2.1%',
    growth: '-0.5%',
    trending: 'down',
    posts: 256,
  },
  {
    platform: 'Facebook',
    followers: '18.9K',
    engagement: '3.2%',
    growth: '+1.7%',
    trending: 'up',
    posts: 96,
  },
];

export function SocialMediaMetrics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Social Media Performance</h3>
        <Button variant="outline">
          <ExternalLink className="mr-2 h-4 w-4" />
          View Analytics
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Platform</TableHead>
            <TableHead>Followers</TableHead>
            <TableHead>Engagement Rate</TableHead>
            <TableHead>Growth</TableHead>
            <TableHead>Total Posts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {socialMetrics.map((metric) => (
            <TableRow key={metric.platform}>
              <TableCell className="font-medium">{metric.platform}</TableCell>
              <TableCell>{metric.followers}</TableCell>
              <TableCell>{metric.engagement}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {metric.trending === 'up' ? (
                    <Badge variant="default" className="bg-green-500">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      {metric.growth}
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      <ArrowDown className="mr-1 h-3 w-3" />
                      {metric.growth}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>{metric.posts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}