'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Phone, Mail, Calendar } from 'lucide-react';

interface VendorCardProps {
  vendor: {
    id: number;
    name: string;
    type: string;
    rating: number;
    location: string;
    phone: string;
    email: string;
    image: string;
    status: string;
    upcomingEvents: number;
    specialties: string[];
  };
}

export function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Card className="p-6">
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
  );
}