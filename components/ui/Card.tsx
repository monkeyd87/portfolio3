"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import {Icons} from "@/components/ui/Icons"

export function Card({title,img,technologies_used,github_link,deployed_link,otherclassName}:{otherclassName?:string,title?:string,img?:string,technologies_used?:string[],github_link?:string,deployed_link?:string}) {
  return (
    <CardContainer className={`inter-var `}>
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[#0e1020] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         {title}
        </CardItem>
       
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-baseline items-center gap-0 mt-20">
          {technologies_used?.map(item=>(
            <Icons tech={item}/>
          ))}
        </div>
      </CardBody>
    </CardContainer>
  );
}
