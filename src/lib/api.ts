const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rpay.suhasm.online';

interface ApiError {
  message: string;
  status?: number;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    console.log(`🔄 API Request:`, {
      method: options.method || 'GET',
      url,
      body: options.body ? JSON.parse(options.body as string) : undefined,
    });

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      console.log(`✅ API Response:`, {
        url,
        status: response.status,
        data,
      });

      if (!response.ok) {
        throw {
          message: data.error || 'API request failed',
          status: response.status,
        };
      }

      return data;
    } catch (error: any) {
      console.error(`❌ API Error:`, {
        url,
        error: error.message || error,
      });
      throw error;
    }
  }

  async createOrder(bookId: string) {
    return this.request<{
      success: boolean;
      orderId: string;
      amount: number;
      currency: string;
      book: {
        id: string;
        title: string;
        price: number;
      };
    }>('/api/create-order', {
      method: 'POST',
      body: JSON.stringify({ bookId }),
    });
  }

  async verifyPayment(
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
    bookId: string
  ) {
    return this.request<{
      success: boolean;
      verified: boolean;
      paymentId: string;
      orderId: string;
      book: {
        id: string;
        title: string;
        fileName: string;
      };
    }>('/api/verify-payment', {
      method: 'POST',
      body: JSON.stringify({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        bookId,
      }),
    });
  }

  async getRazorpayKey() {
    return this.request<{ key: string }>('/api/get-razorpay-key');
  }
}

export const api = new ApiClient(API_BASE_URL);
export { API_BASE_URL };
