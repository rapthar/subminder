import { Bell, Calendar, Clock, Check } from 'lucide-react';

const reminders = [
  {
    subscription: 'Netflix',
    type: 'renewal',
    date: 'Nov 15, 2023',
    time: '15:00',
    icon: 'https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico',
    status: 'pending'
  },
  {
    subscription: 'Spotify',
    type: 'payment',
    date: 'Nov 25, 2023',
    time: '10:00',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/512px-Spotify_icon.svg.png',
    status: 'pending'
  },
  {
    subscription: 'Microsoft 365',
    type: 'expiration',
    date: 'Nov 18, 2023',
    time: '09:00',
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
    status: 'completed'
  }
];

export function Reminders() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Reminders</h1>
          <p className="text-gray-400">Never miss a payment or renewal</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Bell size={20} />
          <span>Set Reminder</span>
        </button>
      </div>

      <div className="space-y-4">
        {reminders.map(reminder => (
          <div 
            key={`${reminder.subscription}-${reminder.date}`}
            className="bg-black/90 p-4 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img 
                src={reminder.icon}
                alt={reminder.subscription}
                className="w-12 h-12 rounded-xl object-contain bg-white p-1"
              />
              <div>
                <h3 className="text-white font-medium">{reminder.subscription}</h3>
                <p className="text-sm text-gray-400 capitalize">{reminder.type} Reminder</p>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{reminder.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>{reminder.time}</span>
                </div>
              </div>
              
              {reminder.status === 'pending' ? (
                <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <Check size={16} />
                  <span>Mark Complete</span>
                </button>
              ) : (
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-500">
                  Completed
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}