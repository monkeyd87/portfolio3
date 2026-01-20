import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Grid } from "@/components/Grid"
import {Work} from '@/components/Work'
import { Messages } from "@/components/Messages";
import { ModalMediaplayer } from "@/components/ui/ModalMediaplayer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:scroll-px-10 px-5" >
      <div className="max-w-7xl w-full" >
       <Hero/>
       <Grid />
       <Work/>
       <Messages/>
       <ModalMediaplayer/>
      </div>
    </main>
  );
}
