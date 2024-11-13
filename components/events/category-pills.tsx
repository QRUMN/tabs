'use client';

import { Button } from '@/components/ui/button';
import { Music, Cocktail, Users, Star, Coffee } from 'lucide-react';

const categories = [
  { icon: Music, label: 'Live Music' },
  { icon: Cocktail, label: 'Nightlife' },
  { icon: Users, label: 'Social' },
  { icon: Star, label: 'Featured' },
  { icon: Coffee, label: 'Food & Drinks' },
];

export function CategoryPills() {
  return (
    <div className="flex gap-2 pb-2">
      {categories.map(({ icon: Icon, label }) => (
        <Button
          key={label}
          variant="outline"
          className="rounded-full"
          size="sm"
        >
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </Button>
      ))}
    </div>
  );
}