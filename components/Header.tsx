import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";
const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
          <Image src="/img/logos/cemas.jpg" width="64" height="32" alt="logo" />
          <h2 style={{'marginLeft': '6px'}}> CEMAS</h2>
        </div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
