'use client';

import { Card } from '@/components/ui/card';

export function ArtistGallery() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Favorite Artists</h3>
      <div className="space-y-4">
        {/* Artist gallery will be added here */}
        <p className="text-muted-foreground">No favorite artists yet</p>
      </div>
    </Card>
  );
}