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
import { Edit, Trash2 } from 'lucide-react';

interface EquipmentListProps {
  searchQuery: string;
}

const equipment = [
  {
    id: 1,
    name: 'Pioneer CDJ-3000',
    category: 'DJ Equipment',
    status: 'Operational',
    location: 'Main Stage',
    lastMaintenance: '2024-02-15',
    nextMaintenance: '2024-04-15',
  },
  {
    id: 2,
    name: 'QSC K12.2 Speaker',
    category: 'Sound',
    status: 'Needs Repair',
    location: 'Bar Area',
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-03-20',
  },
  {
    id: 3,
    name: 'LED Par Light',
    category: 'Lighting',
    status: 'Operational',
    location: 'Dance Floor',
    lastMaintenance: '2024-03-01',
    nextMaintenance: '2024-05-01',
  },
];

export function EquipmentList({ searchQuery }: EquipmentListProps) {
  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Last Maintenance</TableHead>
          <TableHead>Next Maintenance</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredEquipment.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>
              <Badge
                variant={item.status === 'Operational' ? 'default' : 'destructive'}
              >
                {item.status}
              </Badge>
            </TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.lastMaintenance}</TableCell>
            <TableCell>{item.nextMaintenance}</TableCell>
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
  );
}