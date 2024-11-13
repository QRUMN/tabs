'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, Plus, Download } from 'lucide-react';

const budgetSummary = {
  totalBudget: 50000,
  spent: 32500,
  remaining: 17500,
  categories: [
    { name: 'Venue', allocated: 20000, spent: 15000 },
    { name: 'Catering', allocated: 15000, spent: 10000 },
    { name: 'Entertainment', allocated: 10000, spent: 5000 },
    { name: 'Decor', allocated: 5000, spent: 2500 }
  ]
};

const recentTransactions = [
  {
    id: 1,
    description: 'Venue Deposit - Skybar NYC',
    amount: 5000,
    date: '2024-03-15',
    category: 'Venue',
    type: 'expense'
  },
  {
    id: 2,
    description: 'Catering Advance Payment',
    amount: 2500,
    date: '2024-03-14',
    category: 'Catering',
    type: 'expense'
  }
];

export default function BudgetPage() {
  const percentageSpent = (budgetSummary.spent / budgetSummary.totalBudget) * 100;

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Budget Management</h1>
          <p className="text-muted-foreground">Track expenses and manage budgets</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Budget</p>
              <p className="text-2xl font-bold">${budgetSummary.totalBudget.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Spent</p>
              <p className="text-2xl font-bold">${budgetSummary.spent.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-full">
              <TrendingDown className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Remaining</p>
              <p className="text-2xl font-bold">${budgetSummary.remaining.toLocaleString()}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-6">Budget Overview</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{percentageSpent.toFixed(1)}%</span>
              </div>
              <Progress value={percentageSpent} className="h-2" />
            </div>
            
            <div className="space-y-4">
              {budgetSummary.categories.map((category) => {
                const categoryPercentage = (category.spent / category.allocated) * 100;
                return (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{category.name}</span>
                      <span>${category.spent.toLocaleString()} / ${category.allocated.toLocaleString()}</span>
                    </div>
                    <Progress value={categoryPercentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{transaction.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{transaction.date}</span>
                    <Badge variant="secondary">{transaction.category}</Badge>
                  </div>
                </div>
                <p className={`font-semibold ${
                  transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'
                }`}>
                  {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}