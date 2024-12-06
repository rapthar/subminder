import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Calendar } from './pages/Calendar'
import { Discover } from './pages/Discover'
import { MySubscriptions } from './pages/MySubscriptions'
import { Budgets } from './pages/Budgets'
import { Family } from './pages/Family'
import { Reminders } from './pages/Reminders'
import { Insights } from './pages/Insights'
import { Reports } from './pages/Reports'
import { Settings } from './pages/Settings'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar 
        className={`fixed left-0 top-0 z-30 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`} 
      />
      
      <div 
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      
      <main className="flex-1 lg:ml-64 max-h-screen overflow-y-auto">
        <Header>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg bg-black/90 text-gray-400 hover:text-white lg:hidden"
          >
            <Menu size={20} />
          </button>
        </Header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/subs" element={<MySubscriptions />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/family" element={<Family />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/insight" element={<Insights />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}