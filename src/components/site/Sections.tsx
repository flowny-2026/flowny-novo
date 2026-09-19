import { Link } from "@tanstack/react-router";
import {
  Laptop,
  Lightbulb,
  Target,
  Handshake,
  Building2,
  Rocket,
  Search,
  Wrench,
  Smartphone,
  PenTool,
  ExternalLink,
  ArrowRight,
  Cpu,
} from "lucide-react";
import heroDevices from "@/assets/hero-devices.png";
import drCharles from "@/assets/dr-charles.png";
import android from "@/assets/android.png";
import cordeu from "@/assets/cordeu.png";
import rc from "@/assets/r-c.png";
import blog from "@/assets/blog.jpg";
import alugaki from "@/assets/alugaki.png";
import painel from "@/assets/Paínel.png";
import chave10 from "@/assets/chave10.png";
import { SYSTEMS } from "@/lib/systems";
import { SystemVideo } from "./SystemVideo";

export const WHATSAPP_URL = "https://wa.me/5516992915540";

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="grid-pattern absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="animate-fade-up">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Transformamos ideias em{" "}
            <Laptop className="mb-2 inline size-[0.9em] text-primary" aria-hidden />{" "}
            <span className="text-gradient-cyan">SOLUÇÕES DIGITAIS</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Desenvolvemos sites, sistemas e plataformas personalizados para transformar necessidades
            reais em soluções eficientes.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#solucoes"
              className="bg-cta inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-cta transition-transform hover:-translate-y-0.5"
            >
              Conheça nossas soluções <ArrowRight className="size-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <img
            src={heroDevices}
            alt="Site profissional exibido em notebook e celular"
            width={1400}
            height={933}
            className="animate-float w-full drop-shadow-2xl"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Lightbulb,
    title: "Inovação Digital",
    text: "Transformamos ideias em experiências digitais modernas e eficientes, sempre na vanguarda da tecnologia.",
  },
  {
    icon: Target,
    title: "Desenvolvimento Focado",
    text: "Criamos soluções web que impulsionam o crescimento, combinando criatividade e estratégia para resultados excepcionais.",
  },
  {
    icon: Handshake,
    title: "Parceria Estratégica",
    text: "Abordagem personalizada para cada projeto, sendo a parceira ideal para levar seu negócio ao próximo nível digital.",
  },
];

const stack = [
  { name: "HTML5", desc: "Estrutura semântica e moderna", tag: "<>" },
  { name: "CSS3", desc: "Design responsivo e animações", tag: "{}" },
  { name: "JavaScript", desc: "Interatividade e funcionalidades", tag: "JS" },
  { name: "Python", desc: "Backend robusto e escalável", tag: "Py" },
];

export function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Sobre nós" title="Quem é a Flowny" />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="glass-card rounded-2xl p-8 transition-colors hover:border-primary/40">
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <p.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold md:text-3xl">Nossa Missão</h3>
            <p className="mt-5 text-muted-foreground">
              A Flowny desenvolve soluções digitais que ajudam empresas a transformar processos e
              ideias em produtos digitais.
            </p>
            <p className="mt-4 text-muted-foreground">
              Acreditamos que cada projeto é único e merece uma abordagem personalizada. Criamos
              sites, sistemas e plataformas combinando tecnologia e design intuitivo para entregar
              produtos que funcionam bem e geram resultado.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Vamos criar juntos? <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stack.map((s) => (
              <div key={s.name} className="glass-card rounded-2xl p-6">
                <span className="font-mono text-2xl font-bold text-primary">{s.tag}</span>
                <h4 className="mt-3 font-bold">{s.name}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Cpu, title: "Desenvolvimento de Sistemas", text: "Desenvolvemos sistemas personalizados para automatizar processos, organizar informações e facilitar a gestão do seu negócio.", tags: ["Sob Medida", "Gestão"] },
  { icon: Building2, title: "Sites Institucionais", text: "Desenvolvemos sites profissionais sob medida para apresentar sua empresa, produtos e serviços de forma clara, moderna e confiável.", tags: ["Responsivo", "SEO Otimizado"] },
  { icon: Rocket, title: "Landing Pages", text: "Páginas focadas em conversão para campanhas específicas, produtos ou serviços, otimizadas para gerar leads e vendas.", tags: ["Alta Conversão", "Analytics"] },
  { icon: Search, title: "SEO e Otimização", text: "Otimização para mecanismos de busca, garantindo que seu site seja encontrado pelos seus clientes potenciais.", tags: ["Google Ranking", "Performance"] },
  { icon: Wrench, title: "Manutenção de Sites", text: "Serviços completos de manutenção e atualização para manter seu site sempre funcionando perfeitamente e atualizado.", tags: ["Suporte 24/7", "Atualizações"] },
  { icon: Smartphone, title: "Design Responsivo", text: "Criamos sites que se adaptam perfeitamente a todos os dispositivos, garantindo uma experiência excelente em qualquer tela.", tags: ["Mobile First", "Cross-Platform"] },
  { icon: PenTool, title: "UX/UI Design", text: "Design centrado no usuário para criar interfaces intuitivas e experiências digitais que convertem visitantes em clientes.", tags: ["User-Centered", "Conversão"] },
];

