import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about Relationship Advice, our mission, and how we help people build healthier, happier connections."
      />
      <motion.div 
        className="max-w-3xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>
        <div className="prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Welcome to Relationship Advice, your trusted source for practical relationship guidance.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Our mission is to provide evidence-based advice and insights to help you build healthier,
            happier relationships. Whether you're navigating the dating world, working on communication
            with your partner, or seeking to deepen your connection, we're here to help.
          </p>
        </div>
      </motion.div>
    </>
  );
}
