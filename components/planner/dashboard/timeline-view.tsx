'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const timeline = [
  {
    id: 1,
    task: 'Venue Setup',
    time: '2:00 PM',
    status: 'completed',
    assignee: {
      name: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  },
  {
    id: 2,
    task: 'Sound Check',
    time: '3:30 PM',
    status: 'in-progress',
    assignee: {
      name: 'Mike',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6'
    }
  },
  {
    id: 3,
    task: 'Guest Check-in',
    time: '5:00 PM',
    status: 'upcoming',
    assignee: {
      name: 'Alex',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9'
    }
  },
];

export function TimelineView() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Today's Schedule</h3>
        <Button>Add Task</Button>
      </div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-8 border-l border-border" />
        
        <div className="space-y-8">
          {timeline.map((item) => (
            <div key={item.id} className="relative flex gap-4 items-start">
              <div className={`w-4 h-4 rounded-full mt-1.5 z-10 ${
                item.status === 'completed' ? 'bg-green-500' :
                item.status === 'in-progress' ? 'bg-yellow-500' :
                'bg-muted'
              }`} />
              
              <div className="flex-1 bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{item.task}</h4>
                    <Badge variant={
                      item.status === 'completed' ? 'default' :
                      item.status === 'in-progress' ? 'secondary' :
                      'outline'
                    }>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {item.time}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={item.assignee.avatar} />
                      <AvatarFallback>{item.assignee.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">
                      {item.assignee.name}
                    </span>
                  </div>

                  {item.status === 'completed' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : item.status === 'in-progress' ? (
                    <Clock className="h-4 w-4 text-yellow-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}