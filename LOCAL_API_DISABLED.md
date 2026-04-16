# Local API Routes - DISABLED

These local API routes have been **disabled** because the project now uses an external backend API.

## Status: ❌ DISABLED

All API calls are now routed to the external backend: `https://rpay.suhasm.online`

## Files (Disabled)

- `src/app/api/create-order/route.ts.disabled`
- `src/app/api/verify-payment/route.ts.disabled`
- `src/app/api/webhook/route.ts.disabled`
- `src/app/api/download/route.ts.disabled`
- `src/app/api/get-razorpay-key/route.ts.disabled`

## Re-enabling (If Needed)

To re-enable any local API route:
1. Remove the `.disabled` extension
2. Update the API helper in `src/lib/api.ts` to use local routes
3. Update environment variables accordingly

## Current Architecture

```
Frontend (Next.js)          External Backend (rpay.suhasm.online)
     │                                │
     │  /api/create-order     →     │  Razorpay API
     │  /api/verify-payment   →     │  Verify & Process
     │                                │
     └────────────────────────────────┘
```

## Questions?

Check the main README.md for full documentation.
