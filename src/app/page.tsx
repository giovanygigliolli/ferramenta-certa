import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, AlertTriangle, ArrowRight, X } from "lucide-react";

export default function Home() {
  const affiliateLink = "https://go.hotmart.com/V103763588J";

  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              Análise Independente e Atualizada
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Tráfego Pago Descomplicado Funciona? <br className="hidden md:block"/>
              <span className="text-blue-700">Review Completo e Atualizado</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Este site tem como objetivo analisar o curso <strong>Tráfego Pago Descomplicado</strong> e mostrar, de forma honesta, para quem ele realmente funciona.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2"
              >
                👉 Acessar o site oficial do curso
              </a>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-3xl pb-20 space-y-16">
          
          {/* O que é */}
          <section className="prose prose-lg prose-blue max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">O que é o Tráfego Pago Descomplicado?</h2>
            <p className="text-gray-600 mb-4">
              O <strong>Tráfego Pago Descomplicado</strong> é um treinamento online focado em ensinar, passo a passo, como criar anúncios no Facebook Ads e Instagram Ads.
            </p>
            <p className="text-gray-600">
              Diferente de cursos avançados e complexos, a proposta aqui é pegar o aluno pela mão, desde a criação da conta de anúncios até a publicação das primeiras campanhas reais. É voltado especialmente para quem está começando do zero e precisa de uma metodologia direta.
            </p>
          </section>

          {/* Para quem é vs Não é */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <h2 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6" /> Para quem é indicado?
              </h2>
              <ul className="space-y-4">
                {[
                  "Iniciantes em tráfego pago",
                  "Pessoas que querem divulgar produtos digitais",
                  "Pequenos empreendedores",
                  "Afiliados iniciantes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <h2 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                <X className="w-6 h-6" /> Para quem NÃO é indicado?
              </h2>
              <ul className="space-y-4">
                {[
                  "Quem busca dinheiro fácil",
                  "Quem não quer estudar",
                  "Quem espera resultados sem aplicar"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* O que ensina */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">O que o curso ensina?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Criação de conta de anúncios",
                "Estrutura de campanhas",
                "Criação de anúncios (Criativos)",
                "Otimização de orçamento",
                "Escala básica",
                "Erros comuns para evitar"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Prós e Contras */}
          <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Pontos Positivos</h3>
                <ul className="space-y-4">
                  {[
                    "Conteúdo 100% prático",
                    "Linguagem simples (sem 'economês')",
                    "Acesso online imediato",
                    "Suporte a dúvidas",
                    "Preço extremamente acessível"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50/50">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" /> Pontos de Atenção
                </h3>
                <ul className="space-y-4">
                  {[
                    "Resultados dependem da sua aplicação",
                    "Não é uma fórmula mágica de renda automática",
                    "Exige dedicação para assistir e implementar"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Veredito */}
          <section className="bg-blue-50 p-8 md:p-10 rounded-3xl text-center border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              O curso Tráfego Pago Descomplicado vale a pena?
            </h2>
            <div className="prose prose-lg text-gray-700 mx-auto mb-8">
              <p>
                Se você está procurando uma forma honesta e didática de aprender a anunciar no Facebook e Instagram, <strong>sim, vale a pena.</strong>
              </p>
              <p>
                Ele não vai te deixar rico do dia para a noite, mas vai te dar a base técnica necessária para começar a vender online ou divulgar seu negócio, sem gastar rios de dinheiro com agências ou cometendo erros bobos.
              </p>
            </div>
            
            <a 
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-200"
            >
              👉 Acessar o site oficial do curso
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-xs text-gray-500">
              Compra segura e garantia direto pela plataforma Hotmart.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
