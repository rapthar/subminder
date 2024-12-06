export interface Subscription {
  id: string;
  name: string;
  plan: string;
  amount: number;
  currency: string;
  daysLeft: number;
  icon: string;
  category: 'productivity' | 'social' | 'entertainment';
}

export interface SubscriptionStats {
  productivity: number;
  social: number;
  entertainment: number;
}

export interface BankCard {
  bank: string;
  number: string;
  type: 'visa' | 'mastercard';
}

export interface PaymentHistory {
  date: string;
  planName: string;
  planId: string;
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface SpendingData {
  month: string;
  amount: number;
}