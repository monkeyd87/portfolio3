import React from 'react'
import {projects} from '@/data'
import { Card } from './ui/Card'
import { DottedGlowBackground } from './ui/DottedGlowBackground'

export const Work = () => {
  return (
   <div className='py-20 w-full mt-5 rounded-4xl relative bg-[#07080c] ' >
      <h1 className='heading'>A small selectiong of {' '}
        <span className='text-purple-300'>Recent Projects</span>
      </h1>
      <div className='flex flex-1  flex-wrap items-center gap-16 justify-center p-4  mt-3 '>
          {projects.map(projects=>{
            return(
              <div>
                <Card otherclassName="" {...projects}/>
              </div>
            )
          })}
      </div>
   </div>
  )
}

