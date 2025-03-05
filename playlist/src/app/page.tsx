import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center h-screen gap-5 bg-gradient-to-b from-black to-green-800 text-white">
   <p className="text-4xl font-semibold">Generate Your Playlist</p>
   <Link href="/Information">
      <Button  className="font-semibold">Click here to start</Button>
    </Link>
   </div>
  );
}
