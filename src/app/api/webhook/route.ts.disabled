import { NextResponse } from 'next/server';
import crypto from 'crypto';

const RAZORPAY_WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET || '';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      console.error('Webhook: Missing signature');
      return NextResponse.json(
        { error: 'Missing webhook signature' },
        { status: 400 }
      );
    }

    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_WEBHOOK_SECRET)
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      console.error('Webhook: Invalid signature');
      return NextResponse.json(
        { error: 'Invalid webhook signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);
    console.log('Webhook event received:', event.event);

    switch (event.event) {
      case 'order.paid':
        console.log('Order paid:', event.payload.order.entity);
        break;
      case 'order.failed':
        console.log('Order failed:', event.payload.order.entity);
        break;
      case 'payment.captured':
        console.log('Payment captured:', event.payload.payment.entity);
        break;
      case 'payment.failed':
        console.log('Payment failed:', event.payload.payment.entity);
        break;
      default:
        console.log('Unhandled webhook event:', event.event);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
