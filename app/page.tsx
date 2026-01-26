import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Hello World</h1> 

       <Link href="/create-account" className="text-blue-500 underline hover:text-blue-800">
        Go to Create Account
      </Link>

       <Link href="/login" className="text-blue-500 underline hover:text-blue-800">
        Go to Login Page
      </Link>
       <Link href="/profile-setup" className="text-blue-500 underline hover:text-blue-800">
        Go to Profile Page
      </Link>

    </div>
  );
}

