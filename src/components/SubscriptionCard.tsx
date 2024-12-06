import { ChevronRight } from 'lucide-react';
import { Subscription } from '../types/subscription';

interface SubscriptionCardProps {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  return (
    <div className="bg-black/90 p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={subscription.icon}
            alt={subscription.name}
            className="w-10 h-10 rounded-lg object-contain bg-black p-1"
          />
          <div>
            <h3 className="text-white font-medium">{subscription.name}</h3>
            <p className="text-sm text-gray-400">{subscription.plan}</p>
          </div>
        </div>
        <ChevronRight className="text-gray-400" />
      </div>
      
      <div className="mt-4 flex justify-between items-end">
        <div>
          <span className="text-2xl font-bold text-white">
            {subscription.daysLeft}
          </span>
          <p className="text-sm text-gray-400">Days Left</p>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-white">
            {subscription.currency}{subscription.amount}
          </span>
        </div>
      </div>
    </div>
  );
}