export function Services() {
  return (
    <section id="servicos" className="bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Serviços"
          title="O que fazemos"
          subtitle="Soluções completas para colocar seu negócio no digital com qualidade e resultado."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group glass-card flex flex-col rounded-2xl p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-secondary/30 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Project = {
  img?: string;
  title: string;
  desc: string;
  url?: string;
  to?: "/venda-facil" | "/chave10";
  featured?: boolean;
};

const systems: Project[] = [
  { img: painel, title: "Venda Fácil", desc: "Sistema de gestão e vendas para empresas", to: "/venda-facil", featured: true },
  { img: chave10, title: "Chave10", desc: "Sistema de gestão para oficinas mecânicas", to: "/chave10", featured: true },
  { img: alugaki, title: "Alugaki", desc: "Plataforma de aluguel de produtos entre pessoas", url: "https://flowny-2026.github.io/alugaki/" },
];

const sites: Project[] = [
  { img: drCharles, title: "Dr. Charles", desc: "Site médico profissional com agendamento online", url: "https://flowny-2026.github.io/dr-charles-main/" },
  { img: android, title: "História Android", desc: "Timeline interativa da evolução Android", url: "https://flowny-2026.github.io/historia-dos-android/" },
  { img: cordeu, title: "Cordeu", desc: "Plataforma educacional moderna", url: "https://flowny-2026.github.io/projeto-cordeu/" },
  { img: rc, title: "R.C Pinturas e Decorações", desc: "Página de conversão otimizada", url: "https://flowny-2026.github.io/RC/" },
  { img: blog, title: "Blog Social", desc: "Plataforma de conteúdo e engajamento", url: "https://flowly-tech-2025.github.io/projeto-social/" },
];

function ProjectCard({ p }: { p: Project }) {
  const className = `group glass-card overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:border-primary/40 ${
    p.featured ? "border-primary/30 shadow-glow" : ""
  }`;
  const body = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        {p.img ? (
          <img
            src={p.img}
            alt={`${p.title} — ${p.desc}`}
            loading="lazy"
            className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-navy-deep text-center">
            <Cpu className="size-8 text-primary" />
            <span className="text-xs text-muted-foreground">Screenshot real em breve</span>
          </div>
        )}
        {p.featured && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
            Sistema Flowny
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="font-bold">{p.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
        </div>
        <span className="mt-1 inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-primary">
          Ver projeto {p.to ? <ArrowRight className="size-3.5" /> : <ExternalLink className="size-3.5" />}
        </span>
      </div>
    </>
  );

  if (p.to) {
    return (
      <Link to={p.to} className={className}>
        {body}
      </Link>
    );
  }
  return (
    <a href={p.url} target="_blank" rel="noreferrer" className={className}>
      {body}
    </a>
  );
}

function PortfolioGroup({ label, items }: { label: string; items: Project[] }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{label}</h3>
        <span className="h-px flex-1 bg-border" aria-hidden />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <section id="solucoes" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Soluções"
          title="Soluções desenvolvidas pela Flowny"
          subtitle="Sistemas próprios criados para resolver necessidades reais de gestão e vendas."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {SYSTEMS.map((s) => (
            <article
              key={s.slug}
              className="group glass-card flex flex-col overflow-hidden rounded-3xl border-primary/30 p-3 shadow-glow transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <SystemVideo src={s.previewVideo} poster={s.poster} title={`Prévia do ${s.name}`} variant="preview" />
              <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                  Sistema Flowny
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight">{s.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{s.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {h}
                    </span>
                  ))}
                </div>
                <Link
                  to={s.path}
                  className="mt-7 inline-flex items-center gap-2 self-start rounded-full border border-primary/50 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Ver demonstração completa <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-navy-deep py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Portfólio"
          title="Projetos que entregamos"
          subtitle="Alguns dos trabalhos que desenvolvemos para nossos clientes."
        />
        <div className="space-y-16">
          <PortfolioGroup label="Sistemas e Plataformas" items={systems} />
          <PortfolioGroup label="Sites e Projetos Digitais" items={sites} />
        </div>
      </div>
    </section>
  );
}
