"use client"
import { dimensionValueTypes } from 'motion/react'
import React from 'react'
import { useEffect,useState,useRef } from 'react'
export const ModalMediaplayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const handleClick = async()=>{
    await videoRef.current!.play()
    setIsPlaying(true)
  }
  useEffect(()=>{
        const video = videoRef.current
    if (!video) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    const onEnded = () => setIsPlaying(false)

    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    video.addEventListener('ended', onEnded)

    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('ended', onEnded)
    }
  },[])
  return (
    <div className='inset-0 z-50 flex items-center justify-center fixed'>

        <div className=' relative h-150 w-250 bg-black border rounded-2xl border-white/25 shadow-2xl overflow-hidden'>
            <video ref={videoRef} className='w-full h-full object-contain object-center' src="https://packaged-media.redd.it/du0jbr5gq63d1/pb/m2-res_480p.mp4?m=DASHPlaylist.mpd&v=1&e=1768269600&s=13f9599f96f51baba93d8c1d6b7764dcd7eaf93f" ></video>
            {!isPlaying && <div onClick={handleClick} className='h-30 w-30 bg-white/50 absolute z-51 top-[45%]  rounded-full left-[45%]'/>}
        </div>
    </div>
  )
}
