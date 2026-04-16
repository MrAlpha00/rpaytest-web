import Link from 'next/link';
import { books } from '@/data/books';
import BookCard from '@/components/BookCard';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const featuredBooks = books.slice(0, 3);
  const allBooks = books;

  return (
    <div className="space-y-16">
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured eBooks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked collection of premium technical books to enhance your skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All eBooks
            </h2>
            <p className="text-lg text-gray-600">
              Browse our complete collection of {allBooks.length} premium books
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get instant access to all our premium eBooks
          </p>
          <Link
            href="#ebooks"
            className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Browse All Books
          </Link>
        </div>
      </section>
    </div>
  );
}
