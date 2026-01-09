import Link from 'next/link';
import { Star, Check, ArrowRight } from 'lucide-react';
import { Tool } from '@/lib/types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400">
           {/* Placeholder for Logo if not available */}
           IMG
        </div>
        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-sm font-bold">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          {tool.rating}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{tool.shortDescription}</p>

      <div className="space-y-2 mb-6 flex-grow">
        {tool.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-auto">
        <Link 
          href={`/review/${tool.slug}`}
          className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Ler Review
        </Link>
        <a 
          href={tool.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Visitar <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
