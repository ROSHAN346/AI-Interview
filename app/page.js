import { Button } from "@/components/ui/button";
import Image from "next/image";
import Provider from './provider'
import Link from 'next/link'

export default function Home() {
  return (
   <div>Hello World  
    <Button>
      <Link href="/auth">Click Me</Link>
    </Button>
    <Provider>
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-3xl font-bold'>Welcome to AiCruiter</h1>
        {/* Baaki ka content */}
      </main>
    </Provider>

   </div>
   
  );
}
