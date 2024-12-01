'use client';

import { useState, useEffect, useRef } from 'react';
import { Copy, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

export default function TranslateForm() {
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('zh');
  const [sourceText, setSourceText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [height, setHeight] = useState('200px');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // 调整高度的函数
  const adjustHeight = () => {
    if (!textareaRef.current) return;
    
    // 重置高度以获取实际滚动高度
    textareaRef.current.style.height = 'auto';
    const scrollHeight = textareaRef.current.scrollHeight;
    
    // 计算新高度（在最小和最大高度之间）
    const newHeight = Math.min(400, Math.max(200, scrollHeight));
    const heightString = `${newHeight}px`;
    
    // 设置两个元素的高度
    setHeight(heightString);
    textareaRef.current.style.height = heightString;
    if (resultRef.current) {
      resultRef.current.style.height = heightString;
    }
  };

  // 监听文本变化
  useEffect(() => {
    adjustHeight();
  }, [sourceText]);

  // 监听翻译结果变化
  useEffect(() => {
    adjustHeight();
  }, [translation]);

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

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setTranslation(data.translation);
    } catch (error) {
      console.error('Translation error:', error);
      toast.error('翻译失败，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('已复制到剪贴板');
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/20">
        {/* Language Selection Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-pink-50/50">
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer hover:text-indigo-600 transition-colors"
          >
            <option value="auto">自动检测</option>
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="es">Español</option>
            <option value="ar">العربية (Arabic)</option>
            <option value="bn">বাংলা (Bengali)</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="ja">日本語</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ko">한국어</option>
            <option value="tr">Türkçe</option>
            <option value="vi">Tiếng Việt</option>
            <option value="it">Italiano</option>
            <option value="th">ไทย</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
          </select>

          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer hover:text-indigo-600 transition-colors"
          >
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="es">Español</option>
            <option value="ar">العربية (Arabic)</option>
            <option value="bn">বাংলা (Bengali)</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="ja">日本語</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ko">한국어</option>
            <option value="tr">Türkçe</option>
            <option value="vi">Tiếng Việt</option>
            <option value="it">Italiano</option>
            <option value="th">ไทย</option>
            <option value="nl">Nederlands</option>
            <option value="pl">Polski</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Source Text */}
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  handleTranslate();
                }
              }}
              placeholder="Enter text to translate..."
              className="w-full p-4 resize-none focus:outline-none focus:ring-1 focus:ring-indigo-200 transition-shadow bg-transparent placeholder:text-gray-400"
              style={{
                minHeight: '200px',
                maxHeight: '400px',
                height
              }}
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
            <div 
              ref={resultRef}
              className="w-full h-full overflow-y-auto"
              style={{
                minHeight: '200px',
                maxHeight: '400px',
                height
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-indigo-200 border-t-transparent" />
                </div>
              ) : translation ? (
                <div className="p-4 whitespace-pre-wrap break-words">
                  {translation}
                </div>
              ) : (
                <div className="h-full p-4 flex items-center justify-center">
                  <span className="text-gray-400">Translation will appear here...</span>
                </div>
              )}
            </div>
            <div className="absolute bottom-2 right-2 flex gap-2">
              {translation && !isLoading && (
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
