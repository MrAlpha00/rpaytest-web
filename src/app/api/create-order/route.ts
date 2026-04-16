import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { books } from '@/data/books';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { bookId } = body;

    if (!bookId) {
      console.error('Create order: Missing bookId');
      return NextResponse.json(
        { error: 'Book ID is required' },
        { status: 400 }
      );
    }

    const book = books.find((b) => b.id === bookId);
    if (!book) {
      console.error(`Create order: Book not found - ${bookId}`);
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    const amount = book.price * 100; // Convert to paise

    const orderOptions = {
      amount: amount,
      currency: 'INR',
      receipt: `receipt_${bookId}_${Date.now()}`,
      notes: {
        bookId: book.id,
        bookTitle: book.title,
      },
    };

    console.log('Creating Razorpay order:', {
      bookId: book.id,
      bookTitle: book.title,
      amount: amount,
    });

    const order = await razorpay.orders.create(orderOptions);

    console.log('Order created successfully:', order.id);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      book: {
        id: book.id,
        title: book.title,
        price: book.price,
      },
    });
  } catch (error: any) {
    console.error('Create order error:', error);
    
    if (error.statusCode) {
      return NextResponse.json(
        { error: error.error?.description || 'Payment gateway error' },
        { status: error.statusCode }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
