'use server';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

async function deleteTransaction(transactionId: number): Promise<{
  message?: string;
  error?: string;
}> {
 const user = await currentUser()
   // Get logged in user
   const userId  = user?.id;

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    await db.todo.delete({
      where: {
        id: transactionId,
        userId,
      },
    });

    revalidatePath('/');

    return { message: 'Tâche supprimée' };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default deleteTransaction;
