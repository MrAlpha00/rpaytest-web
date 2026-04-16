import crypto from 'crypto';

const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || '';
const DOWNLOAD_TOKEN_SECRET = process.env.DOWNLOAD_TOKEN_SECRET || 'fallback-secret-key-32-chars!!';

export function generateDownloadToken(orderId: string, bookId: string): string {
  const payload = `${orderId}:${bookId}:${Date.now()}`;
  const signature = crypto
    .createHmac('sha256', DOWNLOAD_TOKEN_SECRET)
    .update(payload)
    .digest('hex');
  
  return `${Buffer.from(payload).toString('base64')}.${signature}`;
}

export function verifyDownloadToken(token: string): { valid: boolean; orderId?: string; bookId?: string } {
  try {
    const [payload, signature] = token.split('.');
    if (!payload || !signature) {
      return { valid: false };
    }

    const decodedPayload = Buffer.from(payload, 'base64').toString('utf-8');
    const expectedSignature = crypto
      .createHmac('sha256', DOWNLOAD_TOKEN_SECRET)
      .update(decodedPayload)
      .digest('hex');

    if (signature !== expectedSignature) {
      return { valid: false };
    }

    const [orderId, bookId] = decodedPayload.split(':');
    return { valid: true, orderId, bookId };
  } catch (error) {
    console.error('Token verification error:', error);
    return { valid: false };
  }
}

export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const generatedSignature = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return generatedSignature === signature;
}
