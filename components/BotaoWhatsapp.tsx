import { linkWhatsapp } from "@/lib/whatsapp";

type Props = {
  texto?: string;
  mensagem?: string;
  className?: string;
};

export default function BotaoWhatsapp({
  texto = "Falar no WhatsApp",
  mensagem,
  className = "",
}: Props) {
  return (
    <a
      href={linkWhatsapp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 hover:shadow-emerald-500/40 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.54a9.87 9.87 0 0 0 4.91 1.31h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm5.86 14.14c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.24.2-3.6-.77-3.02-1.25-4.96-4.31-5.11-4.51-.15-.2-1.22-1.62-1.22-3.09s.75-2.19 1.02-2.49c.25-.28.55-.35.73-.35.18 0 .37 0 .53.01.17.01.4-.06.63.48.25.6.83 2.07.9 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.45.3.15.47.12.65-.07.17-.2.73-.85.93-1.14.2-.3.4-.25.66-.15.27.1 1.7.8 1.99.95.3.15.49.22.56.35.08.13.08.72-.17 1.42Z" />
      </svg>
      {texto}
    </a>
  );
}
