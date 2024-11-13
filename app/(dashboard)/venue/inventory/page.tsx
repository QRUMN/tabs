'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Filter, Download } from 'lucide-react';
import { BarInventory } from '@/components/venue/inventory/bar-inventory';
import { EquipmentList } from '@/components/venue/inventory/equipment-list';
import { SuppliesList } from '@/components/venue/inventory/supplies-list';
import { LowStockAlerts } from '@/components/venue/inventory/low-stock-alerts';

export default function VenueInventory() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Inventory</h1>
          <p className="text-muted-foreground">Manage your venue's inventory and supplies</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Low Stock Alerts */}
      <LowStockAlerts />

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Inventory Tabs */}
      <Tabs defaultValue="bar" className="space-y-6">
        <TabsList>
          <TabsTrigger value="bar">Bar Inventory</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="supplies">Supplies</TabsTrigger>
        </TabsList>

        <TabsContent value="bar">
          <Card className="p-6">
            <BarInventory searchQuery={searchQuery} />
          </Card>
        </TabsContent>

        <TabsContent value="equipment">
          <Card className="p-6">
            <EquipmentList searchQuery={searchQuery} />
          </Card>
        </TabsContent>

        <TabsContent value="supplies">
          <Card className="p-6">
            <SuppliesList searchQuery={searchQuery} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}