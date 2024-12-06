import { Home, Compass, CreditCard, PieChart, BarChart2, Settings, Calendar, Wallet, DollarSign, Users, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  icon: any;
  label: string;
  path: string;
  notifications?: number;
}

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Compass, label: 'Discover', path: '/discover' },
  { icon: CreditCard, label: 'My Subs', path: '/subs' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: DollarSign, label: 'Budgets', path: '/budgets' },
  { icon: Users, label: 'Family', path: '/family' },
  { icon: Bell, label: 'Reminders', path: '/reminders', notifications: 2 },
  { icon: PieChart, label: 'Insight', path: '/insight' },
  { icon: BarChart2, label: 'Report', path: '/report' },
  { icon: Settings, label: 'Settings', path: '/settings' }
] as NavItem[];

export function Sidebar({ className = '' }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`w-64 h-screen bg-black/95 p-4 flex flex-col z-10 ${className}`}>
      <div className="flex items-center gap-2 mb-8 px-4">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
          <Wallet className="w-5 h-5 text-white" />
        </div>
        <span className="text-white text-xl font-semibold">Subminder</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => navigate(item.path)}
                className={`w-full px-4 py-2 rounded-lg flex items-center gap-3 transition-colors
                  ${location.pathname === item.path
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <item.icon size={20} />
                <span className="flex-1">{item.label}</span>
                {item.notifications && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-600 text-white">
                    {item.notifications}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}