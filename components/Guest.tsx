import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='guest'>
      <h1>Welcome</h1>
      <p>Connectez-vous pour voir vos tâches à faire</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
