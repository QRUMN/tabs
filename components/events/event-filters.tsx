'use client';

import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export function EventFilters() {
  return (
    <div className="grid gap-4 p-4 border rounded-lg">
      <div className="grid gap-2">
        <Label>Price Range</Label>
        <Slider
          defaultValue={[0, 100]}
          max={200}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>$200+</span>
        </div>
      </div>

      <div className="grid gap-2">
        <Label>Date</Label>
        <Select defaultValue="today">
          <SelectTrigger>
            <SelectValue placeholder="Select date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="weekend">This Weekend</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label>Distance</Label>
        <Select defaultValue="5">
          <SelectTrigger>
            <SelectValue placeholder="Select distance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Within 1 mile</SelectItem>
            <SelectItem value="5">Within 5 miles</SelectItem>
            <SelectItem value="10">Within 10 miles</SelectItem>
            <SelectItem value="25">Within 25 miles</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="friends">Friends Going</Label>
        <Switch id="friends" />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="tickets">Available Tickets</Label>
        <Switch id="tickets" />
      </div>
    </div>
  );
}