'use client';

import { Card } from '@/components/ui/card';
import { Calendar, Users, DollarSign, Star } from 'lucide-react';

export function VenueStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Calendar className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Events This Month</p>
            <h2 className="text-2xl font-bold">24</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Users className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Attendance</p>
            <h2 className="text-2xl font-bold">4.8K</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <DollarSign className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Revenue</p>
            <h2 className="text-2xl font-bold">$42.5K</h2>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Star className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Rating</p>
            <h2 className="text-2xl font-bold">4.9</h2>
          </div>
        </div>
      </Card>
    </div>
  );
}