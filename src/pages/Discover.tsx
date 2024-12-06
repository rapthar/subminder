import { Search, SlidersHorizontal, Grid, List, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Productivity', 'Entertainment', 'Social', 'Development', 'Design'];
const sortOptions = ['Trending', 'Newest', 'Popular', 'Price: Low to High', 'Price: High to Low'];

const trendingApps = [
  {
    name: 'Adobe Creative Cloud',
    category: 'Design',
    price: 52,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/2048px-Adobe_Creative_Cloud_rainbow_icon.svg.png',
    rating: 4.8,
    users: '2M+'
  },
  {
    name: 'Microsoft 365',
    category: 'Productivity',
    price: 10,
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
    rating: 4.9,
    users: '5M+'
  },
  {
    name: 'Spotify',
    category: 'Entertainment',
    price: 17,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png',
    rating: 4.7,
    users: '10M+'
  },
  {
    name: 'Netflix',
    category: 'Entertainment',
    price: 15,
    icon: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico',
    rating: 4.8,
    users: '8M+'
  },
  {
    name: 'Notion',
    category: 'Productivity',
    price: 12,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    rating: 4.6,
    users: '3M+'
  },
  {
    name: 'GitHub',
    category: 'Development',
    price: 8,
    icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    rating: 4.9,
    users: '7M+'
  },
  {
    name: 'Figma',
    category: 'Design',
    price: 17,
    icon: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format',
    rating: 4.8,
    users: '4M+'
  },
  {
    name: 'Slack',
    category: 'Productivity',
    price: 8,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png',
    rating: 4.7,
    users: '6M+'
  },
  {
    name: 'AWS',
    category: 'Development',
    price: 29,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
    rating: 4.8,
    users: '5M+'
  },
  {
    name: 'LinkedIn Premium',
    category: 'Social',
    price: 139,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    rating: 4.5,
    users: '2M+'
  },
  {
    name: 'Disney+',
    category: 'Entertainment',
    price: 12,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    rating: 4.7,
    users: '6M+'
  },
  {
    name: 'Dropbox',
    category: 'Productivity',
    price: 20,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2048px-Dropbox_Icon.svg.png',
    rating: 4.6,
    users: '4M+'
  }
];

export function Discover() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredApps = trendingApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hidden sm:block" size={20} />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/90 text-white pl-4 sm:pl-10 pr-4 py-2 rounded-lg w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="p-2 rounded-lg bg-black/90 text-gray-400 hover:text-white">
            <SlidersHorizontal size={20} />
          </button>
        </div>
        
        <div className="flex gap-2">
          <button 
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={20} />
          </button>
          <button 
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setViewMode('list')}
          >
            <List size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-black/90 text-gray-400 hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <select className="bg-black/90 text-gray-400 px-4 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          {sortOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      
      <section>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-blue-500" />
          <h2 className="text-xl font-semibold text-white">Trending Now</h2>
        </div>
        
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
          {filteredApps.map(app => (
            <div 
              key={app.name}
              className={`bg-black/90 rounded-xl p-4 ${
                viewMode === 'list' ? 'flex items-center justify-between' : ''
              }`}
            >
              <div className={`flex items-center gap-3 ${viewMode === 'grid' ? 'mb-4' : ''}`}>
                <img 
                  src={app.icon}
                  alt={app.name}
                  className="w-12 h-12 rounded-xl object-contain bg-white p-1"
                />
                <div>
                  <h3 className="text-white font-medium">{app.name}</h3>
                  <p className="text-sm text-gray-400">{app.category}</p>
                </div>
              </div>
              
              {viewMode === 'grid' && (
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>⭐ {app.rating}</span>
                      <span>•</span>
                      <span>{app.users}</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-white">€{app.price}</span>
                </div>
              )}
              
              {viewMode === 'list' && (
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>⭐ {app.rating}</span>
                    <span>•</span>
                    <span>{app.users}</span>
                  </div>
                  <span className="text-xl font-bold text-white">€{app.price}</span>
                  <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}