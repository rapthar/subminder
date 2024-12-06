import { Bell, Lock, CreditCard, User, Globe } from 'lucide-react';

const sections = [
  {
    icon: User,
    title: 'Profile Settings',
    description: 'Manage your account information and preferences'
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Configure how you want to receive alerts'
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Protect your account and data'
  },
  {
    icon: CreditCard,
    title: 'Billing',
    description: 'Manage your payment methods and billing history'
  },
  {
    icon: Globe,
    title: 'Integrations',
    description: 'Connect with other services and apps'
  }
];

export function Settings() {
  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>
      
      <div className="space-y-4">
        {sections.map(section => (
          <div 
            key={section.title}
            className="bg-black/90 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:ring-2 hover:ring-blue-500/50"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-white/5 text-blue-500">
                <section.icon size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{section.title}</h3>
                <p className="text-sm text-gray-400">{section.description}</p>
              </div>
            </div>
            
            <button className="h-10 w-10 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-white/5 group-hover:text-white">
              →
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500">
            <Bell size={24} />
          </div>
          <div>
            <h3 className="text-white font-medium mb-2">Enable Push Notifications</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get instant updates about your subscriptions, upcoming payments, and special offers.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Enable Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}