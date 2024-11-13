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
import { Progress } from '@/components/ui/progress';
import { Edit, Trash2 } from 'lucide-react';

interface SuppliesListProps {
  searchQuery: string;
}

const supplies = [
  {
    id: 1,
    name: 'Paper Towels',
    category: 'Cleaning',
    stock: 45,
    unit: 'rolls',
    minStock: 20,
    stockLevel: 75,
    lastOrdered: '2024-03-01',
  },
  {
    id: 2,
    name: 'Disposable Cups',
    category: 'Bar Supplies',
    stock: 2000,
    unit: 'pieces',
    minStock: 500,
    stockLevel: 90,
    lastOrdered: '2024-03-05',
  },
  {
    id: 3,
    name: 'Cleaning Solution',
    category: 'Cleaning',
    stock: 8,
    unit: 'gallons',
    minStock: 4,
    stockLevel: 40,
    lastOrdered: '2024-02-28',
  },
];

export function SuppliesList({ searchQuery }: SuppliesListProps) {
  const filteredSupplies = supplies.filter(item =>
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
          <TableHead>Last Ordered</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredSupplies.map((item) => (
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
            <TableCell>{item.lastOrdered}</TableCell>
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