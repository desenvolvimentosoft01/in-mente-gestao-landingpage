"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  src: string;
  className?: string;
  autoPlayPreview?: boolean;
};

export default function VideoLightbox({
  src,
  className = "",
  autoPlayPreview = false,
}: Props) {
  const [aberto, setAberto] = useState(false);
  const [previewTerminou, setPreviewTerminou] = useState(false);
  const autoplayAtivo = autoPlayPreview && !previewTerminou;

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
        aria-label="Ampliar vídeo"
      >
        <video
          src={src}
          className="h-full w-full bg-black object-cover"
          autoPlay={autoplayAtivo}
          muted={autoplayAtivo}
          playsInline
          onEnded={() => setPreviewTerminou(true)}
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
              <path d="M8 5v14l11-7-11-7Z" />
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
            <video
              src={src}
              controls
              autoPlay
              className="max-h-[85vh] max-w-[90vw] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
