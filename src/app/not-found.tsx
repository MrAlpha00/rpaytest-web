import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The book you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
