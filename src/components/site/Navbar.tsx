import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#portfolio", label: "Portfólio" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Flowny" width={48} height={48} className="h-12 w-12 rounded-full shadow-glow" />
          <span className="text-lg font-bold tracking-tight">Flowny</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={`/${l.href}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contato"
              className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-all hover:brightness-110"
            >
              Contato
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
          {[...links, { href: "#contato", label: "Contato" }].map((l) => (
            <li key={l.href}>
              <a
                href={`/${l.href}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
