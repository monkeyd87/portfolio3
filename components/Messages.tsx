'use client'

import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import { AnimatedModal } from './ui/AnimatedModal'
import { Form } from './ui/Form'

type CardItem = {
  name: string
  quote: string
  title: string
}

type FormValues = {
  name: string
  title: string
  message: string
}

type ApiMessage = {
  name: string
  title: string
  message: string
}

export const Messages = () => {
  const [data, setData] = useState<CardItem[]>([])

  const handleChange = (values: FormValues) => {
    setData(prev => [
      ...prev,
      { name: values.name, title: values.title, quote: values.message }
    ])
  }

  const fetchData = async () => {
    try {
      const res = await fetch('/api/messages')
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      const json: ApiMessage[] = await res.json()

      const parsedData: CardItem[] = json.map(item => ({
        name: item.name,
        quote: item.message,
        title: item.title,
      }))

      setData(parsedData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="messages h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <AnimatedModal>
        <Form onSubmit={handleChange} />
      </AnimatedModal>

      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="fast"
      />
    </section>
  )
}
