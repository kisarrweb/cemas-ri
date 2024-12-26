import getTransactions from '@/app/actions/getTransactions';
import TransactionItem from './TransactionItem';
import { Todo } from '@/types/Transaction';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className='error'>{error}</p>;
  }

  return (
    <>
      <h3>A faire</h3>
      <ul className='list'>
        {transactions &&
          transactions.map((transaction: Todo) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </>
  );
};

export default TransactionList;
