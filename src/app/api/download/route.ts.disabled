import { NextResponse } from 'next/server';
import { verifyDownloadToken } from '@/lib/utils';
import { books } from '@/data/books';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
      console.error('Download: Missing token');
      return NextResponse.json(
        { error: 'Download token is required' },
        { status: 400 }
      );
    }

    const verification = verifyDownloadToken(token);

    if (!verification.valid || !verification.orderId || !verification.bookId) {
      console.error('Download: Invalid token');
      return NextResponse.json(
        { error: 'Invalid or expired download token' },
        { status: 403 }
      );
    }

    const book = books.find((b) => b.id === verification.bookId);
    if (!book) {
      console.error(`Download: Book not found - ${verification.bookId}`);
      return NextResponse.json(
        { error: 'Book not found' },
        { status: 404 }
      );
    }

    const filePath = join(process.cwd(), 'public', 'assets', 'books', book.fileName);

    try {
      const fileBuffer = await readFile(filePath);

      console.log('Download started:', {
        bookId: book.id,
        bookTitle: book.title,
        orderId: verification.orderId,
      });

      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="${book.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf"`,
          'Content-Length': fileBuffer.length.toString(),
        },
      });
    } catch (fileError) {
      console.error('File read error:', fileError);
      return NextResponse.json(
        { error: 'Book file not found' },
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Download failed' },
      { status: 500 }
    );
  }
}
