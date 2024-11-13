'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EarningsOverview } from '@/components/dj/earnings/earnings-overview';
import { PaymentHistory } from '@/components/dj/earnings/payment-history';
import { PendingPayments } from '@/components/dj/earnings/pending-payments';
import { PaymentSettings } from '@/components/dj/earnings/payment-settings';

export default function EarningsPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Earnings</h1>
        <p className="text-muted-foreground">Track your revenue and manage payments</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <EarningsOverview />
        </TabsContent>

        <TabsContent value="history">
          <PaymentHistory />
        </TabsContent>

        <TabsContent value="pending">
          <PendingPayments />
        </TabsContent>

        <TabsContent value="settings">
          <PaymentSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}