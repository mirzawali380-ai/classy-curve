
'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get in touch with our team. We're here to help you with any questions about deals and affiliate partnerships.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our affiliate products or need support? Our team is ready to help you find the best deals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg">
                    <i className="ri-whatsapp-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">WhatsApp Support</h3>
                    <p className="text-gray-600">Mahnoor Khan</p>
                    <a href="https://wa.me/923090289113" className="text-green-600 hover:underline">
                      +92 309 0289113
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                    <i className="ri-phone-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call & WhatsApp</h3>
                    <p className="text-gray-600">Mirza Waleed (Owner)</p>
                    <a href="tel:+923039047048" className="text-blue-600 hover:underline">
                      +92 303 9047048
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg">
                    <i className="ri-mail-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Support</h3>
                    <p className="text-gray-600">For detailed inquiries</p>
                    <a href="mailto:mirzamirza33500@gmail.com" className="text-purple-600 hover:underline">
                      mirzamirza33500@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg">
                    <i className="ri-map-pin-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600">Pakistan</p>
                    <p className="text-orange-600">Online Business</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="affiliate">Affiliate Partnership</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-green-600 mr-2"></i>
                      <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <i className="ri-error-warning-line text-red-600 mr-2"></i>
                      <p className="text-red-700">Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
