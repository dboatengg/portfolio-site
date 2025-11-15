import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata:Metadata = {
  title: "About | Dickson Boateng",
  description:
    "Hi, I'm Dickson—a frontend developer from Ghana. My tech journey began in 2012, when my father surprised my younger brother and me with our first computer. Computers are not very common in Ghanaian homes, so you can imagine how excited we were. At first, we just used it to play games and do some typing with Mavis Beacon, but that early exposure to a home computer soon sparked a fascination that led me to explore programming.",
}

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-3">About</h1>
      </header>

      <div>
        <h2 className="text-xl font-semibold mb-2">Background</h2>
        <p className="text-gray-300 dark:text-gray-400 mb-4">
          Growing up with a personal computer at home sparked my curiosity about how computers work and what they can do. In high school, I did the General Science course hoping it would lead me to study Computer Science at university.</p>
          <p className="text-gray-300 dark:text-gray-400 mb-4">However, when it came time for university admissions, I was offered a place in Occupational Therapy at the University of Ghana, a field quite different from what I had hoped for. Although it wasn't my first choice, I decided to embrace the opportunity and see where it would lead me. </p>
        
        <p className="text-gray-300 dark:text-gray-400 mb-2">
          Still, my passion for computers never faded. While I was doing the degree, I kept learning about technology on my own, taking online courses, building small projects, and staying connected to the tech world. Even though my formal studies led me down a different path, my curiosity and persistence helped me find my way back to working with computers again.        </p>
        <p className="text-gray-300 dark:text-gray-400 mb-4">
          Looking back, I’m glad I never gave up on my interest in technology. Today, I’m grateful to do what I love. I’ve had the chance to collaborate with developers and designers from different backgrounds. My journey wasn’t straightforward, but the skills and experiences I gained along the way have made me a better problem-solver and teammate in the tech world.
          </p>
        <p className="text-gray-300 dark:text-gray-400">
          When I’m not coding, I enjoy writing articles about web development and personal growth. Sharing my experiences and
            insights with the <span className="text-blue-500 underline"><Link href="https://x.com/search?q=alege_dev&src=typed_query" target="_blank">tech community</Link></span> is something I find incredibly rewarding.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">What I'm doing now</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300 dark:text-gray-400 marker:text-neutral-500 dark:marker:text-neutral-400">
            <li>Working as a full-time remote web developer</li>        
            <li>I run a clothing brand/store [at] <span className="text-blue-500 underline"><Link href="https://www.boldpixelsgh.com">boldpixelsgh.com</Link></span>.</li>
            <li>Working on occasional freelance projects </li>        
            <li>Building personal projects with NextJS</li>
            <li>Learning Nodejs</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Fun Facts about me</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300 dark:text-gray-400 marker:text-neutral-500 dark:marker:text-neutral-400">
            <li>I have never missed an episode from these podcasts: Darknet Diaries and What Now with Trevor Noah.</li>
            <li>I’ve watched every season of Black Mirror twice!</li>
            <li>I consider Pavel Durov (Telegram Founder & CEO) a mentor from afar. His discipline and philosophy deeply inspire me.</li>
        </ul>
    </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Publications</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-300 dark:text-gray-400 marker:text-neutral-500 dark:marker:text-neutral-400">
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
