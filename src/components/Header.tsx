import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
      <div className="flex items-center gap-4">
        {children}
        <div className="relative hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="bg-black/90 text-white pl-10 pr-4 py-2 rounded-lg w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
        </button>
        
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10"
          />
          <span className="text-white hidden sm:block">Ferra Alexandra</span>
        </div>
      </div>
    </header>
  );
}