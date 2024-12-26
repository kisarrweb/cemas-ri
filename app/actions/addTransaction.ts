'use server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
interface TransactionData {
  text: string;
  done: boolean;
  userId: string;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text')?.toString();
  const doneValue = formData.get('done')
  console.log(doneValue)
  // Check for input values
  if (!textValue || textValue === '') {
    return { error: 'Text is missing' };
  }

  const text: string = textValue.toString(); // Ensure text is a string
  const done: boolean = doneValue === 'on' ? true : false;
  const user = await currentUser()
  // Get logged in user
  const userId  = user?.id;

  // Check for user
  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactionData: TransactionData = await db.todo.create({
      data: {
        text,
        done,
        userId,
      },
    });

    revalidatePath('/');

    return { data: transactionData };
  } catch (error) {
    return { error: 'La tâche n\'a pas été ajoutée' };
  }
}

export default addTransaction;
