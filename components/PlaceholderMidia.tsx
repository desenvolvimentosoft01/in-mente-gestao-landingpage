type Props = {
  tipo: "video" | "foto";
  legenda: string;
  className?: string;
};

export default function PlaceholderMidia({ tipo, legenda, className = "" }: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-500">
        {tipo === "video" ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M8 5v14l11-7-11-7Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5Z" />
          </svg>
        )}
      </div>
      <p className="text-sm font-medium text-slate-500">
        {tipo === "video" ? "Vídeo em breve" : "Foto em breve"}
      </p>
      <p className="text-xs text-slate-400">{legenda}</p>
    </div>
  );
}
