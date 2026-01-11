
'use client'
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {testimonials} from "@/data"
import { MagicButton } from './ui/MagicButton';
import { useState } from 'react';
import { AnimatedModal } from './ui/AnimatedModal';
import { Form } from './ui/Form';


export const Messages = () => {
  type Data = {
    name:string,
    quote:string,
    title:string
  }

   const [data,setData] = useState<Data[]>([])
   const handleChange = (newdata:Data)=>{
    setData(pre=>[...pre,newdata])
   }
  return (
    <section className=" messages h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <AnimatedModal>
           <Form onSubmit={handleChange}/>
        </AnimatedModal>
      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="fast"
      />
    </section>
  )
}
