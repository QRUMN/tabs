'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const equipmentCategories = [
  {
    id: 'controllers',
    name: 'Controllers',
    items: [
      { id: 1, name: 'Pioneer DDJ-1000', status: 'Available', condition: 'Excellent' },
      { id: 2, name: 'Denon DJ Prime 4', status: 'In Use', condition: 'Good' },
    ]
  },
  {
    id: 'speakers',
    name: 'Speakers',
    items: [
      { id: 3, name: 'QSC K12.2', status: 'Available', condition: 'Good' },
      { id: 4, name: 'JBL PRX815W', status: 'Maintenance', condition: 'Fair' },
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    items: [
      { id: 5, name: 'Pioneer HDJ-X10', status: 'Available', condition: 'Excellent' },
      { id: 6, name: 'Cables & Adapters Kit', status: 'Available', condition: 'Good' },
    ]
  }
];

export default function EquipmentPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Equipment</h1>
          <p className="text-muted-foreground">Manage your gear and track maintenance</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Equipment
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search equipment..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <Tabs defaultValue="controllers" className="space-y-6">
        <TabsList>
          {equipmentCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {equipmentCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-4">
              {category.items.map((item) => (
                <Card key={item.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            item.status === 'Available' ? 'default' :
                            item.status === 'In Use' ? 'secondary' :
                            'destructive'
                          }
                        >
                          {item.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Condition: {item.condition}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Equipment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Total Equipment</h3>
          <p className="text-3xl font-bold">6</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Available</h3>
          <p className="text-3xl font-bold text-green-500">4</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Maintenance Required</h3>
          <p className="text-3xl font-bold text-red-500">1</p>
        </Card>
      </div>
    </div>
  );
}