import { NextResponse } from 'next/server';
import { verifyRazorpaySignature } from '@/lib/utils';
import { books } from '@/data/books';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookId } = body;

    console.log('Verifying payment:', {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      bookId,
    });

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      console.error('Verify payment: Missing required fields');
      return NextResponse.json(
        { error: 'Missing payment verification details' },
        { status: 400 }
      );
    }

    const isValid = verifyRazorpaySignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isValid) {
      console.error('Verify payment: Invalid signature');
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    const book = books.find((b) => b.id === bookId);
    if (!book) {
      console.error(`Verify payment: Book not found - ${bookId}`);
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    console.log('Payment verified successfully:', razorpay_payment_id);

    return NextResponse.json({
      success: true,
      verified: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      book: {
        id: book.id,
        title: book.title,
        fileName: book.fileName,
      },
    });
  } catch (error: any) {
    console.error('Verify payment error:', error);
    
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}
