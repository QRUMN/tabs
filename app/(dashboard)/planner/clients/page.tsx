'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Search, Calendar, Mail, Phone, MoreVertical } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Tech Innovations Inc',
    email: 'sarah@techinnovations.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    upcomingEvents: 2,
    totalEvents: 8,
    status: 'active'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Global Events Co',
    email: 'michael@globalevents.com',
    phone: '+1 (555) 987-6543',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    upcomingEvents: 1,
    totalEvents: 5,
    status: 'active'
  }
];

export default function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Clients</h1>
          <p className="text-muted-foreground">Manage your client relationships</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Client List */}
      <div className="grid gap-4">
        {clients.map((client) => (
          <Card key={client.id} className="p-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src={client.avatar} alt={client.name} />
                <AvatarFallback>{client.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.company}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{client.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{client.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{client.upcomingEvents} upcoming events</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}