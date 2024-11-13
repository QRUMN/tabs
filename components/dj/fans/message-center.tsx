'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Send, Users } from 'lucide-react';

export function MessageCenter() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">New Announcement</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Audience</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fans</SelectItem>
                <SelectItem value="superfans">Superfans Only</SelectItem>
                <SelectItem value="recent">Recent Event Attendees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Subject</Label>
            <Input placeholder="Announcement subject..." />
          </div>

          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea placeholder="Type your message..." className="h-32" />
          </div>

          <Button className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Send Announcement
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Messages</h3>
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">No recent messages</p>
        </div>
      </Card>
    </div>
  );
}