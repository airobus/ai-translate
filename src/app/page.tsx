import TranslateForm from '@/components/TranslateForm';
import Navigation from '@/components/Navigation';
import { Github, Home as HomeIcon, Info } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-purple-100 to-pink-50">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white/10 bg-[radial-gradient(#4338ca_0.5px,transparent_0.5px)] [background-size:24px_24px]" />
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        <TranslateForm />
      </main>

      <footer className="border-t bg-white/50 backdrop-blur-sm py-8 relative">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>Powered by Next.js and Cloudflare AI</p>
        </div>
      </footer>
    </div>
  );
}
