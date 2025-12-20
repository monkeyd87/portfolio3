import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { GridItems } from '@/data'

export const Grid = () => {
  return (
   <section id='about'>
    <BentoGrid>
        {GridItems[0] && GridItems.map((item,i)=>(

            <BentoGridItem
              {...item}
              key={i}

                
            />
        ))}
    </BentoGrid>
   </section>
  )
}

