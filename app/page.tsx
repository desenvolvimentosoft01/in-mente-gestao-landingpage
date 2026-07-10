import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import PlaceholderMidia from "@/components/PlaceholderMidia";

const MODULOS = [
  {
    titulo: "Venda Balcão",
    descricao:
      "Grade de produtos por categoria, venda por peso ou fração, carrinho e pagamento rápido.",
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
      "Contas a pagar e a receber, alertas de vencimento e histórico de transações.",
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
    titulo: "Dashboard",
    descricao:
      "Resumo do dia, pedidos em andamento e alertas de estoque em um só lugar.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            In Mente <span className="text-emerald-500">Gestão</span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#modulos" className="hover:text-slate-900">
              Módulos
            </a>
            <a href="#demonstracao" className="hover:text-slate-900">
              Demonstração
            </a>
            <a href="#sobre" className="hover:text-slate-900">
              Sobre
            </a>
          </nav>
          <BotaoWhatsapp texto="Falar agora" className="hidden md:inline-flex" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 text-center md:py-28">
          <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
            Sistema de gestão completo
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Gerencie seu restaurante ou loja em um só sistema
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 md:text-xl">
            Venda balcão, pedidos, estoque, financeiro e relatórios — tudo em
            uma plataforma simples, rápida e feita para o dia a dia do seu
            negócio.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <BotaoWhatsapp texto="Quero conhecer o sistema" />
          </div>

          <div className="mt-8 w-full max-w-4xl">
            <PlaceholderMidia
              tipo="video"
              legenda="Vídeo de apresentação geral do sistema"
              className="aspect-video w-full"
            />
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Tudo que o seu negócio precisa
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Módulos pensados para restaurantes e lojas de varejo em geral.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MODULOS.map((modulo) => (
              <div
                key={modulo.titulo}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {modulo.titulo}
                </h3>
                <p className="text-sm text-slate-600">{modulo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demonstração: vídeos e fotos das telas */}
      <section id="demonstracao" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Veja o sistema em ação
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Telas reais e vídeos curtos mostrando cada parte do sistema.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <PlaceholderMidia
              tipo="video"
              legenda="Venda balcão em funcionamento"
              className="aspect-video"
            />
            <PlaceholderMidia
              tipo="video"
              legenda="Acompanhamento de pedidos em tempo real"
              className="aspect-video"
            />
            <PlaceholderMidia
              tipo="foto"
              legenda="Tela de cadastro de produtos"
              className="aspect-[4/3]"
            />
            <PlaceholderMidia
              tipo="foto"
              legenda="Dashboard com resumo do dia"
              className="aspect-[4/3]"
            />
            <PlaceholderMidia
              tipo="foto"
              legenda="Relatórios com filtros e impressão"
              className="aspect-[4/3]"
            />
            <PlaceholderMidia
              tipo="foto"
              legenda="Financeiro: contas a pagar e receber"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-white py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Feito para o dia a dia do seu negócio
          </h2>
          <p className="text-lg text-slate-600">
            O In Mente Gestão foi desenvolvido para restaurantes e lojas de
            varejo que precisam de agilidade na venda, controle de estoque e
            visão financeira clara — sem complicação. Cada cliente tem seu
            próprio ambiente, com dados isolados e seguros.
          </p>
          <BotaoWhatsapp texto="Fale com a gente pelo WhatsApp" />
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center text-sm text-slate-500">
          <span className="font-semibold text-slate-700">
            In Mente Gestão
          </span>
          <span>
            © {new Date().getFullYear()} In Mente Gestão. Todos os direitos
            reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}
