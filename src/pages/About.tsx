import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about HeartCompass, our mission, and how we help people build healthier, happier connections."
      />

      <section className="bg-linear-to-br from-stone-900 to-stone-800 text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-rose-400 text-xs font-semibold tracking-widest uppercase">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-3 mb-5 leading-tight">
            We Believe in the Power of Connection
          </h1>
          <p className="text-stone-300 text-xl leading-relaxed">
            HeartCompass exists to give every person the tools they need to love well — and be loved well in return.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-stone-600 leading-relaxed text-lg mb-6">
            Welcome to HeartCompass — your trusted source for practical, evidence-based relationship guidance.
          </p>
          <p className="text-stone-600 leading-relaxed mb-6">
            Our mission is to cut through the noise and offer real, compassionate advice that helps you build healthier,
            happier relationships. Whether you're navigating early dating, working on communication with a long-term partner,
            or simply learning to love yourself better — we're here for all of it.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Every article is grounded in respect for real human experience — no unrealistic expectations, no shame,
            just honest guidance written with care.
          </p>

          <div className="mt-12 p-8 bg-rose-50 rounded-2xl border border-rose-100">
            <p className="font-serif text-2xl text-stone-800 leading-relaxed italic">
              "Healthy relationships don't just happen — they're built, one conversation at a time."
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
