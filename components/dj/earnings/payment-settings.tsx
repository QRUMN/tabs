'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Bank, PaypalIcon } from 'lucide-react';

export function PaymentSettings() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Default Payment Method</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bank">Direct Deposit</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="stripe">Stripe</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Bank Account</Label>
            <Input type="text" placeholder="Account number" />
          </div>

          <div className="space-y-2">
            <Label>Routing Number</Label>
            <Input type="text" placeholder="Routing number" />
          </div>

          <Button className="w-full">Save Payment Settings</Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Business Name</Label>
            <Input placeholder="Your business name" />
          </div>

          <div className="space-y-2">
            <Label>Tax ID</Label>
            <Input placeholder="Tax ID number" />
          </div>

          <div className="space-y-2">
            <Label>Billing Address</Label>
            <Input placeholder="Street address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>City</Label>
              <Input placeholder="City" />
            </div>
            <div className="space-y-2">
              <Label>ZIP Code</Label>
              <Input placeholder="ZIP code" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}