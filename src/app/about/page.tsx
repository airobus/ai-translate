import Navigation from '@/components/Navigation';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-purple-100 to-pink-50">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white/10 bg-[radial-gradient(#4338ca_0.5px,transparent_0.5px)] [background-size:24px_24px]" />
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

      <Navigation />

      <main className="flex-1 flex justify-center">
        <div className="max-w-2xl w-full px-4 py-8">
          <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            探索更多 AI 工具
          </h1>
          
          <div className="space-y-6">
            {/* AI 智能翻译 */}
            <section className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-3 text-indigo-600">AI 智能翻译</h2>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                AI 智能翻译是由 airobus 推出的一款免费在线翻译工具。我们运用先进的 AI 技术，
                为您提供准确、流畅的多语言翻译服务。无论是日常交流还是专业文档，都能轻松应对。
              </p>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                <h3 className="font-medium text-indigo-600 mb-2 text-sm">特色功能</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>基于 AI 的智能翻译引擎，支持多种语言互译，翻译更准确自然</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>自动识别源语言，一键复制结果，操作简单快捷，提升翻译效率</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>完全免费且无需注册，每天不限次数使用，满足您的翻译需求</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    <span>简洁优雅的界面设计，支持移动端访问，随时随地轻松翻译</span>
                  </li>
                </ul>
                <a
                  href="https://www.923828.xyz/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
                >
                  更多工具
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>

            {/* 更多 AI 工具 */}
            <section className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-3 text-indigo-600">更多 AI 工具</h2>
              <p className="text-sm text-gray-600 mb-3">
                除了翻译工具，我们还提供其他实用的 AI 工具，欢迎体验：
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>AI 穿搭点评 - 智能时尚顾问，为您的穿搭提供专业建议</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>AI 妆容助手 - 个性化妆容方案，提升个人形象</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                  <span>AI 形象设计 - 一站式个人形象提升解决方案</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
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
