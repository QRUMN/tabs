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
import { Edit, Trash2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface BarInventoryProps {
  searchQuery: string;
}

const inventory = [
  {
    id: 1,
    name: 'Premium Vodka',
    category: 'Spirits',
    stock: 24,
    unit: 'bottles',
    minStock: 10,
    lastUpdated: '2024-03-10',
    stockLevel: 80,
  },
  {
    id: 2,
    name: 'Craft Beer',
    category: 'Beer',
    stock: 120,
    unit: 'bottles',
    minStock: 50,
    lastUpdated: '2024-03-10',
    stockLevel: 65,
  },
  {
    id: 3,
    name: 'Red Wine',
    category: 'Wine',
    stock: 36,
    unit: 'bottles',
    minStock: 12,
    lastUpdated: '2024-03-10',
    stockLevel: 45,
  },
];

export function BarInventory({ searchQuery }: BarInventoryProps) {
  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock Level</TableHead>
          <TableHead>Current Stock</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredInventory.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={item.stockLevel} className="w-[60px]" />
                <span className="text-sm text-muted-foreground">
                  {item.stockLevel}%
                </span>
              </div>
            </TableCell>
            <TableCell>
              {item.stock} {item.unit}
            </TableCell>
            <TableCell>{item.lastUpdated}</TableCell>
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