'use client';

import { useState, useEffect } from 'react';
import { Copy, RotateCcw } from 'lucide-react';

export default function TranslateForm() {
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('en');
  const [sourceText, setSourceText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 10;
        });
      }, 500);

      return () => {
        clearInterval(interval);
        setProgress(100);
      };
    }
  }, [isLoading]);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: sourceText,
          sourceLang,
          targetLang,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Translation failed');
      }

      setTranslation(data.translation);
    } catch (error) {
      console.error('Translation error:', error);
      setError(error instanceof Error ? error.message : 'Translation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // TODO: Add toast notification
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 text-sm">
          {error}
        </div>
      )}

      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20">
        {/* Language Selection Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-pink-50/50">
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer hover:text-indigo-600 transition-colors"
          >
            <option value="auto">Detect Language</option>
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
          </select>

          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer hover:text-indigo-600 transition-colors"
          >
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Source Text */}
          <div className="relative">
            <textarea
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  handleTranslate();
                }
              }}
              placeholder="Enter text to translate..."
              className="w-full h-48 p-4 resize-none focus:outline-none bg-transparent placeholder:text-gray-400"
            />
            <div className="absolute bottom-2 right-2 flex gap-2">
              {sourceText && (
                <>
                  <button
                    onClick={() => handleCopy(sourceText)}
                    className="p-2 rounded-full hover:bg-indigo-50 transition-all duration-200 hover:shadow-sm active:scale-95"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSourceText('')}
                    className="p-2 rounded-full hover:bg-indigo-50 transition-all duration-200 hover:shadow-sm active:scale-95"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Translation */}
          <div className="relative bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50">
            {isLoading && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 overflow-hidden rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
            <div className="w-full h-48 p-4 whitespace-pre-wrap">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-indigo-600 border-t-transparent" />
                </div>
              ) : translation || (
                <span className="text-gray-400">Translation will appear here...</span>
              )}
            </div>
            <div className="absolute bottom-2 right-2 flex gap-2">
              {translation && (
                <button
                  onClick={() => handleCopy(translation)}
                  className="p-2 rounded-full hover:bg-white/60 transition-all duration-200 hover:shadow-sm active:scale-95"
                >
                  <Copy className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-pink-50/50 border-t border-white/20">
          <button
            onClick={handleTranslate}
            disabled={isLoading || !sourceText.trim()}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium active:scale-[0.99] disabled:hover:shadow-none"
          >
            {isLoading ? 'Translating...' : 'Translate'}
          </button>
        </div>
      </div>
    </div>
  );
}
