'use client';

import Image from 'next/image';

export default function Intro() {
  return (
    <section className="mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
      {/* Left Section - Text */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2">
          Dickson Boateng
        </h1>
        <p className="text-gray-400 text-lg mb-4">Frontend Developer</p>

        <p className="text-gray-300 leading-relaxed max-w-2xl mb-6">
        
          Hi, I'm Dickson—a frontend developer from Ghana. 
          My tech journey began in 2012, when my father surprised my younger brother and me with our first computer. 

        </p>
        <p className='text-gray-300 leading-relaxed max-w-2xl mb-6'>
          Computers are not very common in Ghanaian homes, so you can imagine how excited we were. 
        </p>
        <p className='text-gray-300 leading-relaxed max-w-2xl mb-6'>
          At first, we just used it to play games and do some typing with Mavis Beacon, but that early exposure to a home computer soon sparked a fascination that led me to explore programming.
        </p>

        {/* <p className="text-gray-300 leading-relaxed max-w-2xl">
          I build with:
          <span className="text-gray-100 font-medium">
            {' '}
            Next.js • React.js • JavaScript • TypeScript • Tailwind CSS • PHP •
            Git/GitHub • Advanced WordPress Development
          </span>
          .
        </p> */}
                {/* Learn More Button */}
        <div className="mt-6">
          <a
            href="/about" 
            className="inline-block px-6 py-3 text-sm font-medium text-white border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-600 transition-colors duration-300"
          >
            Learn more about me →
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex-shrink-0">
        <div className="relative w-80 h-100 md:w-50 md:h-85 rounded-sm md:rounded-full overflow-hidden border border-gray-700 shadow-lg shadow-black/30">
          <Image
            src="/images/profile-img.webp" 
            alt="Dickson Boateng"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 400px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
