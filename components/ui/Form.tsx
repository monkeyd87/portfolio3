"use client"
import { useState } from "react";
import { MagicButton } from "./MagicButton";
import {BackgroundGradientAnimation} from './GradientBg'
import { testimonials } from "@/data";

export const Form =({onsubmit}:{onsubmit:()=>{}}) =>{
  const [form, setForm] = useState({
    name: "",
    title: "",
    quote: "",
  });

  const handelSubmit = (e:React.FormEvent)=>{
    e.preventDefault()

    onsubmit(form)

  }

  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-6">
      {/* Floating gradient orbs */}

      {/* Gradient border */}
      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-br overflow-hidden from-white/20 via-white/10 to-white/5 p-[1px]">
        <BackgroundGradientAnimation />
        {/* Glass card */}
        <div className="relative rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-center text-white">
            Send a message of encouragment.
          </h2>
         

          <form className="mt-8 space-y-6">
            <Field
              label="name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="Name"
            />

            <Field
              label="title"
              value={form.quote}
              onChange={(v) => setForm({ ...form, quote: v })}
              placeholder="Title"
            />

            <TextArea
              label="qutoe"
              value={form.quote}
              onChange={(v) => setForm({ ...form, quote: v })}
              placeholder="Write something meaningful..."
            />

          <MagicButton title='Submit' otherClasses="w-100" onClick={handelSubmit}/>
          </form>


        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/70">{label}</label>
      <div className="relative">
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-white/20 to-white/5" />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="relative w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-md outline-none focus:border-white/30"
        />
      </div>
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/70">{label}</label>
      <div className="relative">
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-white/20 to-white/5" />
        <textarea
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="relative w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-md outline-none focus:border-white/30"
        />
      </div>
    </div>
  );
}
