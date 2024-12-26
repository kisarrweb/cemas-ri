'use client';
import { Todo } from '@/types/Transaction';
import { toast } from 'react-toastify';
import deleteTransaction from '@/app/actions/deleteTransaction';
import Image from 'next/image'
const TransactionItem = ({ transaction }: { transaction: Todo }) => {

  const handleDeleteTransaction = async (transactionId: number) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this Task?'
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <li className={transaction.done === true ? 'money plus' : 'money moins'}>
      {transaction.text}
      
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className='delete-btn'
      >
         <span>
         <Image src="/img/icons/icon-delete.svg" alt='del' width="40" height="40" />         </span>
      </button>
    </li>
  );
};

export default TransactionItem;
