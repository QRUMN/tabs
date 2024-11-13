'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, FileText, DollarSign } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: 'DJ Shadow',
    type: 'DJ/Entertainment',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    status: 'confirmed',
    payment: 'paid',
    contract: true,
  },
  {
    id: 2,
    name: 'Skybar NYC',
    type: 'Venue',
    avatar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
    status: 'pending',
    payment: 'partial',
    contract: true,
  },
  {
    id: 3,
    name: 'Gourmet Catering',
    type: 'Catering',
    avatar: 'https://images.unsplash.com/photo-1574966739987-27c7f024868f',
    status: 'confirmed',
    payment: 'unpaid',
    contract: false,
  },
];

export function VendorStatus() {
  return (
    <div className="space-y-4">
      {vendors.map((vendor) => (
        <Card key={vendor.id} className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={vendor.avatar} />
                <AvatarFallback>{vendor.name[0]}</AvatarFallback>
              </Avatar>
              
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{vendor.name}</h3>
                  <Badge variant={
                    vendor.status === 'confirmed' ? 'default' : 'secondary'
                  }>
                    {vendor.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{vendor.type}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FileText className={`h-4 w-4 ${
                  vendor.contract ? 'text-green-500' : 'text-muted-foreground'
                }`} />
                <span className="text-sm">
                  {vendor.contract ? 'Contract Signed' : 'Pending Contract'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <DollarSign className={`h-4 w-4 ${
                  vendor.payment === 'paid' ? 'text-green-500' :
                  vendor.payment === 'partial' ? 'text-yellow-500' :
                  'text-red-500'
                }`} />
                <span className="text-sm capitalize">{vendor.payment}</span>
              </div>

              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}