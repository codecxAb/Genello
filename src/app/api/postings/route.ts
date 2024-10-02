// src/app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    console.log("Database posts fetched");

    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching posts', error: error.message }, { status: 500 });
  }
}
