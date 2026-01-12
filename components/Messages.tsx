'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatedModal } from './ui/AnimatedModal'
import { Form } from './ui/Form'
import { Post } from '@/components/Post'

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

function splitIntoColumns<T>(items: T[], count: number) {
  const cols: T[][] = Array.from({ length: count }, () => [])
  items.forEach((item, idx) => cols[idx % count].push(item))
  return cols
}

export const Messages = () => {
  const [data, setData] = useState<CardItem[]>([])

  const handleChange = (values: FormValues) => {
    setData(prev => [{ name: values.name, title: values.title, quote: values.message }, ...prev])
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

  const [col1, col2, col3] = useMemo(() => splitIntoColumns(data, 3), [data])

  return (
    <section className="px-4 pt-20 pb-16 sm:pt-32 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-neutrl-900 text-3xl font-medium tracking-tight sm:text-center dark:text-white">
          Leave me a message.
        </h2>
        <p className="mt-2 text-lg text-neutral-600 sm:text-center dark:text-neutral-200">
          If you made it this far you might as well tell me something.
        </p>

        <AnimatedModal>
          <Form onSubmit={handleChange} />
        </AnimatedModal>

        {/* FIX: lg:grid-cols-3 */}
        <div className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
          <MarqueeColumn items={col1} durationSec={18} />
          <MarqueeColumn items={col2} durationSec={22} reverse />
          <MarqueeColumn items={col3} durationSec={20} />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white dark:from-black" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white dark:from-black" />
        </div>
      </div>
    </section>
  )
}

function MarqueeColumn({
  items,
  durationSec,
  reverse,
}: {
  items: CardItem[]
  durationSec: number
  reverse?: boolean
}) {
  // duplicate items so the loop is seamless
  const loop = useMemo(() => [...items, ...items], [items])

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`marquee-col flex flex-col gap-8 py-4 ${reverse ? 'marquee-reverse' : ''}`}
        style={{ ['--duration' as any]: `${durationSec}s` }}
      >
        {loop.map((item, i) => (
          <Post key={`${item.name}-${item.title}-${i}`} name={item.name} title={item.title} message={item.quote} />
        ))}
      </div>
    </div>
  )
}
