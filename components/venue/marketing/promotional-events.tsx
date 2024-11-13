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
import { Calendar, Edit, Trash2 } from 'lucide-react';

const promotions = [
  {
    id: 1,
    name: 'Ladies Night',
    type: 'Weekly Event',
    status: 'Active',
    startDate: '2024-03-15',
    endDate: '2024-06-15',
    budget: '$2,500',
    roi: '+125%',
  },
  {
    id: 2,
    name: 'Summer Launch Party',
    type: 'Special Event',
    status: 'Upcoming',
    startDate: '2024-05-01',
    endDate: '2024-05-01',
    budget: '$5,000',
    roi: '-',
  },
  {
    id: 3,
    name: 'Happy Hour',
    type: 'Daily Special',
    status: 'Active',
    startDate: '2024-03-01',
    endDate: '2024-12-31',
    budget: '$1,000',
    roi: '+85%',
  },
];

export function PromotionalEvents() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Promotional Events</h3>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule Event
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>ROI</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {promotions.map((promo) => (
            <TableRow key={promo.id}>
              <TableCell className="font-medium">{promo.name}</TableCell>
              <TableCell>{promo.type}</TableCell>
              <TableCell>
                <Badge
                  variant={promo.status === 'Active' ? 'default' : 'secondary'}
                >
                  {promo.status}
                </Badge>
              </TableCell>
              <TableCell>{promo.startDate}</TableCell>
              <TableCell>{promo.endDate}</TableCell>
              <TableCell>{promo.budget}</TableCell>
              <TableCell>{promo.roi}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
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