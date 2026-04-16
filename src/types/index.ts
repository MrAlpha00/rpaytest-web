export interface Book {
  id: string;
  title: string;
  description: string;
  price: number; // Price in INR ( smallest currency unit - paise)
  coverImage: string;
  fileName: string; // PDF filename in /public/assets/books/
  category: string;
  author: string;
  pages?: number;
  publishedYear?: number;
}

export interface Order {
  id: string;
  bookId: string;
  amount: number;
  currency: string;
  status: 'created' | 'paid' | 'failed';
  razorpayOrderId?: string;
  createdAt: Date;
}

export interface PaymentVerification {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}
