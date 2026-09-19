import { useRef, useState } from "react";
import { Play, Pause, Video, Volume2, VolumeX } from "lucide-react";

type Props = {
  src?: string | undefined;
  poster?: string | undefined;
  title: string;
  /** "preview" = prévia curta na Home (muda, em loop). "demo" = demonstração completa com controles. */
  variant?: "preview" | "demo";
  className?: string;
};

/**
 * Player discreto para os vídeos reais dos sistemas.
 * Quando `src` não é informado, exibe um espaço reservado — nunca um vídeo fictício.
 */
export function SystemVideo({ src, poster, title, variant = "preview", className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(variant === "preview");
  const [muted, setMuted] = useState(true);

  const frame = `relative overflow-hidden rounded-2xl border border-border bg-navy-deep ${
    variant === "demo" ? "aspect-video shadow-glow" : "aspect-[16/10]"
  } ${className}`;

  if (!src) {
    return (
      <div className={frame} aria-label={`Espaço reservado para o vídeo de ${title}`}>
        <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <span className="inline-flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
            <Video className="size-6" />
          </span>
          <p className="text-sm font-semibold">Vídeo de demonstração em breve</p>
          <p className="max-w-xs px-6 text-xs text-muted-foreground">
            {variant === "preview"
              ? "Prévia curta do sistema em funcionamento."
              : "Demonstração completa das telas e funcionalidades do sistema."}
          </p>
        </div>
      </div>
    );
  }

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className={`group ${frame}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        title={title}
        className="h-full w-full object-cover"
        autoPlay={variant === "preview"}
        loop={variant === "preview"}
        muted={muted}
        playsInline
        preload={variant === "preview" ? "metadata" : "none"}
        controls={variant === "demo"}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {variant === "preview" && (
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pausar prévia" : "Reproduzir prévia"}
            className="inline-flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Ativar som" : "Desativar som"}
            className="inline-flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
