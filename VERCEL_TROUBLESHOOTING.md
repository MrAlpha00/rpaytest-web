# Vercel Deployment Troubleshooting Guide

## Common Build Errors and Solutions

### 1. TypeScript Compilation Errors

**Symptom**: Build fails during type checking phase

**Solution**:
```bash
# Run typecheck locally before deploying
npm run typecheck

# Fix any TypeScript errors
# Common fixes:
# - Add proper types to functions
# - Remove unused variables
# - Fix interface mismatches
```

### 2. Missing Environment Variables

**Symptom**: Build succeeds but runtime errors occur

**Solution**:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all required variables:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://rpay.suhasm.online
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXX
   NEXT_PUBLIC_BASE_URL=https://yourdomain.com
   ```
3. Redeploy after adding variables

### 3. Disabled API Routes Issue

**Symptom**: 404 errors on API routes

**Solution**: Since we're using external backend, ensure local API routes are disabled:
- All files should have `.disabled` extension
- Or delete the `/src/app/api/` directory completely

### 4. Module Resolution Errors

**Symptom**: Cannot find module '@/lib/api' or similar

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next
rm -rf node_modules

# Reinstall
npm install

# Rebuild
npm run build
```

### 5. ESLint Errors

**Symptom**: Build fails due to linting errors

**Solution**:
```bash
# Check for lint errors
npm run lint

# Fix issues manually or
# Update .eslintrc.json to be less strict during dev
```

## Vercel Deployment Checklist

### Pre-Deployment

- [ ] All TypeScript errors resolved
- [ ] All ESLint errors resolved
- [ ] Environment variables set in Vercel
- [ ] Local API routes disabled/deleted
- [ ] Dependencies installed

### Environment Variables (Required)

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_API_BASE_URL = https://rpay.suhasm.online
NEXT_PUBLIC_RAZORPAY_KEY_ID = rzp_test_XXXXXXXXXX
NEXT_PUBLIC_BASE_URL = https://your-app.vercel.app
```

### Environment Variables (Optional)

```
DOWNLOAD_TOKEN_SECRET = your-secret-key-min-32-chars
```

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Import from GitHub
   - Select your repository

3. **Configure Environment Variables**
   - Add all required variables in Vercel dashboard

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Check for any errors

5. **Test**
   - Visit your deployed URL
   - Test the payment flow
   - Check browser console for errors

## Debugging Build Failures

### View Build Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click on Deployments
4. Click on the latest deployment
5. Scroll through the logs

### Common Log Patterns

**Success Pattern**:
```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages
✓ Build completed
```

**Error Pattern**:
```
✗ Compiling failed
✗ Module not found
✗ Type error
```

### Run Build Locally

```bash
# Clone to local
git clone https://github.com/yourusername/rpaytest-web.git
cd rpaytest-web

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run build
npm run build

# Check for errors
npm run typecheck
```

## Fixing Specific Issues

### Issue: "Cannot find module"

**Cause**: Missing imports or wrong paths

**Fix**: Check imports in all files:
```typescript
// Wrong
import { api } from 'api';

// Correct
import { api } from '@/lib/api';
```

### Issue: "Type 'X' is not assignable to type 'Y'"

**Cause**: Type mismatch

**Fix**: Add proper type assertions or fix the types

### Issue: "React Hooks error"

**Cause**: Using hooks incorrectly

**Fix**: Ensure hooks are only called inside React components with 'use client' directive

### Issue: "Window is not defined"

**Cause**: Accessing browser APIs during SSR

**Fix**: Ensure code is only executed client-side with 'use client' directive

## Getting Help

If build still fails:

1. Check the full error log in Vercel
2. Copy the exact error message
3. Search for the error online
4. Check Next.js GitHub issues
5. Create a new issue with:
   - Full error log
   - Steps to reproduce
   - Environment details

## Quick Fixes

### Fix 1: Clear Cache and Rebuild

```bash
# In Vercel Dashboard
1. Go to Settings → General
2. Click "Clear Cache" button
3. Redeploy
```

### Fix 2: Disable TypeScript Strict Mode

In `tsconfig.json`, temporarily set:
```json
{
  "compilerOptions": {
    "strict": false,
    "skipLibCheck": true
  }
}
```

### Fix 3: Skip Build Step

In `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "ignoreBuildErrors": true
}
```

⚠️ Warning: Only use as last resort, fix the actual issues instead!

## Next Steps

After successful deployment:

1. ✅ Test all pages
2. ✅ Test payment flow
3. ✅ Check console for errors
4. ✅ Monitor Vercel Analytics
5. ✅ Set up custom domain (optional)
6. ✅ Configure production Razorpay keys

---

**Still stuck?** Share your build error log in the comments for specific help.
