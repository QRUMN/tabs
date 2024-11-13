'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Download, Upload, Filter } from 'lucide-react';

const guestMetrics = {
  total: 500,
  confirmed: 320,
  pending: 150,
  declined: 30,
  dietary: {
    vegetarian: 45,
    vegan: 25,
    glutenFree: 30,
    none: 220,
  },
  tableAssignments: {
    assigned: 280,
    unassigned: 40,
  }
};

export function GuestMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">RSVP Status</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Confirmed ({guestMetrics.confirmed})</span>
              <span>{Math.round(guestMetrics.confirmed/guestMetrics.total * 100)}%</span>
            </div>
            <Progress value={guestMetrics.confirmed/guestMetrics.total * 100} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Pending ({guestMetrics.pending})</span>
              <span>{Math.round(guestMetrics.pending/guestMetrics.total * 100)}%</span>
            </div>
            <Progress value={guestMetrics.pending/guestMetrics.total * 100} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Declined ({guestMetrics.declined})</span>
              <span>{Math.round(guestMetrics.declined/guestMetrics.total * 100)}%</span>
            </div>
            <Progress value={guestMetrics.declined/guestMetrics.total * 100} />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Dietary Preferences</h3>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="space-y-6">
          {Object.entries(guestMetrics.dietary).map(([preference, count]) => (
            <div key={preference} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="capitalize">{preference} ({count})</span>
                <span>{Math.round(count/guestMetrics.confirmed * 100)}%</span>
              </div>
              <Progress value={count/guestMetrics.confirmed * 100} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}