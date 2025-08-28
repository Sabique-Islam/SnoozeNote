import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-3">
          <Link href="/" className="flex items-center">
            <Image 
              src="/assets/icon.svg" 
              alt="SnoozeNote" 
              width={24} 
              height={24}
              className="w-6 h-6"
            />
          </Link>

          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SnoozeNote. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
