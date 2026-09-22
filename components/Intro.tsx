import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="animate-intro-in mb-24 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10 md:gap-16 lg:gap-20">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-2">
          Dickson Boateng
        </h1>
        <p className="text-[rgb(var(--muted-text))] text-lg mb-4">
          Software Developer
        </p>

        <p className="text-base leading-relaxed max-w-2xl mb-6">
          I build and maintain websites and web applications for businesses and clients. 
        </p>
        <p className="text-base leading-relaxed max-w-2xl mb-6">
          As a software developer, I always aim to create clean and reliable software that is both intuitive and enjoyable for users.
        </p>
       <p className="text-base leading-relaxed max-w-2xl mb-6">
        I have a passion for learning, and I am constantly seeking to improve my skills through reading and{" "}
        <Link href="/blog" className="underline underline-offset-2 hover:opacity-70 transition-opacity">writing</Link>.</p>
        {/* <p className="text-base leading-relaxed max-w-2xl mb-6">
          I&apos;m interested in TypeScript and Node.js, and at the same time, I&apos;m also experimenting with native apps with Swift.
        </p> */}

        <div className="mt-6 flex flex-wrap gap-4">
            <a href="/DicksonBoateng-v3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[rgb(var(--text))] text-[rgb(var(--bg))] rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
          >
            View resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>

          
            <a href="#projects"
            className="inline-flex items-center gap-2 bg-transparent text-[rgb(var(--text))] border border-[rgb(var(--ctrl-border))] rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-70"
          >
            View my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="shrink-0">
        <div className="relative mx-auto md:mx-0 shrink-0 w-fit">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-50 md:h-96 rounded-sm md:rounded-full overflow-hidden border border-[rgb(var(--border))] shadow-lg shadow-black/30">
            <Image
              src="/images/DicksonBoateng-profile.webp"
              alt="Dickson Boateng, software developer from Ghana"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}