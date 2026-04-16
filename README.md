# eBook Store - Production-Ready Full-Stack Application

A modern, production-ready eBook selling website built with Next.js, TypeScript, Tailwind CSS, and Razorpay integration.

## 🚀 Features

- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **Book Catalog**: Display eBooks with covers, descriptions, and pricing
- **Razorpay Integration**: Complete payment flow with test mode support
- **Secure Downloads**: Token-based download verification
- **External Backend**: Full backend functionality via external API
- **Error Handling**: Comprehensive error handling and loading states
- **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend**: External API (https://rpay.suhasm.online)
- **Payments**: Razorpay (Test Mode)
- **State**: React Hooks
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
ebook-store/
├── public/
│   └── assets/
│       └── books/           # eBook PDF files
├── src/
│   ├── app/
│   │   ├── book/
│   │   │   └── [id]/              # Book detail page
│   │   ├── about/                 # About page
│   │   ├── contact/               # Contact page
│   │   ├── faq/                   # FAQ page
│   │   ├── privacy-policy/        # Privacy Policy page
│   │   ├── terms-and-conditions/  # Terms & Conditions page
│   │   ├── refund-policy/         # Refund Policy page
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── BookCard.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PurchaseButton.tsx
│   ├── data/
│   │   └── books.ts               # Book catalog data
│   ├── lib/
│   │   ├── api.ts                 # External API client
│   │   └── utils.ts               # Utility functions
│   └── types/
│       └── index.ts               # TypeScript interfaces
├── .env.example                   # Example environment variables
├── .env.local                     # Your environment variables
├── LOCAL_API_DISABLED.md          # Info about disabled local APIs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

> **Note**: Local API routes are disabled. All API calls go to external backend: `https://rpay.suhasm.online`

## 🧪 Testing with Razorpay Test Mode

### Test Card Details

```
Card Number: 4111 1111 1111 1111
Expiry: Any future date (e.g., 12/28)
CVV: Any 3 digits (e.g., 123)
```

### Test UPI

```
UPI ID: success@razorpay
```

### Test Netbanking

```
Any bank from the list
```

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# External Backend API URL
NEXT_PUBLIC_API_BASE_URL=https://rpay.suhasm.online

# Razorpay Keys (Used by External Backend)
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
RAZORPAY_KEY_SECRET=rzp_test_YOUR_KEY_SECRET

# Public Razorpay Key (Used in frontend for checkout)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID

# Encryption Secret for Download Tokens (min 32 characters)
DOWNLOAD_TOKEN_SECRET=your-super-secret-key-change-this-in-production

# Website URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Get Razorpay Keys

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys)
2. Sign up or log in
3. Navigate to Settings → API Keys
4. Generate Test API Keys
5. Copy the Key ID and Key Secret
6. Paste them in your `.env.local` file

### 4. Add Your eBooks

Place your PDF files in the `/public/assets/books/` directory.

Update the book data in `src/data/books.ts` to match your files:

```typescript
{
  id: 'unique-book-id',
  title: 'Book Title',
  description: 'Book description',
  price: 499, // Price in INR
  coverImage: 'https://images.unsplash.com/photo-xxx',
  fileName: 'your-book.pdf', // Must match file in /public/assets/books/
  category: 'Category',
  author: 'Author Name',
  pages: 300,
  publishedYear: 2024,
}
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 External Backend Integration

This project uses an **external backend API** for all payment processing and server-side operations.

### Architecture

```
┌─────────────────────────────────────────────────────┐
│                 Frontend (Next.js)                   │
│                    localhost:3000                    │
└─────────────────────┬───────────────────────────────┘
                      │
                      │ API Calls (create-order, verify-payment, etc.)
                      │ via src/lib/api.ts
                      ▼
┌─────────────────────────────────────────────────────┐
│            External Backend API                      │
│          https://rpay.suhasm.online                 │
│                                                         │
│  - /api/create-order     (Create Razorpay order)      │
│  - /api/verify-payment   (Verify payment signature)   │
│  - /api/webhook          (Handle Razorpay events)     │
│  - /api/get-razorpay-key (Get public key)             │
└─────────────────────┬───────────────────────────────┘
                      │
                      │ Razorpay API
                      ▼
┌─────────────────────────────────────────────────────┐
│                    Razorpay                          │
│              (Payment Gateway)                       │
└─────────────────────────────────────────────────────┘
```

### Centralized API Client

All API calls are managed through `src/lib/api.ts`:

```typescript
import { api } from '@/lib/api';

// Create order
const orderData = await api.createOrder(bookId);

// Verify payment
const verifyData = await api.verifyPayment(
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
  bookId
);

