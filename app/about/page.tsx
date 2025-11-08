import { Github, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About | Dickson Boateng",
  description:
    "Learn more about my background, skills, and interests as a software developer.",
}

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-3">About</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Hey there, I’m <span className="font-semibold">Dickson Boateng</span>,
          a software developer passionate about creating clean and
          accessible digital experiences. I love building things
          for the web, sharing my knowledge, and exploring new technologies.
        </p>
      </header>

      <div>
        <h2 className="text-xl font-semibold mb-4">Background</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          I started my journey in programming/web development in October 2019, solely driven by a
          curiosity for how mobile applications and websites work. Over time, I honed my
          skills in front-end development, focusing on creating user-friendly and performant web applications.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          When I’m not coding, I enjoy writing articles about web development and personal growth. Sharing my experiences and
            insights with the <span className="text-blue-500 underline"><Link href="https://x.com/search?q=alege_dev&src=typed_query" target="_blank">tech community</Link></span> is something I find incredibly rewarding.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">What I'm doing now</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400 marker:text-neutral-500 dark:marker:text-neutral-400">
            <li>Working as a full-time remote web developer</li>        
            <li>I run a clothing brand/store [at] <span className="text-blue-500 underline"><Link href="https://www.boldpixelsgh.com">boldpixelsgh.com</Link></span>.</li>
            <li>Working on occasional freelance projects </li>        
            <li>Building personal projects with NextJS</li>
            <li>Learning Nodejs</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Fun Facts about me</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400 marker:text-neutral-500 dark:marker:text-neutral-400">
            <li>I have never missed an episode of these podcasts: Darknet Diaries, What Now with Trevor Noah, and The Lex Fridman Podcast.</li>
            <li>I’ve watched every season of Black Mirror twice!</li>
            <li>I consider Pavel Durov (Telegram Founder & CEO) a mentor from afar. His discipline and philosophy deeply inspire me.</li>
        </ul>
    </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Publications</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400 marker:text-neutral-500 dark:marker:text-neutral-400">
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
      <div>
        <h2 className="text-xl font-semibold mb-4">Let’s connect</h2>
        <div className="flex flex-wrap gap-4">
          {/* <Link
            href="https://twitter.com/owura_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Twitter size={18} />
            <span>Twitter</span>
          </Link> */}

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
              {/* WhatsApp */}
    <Link
      href="https://wa.me/233532683209"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
    >
      <MessageCircle  size={18} />
      <span>WhatsApp</span>
    </Link>

    {/* iMessage */}
    <Link
      href="sms:+233532683209"
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      <MessageCircle size={18} />
      <span>iMessage</span>
    </Link>
        </div>
      </div>
    </section>
  )
}
