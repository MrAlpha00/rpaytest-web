# Architecture Diagram

## System Architecture (After Integration)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER BROWSER                                       │
│                           (localhost:3000)                                    │
└─────────────────────────────────┬───────────────────────────────────────────┘
                                  │
                                  │ HTTP/HTTPS
                                  │
┌─────────────────────────────────▼───────────────────────────────────────────┐
│                         NEXT.JS FRONTEND                                      │
│                         (React + TypeScript + Tailwind)                       │
│                                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐                      │
│  │  Home Page   │    │ Book Detail  │    │   Payment    │                      │
│  │  (page.tsx)  │───►│   Page       │───►│   Flow       │                      │
│  └──────────────┘    └──────────────┘    └──────────────┘                      │
│         │                  │                  │                               │
│         │                  │                  │                               │
│  ┌──────▼──────────────────▼──────────────────▼──────┐                       │
│  │           src/lib/api.ts                          │                       │
│  │           (Centralized API Client)                 │                       │
│  │                                                      │                       │
│  │  • createOrder()                                    │                       │
│  │  • verifyPayment()                                  │                       │
│  │  • getRazorpayKey()                                │                       │
│  │  • Request/Response Logging                        │                       │
│  │  • Error Handling                                  │                       │
│  └────────────────────────┬───────────────────────────┘                       │
└───────────────────────────┼───────────────────────────────────────────────────┘
                            │
                            │ HTTPS
                            │ (NEXT_PUBLIC_API_BASE_URL)
                            │
