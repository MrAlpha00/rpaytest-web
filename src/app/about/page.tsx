import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About eBook Store</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Welcome to eBook Store, your premier destination for high-quality technical 
              eBooks written by industry experts. We specialize in providing comprehensive 
              learning resources for cybersecurity, networking, Linux administration, 
              and software development.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to make technical education accessible to everyone. We believe 
              that quality learning resources should be affordable and available to all 
              aspiring professionals and enthusiasts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Premium technical eBooks covering latest technologies</li>
              <li>Instant digital delivery after purchase</li>
              <li>Secure payment processing via Razorpay</li>
              <li>Lifetime access to purchased content</li>
              <li>Expert-written, hands-on learning materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Promise</h2>
            <p>
              Every eBook in our collection is carefully curated and reviewed to ensure 
              the highest quality content. We continuously update our catalog with the 
              latest industry trends and best practices.
            </p>

            <div className="bg-primary-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to start learning?</h3>
              <p className="text-gray-700 mb-4">
                Browse our collection and find the perfect eBook for your learning journey.
              </p>
              <Link
                href="/"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Explore Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
