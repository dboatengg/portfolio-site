'use client';

import { useState, useTransition } from 'react';
import { sendMessage } from '../app/actions/SendMessage';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import {motion} from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    startTransition(async () => {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => formData.append(key, value));

      const result = await sendMessage(formData);
      if (result?.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    });
  };

  return (
    // <section id="contact" className="mb-12 w-full max-w-2xl mx-auto text-center">
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="mb-12 w-full max-w-2xl mx-auto text-center"
    >
  {/* Contact form JSX */}

      <h2 className="text-2xl md:text-3xl font-semibold text-[rgb(var(--text))] mb-4">Let’s Connect</h2>
      <p className="text-[rgb(var(--text))] mb-10">
        Have a project in mind or just want to say hi? I’d love to hear from you.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 text-left bg-[rgb(var(--surface-overlay))] border border-[rgb(var(--border))] rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-[rgb(var(--text))] mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full p-3 bg-[rgb(var(--card))] text-[rgb(var(--text))] rounded-lg border border-[rgb(var(--border))] focus:border-[rgb(var(--border)/0.4)] focus:ring focus:ring-blue-500/30 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-[rgb(var(--text))] mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full p-3 bg-[rgb(var(--card))] text-[rgb(var(--text))] rounded-lg border border-[rgb(var(--border))] focus:border-[rgb(var(--border)/0.4)] focus:ring focus:ring-blue-500/30 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-[rgb(var(--text))] mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formState.message}
              onChange={handleChange}
              className="w-full p-3 bg-[rgb(var(--card))] text-[rgb(var(--text))] rounded-lg border border-[rgb(var(--border))] focus:border-[rgb(var(--border)/0.4)] focus:ring focus:ring-blue-500/30 outline-none transition"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 font-medium text-[rgb(var(--accent-foreground))] bg-[rgb(var(--accent))] hover:bg-[rgb(var(--bg)/0.5)] rounded-full transition-colors duration-300 disabled:opacity-60"
          >
            {isPending ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      ) : (
        <p className="text-green-400 text-lg mt-8">
          ✅ Thanks for reaching out! I’ll get back to you soon.
        </p>
      )}

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-10 text-[rgb(var(--text))]">
        <a
          href="https://github.com/dboatengg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--text))] hover:text-[rgb(var(--text)/0.5)] transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/dboatengx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--text))] hover:text-[rgb(var(--text)/0.5)] transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/233532683209"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--text))] hover:text-[rgb(var(--text)/0.5)] transition"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </motion.section>
  );
}
