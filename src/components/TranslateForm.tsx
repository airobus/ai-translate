'use client';

import { useState } from 'react';

export default function TranslateForm() {
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('en');
  const [sourceText, setSourceText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setTranslation('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {error && (
        <div className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}
      {/* Source Text */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <select
            className="bg-transparent border rounded-md px-2 py-1"
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
          >
            <option value="auto">Detect Language</option>
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <textarea
          className="flex-1 min-h-[200px] p-4 rounded-lg border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter text to translate..."
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
              handleTranslate();
            }
          }}
        />
        <button
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          onClick={handleTranslate}
          disabled={isLoading || !sourceText.trim()}
        >
          {isLoading ? 'Translating...' : 'Translate'}
        </button>
      </div>

      {/* Target Text */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <select
            className="bg-transparent border rounded-md px-2 py-1"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <div className="flex-1 min-h-[200px] p-4 rounded-lg border bg-muted whitespace-pre-wrap">
          {translation || 'Translation will appear here...'}
        </div>
      </div>
    </div>
  );
}
