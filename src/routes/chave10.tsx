import { createFileRoute } from "@tanstack/react-router";
import { SystemPage } from "@/components/site/SystemPage";
import { getSystem } from "@/lib/systems";

const system = getSystem("chave10");
const title = "Chave10 | Sistema de gestão para oficinas mecânicas — Flowny";
const description =
  "Conheça o Chave10, sistema da Flowny para oficinas mecânicas: ordens de serviço, clientes, veículos e atendimentos. Veja a demonstração.";

export const Route = createFileRoute("/chave10")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SystemPage system={system} />,
});
