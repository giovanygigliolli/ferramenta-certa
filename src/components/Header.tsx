import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-blue-700 flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span>FerramentaCerta</span>
        </Link>
        
        <a 
          href="https://go.hotmart.com/V103763588J?dp=1" 
          target="_blank" 
          rel="nofollow sponsored noopener noreferrer"
          className="bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors shadow-sm"
        >
          Ver na Hotmart
        </a>
      </div>
    </header>
  );
}
