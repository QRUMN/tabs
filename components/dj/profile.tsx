'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Music, MapPin, Clock, DollarSign, Edit, Upload, Plus } from 'lucide-react';

export function DjProfile() {
  return (
    <div className="grid gap-6">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" />
                <AvatarFallback>DJ</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">DJ Shadow</h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                New York City
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">House</Badge>
              <Badge variant="secondary">Techno</Badge>
              <Badge variant="secondary">Deep House</Badge>
              <Badge variant="secondary">Progressive</Badge>
              <Button variant="outline" size="sm">
                <Plus className="h-3 w-3 mr-1" />
                Add Genre
              </Button>
            </div>
            <p className="text-muted-foreground mb-4">
              International DJ and producer with over 10 years of experience. 
              Specializing in deep house and techno, creating unforgettable experiences.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4 text-primary" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>4-6 Hour Sets</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <span>Starting at $800/night</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Media Showcase */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Media Showcase</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Add Media
            </Button>
          </div>
        </div>
      </Card>

      {/* Equipment List */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Equipment</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span>Pioneer CDJ-3000 x4</span>
            <Button variant="outline" size="sm">Edit</Button>
          </div>
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <span>Pioneer DJM-900NXS2</span>
            <Button variant="outline" size="sm">Edit</Button>
          </div>
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Equipment
          </Button>
        </div>
      </Card>

      {/* Pricing Packages */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Pricing Packages</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-4 border-2">
            <h4 className="font-semibold mb-2">Basic Package</h4>
            <p className="text-2xl font-bold mb-4">$800</p>
            <ul className="space-y-2 text-sm mb-4">
              <li>4 Hour Set</li>
              <li>Basic Equipment</li>
              <li>Standard Lighting</li>
            </ul>
            <Button className="w-full" variant="outline">Edit Package</Button>
          </Card>
          
          <Card className="p-4 border-2 border-primary">
            <h4 className="font-semibold mb-2">Premium Package</h4>
            <p className="text-2xl font-bold mb-4">$1,200</p>
            <ul className="space-y-2 text-sm mb-4">
              <li>6 Hour Set</li>
              <li>Full Equipment Setup</li>
              <li>Premium Lighting</li>
              <li>Sound Engineer</li>
            </ul>
            <Button className="w-full">Edit Package</Button>
          </Card>

          <Card className="p-4 border-2">
            <h4 className="font-semibold mb-2">Custom Package</h4>
            <p className="text-2xl font-bold mb-4">Contact</p>
            <ul className="space-y-2 text-sm mb-4">
              <li>Flexible Duration</li>
              <li>Custom Equipment</li>
              <li>Special Requests</li>
            </ul>
            <Button className="w-full" variant="outline">Edit Package</Button>
          </Card>
        </div>
      </Card>
    </div>
  );
}