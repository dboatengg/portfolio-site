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
          Growing up with a personal computer at home sparked my curiosity about how computers work and what they can do. In high school, I chose General Science because I hoped to study Computer Science at university.
          However, when it was time to choose university courses, I was offered Occupational Therapy instead. I decided to pursue it, even though it was not my first choice.
        </p>
        <p className="text-gray-300 dark:text-gray-400 mb-2">
          My passion for computers never faded, so I eventually became a web developer instead of an occupational therapist. Even though my studies took me in another direction, I found my way back to working with computers. 
        </p>
        <p className="text-gray-300 dark:text-gray-400 mb-4">

          I am grateful that I get to do what I love. I have collaborated with many developers and designers throughout my career to create websites and web applications that people use in their everyday lives.
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
      {/* <div>
        <h2 className="text-xl font-semibold mb-4">Let’s connect</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://twitter.com/owura_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Twitter size={18} />
            <span>Twitter</span>
          </Link>

          <Link
            href="https://github.com/dboatengg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/dboatengx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="mailto:dicksonboateng@proton.me"
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          >
            <Mail size={18} />
            <span>Email</span>
          </Link>
    <Link
      href="https://wa.me/233532683209"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
    >
      <MessageCircle  size={18} />
      <span>WhatsApp</span>
    </Link>

  
    <Link
      href="sms:+233532683209"
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      <MessageCircle size={18} />
      <span>Message</span>
    </Link>
        </div>
      </div> */}
    </section>
  )
}
