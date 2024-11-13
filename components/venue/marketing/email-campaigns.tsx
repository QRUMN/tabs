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
import { Progress } from '@/components/ui/progress';
import { Edit, Trash2, Copy } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    name: 'Summer Party Series',
    status: 'Active',
    sent: 5420,
    openRate: 28.5,
    clickRate: 12.3,
    lastSent: '2024-03-10',
  },
  {
    id: 2,
    name: 'VIP Member Updates',
    status: 'Draft',
    sent: 0,
    openRate: 0,
    clickRate: 0,
    lastSent: '-',
  },
  {
    id: 3,
    name: 'Weekend Events',
    status: 'Scheduled',
    sent: 0,
    openRate: 0,
    clickRate: 0,
    lastSent: '-',
  },
];

export function EmailCampaigns() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Email Campaigns</h3>
        <Button>Create Campaign</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campaign</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Recipients</TableHead>
            <TableHead>Open Rate</TableHead>
            <TableHead>Click Rate</TableHead>
            <TableHead>Last Sent</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    campaign.status === 'Active'
                      ? 'default'
                      : campaign.status === 'Draft'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {campaign.status}
                </Badge>
              </TableCell>
              <TableCell>{campaign.sent.toLocaleString()}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress
                    value={campaign.openRate}
                    className="w-[60px]"
                  />
                  <span className="text-sm">{campaign.openRate}%</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress
                    value={campaign.clickRate}
                    className="w-[60px]"
                  />
                  <span className="text-sm">{campaign.clickRate}%</span>
                </div>
              </TableCell>
              <TableCell>{campaign.lastSent}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}