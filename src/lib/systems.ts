/**
 * Dados dos sistemas desenvolvidos pela Flowny.
 *
 * Para adicionar os vídeos reais, basta preencher `previewVideo` (prévia curta
 * usada na Home) e `demoVideo` (demonstração maior usada na página individual)
 * com a URL do arquivo .mp4/.webm. Enquanto estiverem vazios, o layout exibe
 * um espaço reservado discreto — nenhum vídeo fictício é usado.
 */
export type SystemInfo = {
  slug: "venda-facil" | "chave10";
  path: "/venda-facil" | "/chave10";
  name: string;
  tagline: string;
  description: string;
  /** Vídeo curto (20–40s) para a prévia na Home. */
  previewVideo?: string | undefined;
  /** Vídeo maior de demonstração para a página individual. */
  demoVideo?: string | undefined;
  /** Imagem exibida antes do vídeo iniciar (opcional). */
  poster?: string | undefined;
  highlights: string[];
  /** Público / segmento atendido. */
  audience: string;
};

export const SYSTEMS: SystemInfo[] = [
  {
    slug: "venda-facil",
    path: "/venda-facil",
    name: "Venda Fácil",
    tagline: "Sistema de gestão e vendas para empresas",
    description:
      "Plataforma para organizar produtos, estoque e vendas em um só lugar, com painel de acompanhamento e tela de vendas (PDV) pensada para o dia a dia do comércio.",
    previewVideo: "/Apresentaçao venfa facil.mp4",
    demoVideo: undefined,
    highlights: ["Painel de gestão", "Cadastro e gestão de produtos", "Controle de estoque", "Tela de vendas / PDV"],
    audience: "Comércios, lojas e pequenas empresas",
  },
  {
    slug: "chave10",
    path: "/chave10",
    name: "Chave10",
    tagline: "Sistema de gestão para oficinas mecânicas",
    description:
      "Sistema desenvolvido para oficinas mecânicas organizarem atendimentos, ordens de serviço, clientes e veículos com mais agilidade e controle.",
    previewVideo: undefined,
    demoVideo: undefined,
    highlights: ["Ordens de serviço", "Cadastro de clientes e veículos", "Acompanhamento de atendimentos", "Gestão da oficina"],
    audience: "Oficinas mecânicas e centros automotivos",
  },
];

export function getSystem(slug: SystemInfo["slug"]) {
  return SYSTEMS.find((s) => s.slug === slug)!;
}
