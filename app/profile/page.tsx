import React from 'react';
import { Card } from '@/components/ui/card';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Welcome to TABS</h2>
          <p className="text-muted-foreground">Complete your profile to get started</p>
        </div>
      </Card>
    </div>
  );
}