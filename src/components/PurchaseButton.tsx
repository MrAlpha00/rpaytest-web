'use client';

import { useState } from 'react';
import { Book } from '@/types';
import { api, ApiError } from '@/lib/api';

declare global {
  interface Window {
    Razorpay: unknown;
  }
}

interface PurchaseButtonProps {
  book: Book;
  variant?: 'primary' | 'full';
}

export default function PurchaseButton({ book, variant = 'full' }: PurchaseButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDownload, setShowDownload] = useState(false);
  const [downloadToken, setDownloadToken] = useState<string | null>(null);

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('✅ Razorpay script loaded successfully');
        resolve(true);
      };
      script.onerror = () => {
        console.error('❌ Failed to load Razorpay script');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePurchase = async () => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('🚀 Starting purchase flow for book:', book.id);

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway. Please check your internet connection.');
      }

      console.log('📡 Creating order via external API...');
      const orderData = await api.createOrder(book.id);
      
      console.log('✅ Order created:', orderData.orderId);

      console.log('📡 Fetching Razorpay key...');
      const razorpayKeyData = await api.getRazorpayKey();
      const razorpayKey = razorpayKeyData.key || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      console.log('💳 Opening Razorpay checkout...');
      
      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'eBook Store',
        description: `Purchase: ${book.title}`,
        image: '/logo.png',
        order_id: orderData.orderId,
        handler: async (response: { 
          razorpay_order_id: string; 
          razorpay_payment_id: string; 
          razorpay_signature: string;
        }) => {
          console.log('💰 Payment successful!', {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
          });
          
          try {
            console.log('📡 Verifying payment via external API...');
            const verifyData = await api.verifyPayment(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              response.razorpay_signature,
              book.id
            );

            console.log('✅ Payment verified:', verifyData);

            if (verifyData.success) {
              const token = btoa(`${verifyData.orderId}:${verifyData.book.id}:${Date.now()}`);
              setDownloadToken(token);
              setShowDownload(true);
              alert('Payment successful! You can now download your eBook.');
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (verifyError) {
            console.error('❌ Verification error:', verifyError);
            const errorMessage = verifyError instanceof Error 
              ? verifyError.message 
              : 'Payment verification failed. Please contact support.';
            setError(errorMessage);
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        notes: {
          bookId: book.id,
        },
        theme: {
          color: '#0ea5e9',
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
            console.log('ℹ️ Payment modal dismissed by user');
          },
        },
      };

      const Razorpay = window.Razorpay as { new (opts: unknown): { on: (event: string, handler: (response: unknown) => void) => void; open: () => void } };
      const rzp = new Razorpay(options);

      rzp.on('payment.failed', (response: unknown) => {
        console.error('❌ Payment failed:', response);
        const errorObj = response as { error?: { description?: string } };
        setError(`Payment failed: ${errorObj.error?.description || 'Unknown error'}`);
        setIsLoading(false);
      });

      rzp.open();
    } catch (err) {
      console.error('❌ Purchase error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (downloadToken) {
      console.log('📥 Initiating download...');
      window.location.href = `/api/download?token=${encodeURIComponent(downloadToken)}&bookId=${book.id}`;
    }
  };

  if (showDownload && downloadToken) {
    return (
      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-800 mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">Payment Successful!</span>
          </div>
          <p className="text-green-700 text-sm mb-4">
            Your download is ready. Click below to get your eBook.
          </p>
          <button
            onClick={handleDownload}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download eBook
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-800 text-sm flex-1">{error}</p>
          </div>
        </div>
      )}

      <button
        onClick={handlePurchase}
        disabled={isLoading}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:shadow-none flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Buy Now - ₹{book.price}
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Secure payment powered by Razorpay
      </p>
    </div>
  );
}
