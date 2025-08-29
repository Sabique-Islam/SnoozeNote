import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-white polka-dots-light">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative z-10 space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-black">
            From Night to Narrative
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto">
            Transform your fleeting dreams into lasting stories and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="px-8 py-4 text-lg bg-black text-white hover:bg-gray-800 transition-colors">
              <Link href="/info/get-started">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}