'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Search, Filter, MoreVertical } from 'lucide-react';

const staffMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bar Manager',
    shift: 'Evening',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    contact: '+1 (555) 123-4567',
    startDate: '2023-01-15',
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Security Lead',
    shift: 'Night',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    contact: '+1 (555) 234-5678',
    startDate: '2023-03-20',
  },
  {
    id: 3,
    name: 'Alex Rivera',
    role: 'Bartender',
    shift: 'Evening',
    status: 'off-duty',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    contact: '+1 (555) 345-6789',
    startDate: '2023-06-10',
  },
];

export default function StaffPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground">Manage your venue staff and schedules</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Staff Member
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search staff..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Staff</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="off-duty">Off Duty</TabsTrigger>
          <TabsTrigger value="schedules">Schedules</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <Card>
            <div className="divide-y">
              {staffMembers.map((staff) => (
                <div
                  key={staff.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={staff.avatar} />
                      <AvatarFallback>{staff.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{staff.name}</h3>
                        <Badge
                          variant={staff.status === 'active' ? 'default' : 'secondary'}
                        >
                          {staff.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{staff.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-right">
                      <p>{staff.contact}</p>
                      <p className="text-muted-foreground">{staff.shift} Shift</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="active">
          <Card className="p-6">
            <p className="text-muted-foreground">Active staff members will be shown here</p>
          </Card>
        </TabsContent>

        <TabsContent value="off-duty">
          <Card className="p-6">
            <p className="text-muted-foreground">Off-duty staff members will be shown here</p>
          </Card>
        </TabsContent>

        <TabsContent value="schedules">
          <Card className="p-6">
            <p className="text-muted-foreground">Staff schedules will be shown here</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}