'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Search, Star, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: 'Skybar NYC',
    type: 'Venue',
    rating: 4.8,
    location: 'Manhattan, NY',
    phone: '+1 (555) 123-4567',
    email: 'events@skybarnyc.com',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    status: 'verified',
    upcomingEvents: 3,
    specialties: ['Rooftop Events', 'Corporate Functions', 'Private Parties'],
    capacity: '50-300 guests'
  },
  {
    id: 2,
    name: 'DJ Shadow',
    type: 'DJ/Entertainment',
    rating: 4.9,
    location: 'Brooklyn, NY',
    phone: '+1 (555) 987-6543',
    email: 'bookings@djshadow.com',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
    status: 'verified',
    upcomingEvents: 2,
    specialties: ['House Music', 'Corporate Events', 'Weddings'],
    experience: '10+ years'
  }
];

export default function VendorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Vendors</h1>
          <p className="text-muted-foreground">Manage your vendor relationships</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Vendor
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search vendors..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="venues">Venues</TabsTrigger>
            <TabsTrigger value="entertainment">Entertainment</TabsTrigger>
            <TabsTrigger value="catering">Catering</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{vendor.name}</h3>
                      <Badge variant="secondary">{vendor.type}</Badge>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{vendor.rating}</span>
                    </div>
                  </div>
                  <Button>View Profile</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{vendor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{vendor.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{vendor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{vendor.upcomingEvents} upcoming events</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {vendor.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}