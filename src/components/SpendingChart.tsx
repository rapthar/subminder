import { SpendingData } from '../types/subscription';
import { formatCurrency } from '../utils/format';

const CHART_HEIGHT = 140;

interface SpendingChartProps {
  data: SpendingData[];
  currentMonth: string;
}

export function SpendingChart({ data, currentMonth }: SpendingChartProps) {
  const maxAmount = Math.max(...data.map(d => d.amount));
  const totalSpent = data.reduce((sum, d) => sum + d.amount, 0);
  
  const getBarColor = (month: string) => {
    return month === currentMonth ? 'bg-blue-600' : 'bg-blue-600/40';
  };

  return (
    <div className="p-4 bg-black/90 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white">{formatCurrency(totalSpent)}</h3>
          <p className="text-gray-400 text-sm">Last 6 Months</p>
        </div>
        <div className="flex gap-2 text-xs">
          <button className="text-gray-500">w</button>
          <button className="text-gray-500">m</button>
          <button className="text-white">y</button>
        </div>
      </div>
      
      <div className="flex items-end gap-3" style={{ height: CHART_HEIGHT }}>
        {data.map((item) => (
          <div 
            key={item.month} 
            className="flex-1 flex flex-col items-center gap-1.5 group"
          >
            <div 
              className={`w-full transition-all duration-300 relative
                ${getBarColor(item.month)}`}
              style={{ height: `${(item.amount / maxAmount) * 100}%` }}>
            </div>
            <span className={`text-sm font-medium ${
              item.month === currentMonth ? 'text-white' : 'text-gray-500'
            }`}>{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}