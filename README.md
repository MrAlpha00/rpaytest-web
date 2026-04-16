# eBook Store - Production-Ready Full-Stack Application

A modern, production-ready eBook selling website built with Next.js, TypeScript, Tailwind CSS, and Razorpay integration.

## 🚀 Features

- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **Book Catalog**: Display eBooks with covers, descriptions, and pricing
- **Razorpay Integration**: Complete payment flow with test mode support
- **Secure Downloads**: Token-based download verification
- **API Routes**: Full backend functionality with Next.js API routes
- **Error Handling**: Comprehensive error handling and loading states
- **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes
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
│   │   ├── api/
│   │   │   ├── create-order/      # Create Razorpay order
│   │   │   ├── verify-payment/   # Verify payment signature
│   │   │   ├── download/          # Secure file download
│   │   │   ├── webhook/          # Razorpay webhook handler
│   │   │   └── get-razorpay-key/ # Get public key
│   │   ├── book/
│   │   │   └── [id]/              # Book detail page
│   │   ├── about/                 # About page
│   │   ├── contact/               # Contact page
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
│   │   └── utils.ts               # Utility functions
│   └── types/
│       └── index.ts               # TypeScript interfaces
├── .env.example                   # Example environment variables
├── .env.local                     # Your environment variables
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

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

Edit `.env.local` with your Razorpay credentials:

```env
# Razorpay Keys (Get from https://dashboard.razorpay.com/app/keys)
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
RAZORPAY_KEY_SECRET=rzp_test_YOUR_KEY_SECRET

# Public Razorpay Key (Used in frontend)
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

## 📋 API Endpoints

### POST `/api/create-order`

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

Download the purchased eBook file.

**Headers:**
- Token must be valid and not expired

**Response:**
- PDF file binary

### POST `/api/webhook`

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

- [ ] Replace test keys with production keys
- [ ] Set `DOWNLOAD_TOKEN_SECRET` to a strong, random value
- [ ] Configure webhook URL in Razorpay dashboard
- [ ] Set up proper domain in `NEXT_PUBLIC_BASE_URL`
- [ ] Enable HTTPS
- [ ] Review and update privacy policy & terms of service
- [ ] Test with real cards in test mode first

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

1. Check browser console for errors
2. Verify Razorpay script is loaded
3. Ensure API keys are correct
4. Check if order creation API is working

### Download Not Working

1. Verify payment was successful
2. Check if download token is valid
3. Ensure PDF file exists in `/public/assets/books/`
4. Check server logs for errors

### API Errors

1. Verify environment variables are set
2. Check Razorpay dashboard for API errors
3. Review server logs
4. Ensure CORS headers are correct

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
