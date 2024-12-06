import { Users, UserPlus, Settings, CreditCard } from 'lucide-react';

const familyMembers = [
  {
    name: 'Alex Thompson',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subscriptions: ['Netflix', 'Spotify', 'Disney+']
  },
  {
    name: 'Sarah Chen',
    role: 'Member',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subscriptions: ['Netflix', 'Spotify']
  },
  {
    name: 'Michael Roberts',
    role: 'Member',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subscriptions: ['Netflix', 'Disney+']
  }
];

export function Family() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Family Sharing</h1>
          <p className="text-gray-400">Manage your family subscriptions and members</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <UserPlus size={20} />
          <span>Invite Member</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {familyMembers.map(member => (
          <div key={member.name} className="bg-black/90 p-4 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-medium">{member.name}</h3>
                <span className={`text-sm ${
                  member.role === 'Admin' ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  {member.role}
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Shared Subscriptions</h4>
                <div className="flex flex-wrap gap-2">
                  {member.subscriptions.map(sub => (
                    <span 
                      key={sub}
                      className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">
                  <Settings size={16} />
                  <span>Manage</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">
                  <CreditCard size={16} />
                  <span>Billing</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}