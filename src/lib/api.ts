export interface ApiError {
  message: string;
  status?: number;
}

export interface CreateOrderResponse {
  success: boolean;
  orderId: string;
  amount: number;
  currency: string;
  book: {
    id: string;
    title: string;
    price: number;
  };
}

export interface VerifyPaymentResponse {
  success: boolean;
  verified: boolean;
  paymentId: string;
  orderId: string;
  downloadToken?: string;
  book: {
    id: string;
    title: string;
    fileName: string;
  };
}

export interface GetKeyResponse {
  key: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://rpay.suhasm.online';

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
        const error: ApiError = {
          message: data.error || 'API request failed',
          status: response.status,
        };
        throw error;
      }

      return data as T;
    } catch (error: unknown) {
      console.error(`❌ API Error:`, {
        url,
        error,
      });
      
      if (error instanceof Error) {
        throw error;
      }
      
      const apiError: ApiError = {
        message: error && typeof error === 'object' && 'message' in error 
          ? String((error as ApiError).message) 
          : 'Unknown error occurred',
        status: error && typeof error === 'object' && 'status' in error 
          ? (error as ApiError).status 
          : undefined,
      };
      throw apiError;
    }
  }

  async createOrder(bookId: string): Promise<CreateOrderResponse> {
    return this.request<CreateOrderResponse>('/api/create-order', {
      method: 'POST',
      body: JSON.stringify({ bookId }),
    });
  }

  async verifyPayment(
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
    bookId: string
  ): Promise<VerifyPaymentResponse> {
    return this.request<VerifyPaymentResponse>('/api/verify-payment', {
      method: 'POST',
      body: JSON.stringify({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        bookId,
      }),
    });
  }

  async getRazorpayKey(): Promise<GetKeyResponse> {
    return this.request<GetKeyResponse>('/api/get-razorpay-key');
  }
}

export const api = new ApiClient(API_BASE_URL);
export { API_BASE_URL };
