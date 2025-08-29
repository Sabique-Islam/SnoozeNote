import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function GetStartedPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-16 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">Welcome to SnoozeNote!</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
