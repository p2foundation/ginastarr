"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "233544746949"; // Ghana: 0544746949 -> 233544746949
  const text = encodeURIComponent("Hello Ginastarr, I would like to discuss a project.");
  const href = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <MessageCircle />
    </a>
  );
}
