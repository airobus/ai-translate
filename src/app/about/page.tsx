import Navigation from '@/components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-400 via-purple-100 to-pink-50">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white/10 bg-[radial-gradient(#4338ca_0.5px,transparent_0.5px)] [background-size:24px_24px]" />
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-violet-500/5 via-transparent to-transparent" />

      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About AI Translate
          </h1>
          
          <div className="space-y-8">
            <section className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-indigo-600">Core Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-sm mr-3 mt-0.5">1</div>
                  <div>
                    <h3 className="font-medium">AI-Powered Translation</h3>
                    <p className="text-gray-600 mt-1">Utilizing Cloudflare's advanced AI model for accurate and natural-sounding translations across multiple languages.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm mr-3 mt-0.5">2</div>
                  <div>
                    <h3 className="font-medium">Language Support</h3>
                    <p className="text-gray-600 mt-1">Support for multiple languages including English, Chinese, and Spanish, with automatic language detection.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-600 to-indigo-600 flex items-center justify-center text-white text-sm mr-3 mt-0.5">3</div>
                  <div>
                    <h3 className="font-medium">Modern User Interface</h3>
                    <p className="text-gray-600 mt-1">Clean and intuitive design with real-time translation, language swap functionality, and clipboard integration.</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-indigo-600">Technical Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Next.js 15</li>
                    <li>• React 19 (RC)</li>
                    <li>• Tailwind CSS</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Backend</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cloudflare AI API</li>
                    <li>• Next.js API Routes</li>
                    <li>• Server-side Translation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-indigo-600">Coming Soon</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Text-to-speech functionality</li>
                <li>• Additional language support</li>
                <li>• Translation history</li>
                <li>• Offline translation capabilities</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white/50 backdrop-blur-sm py-8 relative">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>Powered by Next.js and Cloudflare AI</p>
        </div>
      </footer>
    </div>
  );
}
