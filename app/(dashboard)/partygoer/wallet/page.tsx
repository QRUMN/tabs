'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Ticket, Receipt, ArrowUpDown } from 'lucide-react';

export default function WalletPage() {
  return (
    <div className="container max-w-6xl py-6 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Wallet</h1>
          <p className="text-muted-foreground">Manage your funds and tickets</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Add Funds
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <CreditCard className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Balance</p>
              <h2 className="text-2xl font-bold">$250.00</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Ticket className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Tickets</p>
              <h2 className="text-2xl font-bold">3</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Receipt className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">This Month</p>
              <h2 className="text-2xl font-bold">-$420.00</h2>
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="mt-6">
          <Card>
            <div className="divide-y divide-border">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-full ${transaction.type === 'expense' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <p className={`font-medium ${transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'}`}>
                    {transaction.type === 'expense' ? '-' : '+'}${transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="mt-6">
          <Card>
            <div className="divide-y divide-border">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Ticket className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{ticket.event}</p>
                      <p className="text-sm text-muted-foreground">{ticket.date}</p>
                    </div>
                  </div>
                  <button className="text-sm text-primary hover:underline">
                    View Ticket
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="mt-6">
          <Card className="p-6">
            <p className="text-muted-foreground">Coming soon...</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const transactions = [
  {
    id: 1,
    description: 'Underground House Night Ticket',
    date: 'Today, 2:30 PM',
    amount: '75.00',
    type: 'expense'
  },
  {
    id: 2,
    description: 'Added Funds',
    date: 'Yesterday',
    amount: '200.00',
    type: 'income'
  },
  {
    id: 3,
    description: 'Late Night Pizza',
    date: 'Mar 10, 2024',
    amount: '25.00',
    type: 'expense'
  }
];

const tickets = [
  {
    id: 1,
    event: 'Underground House Night',
    date: 'Tomorrow, 11 PM',
    venue: 'The Basement'
  },
  {
    id: 2,
    event: 'Summer Rooftop Party',
    date: 'Mar 15, 2024',
    venue: 'Skybar NYC'
  },
  {
    id: 3,
    event: 'Jazz & Cocktails',
    date: 'Mar 20, 2024',
    venue: 'Blue Note'
  }
];