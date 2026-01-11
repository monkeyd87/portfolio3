"use client";

import React, { useState } from "react";
import { MagicButton } from "./MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";

type FormData = {
  name: string;
  title: string;
  quote: string;
};

export const Form = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    title: "",
    quote: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);

    // optional: clear after submit
    setForm({ name: "", title: "", quote: "" });
  };

  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-6">
      <div className="relative w-full max-w-xl rounded-3xl bg-gradient-to-br overflow-hidden from-white/20 via-white/10 to-white/5 p-[1px]">
        <BackgroundGradientAnimation />

        <div className="relative rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-center text-white">
            Send a message of encouragement.
          </h2>

          {/* ✅ real form submit */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm((prev) => ({ ...prev, name: v }))}
              placeholder="Name"
            />

            <Field
              label="Title"
              value={form.title}
              onChange={(v) => setForm((prev) => ({ ...prev, title: v }))}
              placeholder="Title"
            />

            <TextArea
              label="Quote"
              value={form.quote}
              onChange={(v) => setForm((prev) => ({ ...prev, quote: v }))}
              placeholder="Write something meaningful..."
            />

            {/* ✅ submit button */}
            <MagicButton title="Submit" otherClasses="w-full"/>
          </form>
        </div>
      </div>
    </div>
  );
};

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
