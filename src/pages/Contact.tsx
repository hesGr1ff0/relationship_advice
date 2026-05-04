import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the HeartCompass team. Send us your questions or feedback."
      />

      <section className="bg-linear-to-br from-stone-900 to-stone-800 text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="text-rose-400 text-xs font-semibold tracking-widest uppercase">Reach Out</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-4 leading-tight">
            We'd Love to Hear From You
          </h1>
          <p className="text-stone-300 text-lg">
            Questions, feedback, or just want to say hi — we're here.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 text-stone-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 text-stone-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl bg-stone-50 text-stone-900 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
