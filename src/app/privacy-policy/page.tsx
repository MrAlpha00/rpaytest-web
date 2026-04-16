export const metadata = {
  title: 'Privacy Policy - eBook Store',
  description: 'Privacy Policy for eBook Store - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="text-sm text-gray-500">Last Updated: January 1, 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Purchase an eBook</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, payment information, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Process your purchases and deliver eBooks</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your comments and questions</li>
                <li>Send you related information, including purchase confirmations and invoices</li>
                <li>Improve our website and services</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
              </p>
              <p className="mt-4">
                We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Payment Processors:</strong> Razorpay for payment processing</li>
                <li><strong>Service Providers:</strong> Companies that help us deliver our services</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.
              </p>
              <p className="mt-4">
                We use SSL encryption for sensitive data transmission and store data on secure servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p>
                We use cookies to understand and save your preferences for future visits, keep track of advertisements, and compile aggregate data about site traffic and site interaction.
              </p>
              <p className="mt-4">
                You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
              <p>
                Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.
              </p>
              <p className="mt-4">
                We therefore have no responsibility or liability for the content and activities of these linked sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Information</h2>
              <p>
                All payment transactions are processed through Razorpay, a secure third-party payment processor. We do not store your complete credit card information on our servers.
              </p>
              <p className="mt-4">
                Razorpay handles all payment data in accordance with PCI DSS compliance and their own privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at support@ebookstore.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p>
                Our website and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              <p className="mt-4">
                You are advised to review this privacy policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> support@ebookstore.com</li>
                <li><strong>Website:</strong> https://ebookstore.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
