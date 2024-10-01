import { SignIn } from "@clerk/clerk-react";
import React from "react";

function SigninPage() {
  return (
    <main className="flex items-center justify-center min-h-screen container px-4">
      <SignIn />
    </main>
  );
}

export default SigninPage;
