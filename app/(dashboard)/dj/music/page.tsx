'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MusicLibrary } from '@/components/dj/music/music-library';
import { Playlists } from '@/components/dj/music/playlists';
import { Upload, Plus } from 'lucide-react';

export default function MusicPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">Music Library</h1>
          <p className="text-muted-foreground">Manage your tracks and playlists</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            New Playlist
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Tracks
          </Button>
        </div>
      </div>

      <Tabs defaultValue="tracks" className="space-y-6">
        <TabsList>
          <TabsTrigger value="tracks">Tracks</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="genres">Genres</TabsTrigger>
        </TabsList>

        <TabsContent value="tracks">
          <MusicLibrary />
        </TabsContent>

        <TabsContent value="playlists">
          <Playlists />
        </TabsContent>

        <TabsContent value="genres">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Genre content will be added here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}