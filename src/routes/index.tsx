import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, About, Services, Solutions, Portfolio } from "@/components/site/Sections";
import { Contact, Footer, FloatingButtons } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flowny | Sites Profissionais e de Alto Impacto" },
      {
        name: "description",
        content:
          "Transformamos sua ideia em um site profissional, responsivo e de alto impacto. Sites institucionais, landing pages, SEO e design responsivo.",
      },
      { property: "og:title", content: "Flowny | Sites Profissionais e de Alto Impacto" },
      {
        property: "og:description",
        content: "Desenvolvemos websites modernos, rápidos e alinhados com o seu negócio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
