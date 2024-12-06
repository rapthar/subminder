import { Clock, ArrowUpRight, Filter } from 'lucide-react';
import { useState } from 'react';
import { subscriptions } from '../data/subscriptions';

const categories = ['All', 'Active', 'Expired', 'Upcoming'];

export function MySubscriptions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredSubscriptions = subscriptions.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sub.plan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sub.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search subscriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/90 text-white pl-4 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-black/90 text-gray-400 hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-black/90 text-gray-400 hover:text-white">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSubscriptions.map(sub => (
          <div key={sub.id} className="bg-black/90 p-4 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src={sub.icon}
                  alt={sub.name}
                  className="w-12 h-12 rounded-xl object-contain bg-white p-1"
                />
                <div>
                  <h3 className="text-white font-medium">{sub.name}</h3>
                  <p className="text-sm text-gray-400">{sub.plan}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-500">
                  Active
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>Renews in {sub.daysLeft} days</span>
              </div>
              <button className="flex items-center gap-1 text-blue-500 hover:text-blue-400">
                <span>Details</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-gray-400">Monthly</span>
              <span className="text-xl font-bold text-white">{sub.currency}{sub.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}