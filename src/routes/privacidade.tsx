import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield, Users, Share2, Cookie, Lock, CheckCircle, RefreshCw, Mail } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer, FloatingButtons } from "@/components/site/Contact";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Flowny" },
      { name: "description", content: "Saiba como a Flowny coleta, usa e protege suas informações pessoais em conformidade com a LGPD." },
    ],
  }),
  component: Privacidade,
});

const sections = [
  { id: "informacoes", label: "Informações que Coletamos" },
  { id: "finalidade", label: "Finalidade da Coleta" },
  { id: "compartilhamento", label: "Compartilhamento de Dados" },
  { id: "cookies", label: "Uso de Cookies" },
  { id: "seguranca", label: "Armazenamento e Segurança" },
  { id: "direitos", label: "Direitos do Usuário" },
  { id: "alteracoes", label: "Alterações nesta Política" },
  { id: "contato-privacidade", label: "Contato" },
];

function SectionTitle({ icon: Icon, title, badge }: { icon: React.ElementType; title: string; badge: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="size-5" />
      </span>
      <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
        {badge}
      </span>
    </div>
  );
}

function Privacidade() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        {/* Header */}
        <div className="relative overflow-hidden bg-hero pb-16">
          <div className="grid-pattern absolute inset-0" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> Voltar para Home
            </Link>
            <div className="mt-8 max-w-2xl">
              <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                LGPD
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Política de Privacidade
              </h1>
              <p className="mt-4 text-muted-foreground">
                Esta política descreve como coletamos, usamos e protegemos suas informações pessoais
                de forma transparente e em conformidade com a LGPD.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">Última atualização: Janeiro de 2026</p>
            </div>
          </div>
        </div>

        {/* Layout duas colunas */}
        <div className="mx-auto mt-12 grid max-w-7xl gap-10 px-6 lg:grid-cols-[240px_1fr]">
          {/* Sidebar sumário */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">Sumário</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Conteúdo */}
          <div className="space-y-14">

            <section id="informacoes" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={Users} title="Informações que Coletamos" badge="Dados Pessoais" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Coletamos informações pessoais de forma transparente e com seu consentimento para oferecer
                um atendimento mais eficiente e personalizado. Todas as informações são coletadas
                voluntariamente através de formulários de contato ou solicitações de orçamento.
              </p>
              <h3 className="mt-6 font-bold text-primary">Tipos de Dados Coletados:</h3>
              <ul className="mt-3 space-y-3">
                {[
                  ["Nome Completo", "Utilizado para personalização do atendimento e comunicação direta com você"],
                  ["Endereço de E-mail", "Para comunicação, envio de propostas comerciais e suporte técnico"],
                  ["Número de Telefone", "Para contato direto quando necessário e esclarecimento de dúvidas"],
                  ["Informações do Projeto", "Detalhes sobre suas necessidades, preferências e especificações técnicas"],
                ].map(([titulo, desc]) => (
                  <li key={titulo} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{titulo}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Importante:</strong> Nunca coletamos dados sensíveis como
                informações bancárias, senhas ou documentos pessoais através de nosso site.
              </div>
            </section>

            <section id="finalidade" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={Shield} title="Finalidade da Coleta de Dados" badge="Uso" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Utilizamos seus dados pessoais exclusivamente para finalidades legítimas e transparentes,
                sempre respeitando seus direitos e privacidade.
              </p>
              <h3 className="mt-6 font-bold text-primary">Principais Finalidades:</h3>
              <ul className="mt-3 space-y-3">
                {[
                  ["Atendimento e Suporte", "Responder suas dúvidas, solicitações de orçamento e fornecer suporte técnico"],
                  ["Comunicação Comercial", "Enviar informações sobre nossos serviços e novidades (apenas com seu consentimento)"],
                  ["Melhoria da Experiência", "Aprimorar a navegação e personalizar sua experiência em nosso site"],
                  ["Cumprimento Legal", "Atender obrigações legais e regulamentares quando aplicável"],
                  ["Desenvolvimento de Serviços", "Desenvolver e aprimorar nossos serviços com base no seu feedback"],
                ].map(([titulo, desc]) => (
                  <li key={titulo} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{titulo}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="compartilhamento" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={Share2} title="Compartilhamento de Dados" badge="Terceiros" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-primary">Seus dados não são vendidos ou compartilhados</strong> com
                terceiros para fins comerciais. Valorizamos sua privacidade e mantemos suas informações seguras.
              </p>
              <h3 className="mt-6 font-bold text-primary">Situações Específicas:</h3>
              <ul className="mt-3 space-y-3">
                {[
                  ["Prestadores de Serviços", "Serviços de hospedagem ou ferramentas de marketing, exclusivamente para execução das nossas atividades"],
                  ["Exigências Legais", "Autoridades competentes, em caso de exigência por lei ou determinação judicial"],
                  ["Parceiros Confiáveis", "Parceiros que nos ajudam a operar nosso site, desde que concordem em manter essas informações confidenciais"],
                ].map(([titulo, desc]) => (
                  <li key={titulo} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{titulo}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="cookies" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={Cookie} title="Uso de Cookies" badge="Tecnologia" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Nosso site utiliza cookies para melhorar a funcionalidade, personalizar conteúdo e entender
                o comportamento de navegação dos usuários.
              </p>
              <h3 className="mt-6 font-bold text-primary">Os cookies nos ajudam a:</h3>
              <ul className="mt-3 space-y-3">
                {[
                  "Lembrar suas preferências e configurações de navegação",
                  "Analisar como você usa nosso site para melhorias contínuas",
                  "Melhorar nossos serviços e experiência do usuário",
                  "Fornecer conteúdo relevante e personalizado",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="seguranca" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={Lock} title="Armazenamento e Segurança" badge="Proteção" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Adotamos medidas de segurança técnicas e organizacionais rigorosas para proteger seus
                dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Criptografia de dados em trânsito e em repouso usando protocolos seguros",
                  "Controles de acesso rigorosos com autenticação multifator",
                  "Monitoramento contínuo de segurança e detecção de ameaças",
                  "Atualizações regulares de sistemas e software de segurança",
                  "Backup seguro e planos de recuperação de dados",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="direitos" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={CheckCircle} title="Direitos do Usuário" badge="LGPD" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direitos fundamentais
                sobre seus dados pessoais. Respeitamos e facilitamos o exercício desses direitos.
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  ["Acesso", "Solicitar informações sobre quais dados pessoais possuímos sobre você"],
                  ["Correção", "Solicitar a correção de dados incompletos, inexatos ou desatualizados"],
                  ["Exclusão", "Solicitar a exclusão de seus dados pessoais quando aplicável"],
                  ["Portabilidade", "Solicitar a transferência de seus dados para outro fornecedor"],
                  ["Revogação", "Revogar seu consentimento a qualquer momento"],
                  ["Oposição", "Opor-se ao tratamento de seus dados em certas situações"],
                ].map(([titulo, desc]) => (
                  <li key={titulo} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{titulo}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="alteracoes" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={RefreshCw} title="Alterações nesta Política" badge="Atualizações" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças
                em nossas práticas, serviços ou por outros motivos operacionais, legais ou regulamentares.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Recomendamos que você revise esta política regularmente. Quaisquer alterações significativas
                serão comunicadas através de nosso site com antecedência adequada.
              </p>
            </section>

            <section id="contato-privacidade" className="glass-card rounded-2xl p-8">
              <SectionTitle icon={Mail} title="Contato" badge="Suporte" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Se você tiver dúvidas sobre nossa Política de Privacidade ou quiser exercer seus
                direitos, entre em contato conosco:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["E-mail", "contato@flowny.com.br"],
                  ["Telefone", "(16) 99291-5540"],
                  ["Horário", "Segunda a Sexta, 9h às 18h"],
                  ["Resposta", "Até 48 horas úteis"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-border px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="mt-1 text-sm font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
