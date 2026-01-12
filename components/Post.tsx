import React from 'react'
import { motion } from 'motion/react';

export const Post = ({name,message,title}:{name?:string,message?:string,title:string}) => {
  return (
    
        <div className='w-full flex-1'>
            <div className='flex flex-col  justify-around p-4 bg-zinc-900 border border-white/[0.1]  shadow-lg rounded-2xl w-full h-auto'>
                <div className='mb-1 font-bold'>{name}</div>
                <div className='text-white'>{message}</div>
                <div className='text-end text-neutral-700'>{title}</div>
            </div>
        </div>
       

  );
}
