import { BarChart3, PieChart, TrendingUp, Calendar as CalendarIcon } from 'lucide-react';
import { SpendingChart } from '../components/SpendingChart';
import { spendingData } from './Dashboard';
import { stats } from '../data/stats';

const metrics = [
  { 
    label: 'Total Spent', 
    value: '€1,205', 
    change: '+12.5%',
    trend: 'up',
    icon: BarChart3 
  },
  { 
    label: 'Active Subscriptions', 
    value: '12', 
    change: '+2',
    trend: 'up',
    icon: PieChart 
  },
  { 
    label: 'Avg. Cost/Month', 
    value: '€89', 
    change: '-5.2%',
    trend: 'down',
    icon: TrendingUp 
  },
  { 
    label: 'Next Payment', 
    value: '€17', 
    change: '3 days',
    trend: 'neutral',
    icon: CalendarIcon 
  },
];

export function Insights() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {metrics.map(metric => (
          <div key={metric.label} className="bg-black/90 p-4 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <metric.icon className="text-blue-500" size={24} />
              <span className={`text-sm px-2 py-0.5 rounded-full ${
                metric.trend === 'up' 
                  ? 'bg-green-500/20 text-green-500'
                  : metric.trend === 'down'
                    ? 'bg-red-500/20 text-red-500'
                    : 'bg-blue-500/20 text-blue-500'
              }`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-sm text-gray-400">{metric.label}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <SpendingChart data={spendingData} currentMonth="Oct" />
        </div>
        
        <div className="col-span-4 bg-black/90 p-4 rounded-xl">
          <h3 className="text-lg font-medium text-white mb-4">Category Distribution</h3>
          <div className="space-y-4">
            {Object.entries(stats).map(([category, value]) => (
              <div key={category}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400 capitalize">{category}</span>
                  <span className="text-white">{value} apps</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      category === 'productivity' 
                        ? 'bg-blue-500' 
                        : category === 'social'
                          ? 'bg-green-500'
                          : 'bg-orange-500'
                    }`}
                    style={{ width: `${(value / 12) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}