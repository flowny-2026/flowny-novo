import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer, FloatingButtons } from "./Contact";
import { SystemVideo } from "./SystemVideo";
import { WHATSAPP_URL } from "./Sections";
import type { SystemInfo } from "@/lib/systems";

export function SystemPage({ system }: { system: SystemInfo }) {
  const whatsapp = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `Olá! Tenho interesse no sistema ${system.name} e gostaria de saber mais.`,
  )}`;

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-hero pt-32 pb-16 md:pt-40">
          <div className="grid-pattern absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6">
            <Link
              to="/"
              hash="solucoes"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Voltar para soluções
            </Link>
            <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
              <div className="animate-fade-up">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                  Sistema Flowny
                </span>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                  {system.name}
                </h1>
                <p className="mt-3 text-lg font-semibold text-primary">{system.tagline}</p>
                <p className="mt-5 max-w-lg text-muted-foreground">{system.description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="size-4" /> Falar sobre o {system.name}
                  </a>
                </div>
              </div>
              <div className="animate-fade-up [animation-delay:150ms]">
                <SystemVideo
                  src={system.demoVideo}
                  poster={system.poster}
                  title={`Demonstração do ${system.name}`}
                  variant="demo"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Funcionalidades</span>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">O que o sistema oferece</h2>
              <p className="mt-4 text-sm text-muted-foreground">Indicado para: {system.audience}.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {system.highlights.map((h) => (
                <li key={h} className="glass-card flex items-start gap-3 rounded-2xl p-5">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm font-semibold">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-navy-deep py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              Quer o {system.name} no seu negócio?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Fale com a Flowny para conhecer o sistema de perto e entender como ele se adapta à sua realidade.
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Solicitar apresentação <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
