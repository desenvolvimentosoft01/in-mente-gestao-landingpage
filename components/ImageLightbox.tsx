"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ImageLightbox({ src, alt, className = "" }: Props) {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!aberto) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [aberto]);

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className={`group relative block cursor-zoom-in ${className}`}
        aria-label="Ampliar imagem"
      >
        <Image src={src} alt={alt} fill className="object-cover object-top" />
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" />
            </svg>
          </span>
        </span>
      </button>

      {aberto &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setAberto(false)}
          >
            <button
              type="button"
              onClick={() => setAberto(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Fechar"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.4 1.4 6.3 6.3-6.3 6.29 1.4 1.4 6.3-6.29 6.3 6.29 1.4-1.4-6.3-6.29 6.3-6.3z" />
              </svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element -- tamanho variável no modal, sem dimensões fixas para next/image */}
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
