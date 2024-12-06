import { SpendingChart } from '../components/SpendingChart';
import { SubscriptionStats } from '../components/SubscriptionStats';
import { BankCard } from '../components/BankCard';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { subscriptions } from '../data/subscriptions';
import { stats } from '../data/stats';
import { bankCard } from '../data/bankCard';

export const spendingData = [
  { month: 'Jul', amount: 850 },
  { month: 'Aug', amount: 1100 },
  { month: 'Sep', amount: 900 },
  { month: 'Oct', amount: 1205 },
  { month: 'Nov', amount: 950 },
  { month: 'Dec', amount: 1000 },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-7">
          <SpendingChart data={spendingData} currentMonth="Oct" />
        </div>
        <div className="lg:col-span-5 space-y-4">
          <SubscriptionStats stats={stats} />
          <BankCard card={bankCard} />
        </div>
      </div>
      
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-white font-semibold">Next Payment</h2>
          <button className="text-gray-400 hover:text-white">•••</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subscriptions.map((subscription) => (
            <SubscriptionCard 
              key={subscription.id}
              subscription={subscription}
            />
          ))}
        </div>
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-white font-semibold">Recent Subscription</h2>
          <button className="text-gray-400 hover:text-white">•••</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black/90 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                alt="LinkedIn"
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <h3 className="text-white font-medium">LinkedIn</h3>
                <p className="text-sm text-gray-400">Until 23 Dec 2021</p>
              </div>
            </div>
            <span className="text-xl font-bold text-white">€139</span>
          </div>
          
          <div className="bg-black/90 p-4 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" 
                alt="Netflix"
                className="w-10 h-10 rounded-lg object-contain bg-white p-1"
              />
              <div>
                <h3 className="text-white font-medium">Netflix</h3>
                <p className="text-sm text-gray-400">Until 23 Dec 2021</p>
              </div>
            </div>
            <span className="text-xl font-bold text-white">€15</span>
          </div>
        </div>
      </section>
    </div>
  );
}