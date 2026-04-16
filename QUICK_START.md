# Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript 5
- Tailwind CSS
- Other required packages

### 2. Configure Environment Variables

Create `.env.local` file in project root:

```env
# External Backend API URL (REQUIRED)
NEXT_PUBLIC_API_BASE_URL=https://rpay.suhasm.online

# Razorpay Keys (Get from https://dashboard.razorpay.com/app/keys)
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
RAZORPAY_KEY_SECRET=rzp_test_YOUR_KEY_SECRET

# Public Razorpay Key (Used in frontend)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID

# Download Token Secret (min 32 characters)
DOWNLOAD_TOKEN_SECRET=your-super-secret-key-change-this-in-production

# Website URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 3. Get Razorpay Test Keys

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys)
2. Sign up/Login
3. Navigate to Settings → API Keys
4. Click "Generate Test API Keys"
5. Copy Key ID and Key Secret

### 4. Start Development Server

```bash
npm run dev
```

Server will start at: http://localhost:3000

### 5. Test Payment Flow

Use these test card details:
- **Card Number**: `4111 1111 1111 1111`
- **Expiry**: Any future date (e.g., `12/28`)
- **CVV**: Any 3 digits (e.g., `123`)

Or test with UPI:
- **UPI ID**: `success@razorpay`

## Verify External Backend

Test if external backend is accessible:

```bash
# Test create-order endpoint
curl -X POST https://rpay.suhasm.online/api/create-order \
  -H "Content-Type: application/json" \
  -d '{"bookId":"compTIA-linux"}'
```

You should receive a JSON response with an order ID.

## Project Structure After Integration

```
ebook-store/
├── src/
│   ├── lib/
│   │   └── api.ts              # ✅ External API client (NEW)
│   ├── components/
│   │   └── PurchaseButton.tsx  # ✅ Updated to use external API
│   └── app/
│       └── api/                # ❌ All routes DISABLED
│           ├── create-order/
│           ├── verify-payment/
│           ├── download/
│           ├── webhook/
│           └── get-razorpay-key/
├── .env.local                  # ✅ Updated with NEXT_PUBLIC_API_BASE_URL
├── LOCAL_API_DISABLED.md       # ✅ Info about disabled APIs
└── INTEGRATION_SUMMARY.md      # ✅ Integration details
```

## Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for linting errors
npm run lint
```

## Troubleshooting

### Issue: Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Environment variables not loading
1. Make sure `.env.local` exists in project root
2. Restart development server after changing env vars
3. Check variable names are correct (case-sensitive)

### Issue: External backend not responding
1. Check if `NEXT_PUBLIC_API_BASE_URL` is set correctly
2. Verify backend URL is accessible: https://rpay.suhasm.online
3. Check network connectivity

### Issue: Payment modal not opening
1. Check browser console for errors
2. Verify Razorpay script is loaded
3. Check if order creation API call succeeded
4. Review API logs in console

## Debugging Tips

### Enable Console Logging
The API client automatically logs:
- 🔄 API requests (marked with 🔄)
- ✅ API responses (marked with ✅)
- ❌ Errors (marked with ❌)

### Check Network Tab
1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter by "Fetch/XHR"
4. Look for requests to `rpay.suhasm.online`

### Test Backend Directly
```bash
# Create order
curl -X POST https://rpay.suhasm.online/api/create-order \
  -H "Content-Type: application/json" \
  -d '{"bookId":"compTIA-linux"}'

# Get Razorpay key
curl https://rpay.suhasm.online/api/get-razorpay-key
```

## Next Steps After Setup

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. ✅ Start development server
4. ⬜ Test the application
5. ⬜ Verify payment flow works
6. ⬜ Check console logs for errors
7. ⬜ Deploy to Vercel (when ready)

## Need Help?

- Check `README.md` for full documentation
- Check `INTEGRATION_SUMMARY.md` for integration details
- Check `LOCAL_API_DISABLED.md` for API route info

## Status

✅ **External Backend Integration**: COMPLETE
✅ **Local API Routes**: DISABLED
✅ **Documentation**: UPDATED
⬜ **Testing**: PENDING

---

**Ready to go!** 🚀
