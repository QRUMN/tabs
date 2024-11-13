'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Users, Music, Clock, Edit, Upload, Plus } from 'lucide-react';

export function VenueProfile() {
  return (
    <div className="grid gap-6">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">Skybar NYC</h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Manhattan, New York
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Rooftop</Badge>
              <Badge variant="secondary">Lounge</Badge>
              <Badge variant="secondary">Live Music</Badge>
              <Badge variant="secondary">Premium</Badge>
              <Button variant="outline" size="sm">
                <Plus className="h-3 w-3 mr-1" />
                Add Tag
              </Button>
            </div>
            <p className="text-muted-foreground mb-4">
              Luxury rooftop venue with panoramic city views, featuring world-class DJs 
              and premium cocktails in the heart of Manhattan.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Capacity: 300</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>10 PM - 4 AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4 text-primary" />
                <span>House, Techno, Live</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Media Gallery */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Media Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Add Media
            </Button>
          </div>
        </div>
      </Card>

      {/* Technical Specifications */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Sound System</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Funktion-One Sound System</li>
              <li>• Pioneer DJM-900NXS2 Mixer</li>
              <li>• 4x Pioneer CDJ-3000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Lighting</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Intelligent LED System</li>
              <li>• Moving Head Lights</li>
              <li>• Fog Machines</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Operating Hours */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h4 className="font-medium mb-2">Thursday</h4>
            <p className="text-sm text-muted-foreground">10 PM - 4 AM</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Friday</h4>
            <p className="text-sm text-muted-foreground">10 PM - 4 AM</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Saturday</h4>
            <p className="text-sm text-muted-foreground">10 PM - 4 AM</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Sunday</h4>
            <p className="text-sm text-muted-foreground">8 PM - 2 AM</p>
          </div>
        </div>
      </Card>
    </div>
  );
}