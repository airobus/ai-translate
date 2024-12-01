import Image from "next/image";
import TranslateForm from '@/components/TranslateForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">AI Translate</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <TranslateForm />
      </main>
    </div>
  );
}
