import Link from 'next/link';

export const metadata = {
  title: 'FAQ - eBook Store',
  description: 'Frequently Asked Questions about eBook Store - Find answers to common questions about our products and services.',
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="text-sm text-gray-500">Last Updated: January 1, 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 About Our eBooks</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">What format are the eBooks in?</h3>
                  <p>All our eBooks are delivered in PDF format, which can be read on any device that supports PDF files including computers, tablets, and smartphones.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Can I print the eBook?</h3>
                  <p>Yes, you can print the PDF file for personal use. However, redistribution or commercial printing is not permitted under our license agreement.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Do I get lifetime access?</h3>
                  <p>Yes! Once you purchase an eBook, you have lifetime access to that content. You can download it anytime from your purchase confirmation email or our website.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Can I read on multiple devices?</h3>
                  <p>Yes, you can install the PDF on multiple devices for personal use. However, sharing access with others is not allowed under our terms.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💳 Payment & Pricing</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p>We accept all major credit/debit cards, UPI, net banking, and various wallets through our secure payment partner, Razorpay.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Is my payment secure?</h3>
                  <p>Absolutely! All payments are processed through Razorpay, which is PCI DSS compliant. We never store your complete card details on our servers.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Are prices inclusive of taxes?</h3>
                  <p>Prices shown on our website are inclusive of applicable taxes. What you see is what you pay.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Do you offer discounts?</h3>
                  <p>We occasionally run promotional offers. Subscribe to our newsletter or follow us on social media to stay updated about discounts and special offers.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📥 Download & Access</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">How do I download my eBook?</h3>
                  <p>After successful payment, you will see a download button on the confirmation page. You will also receive a download link via email.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">The download link is not working. What should I do?</h3>
                  <p>First, try clearing your browser cache. If the issue persists, contact our support team at support@ebookstore.com with your order number.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">I lost my download. Can I get it again?</h3>
                  <p>Yes, you should have received an email with your download link. If you cannot find it, contact support with your order details.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">The file is corrupted. What should I do?</h3>
                  <p>Contact our support team immediately with your order number. We will verify the issue and provide a working file as quickly as possible.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 Refunds & Returns</h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-900 mb-2">Do you offer refunds?</h3>
                  <p className="text-red-800"><strong>No, we do not offer refunds on digital products.</strong> Due to the nature of digital goods, once a download is completed, we cannot retrieve the content. Please review the product details carefully before purchasing.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">I purchased the wrong item. Can I exchange it?</h3>
                  <p>We cannot exchange digital products. Please review your cart carefully before completing the purchase. Contact support if you believe a genuine error occurred.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">What if I have technical issues with the file?</h3>
                  <p>We will help resolve any technical issues with your file. Contact support with details and we will work to get you a working copy.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔒 Account & Security</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Do I need to create an account?</h3>
                  <p>No, you can purchase as a guest. However, creating an account allows you to track your purchases and access downloads easily.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">How do I create an account?</h3>
                  <p>Look for the account icon in the navigation menu. You can sign up with your email or use social login options.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Is my personal information secure?</h3>
                  <p>Yes, we take security seriously. Your data is encrypted and stored securely. We never share your information with third parties without your consent.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📞 Contact & Support</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                <h3 className="font-bold text-blue-900">Need more help?</h3>
                <p className="text-blue-800">If you have questions not covered here, our support team is here to help!</p>
                <div className="space-y-2 text-blue-800">
                  <p><strong>Email:</strong> support@ebookstore.com</p>
                  <p><strong>Response Time:</strong> 24-48 hours</p>
                  <p><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM IST</p>
                </div>
                <div>
                  <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Policies</h2>
              <p>For detailed information, please refer to our policies:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700">Privacy Policy</Link> - How we collect and use your data</li>
                <li><Link href="/terms-and-conditions" className="text-primary-600 hover:text-primary-700">Terms & Conditions</Link> - Rules for using our service</li>
                <li><Link href="/refund-policy" className="text-primary-600 hover:text-primary-700">Refund Policy</Link> - Our no-refund policy for digital products</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
