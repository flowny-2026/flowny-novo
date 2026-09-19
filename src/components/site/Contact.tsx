import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, MapPin, Send, Instagram } from "lucide-react";
import { WHATSAPP_URL } from "./Sections";

const infos = [
  { icon: MessageCircle, title: "WhatsApp", value: "(16) 99291-5540", hint: "Online agora", href: WHATSAPP_URL },
  { icon: Mail, title: "E-mail", value: "contato@flowny.com.br", hint: "Resposta em 2h", href: "mailto:contato@flowny.com.br" },
  { icon: MapPin, title: "Localização", value: "Ribeirão Preto, São Paulo", hint: "Atendimento remoto" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Olá! Meu nome é ${form.name}.`,
      `E-mail: ${form.email}`,
      form.phone && `Telefone: ${form.phone}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  const field =
    "w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40";

  return (
    <section id="contato" className="bg-navy-deep py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Contato</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Vamos Conversar?</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Transforme sua ideia em realidade digital. Nossa equipe está pronta para criar a solução
            perfeita para seu negócio.
          </p>

          <ul className="mt-10 space-y-4">
            {infos.map((i) => {
              const Wrapper = i.href ? "a" : "div";
              return (
                <li key={i.title}>
                  <Wrapper
                    {...(i.href ? { href: i.href, target: "_blank", rel: "noreferrer" } : {})}
                    className="glass-card flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <i.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{i.title}</p>
                      <p className="font-bold">{i.value}</p>
                      <p className="text-xs text-primary">{i.hint}</p>
                    </div>
                  </Wrapper>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              ["50+", "Projetos Entregues"],
              ["24h", "Tempo de Resposta"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-border p-5">
                <p className="text-3xl font-extrabold text-primary">{n}</p>
                <p className="text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="glass-card rounded-3xl p-8 md:p-10">
          <h3 className="text-xl font-bold">Solicite seu Orçamento</h3>
          <p className="mt-1 text-sm text-muted-foreground">Preencha os dados abaixo e entraremos em contato</p>
          <div className="mt-8 space-y-4">
            <input
              className={field}
              placeholder="Nome Completo"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={field}
              type="email"
              placeholder="E-mail"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={field}
              type="tel"
              placeholder="Telefone (opcional)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <textarea
              className={`${field} min-h-32 resize-y`}
              placeholder="Descreva seu projeto"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-cta mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5"
          >
            Enviar Mensagem <Send className="size-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">Você será direcionado ao WhatsApp.</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Flowny. Todos os direitos reservados.</p>
        <div className="flex items-center gap-5">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
            WhatsApp
          </a>
          <a href="https://www.instagram.com/flownysites/" target="_blank" rel="noreferrer" className="hover:text-primary">
            Instagram
          </a>
          <a href="mailto:contato@flowny.com.br" className="hover:text-primary">
            contato@flowny.com.br
          </a>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col gap-3">
      <a
        href="https://www.instagram.com/flownysites/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram da Flowny"
        className="inline-flex size-12 items-center justify-center rounded-full bg-card text-foreground shadow-lg transition-transform hover:scale-110"
      >
        <Instagram className="size-5" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
