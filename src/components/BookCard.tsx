'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/book/${book.id}`} className="group">
      <div className="card h-full flex flex-col">
        <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 p-6 flex items-center justify-center">
          <div className="relative w-40 h-56 shadow-xl rounded overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded">
              {book.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {book.title}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
            {book.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <div className="text-xs text-gray-500 mb-1">Price</div>
              <div className="text-2xl font-bold text-gray-900">
                ₹{book.price}
              </div>
            </div>

            <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold group-hover:bg-primary-700 transition-colors">
              View Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
