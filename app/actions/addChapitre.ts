'use server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
interface ChapitreData {
  title: string;
  content: any;
  authorId: string;
}

interface ChapitreResult {
  data?: ChapitreData;
  error?: string;
}

async function addChapitre(formData: FormData): Promise<ChapitreResult> {
    const { userId, redirectToSignIn } = await auth()

  if (!userId) return redirectToSignIn()

  const titleValue = formData.get('title')?.toString();
  const contentValue = formData.get('content')?.toString();
  // Check for input values
  if (!titleValue || titleValue === '') {
      return { error: 'Title is missing' };
    }
    
    const title: string = titleValue.toString(); // Ensure title is a string
    const content: any = contentValue?.toString();
    console.log({'titre':title, 'contenu': content, 'userId': userId})
  
  try {
    const chapitreData: ChapitreData = await db.chapitre.create({
      data: {
        title,
        content,
        authorId:userId,
      },
    });

    revalidatePath('/chapitre');

    return { 'data': chapitreData };
  } catch (error) {
    return { error: 'Chapitre not added' };
  }
}

export default addChapitre;