// Get Razorpay key
const keyData = await api.getRazorpayKey();
```

### API Helper Features

- ✅ Centralized API calls
- ✅ Automatic request/response logging
- ✅ Error handling
- ✅ Type-safe responses
- ✅ Console debug logs

## 📋 API Endpoints

### POST `/api/create-order`

> **External Backend Endpoint**: `https://rpay.suhasm.online/api/create-order`

Create a Razorpay order for purchasing a book.

**Request:**
```json
{
  "bookId": "compTIA-linux"
}
```

**Response:**
```json
{
  "success": true,
  "orderId": "order_xxxx",
  "amount": 49900,
  "currency": "INR",
  "book": {
    "id": "compTIA-linux",
    "title": "CompTIA Linux+ Practice Labs",
    "price": 499
  }
}
```

### POST `/api/verify-payment`

> **External Backend Endpoint**: `https://rpay.suhasm.online/api/verify-payment`

Verify the payment signature after successful payment.

**Request:**
```json
{
  "razorpay_order_id": "order_xxxx",
  "razorpay_payment_id": "pay_xxxx",
  "razorpay_signature": "signature",
  "bookId": "compTIA-linux"
}
```

**Response:**
```json
{
  "success": true,
  "verified": true,
  "paymentId": "pay_xxxx",
  "orderId": "order_xxxx",
  "downloadToken": "token",
  "book": {
    "id": "compTIA-linux",
    "title": "CompTIA Linux+ Practice Labs",
    "fileName": "101.Labs.-.CompTIA.Linux+.pdf"
  }
}
```

### GET `/api/download?token=xxx`

> **Local Endpoint**: `/api/download?token=xxx`

Download the purchased eBook file.

**Headers:**
- Token must be valid and not expired

**Response:**
- PDF file binary

### POST `/api/webhook`

> **External Backend Endpoint**: `https://rpay.suhasm.online/api/webhook`

Handle Razorpay webhook events.

**Events:**
- `order.paid`
- `order.failed`
- `payment.captured`
- `payment.failed`

## 🔐 Security Features

1. **Payment Verification**: All payments are verified using HMAC SHA256 signatures
2. **Download Tokens**: Secure tokens prevent unauthorized downloads
3. **Token Expiration**: Download tokens have built-in expiration
4. **CORS Protection**: API routes are protected against CORS attacks
5. **Input Validation**: All inputs are validated and sanitized
6. **External Backend**: Backend logic handled by secure external service

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  },
}
```

### Books

Edit `src/data/books.ts` to add, remove, or modify books.

### Images

Replace cover images by updating the `coverImage` field in book data with your own image URLs.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## 🔧 Production Checklist

- [x] Integrate external backend API
- [ ] Replace test keys with production keys
- [ ] Set `DOWNLOAD_TOKEN_SECRET` to a strong, random value
- [ ] Configure webhook URL in Razorpay dashboard
- [ ] Set up proper domain in `NEXT_PUBLIC_BASE_URL`
- [ ] Enable HTTPS
- [ ] Review and update privacy policy & terms of service
- [ ] Test with real cards in test mode first
- [ ] Verify external backend is production-ready

## 📝 Razorpay Webhook Setup

1. Go to Razorpay Dashboard → Settings → Webhooks
2. Add webhook URL: `https://yourdomain.com/api/webhook`
3. Select events: `order.paid`, `order.failed`, `payment.captured`, `payment.failed`
4. Copy the webhook secret and add to environment variables:
   ```env
   RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
   ```

## 🐛 Troubleshooting

### Payment Modal Not Opening

1. Check browser console for errors (look for API logs)
2. Verify external backend is accessible: `curl https://rpay.suhasm.online/api/create-order`
3. Ensure `NEXT_PUBLIC_API_BASE_URL` is set correctly in `.env.local`
4. Verify Razorpay script is loaded
5. Check if order creation API is working

### External Backend Connection Issues

1. Verify backend URL is correct: `https://rpay.suhasm.online`
2. Test API endpoint: `curl -X POST https://rpay.suhasm.online/api/create-order -H "Content-Type: application/json" -d '{"bookId":"test"}'`
3. Check if backend is online and responding
4. Review browser console for CORS errors
5. Verify network connectivity

### Download Not Working

1. Verify payment was successful
2. Check if download token is valid
3. Ensure PDF file exists in `/public/assets/books/`
4. Check server logs for errors
5. Verify download endpoint is accessible

### API Errors

1. Verify `NEXT_PUBLIC_API_BASE_URL` environment variable is set
2. Check Razorpay dashboard for API errors
3. Review browser console logs (look for 🔄 and ✅ logs)
4. Ensure external backend is configured correctly
5. Test with Postman/curl to verify backend responses

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Support

For support, email support@ebookstore.com or create an issue in this repository.

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
