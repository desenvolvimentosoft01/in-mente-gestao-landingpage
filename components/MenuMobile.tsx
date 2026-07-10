"use client";

import { useState } from "react";

const LINKS = [
  { href: "#modulos", label: "Módulos" },
  { href: "#demonstracao", label: "Demonstração" },
  { href: "#sobre", label: "Sobre" },
];

export default function MenuMobile() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition hover:border-blue-500/40 hover:text-blue-400"
      >
        {aberto ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {aberto && (
        <nav className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950/95 backdrop-blur">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
