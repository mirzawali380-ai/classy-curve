'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Important information about our affiliate marketing business and the services we provide.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 2024
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex items-start">
                <i className="ri-information-line text-yellow-600 text-xl mr-3 mt-1"></i>
                <div>
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Affiliate Marketing Disclosure</h3>
                  <p className="text-yellow-700">
                    The Classy Curve is an affiliate marketing website. We may earn commissions on purchases 
                    made through our affiliate links to Amazon, Daraz, AliExpress, Flipkart, and other partner retailers. 
                    This does not affect the price you pay for products.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. General Information</h2>
              <p className="text-gray-600 mb-4">
                The information on this website is provided on an "as is" basis. The Classy Curve makes no 
                representations or warranties of any kind, express or implied, about the completeness, 
                accuracy, reliability, suitability, or availability of the information, products, services, 
                or related graphics contained on the website for any purpose.
              </p>
              <p className="text-gray-600">
                Any reliance you place on such information is therefore strictly at your own risk. In no 
                event will we be liable for any loss or damage including without limitation, indirect or 
                consequential loss or damage, or any loss or damage whatsoever arising from loss of data 
                or profits arising out of, or in connection with, the use of this website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Affiliate Relationships</h2>
              <p className="text-gray-600 mb-4">
                The Classy Curve participates in various affiliate marketing programs, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                <li>Amazon Associates Program</li>
                <li>Daraz Affiliate Program</li>
                <li>AliExpress Affiliate Program</li>
                <li>Flipkart Affiliate Program</li>
                <li>Other retail partner affiliate programs</li>
              </ul>
              <p className="text-gray-600">
                When you click on affiliate links and make a purchase, we may receive a commission. 
                This commission comes at no additional cost to you and helps us maintain and improve our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Product Information and Pricing</h2>
              <p className="text-gray-600 mb-4">
                Product information, prices, and availability displayed on our website are obtained from 
                various sources and are subject to change without notice. We make every effort to ensure 
                accuracy, but we cannot guarantee that all information is current or error-free.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Important:</strong> Always verify product details, pricing, and availability directly 
                with the retailer before making a purchase. Prices may vary between the time of our last 
                update and your visit to the retailer's website.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Product Reviews and Recommendations</h2>
              <p className="text-gray-600 mb-4">
                Our product reviews, comparisons, and recommendations are based on research, user feedback, 
                and available product information. These opinions are our own and should be used as guidance only. 
                Individual experiences with products may vary.
              </p>
              <p className="text-gray-600">
                We recommend that you conduct your own research and read multiple reviews before making 
                any purchase decisions. Consider your specific needs, budget, and preferences when 
                evaluating our recommendations.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Third-Party Websites and Services</h2>
              <p className="text-gray-600 mb-4">
                Our website contains links to third-party websites operated by our affiliate partners 
                and other external sites. We have no control over the content, privacy policies, or 
                practices of these third-party sites.
              </p>
              <p className="text-gray-600">
                We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-2">
                <li>The availability or content of third-party websites</li>
                <li>Any damages or losses arising from your use of third-party sites</li>
                <li>The privacy practices of external websites</li>
                <li>Customer service issues with partner retailers</li>
                <li>Product quality, shipping, or return policies of third-party sellers</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall The Classy Curve, its owners, employees, or affiliates be liable for any 
                direct, indirect, incidental, special, consequential, or exemplary damages, including but 
                not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.
              </p>
              <p className="text-gray-600">
                This limitation applies even if we have been advised of the possibility of such damages 
                and regardless of the legal theory upon which the claim is based.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Changes and Updates</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify, suspend, or discontinue any part of our website or services 
                at any time without prior notice. We also reserve the right to update this disclaimer 
                at any time.
              </p>
              <p className="text-gray-600">
                Continued use of our website after any changes constitutes acceptance of those changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contact and Customer Support</h2>
              <p className="text-gray-600 mb-4">
                While we strive to provide helpful information and assistance, our customer support is 
                limited to general inquiries about our website and affiliate partnerships. For specific 
                product issues, returns, warranties, or shipping concerns, please contact the retailer directly.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Geographic Limitations</h2>
              <p className="text-gray-600 mb-4">
                Our services are primarily intended for users in Pakistan. Product availability, pricing, 
                and shipping options may vary by location. Some affiliate programs and offers may not be 
                available in all regions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
              <p className="text-gray-600">
                This disclaimer is governed by and construed in accordance with the laws of Pakistan. 
                Any disputes arising in connection with this disclaimer shall be subject to the exclusive 
                jurisdiction of the courts of Pakistan.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
              <div className="flex items-start">
                <i className="ri-alert-line text-red-600 text-xl mr-3 mt-1"></i>
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">Important Reminder</h3>
                  <p className="text-red-700">
                    By using The Classy Curve website, you acknowledge that you have read, understood, 
                    and agree to be bound by this disclaimer. If you do not agree with any part of this 
                    disclaimer, please do not use our website or services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About This Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this disclaimer, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <i className="ri-mail-line text-purple-600"></i>
                  <span>Email: mirzamirza33500@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-whatsapp-line text-green-600"></i>
                  <span>WhatsApp Support: Mahnoor Khan (+92 309 0289113)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line text-blue-600"></i>
                  <span>Phone: Mirza Waleed (Owner) (+92 303 9047048)</span>
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