'use client';

import { useState, useTransition } from 'react';
import { sendMessage } from '../app/actions/SendMessage';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

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
    <section id="contact" className="mb-12 w-full max-w-2xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Let’s Connect</h2>
      <p className="text-gray-400 mb-10">
        Have a project in mind or just want to say hi? I’d love to hear from you.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 text-left bg-gray-900/40 border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formState.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500/30 outline-none transition resize-none"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors duration-300 disabled:opacity-60"
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
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="https://github.com/dboatengg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/dboatengx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/233532683209"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
