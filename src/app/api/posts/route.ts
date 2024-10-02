// src/app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route'; 

const prisma = new PrismaClient();

export async function POST(request: Request) {
  // Get session from NextAuth
  const session = await getServerSession(authOptions);

  // Check if user is authenticated
  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Get the content from the request body
  const { content } = await request.json();

  // Validate content
  if (!content) {
    return NextResponse.json({ message: 'Content is required' }, { status: 400 });
  }

  try {
    // Create a new post in the database
    const post = await prisma.post.create({
      data: {
        userId: session.user.id, // Use the user ID from the session
        content,
      },
    });
    console.log("Database post created");

    // Return the created post
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating post', error: error.message }, { status: 500 });
  }
}
