import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "flowny_cookies_aceitos";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só mostra se o usuário ainda não aceitou
    const jaAceitou = localStorage.getItem(STORAGE_KEY);
    if (!jaAceitou) {
      // Pequeno delay para não aparecer instantaneamente
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function aceitar() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Banner de cookies"
      className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-2xl -translate-x-1/2 animate-fade-up"
    >
      <div className="glass-card flex flex-col gap-4 rounded-2xl border-primary/20 p-5 shadow-glow sm:flex-row sm:items-center">
        {/* Ícone */}
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Cookie className="size-5" />
        </span>

        {/* Texto */}
        <div className="flex-1">
          <p className="text-sm font-semibold">Cookies e Privacidade</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{" "}
            <Link to="/privacidade" className="font-semibold text-primary underline-offset-2 hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>

        {/* Ações */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={aceitar}
            className="bg-cta rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5"
          >
            Aceitar
          </button>
          <button
            onClick={aceitar}
            aria-label="Fechar banner de cookies"
            className="inline-flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
