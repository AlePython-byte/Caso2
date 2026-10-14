"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-1 items-center gap-[6px]"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.trim()) return;
        setSent(true);
        setEmail("");
        setTimeout(() => setSent(false), 3000);
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email Address"
        aria-label="Email address"
        className="h-[26px] flex-1 rounded-full border border-wine/50 bg-white px-3 text-[8px] text-wine outline-none transition placeholder:text-neutral-400 focus:border-wine focus:ring-2 focus:ring-wine/30"
      />
      <button
        type="submit"
        className="h-[26px] rounded-full bg-wine px-4 text-[8px] font-extrabold text-white transition hover:scale-105 hover:bg-wine-dark active:scale-95"
      >
        {sent ? "THANKS!" : "SUBSCRIBE"}
      </button>
    </form>
  );
}
