import { Github, Home as HomeIcon, Info } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          AI Translate
        </h1>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Info className="w-4 h-4" />
            <span>About</span>
          </Link>
          <a
            href="https://github.com/airobus/ai-translate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