┌───────────────────────────▼─────────────────────────────────────────────────┐
│                     EXTERNAL BACKEND                                         │
│                     (https://rpay.suhasm.online)                            │
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────────┐ │
│  │                        API Routes                                      │ │
│  │                                                                         │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │ │
│  │  │create-order  │  │verify-payment│  │   webhook    │  │get-key    │  │ │
│  │  │   (POST)     │  │   (POST)     │  │   (POST)     │  │  (GET)    │  │ │
│  │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └───────────┘  │ │
│  │         │                 │                  │                          │ │
│  └─────────┼─────────────────┼──────────────────┼──────────────────────────┘ │
│            │                 │                  │                             │
└────────────┼─────────────────┼──────────────────┼─────────────────────────────┘
             │                 │                  │
             │                 │                  │
┌────────────▼─────────────────▼──────────────────▼─────────────────────────────┐
│                              RAZORPAY                                        │
│                         (Payment Gateway)                                     │
│                                                                              │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────────┐ │
│  │   Order Creation   │  │  Payment Processing │  │    Webhook Events      │ │
│  │                    │  │                     │  │                        │ │
│  │  • Generate Order  │  │  • Card Payments    │  │  • order.paid          │ │
│  │  • Return Order ID │  │  • UPI Payments     │  │  • order.failed        │ │
│  │                    │  │  • Net Banking     │  │  • payment.captured   │ │
│  └────────────────────┘  └────────────────────┘  │  • payment.failed      │ │
│                                                      └────────────────────────┘ │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Purchase Flow

```
User clicks "Buy Now"
         │
         ▼
Frontend calls api.createOrder(bookId)
         │
         ▼
External Backend creates Razorpay order
         │
         ▼
Returns order_id to frontend
         │
         ▼
Frontend opens Razorpay checkout modal
         │
         ▼
User enters payment details (Test Card: 4111 1111 1111 1111)
         │
         ▼
Razorpay processes payment
         │
         ├──► Payment Success ──► Handler function called
         │                            │
         │                            ▼
         │                     api.verifyPayment()
         │                            │
         │                            ▼
         │                     Show "Download" button
         │                            │
         │                            ▼
         │                     User downloads PDF
         │
         └──► Payment Failed ──► Error message displayed
```

### 2. API Request Flow

```
┌──────────────┐
│   Frontend   │
│   Component  │
└──────┬───────┘
       │
       │ api.createOrder('book-id')
       │
       ▼
┌──────────────────────────────────────────────────────┐
│                   src/lib/api.ts                     │
│                                                      │
│  console.log('🔄 API Request:', { method, url })     │
│                                                      │
│  const response = await fetch(url, options)          │
│                                                      │
│  console.log('✅ API Response:', { status, data })   │
│                                                      │
└──────┬──────────────────────────────────────────────┘
       │
       │ HTTPS Request
       │
       ▼
┌──────────────────────────────────────────────────────┐
│           External Backend API                        │
│           https://rpay.suhasm.online                 │
│                                                      │
│  POST /api/create-order                              │
│  { bookId: 'book-id' }                               │
│                                                      │
│  Returns:                                            │
│  {                                                   │
│    success: true,                                    │
│    orderId: 'order_xxx',                             │
│    amount: 49900,                                    │
│    currency: 'INR'                                    │
│  }                                                   │
└──────────────────────────────────────────────────────┘
```

## File Organization

```
ebook-store/
│
├── Frontend Code
│   │
│   ├── src/
│   │   ├── components/           # UI Components
│   │   │   └── PurchaseButton.tsx  # Uses api.*() methods
│   │   │
│   │   ├── lib/
│   │   │   └── api.ts            # Centralized API Client
│   │   │      ├── createOrder()
│   │   │      ├── verifyPayment()
│   │   │      └── getRazorpayKey()
│   │   │
│   │   └── app/                  # Pages
│   │       └── page.tsx            # Home page
│   │
│   └── .env.local
│       └── NEXT_PUBLIC_API_BASE_URL=https://rpay.suhasm.online
│
└── External Backend (Separate Repository/Server)
    │
    └── https://rpay.suhasm.online
        ├── /api/create-order
        ├── /api/verify-payment
        ├── /api/webhook
        └── /api/get-razorpay-key
```

## Key Differences: Before vs After

### Before (Local API Routes)

```
Frontend                    Local Backend               Razorpay
   │                            │                         │
   ├─ fetch('/api/...') ───────►│                         │
   │                            ├─ Create Order ─────────►│
   │                            │◄─ Order ID ────────────┤
   │◄─ Response ─────────────────┤                         │
```

### After (External Backend)

```
Frontend                    External Backend            Razorpay
   │                            │                         │
   ├─ api.createOrder() ──────►│                         │
   │                            ├─ Create Order ─────────►│
   │                            │◄─ Order ID ────────────┤
   │◄─ Response ───────────────┤                         │
```

## Benefits of External Backend

1. **Separation of Concerns**
   - Frontend: UI and user interaction
   - Backend: Business logic and payment processing

2. **Scalability**
   - External backend can be scaled independently
   - Frontend can be deployed on CDN (Vercel)

3. **Security**
   - Sensitive API keys stored on backend only
   - Payment logic centralized

4. **Maintainability**
   - Changes to payment logic don't require frontend redeployment
   - Centralized error handling

5. **Performance**
   - External backend can be optimized separately
   - Reduced load on frontend server

## Environment Configuration

```env
# Frontend (.env.local)
NEXT_PUBLIC_API_BASE_URL=https://rpay.suhasm.online
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Backend (separate config)
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=xxx
DATABASE_URL=...
```

## Deployment Architecture

```
┌─────────────────────────────────────┐
│          User Browser               │
└────────────────┬────────────────────┘
                 │
                 │ HTTPS
                 │
    ┌────────────┴────────────┐
    │                         │
    ▼                         ▼
┌──────────────┐    ┌────────────────────┐
│   Vercel     │    │   External Server  │
│  (Frontend)  │    │  (Backend API)     │
│              │    │                    │
│ Next.js App  │    │ Node.js/Express   │
│              │    │                    │
│ localhost:   │    │ rpay.suhasm.online │
│  3000 (dev)  │    │                    │
└──────────────┘    └────────────────────┘
```

---

## Summary

- **Frontend**: Next.js app deployed on Vercel
- **Backend**: External API at rpay.suhasm.online
- **Payment**: Razorpay handles all payment processing
- **Communication**: HTTPS requests via centralized API client

This architecture provides a clean separation of concerns while maintaining security and scalability.
