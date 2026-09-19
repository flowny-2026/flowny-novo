import { createFileRoute } from "@tanstack/react-router";
import { SystemPage } from "@/components/site/SystemPage";
import { getSystem } from "@/lib/systems";

const system = getSystem("venda-facil");
const title = "Venda Fácil | Sistema de gestão e vendas — Flowny";
const description =
  "Conheça o Venda Fácil, sistema da Flowny para gestão de produtos, estoque e vendas com PDV. Veja a demonstração e fale com a equipe.";

export const Route = createFileRoute("/venda-facil")({
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
