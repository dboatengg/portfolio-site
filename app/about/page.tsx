import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
  title: "About | Dickson Boateng",
  description:
    "I’m Dickson Boateng, a software developer from Ghana who enjoys building clean, responsive, and practical web interfaces with modern JavaScript tools.",
}

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">About</h1>
      </header>

      <div>
        <h2 className="text-xl font-semibold mb-4">Background</h2>
        <p className="text-gray-300 dark:text-gray-300 mb-4 leading-relaxed">
          I didn’t start my career in a traditional Computer Science program. I began my university journey studying Occupational Therapy at the University of Ghana, an unexpected detour from my original plan to pursue tech. 
          </p>
          <p className="dark:text-gray-300 mb-4 leading-relaxed">But even while studying that degree, I kept learning about technology on my own, taking online courses, building small projects, and staying connected to the tech communities on Twitter and Reddit.</p>
        <p className="text-gray-300 dark:text-gray-300 mb-4 leading-relaxed">
          That persistence eventually brought me back to software development, where I’ve been able to combine analytical thinking and empathy from my background with the technical skills I’ve built over the years. 
        </p>
        <p className="text-gray-300 dark:text-gray-300 mb-4 leading-relaxed">
          Today, I work fully in web development and have had the privilege of collaborating with engineers and designers from diverse backgrounds.           
        </p>
        <p className="dark:text-gray-300 mb-4 leading-relaxed">The path here wasn’t linear, but it shaped me into a problem-solver who learns quickly, works well with others, and approaches challenges with both creativity and discipline.</p>
        <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
          When I’m not coding, I enjoy writing articles about web development and personal growth. Sharing my experiences and
            insights with the <span className="text-blue-500 underline"><Link href="https://x.com/search?q=alege_dev&src=typed_query" target="_blank">tech community</Link></span> is something I find incredibly rewarding.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">What I'm doing now</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300 dark:text-gray-300 marker:text-neutral-500 dark:marker:text-neutral-400">
            <li>Working as a full-time remote web developer</li>        
            <li>I run a clothing brand/store [at] <span className="text-blue-500 underline"><Link href="https://www.boldpixelsgh.com">boldpixelsgh.com</Link></span>.</li>
            {/* <li>Working on occasional freelance projects </li>         */}
            <li>Building production-ready side projects with NextJS</li>
            {/* <li>Learning Nodejs</li> */}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Fun Facts about me</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300 dark:text-gray-300 marker:text-neutral-500 dark:marker:text-neutral-400">
            <li>I have never missed an episode from these podcasts: Darknet Diaries and What Now with Trevor Noah.</li>
            <li>I’ve watched every season of Black Mirror twice!</li>
            <li>I consider Pavel Durov (Telegram Founder & CEO) a mentor from afar. His discipline and philosophy deeply inspire me.</li>
        </ul>
    </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Publications</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300 dark:text-gray-300 marker:text-neutral-500 dark:marker:text-neutral-400">
            <li className="text-blue-500 underline"><Link href="https://www.freecodecamp.org/news/asynchronous-programming-in-javascript/" target="_blank">Asynchronous Programming in JavaScript – Guide for Beginners</Link></li>
            <li className="text-blue-500 underline"><Link href="https://www.freecodecamp.org/news/context-api-in-react/" target="_blank">How to Use the React Context API in Your Projects</Link></li>
            <li className="text-blue-500 underline"><Link href="https://www.freecodecamp.org/news/javascript-dom/" target="_blank">How the Document Object Model Works in JavaScript</Link></li>
            <li className="text-blue-500 underline"><Link href="https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/" target="_blank">How to Use Redux and Redux Toolkit – Tutorial for Beginners</Link></li>
        </ul>
      </div>
            <div>
        <h2 className="text-xl font-semibold mb-4">Miscellaneous</h2>
            <p className="text-blue-500 underline"><Link href="/DicksonBoatengCV.pdf">Resume</Link></p>
      </div>

    </section>
  )
}
