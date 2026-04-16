export const metadata = {
  title: 'Refund Policy - eBook Store',
  description: 'Refund Policy for eBook Store - All sales are final. No refunds or returns on digital products.',
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-red-900 mb-2">⚠️ Important Notice</h2>
              <p className="text-red-800 font-semibold">
                ALL SALES ARE FINAL - NO REFUNDS, NO RETURNS
              </p>
              <p className="text-red-700 mt-2">
                Due to the nature of digital products, we cannot offer refunds once a purchase has been completed and the download has been initiated.
              </p>
            </div>

            <p className="text-sm text-gray-500">Last Updated: January 1, 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. No Refund Policy</h2>
              <p>
                <strong>All purchases made on eBook Store are final and non-refundable.</strong>
              </p>
              <p className="mt-4">
                Once you complete a purchase and receive access to the digital content, we cannot offer a refund because:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Digital products cannot be "returned" like physical goods</li>
                <li>Downloaded files cannot be retrieved once distributed</li>
                <li>Content can be retained and used by the purchaser indefinitely</li>
                <li>It is impossible to verify whether the content has been used or copied</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Before You Purchase</h2>
              <p>Please make informed decisions before buying. We encourage you to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Carefully review the book description, preview, and table of contents</li>
                <li>Read sample chapters if available</li>
                <li>Check the book details including page count and format</li>
                <li>Ensure the content meets your needs and expectations</li>
                <li>Contact us if you have any questions before purchasing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. What This Means</h2>
              <p>By completing a purchase on our website, you acknowledge and agree that:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>You have read and understood this refund policy</li>
                <li>You accept that no refunds will be issued for any reason</li>
                <li>All sales are final once the download is completed</li>
                <li>You are responsible for verifying the product meets your needs before purchase</li>
                <li>This policy applies to all digital products sold on our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Exception Policy</h2>
              <p>We may consider exceptions only in the following circumstances:</p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">⚡ Exceptional Circumstances (Case-by-Case Basis)</h3>
                <ul className="list-disc list-inside space-y-2 text-yellow-800">
                  <li><strong>Technical Issues:</strong> If you experience a genuine technical issue that prevents you from accessing the purchased content</li>
                  <li><strong>Duplicate Charges:</strong> If you were charged multiple times for the same item</li>
                  <li><strong>Wrong Product:</strong> If you received a completely different product than what you ordered</li>
                  <li><strong>Unauthorized Transaction:</strong> If the purchase was made without your knowledge or consent</li>
                </ul>
                <p className="text-yellow-900 mt-4 font-semibold">
                  Note: Even these exceptions require verification and approval. Contact support immediately if any of these apply.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How to Request an Exception</h2>
              <p>If you believe your situation qualifies for an exception:</p>
              <ol className="list-decimal list-inside space-y-2 mt-4">
                <li>Contact us within <strong>7 days</strong> of your purchase</li>
                <li>Provide your order number and email address</li>
                <li>Describe the issue in detail</li>
                <li>Provide any supporting evidence (screenshots, error messages, etc.)</li>
                <li>Wait for our response (usually within 48-72 hours)</li>
              </ol>
              <p className="mt-4">
                <strong>Email:</strong> support@ebookstore.com<br />
                <strong>Subject Line:</strong> Refund Exception Request - [Your Order Number]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. What We Do NOT Consider</h2>
              <p>We generally do not approve refunds for:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
                <li>Change of mind after purchase</li>
                <li>Buyer's remorse</li>
                <li>Product did not meet expectations</li>
                <li>Customer accidentally purchased the wrong item</li>
                <li>Customer found a better price elsewhere</li>
                <li>Product is not needed anymore</li>
                <li>Customer did not read the description before purchasing</li>
                <li>Customer cannot remember making the purchase</li>
                <li>Downloads were completed successfully</li>
                <li>Customer disagrees with the no-refund policy (but placed the order anyway)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Disputes</h2>
              <p>
                If you initiate a payment dispute or chargeback with your bank or credit card company without first contacting us, we reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Suspend or terminate your account</li>
                <li>Block future purchases</li>
                <li>Report the dispute as fraudulent activity</li>
                <li>Pursue legal action for recovery of funds</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> Always contact us before initiating a dispute. Most issues can be resolved quickly and amicably.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Product Quality</h2>
              <p>
                We are committed to providing high-quality content. If you discover that the product is:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Corrupted or unreadable</li>
                <li>Completely different from the description</li>
                <li>Missing substantial content promised</li>
              </ul>
              <p className="mt-4">
                Contact us immediately with evidence. We will work to resolve the issue, which may include providing a corrected file or, in rare cases, a credit for future purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Unauthorized Purchases</h2>
              <p>
                If you believe an unauthorized purchase was made on your account:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-4">
                <li>Change your account password immediately</li>
                <li>Contact your bank to secure your payment method</li>
                <li>Report the unauthorized transaction to us</li>
                <li>Provide any evidence of unauthorized access</li>
              </ol>
              <p className="mt-4">
                We will investigate and take appropriate action. Valid unauthorized purchase claims may be eligible for a refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Changes</h2>
              <p>
                We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting on our website. The policy in effect at the time of your purchase will govern your transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Legal Compliance</h2>
              <p>
                This policy complies with:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Consumer Protection laws of India</li>
                <li>Information Technology Act, 2000</li>
                <li>Digital Goods regulations</li>
              </ul>
              <p className="mt-4">
                This policy is part of our Terms and Conditions. By making a purchase, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p>If you have questions about this policy, please contact us:</p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> support@ebookstore.com</li>
                <li><strong>Response Time:</strong> 48-72 hours</li>
                <li><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM IST</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                For the fastest resolution, please include your order number and a detailed description of your inquiry.
              </p>
            </section>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-bold text-blue-900 mb-2">📋 Summary</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>All digital product sales are final</li>
                <li>No refunds after download is completed</li>
                <li>Exceptions only for genuine technical issues</li>
                <li>Contact support before initiating disputes</li>
                <li>Review product details before purchasing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
