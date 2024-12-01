import TranslateForm from '@/components/TranslateForm';
import Navigation from '@/components/Navigation';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-purple-100 to-pink-50">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white/10 bg-[radial-gradient(#4338ca_0.5px,transparent_0.5px)] [background-size:24px_24px]" />
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

      <Navigation />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* 介绍部分 */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI 多语言翻译助手
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            欢迎使用 AI 翻译助手！我们运用先进的 AI 技术，为您提供准确、流畅的多语言翻译服务。
            支持中文、英语、西班牙语等多种语言，让您的跨语言交流更加便捷。
          </p>
        </div>

        <TranslateForm />
      </main>

      <footer className="border-t bg-white/50 backdrop-blur-sm py-6 relative">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-xs text-gray-600">
            Copyright {new Date().getFullYear()} airobus
          </p>
          <a
            href="https://923828.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-600 hover:text-indigo-700 transition-colors inline-flex items-center gap-1"
          >
            访问更多工具
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}
