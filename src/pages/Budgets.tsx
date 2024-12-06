import { DollarSign, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const budgets = [
  {
    category: 'Entertainment',
    limit: 50,
    spent: 44,
    trend: 'up',
    subscriptions: ['Netflix', 'Spotify', 'Disney+']
  },
  {
    category: 'Productivity',
    limit: 100,
    spent: 89,
    trend: 'down',
    subscriptions: ['Microsoft 365', 'Notion', 'Slack']
  },
  {
    category: 'Development',
    limit: 50,
    spent: 37,
    trend: 'up',
    subscriptions: ['GitHub', 'AWS']
  }
];

export function Budgets() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Budget Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <DollarSign size={20} />
          <span>Set New Budget</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {budgets.map(budget => {
          const percentage = (budget.spent / budget.limit) * 100;
          const isNearLimit = percentage > 80;
          
          return (
            <div key={budget.category} className="bg-black/90 p-4 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-medium">{budget.category}</h3>
                {budget.trend === 'up' ? (
                  <TrendingUp className="text-red-500" size={20} />
                ) : (
                  <TrendingDown className="text-green-500" size={20} />
                )}
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">€{budget.spent} spent</span>
                  <span className="text-white">€{budget.limit} limit</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      isNearLimit ? 'bg-red-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              
              {isNearLimit && (
                <div className="flex items-center gap-2 text-sm text-red-500 mb-4">
                  <AlertCircle size={16} />
                  <span>Approaching budget limit</span>
                </div>
              )}
              
              <div className="space-y-2">
                <h4 className="text-sm text-gray-400">Active Subscriptions</h4>
                <div className="flex flex-wrap gap-2">
                  {budget.subscriptions.map(sub => (
                    <span 
                      key={sub}
                      className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}