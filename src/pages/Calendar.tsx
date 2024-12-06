import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const currentMonth = Array.from({ length: 31 }, (_, i) => i + 1);

const subscriptionEvents = [
  { 
    date: 15, 
    imageUrl: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico',
    name: 'Netflix',
    amount: 15,
    bgColor: 'bg-white'
  },
  { 
    date: 16, 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    name: 'Notion',
    amount: 12,
    bgColor: 'bg-white'
  },
  { 
    date: 20, 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    name: 'LinkedIn',
    amount: 139,
    bgColor: 'bg-white'
  },
  { 
    date: 25, 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png',
    name: 'Spotify',
    amount: 17,
    bgColor: 'bg-black'
  },
  { 
    date: 28, 
    imageUrl: 'https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png',
    name: 'Twitter Blue',
    amount: 8,
    bgColor: 'bg-white'
  },
  {
    date: 5,
    imageUrl: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format',
    name: 'Figma',
    amount: 17,
    bgColor: 'bg-white'
  },
  {
    date: 10,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
    name: 'VS Code Pro',
    amount: 10,
    bgColor: 'bg-white'
  }
];

export function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState<typeof subscriptionEvents[0] | null>(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white">December 2024</h1>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-black/90 text-gray-400 hover:text-white">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 rounded-lg bg-black/90 text-gray-400 hover:text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex gap-2 bg-black/90 p-1 rounded-lg">
          <button className="px-4 py-1.5 text-sm rounded-md bg-white/10 text-white">Month</button>
          <button className="px-4 py-1.5 text-sm text-gray-400 hover:text-white">Week</button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
            {day}
          </div>
        ))}
        
        {currentMonth.map(date => {
          const event = subscriptionEvents.find(e => e.date === date);
          
          const handleClick = () => {
            if (event) {
              setSelectedEvent(event);
            }
          };
          
          return (
            <div
              key={date}
              className={`aspect-square bg-black/90 rounded-xl p-2 flex flex-col relative ${
                event ? 'cursor-pointer hover:ring-2 hover:ring-blue-500/50' : ''
              }`}
              onClick={handleClick}
            >
              <span className="text-gray-400 text-sm">{date}</span>
              {event && (
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src={event.imageUrl} 
                    alt={event.name}
                    className={`w-6 h-6 object-contain rounded ${event.bgColor} p-0.5`}
                  />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-black/90 p-6 rounded-xl w-96">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={selectedEvent.imageUrl} 
                alt={selectedEvent.name}
                className={`w-12 h-12 object-contain rounded-xl ${selectedEvent.bgColor} p-1`}
              />
              <div>
                <h3 className="text-xl font-bold text-white">{selectedEvent.name}</h3>
                <p className="text-gray-400">Next payment on {selectedEvent.date} Nov</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400">Amount</span>
              <span className="text-2xl font-bold text-white">€{selectedEvent.amount}</span>
            </div>
            <div className="flex gap-3">
              <button 
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                onClick={() => setSelectedEvent(null)}
              >
                Pay Now
              </button>
              <button 
                className="flex-1 bg-white/10 text-white py-2 rounded-lg hover:bg-white/20"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}