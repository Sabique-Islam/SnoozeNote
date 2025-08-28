import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-white polka-dots-light">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative z-10 space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-black">
            Heading
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto">
            Subheading
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="px-8 py-4 text-lg group">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}