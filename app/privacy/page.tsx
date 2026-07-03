'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or subscribe to our newsletter. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Communication preferences</li>
                <li>Messages you send to us through contact forms</li>
                <li>Newsletter subscription information</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you newsletters and promotional communications (with your consent)</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Send you technical notices and security alerts</li>
                <li>Analyze usage patterns to improve our website and services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Affiliate Disclosure</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800 font-semibold mb-2">
                  Important: We participate in affiliate marketing programs
                </p>
                <p className="text-blue-700">
                  The Classy Curve participates in various affiliate marketing programs, which means we may earn 
                  commissions on purchases made through our links to Amazon, Daraz, AliExpress, Flipkart, and other 
                  partner retailers. These affiliate relationships do not affect the price you pay for products.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following cases:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>With trusted service providers who assist us in operating our website</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Track affiliate referrals and commissions</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies 
                may limit your ability to use certain features of our website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-600 mb-4">
                Our website contains links to third-party websites, including our affiliate partners 
                (Amazon, Daraz, AliExpress, Flipkart, etc.). We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy 
                policies of any third-party sites you visit.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Unsubscribe from our newsletters at any time</li>
                <li>Request information about how we use your data</li>
                <li>File a complaint with relevant authorities if you believe we have violated your privacy rights</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not directed to children under 13 years of age. We do not knowingly 
                collect personal information from children under 13. If we learn that we have collected 
                personal information from a child under 13, we will delete such information promptly.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                Your continued use of our services after any modifications indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <i className="ri-mail-line text-purple-600"></i>
                  <span>Email: mirzamirza33500@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-whatsapp-line text-green-600"></i>
                  <span>WhatsApp: Mahnoor Khan (+92 309 0289113)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line text-blue-600"></i>
                  <span>Phone: Mirza Waleed (+92 303 9047048)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}