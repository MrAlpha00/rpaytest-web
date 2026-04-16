import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { books, getBookById } from '@/data/books';
import PurchaseButton from '@/components/PurchaseButton';

interface BookPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

export async function generateMetadata({ params }: BookPageProps) {
  const book = getBookById(params.id);
  
  if (!book) {
    return {
      title: 'Book Not Found',
    };
  }

  return {
    title: `${book.title} - eBook Store`,
    description: book.description,
  };
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookById(params.id);

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
          >
            ← Back to all books
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-primary-100 to-primary-200 p-8 flex items-center justify-center">
              <div className="relative w-64 h-96 shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                  {book.category}
                </span>
                {book.pages && (
                  <span className="text-gray-500 text-sm">
                    {book.pages} pages
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {book.title}
              </h1>

              <p className="text-lg text-gray-600 mb-6">
                by <span className="font-medium text-gray-900">{book.author}</span>
                {book.publishedYear && (
                  <span className="text-gray-500"> • {book.publishedYear}</span>
                )}
              </p>

              <div className="prose prose-lg text-gray-700 mb-8">
                <p>{book.description}</p>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Price</div>
                  <div className="text-4xl font-bold text-gray-900">
                    ₹{book.price}
                  </div>
                </div>

                <div className="flex-1" />

                <PurchaseButton book={book} />
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What you&apos;ll get:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    High-quality PDF format
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Instant download after purchase
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lifetime access
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Secure payment via Razorpay
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
