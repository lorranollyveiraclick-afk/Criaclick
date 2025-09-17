"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phone = "5598991754173";
  const text = encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais.");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow hover:brightness-110 transition"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}
