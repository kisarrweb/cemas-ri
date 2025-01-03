import { currentUser } from '@clerk/nextjs/server';
import Guest from '@/components/Guest';
import AddTransaction from '@/components/AddTransaction';
import TransactionList from '@/components/TransactionList';

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <AddTransaction />
      <TransactionList />
    </main>
  );
};

export default HomePage;
