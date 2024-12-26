'use server';
import { db } from '@/lib/db';
import { currentUser } from "@clerk/nextjs/server";
import { Todo } from '@/types/Transaction';

async function getTransactions(): Promise<{
  transactions?: Todo[];
  error?: string;
}> {
  const user = await currentUser()
  // Get logged in user
  const userId  = user?.id;

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.todo.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { transactions };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getTransactions;
