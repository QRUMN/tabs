import React from 'react';
import { Card } from '@/components/ui/card';

export default function MessagesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Messages</h1>
      <Card className="p-6">
        <p className="text-muted-foreground">No messages yet</p>
      </Card>
    </div>
  );
}