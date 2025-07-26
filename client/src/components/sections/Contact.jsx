import React, { useState } from 'react';
import SectionWrapper from '../../hoc/SectionWrapper';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  // The base URL for the API is now loaded from an environment variable
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // The fetch call now uses the apiUrl variable
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white text-center mb-12">
        Get in Touch
      </h2>
      <div className="bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text" name="name" id="name" value={form.name} onChange={handleChange}
              placeholder="What's your name?" required
              className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Email
            </label>
            <input
              type="email" name="email" id="email" value={form.email} onChange={handleChange}
              placeholder="your.email@example.com" required
              className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Message
            </label>
            <textarea
              name="message" id="message" rows="6" value={form.message} onChange={handleChange}
              placeholder="What would you like to say?" required
              className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit" disabled={loading}
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-bold hover:bg-indigo-700 transition-all duration-300 disabled:bg-slate-500 w-full sm:w-auto"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');