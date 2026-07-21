import Image from "next/image";
import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import Reveal from "@/components/Reveal";
import MenuMobile from "@/components/MenuMobile";
import VideoLightbox from "@/components/VideoLightbox";
import ImageLightbox from "@/components/ImageLightbox";
import BotaoTopo from "@/components/BotaoTopo";
import ScrollTopoAoAtualizar from "@/components/ScrollTopoAoAtualizar";

const DEMOS: {
  tipo: "video" | "foto";
  src: string;
  legenda: string;
}[] = [
  { tipo: "foto", src: "/13.png", legenda: "Tela de login" },
  { tipo: "foto", src: "/1.png", legenda: "Dashboard com resumo do dia" },
  {
    tipo: "foto",
    src: "/3.png",
    legenda: "Venda balcão: grade de produtos por categoria",
  },
  {
    tipo: "video",
    src: "/screen-capture (1).webm",
    legenda: "Venda balcão em ação",
  },
  {
    tipo: "foto",
    src: "/4.png",
    legenda: "Finalização de venda com forma de pagamento",
  },
  { tipo: "foto", src: "/5.png", legenda: "Detalhe do pedido" },
  { tipo: "foto", src: "/2.png", legenda: "Histórico de vendas do dia" },
  { tipo: "foto", src: "/6.png", legenda: "Orçamentos" },
  { tipo: "foto", src: "/7.png", legenda: "Cadastro de produtos" },
  { tipo: "foto", src: "/12.png", legenda: "Cadastro de novo produto" },
  {
    tipo: "foto",
    src: "/8.png",
    legenda: "Estoque com alerta de quantidade mínima",
  },
  {
    tipo: "foto",
    src: "/9.png",
    legenda: "Financeiro: contas a pagar e a receber",
  },
  {
    tipo: "foto",
    src: "/10.png",
    legenda: "Relatórios de vendas com filtros e gráficos",
  },
  { tipo: "foto", src: "/11.png", legenda: "Auditoria completa do sistema" },
];

const MODULOS = [
  {
    titulo: "Venda Balcão",
    descricao:
      "Grade de produtos por categoria, pedido de venda por peso ou fração, carrinho e registro rápido.",
  },
  {
    titulo: "Pedidos",
    descricao:
      "Acompanhamento em tempo real dos pedidos do balcão, com filtro por status.",
  },
  {
    titulo: "Produtos e Estoque",
    descricao:
      "Cadastro com unidade de compra e venda, categorias e alerta de estoque mínimo.",
  },
  {
    titulo: "Financeiro",
    descricao:
      "Contas a pagar e a receber, alertas de vencimento e controle financeiro completo.",
  },
  {
    titulo: "Relatórios",
    descricao:
      "Vendas, contas, produtos e auditoria com filtros por período e impressão.",
  },
  {
    titulo: "Multi-loja",
    descricao:
      "Controle várias lojas com cadastros globais e movimentações separadas por loja.",
  },
  {
    titulo: "Clientes",
    descricao:
      "Cadastro completo com consentimento LGPD e vínculo rápido direto na venda balcão.",
  },
  {
    titulo: "Orçamentos",
    descricao:
      "Monte o orçamento e dispare por e-mail ou WhatsApp com um PDF anexado — o cliente aprova ou recusa direto pelo link, sem precisar responder mensagem.",
  },
  {
    titulo: "Dashboard",
    descricao:
      "Resumo do dia, pedidos em andamento e alertas de estoque em um só lugar.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-slate-950 text-slate-100">
      <ScrollTopoAoAtualizar />
      <BotaoTopo />
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image
            src="/logo_inmente.png"
            alt="In Mente Gestão"
            width={88}
            height={88}
            className="h-20 w-20 rounded-lg md:h-[5.5rem] md:w-[5.5rem]"
            priority
          />
          <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#modulos" className="transition hover:text-blue-400">
              Módulos
            </a>
            <a
              href="#demonstracao"
              className="transition hover:text-blue-400"
            >
              Demonstração
            </a>
            <a href="#sobre" className="transition hover:text-blue-400">
              Sobre
            </a>
          </nav>
          <BotaoWhatsapp texto="Falar agora" className="hidden md:inline-flex" />
          <MenuMobile />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="animate-float pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center md:py-28">
          <span className="animate-fade-in-up rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-400">
            Sistema de gestão completo
          </span>
          <h1 className="animate-fade-in-up delay-100 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Gerencie sua loja em um só sistema
          </h1>
          <p className="animate-fade-in-up delay-200 max-w-2xl text-lg text-slate-400 md:text-xl">
            Venda balcão, pedidos, estoque, financeiro e relatórios — tudo em
            uma plataforma simples, rápida e feita para o dia a dia do seu
            negócio.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col gap-4 sm:flex-row">
            <BotaoWhatsapp texto="Quero conhecer o sistema" />
          </div>

          <div className="animate-fade-in-up delay-400 mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10">
            <VideoLightbox
              src="/screen-capture.webm"
              className="aspect-video w-full"
              autoPlayPreview
            />
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Tudo que o seu negócio precisa
            </h2>
            <p className="mt-3 text-lg text-slate-400">
              Módulos pensados para lojas de varejo em geral.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MODULOS.map((modulo, i) => (
              <Reveal key={modulo.titulo} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/10">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {modulo.titulo}
                  </h3>
                  <p className="text-sm text-slate-400">{modulo.descricao}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demonstração: vídeos e fotos das telas */}
      <section
        id="demonstracao"
        className="border-t border-white/5 bg-slate-900/30 py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Veja o sistema em ação
            </h2>
            <p className="mt-3 text-lg text-slate-400">
              Telas reais e vídeos curtos mostrando cada parte do sistema.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DEMOS.map((demo, i) => (
              <Reveal key={demo.src} delay={(i % 6) * 60}>
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="relative aspect-video w-full bg-black">
                    {demo.tipo === "video" ? (
                      <VideoLightbox src={demo.src} className="h-full w-full" />
                    ) : (
                      <ImageLightbox
                        src={demo.src}
                        alt={demo.legenda}
                        className="h-full w-full"
                      />
                    )}
                  </div>
                  <p className="px-4 py-3 text-sm text-slate-400">
                    {demo.legenda}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-t border-white/5 py-20">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Feito para o dia a dia do seu negócio
          </h2>
          <p className="text-lg text-slate-400">
            O In Mente Gestão foi desenvolvido para lojas de
            varejo que precisam de agilidade na venda, controle de estoque e
            visão financeira clara — sem complicação. Cada cliente tem seu
            próprio ambiente, com dados isolados e seguros.
          </p>
          <BotaoWhatsapp texto="Fale com a gente pelo WhatsApp" />
        </Reveal>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm text-slate-500">
          <Image
            src="/logo_inmente.png"
            alt="In Mente Gestão"
            width={48}
            height={48}
            className="h-12 w-12 rounded-md opacity-80"
          />
          <span>
            © {new Date().getFullYear()} In Mente Gestão. Todos os direitos
            reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}
