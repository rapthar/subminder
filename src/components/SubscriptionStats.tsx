import { SubscriptionStats as Stats } from '../types/subscription';

interface SubscriptionStatsProps {
  stats: Stats;
}

export function SubscriptionStats({ stats }: SubscriptionStatsProps) {
  const total = stats.productivity + stats.social + stats.entertainment;
  
  return (
    <div className="bg-black/90 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white font-medium">My Subscription</h3>
        <button className="text-gray-400 hover:text-white">•••</button>
      </div>
      
      <div className="flex h-2 rounded-full overflow-hidden mb-3">
        <div 
          className="bg-blue-600" 
          style={{ width: `${(stats.productivity / total) * 100}%` }} 
        />
        <div 
          className="bg-emerald-500" 
          style={{ width: `${(stats.social / total) * 100}%` }} 
        />
        <div 
          className="bg-orange-500" 
          style={{ width: `${(stats.entertainment / total) * 100}%` }} 
        />
      </div>
      
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-600 rounded-full" />
          <span className="text-gray-400">Productivity</span>
          <span className="text-white font-medium">{stats.productivity}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          <span className="text-gray-400">Social</span>
          <span className="text-white font-medium">{stats.social}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-orange-500 rounded-full" />
          <span className="text-gray-400">Entertainment</span>
          <span className="text-white font-medium">{stats.entertainment}</span>
        </div>
      </div>
    </div>
  );
}