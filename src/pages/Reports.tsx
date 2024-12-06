import { Download, Filter, Calendar as CalendarIcon } from 'lucide-react';

const reportTemplates = [
  { 
    name: 'Monthly Summary',
    description: 'Overview of all subscription costs and usage',
    lastGenerated: '2 days ago',
    format: 'PDF'
  },
  { 
    name: 'Category Analysis',
    description: 'Detailed breakdown by subscription category',
    lastGenerated: '1 week ago',
    format: 'Excel'
  },
  { 
    name: 'Cost Trends',
    description: 'Historical spending patterns and projections',
    lastGenerated: '2 weeks ago',
    format: 'PDF'
  },
];

export function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download size={18} />
            <span>Generate Report</span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-black/90 text-gray-400 hover:text-white rounded-lg">
            <Filter size={18} />
            <span>Filter</span>
          </button>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-black/90 text-gray-400 hover:text-white rounded-lg">
          <CalendarIcon size={18} />
          <span>Last 30 Days</span>
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {reportTemplates.map(template => (
          <div key={template.name} className="bg-black/90 p-4 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-medium mb-1">{template.name}</h3>
                <p className="text-sm text-gray-400">{template.description}</p>
              </div>
              <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-500">
                {template.format}
              </span>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-sm text-gray-400">Last generated {template.lastGenerated}</span>
              <button className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400">
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <section className="bg-black/90 p-4 rounded-xl">
        <h2 className="text-lg font-medium text-white mb-4">Scheduled Reports</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400">
              <th className="pb-4">Report Name</th>
              <th className="pb-4">Frequency</th>
              <th className="pb-4">Next Generation</th>
              <th className="pb-4">Format</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-t border-white/10">
              <td className="py-4 text-white">Monthly Summary</td>
              <td className="py-4 text-gray-400">Monthly</td>
              <td className="py-4 text-gray-400">Dec 1, 2023</td>
              <td className="py-4">
                <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-500">
                  PDF
                </span>
              </td>
              <td className="py-4 text-right">
                <button className="text-gray-400 hover:text-white">•••</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}