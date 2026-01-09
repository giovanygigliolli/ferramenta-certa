import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, AlertTriangle, ArrowRight, Lock, BookOpen, Users, ShieldCheck, Star } from "lucide-react";

export default function Home() {
  const affiliateLink = "https://go.hotmart.com/V103763588J?dp=1";

  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-50">
        
        {/* Hero Section */}
        <section className="bg-white pt-16 pb-20 border-b border-gray-100">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6 border border-blue-100">
              Análise Honesta e Independente • Atualizado 2026
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Tráfego Pago Descomplicado funciona mesmo? <span className="text-blue-700">Vale a pena em 2026?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Muitas pessoas querem aprender a anunciar no Facebook Ads, mas têm medo de cursos complexos e caros. Nesta análise completa, vamos revelar se o método <strong>Tráfego Pago Descomplicado</strong> entrega o que promete.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <a 
                href={affiliateLink}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                👉 Ver site oficial do curso
              </a>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Link seguro para o site oficial
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-3xl py-16 space-y-16">
          
          {/* O que é */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              O que é o Tráfego Pago Descomplicado?
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                O <strong>Tráfego Pago Descomplicado</strong> é um curso online 100% focado em ensinar qualquer pessoa a criar anúncios no Facebook Ads e Instagram Ads, mesmo que não tenha nenhuma experiência anterior.
              </p>
              <p className="mb-4">
                Diferente de formações teóricas longas, a proposta deste treinamento é ser um guia prático: você assiste à aula e aplica imediatamente. Ele é hospedado e vendido pela <strong>Hotmart</strong>, a maior plataforma de produtos digitais da América Latina, o que garante segurança na entrega do conteúdo.
              </p>
            </div>
          </section>

          {/* Para quem é */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              Para quem este curso é indicado?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Iniciantes em tráfego pago que nunca anunciaram",
                "Afiliados que querem vender produtos digitais",
                "Donos de pequenos negócios (delivery, serviços, lojas)",
                "Pessoas que querem aprender uma nova habilidade digital"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="bg-green-100 p-1 rounded-full mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Benefícios */}
          <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Principais benefícios do curso</h2>
            <ul className="space-y-4">
              {[
                "Aulas 100% práticas e direto ao ponto",
                "Passo a passo do zero ao anúncio no ar",
                "Metodologia focada exclusivamente em iniciantes",
                "Acesso a atualizações da plataforma",
                "Bônus exclusivos incluídos na oferta"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Confiabilidade */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              O curso Tráfego Pago Descomplicado é confiável?
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Sim, é confiável. O produto é comercializado através da <strong>Hotmart</strong>, que processa o pagamento e entrega o acesso automaticamente por e-mail.
              </p>
              <p>
                Além disso, o curso oferece uma <strong>garantia incondicional de 7 dias</strong>. Isso significa que você pode comprar, assistir às aulas e, se não gostar por qualquer motivo, solicitar o reembolso total do valor pago diretamente na plataforma, sem burocracia.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 flex gap-4 items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-yellow-800 mb-1">Atenção aos resultados</h4>
                <p className="text-sm text-yellow-700">
                  É importante ressaltar que o curso ensina a <strong>técnica</strong> de anunciar. Os resultados financeiros dependem da aplicação correta, do seu produto, da sua oferta e do mercado. Não existem ganhos garantidos ou fáceis.
                </p>
              </div>
            </div>
          </section>

          {/* Depoimentos */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Relatos públicos de alunos</h2>
            <p className="text-gray-600 mb-8">
              Observando comentários públicos e avaliações encontradas na internet sobre o curso, nota-se que a maioria dos alunos destaca a didática como ponto forte. Abaixo, resumimos os pontos mais citados:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-gray-600">
                 <p className="mb-3">Muitos alunos relatam que finalmente entenderam como funciona o pixel e a estrutura de campanhas, algo que achavam muito difícil antes.</p>
                 <div className="text-sm font-bold text-blue-600">Ponto positivo: Clareza técnica</div>
               </div>
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-gray-600">
                 <p className="mb-3">Outro aspecto frequentemente elogiado é a objetividade das aulas, sem enrolação teórica desnecessária, ideal para quem tem pressa.</p>
                 <div className="text-sm font-bold text-blue-600">Ponto positivo: Objetividade</div>
               </div>
            </div>
          </section>

          {/* Onde comprar */}
          <section className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Onde comprar o Tráfego Pago Descomplicado com segurança?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Para garantir sua vaga com segurança, acesso aos bônus e a garantia de 7 dias, a compra deve ser realizada exclusivamente através do site oficial na Hotmart.
            </p>
            
            <a 
              href={affiliateLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg shadow-green-900/20"
            >
              Acessar site oficial na Hotmart
              <ArrowRight className="w-5 h-5" />
            </a>
          </section>

          {/* Conclusão */}
          <section className="prose prose-lg prose-blue max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conclusão: Vale a pena?</h2>
            <p>
              Após analisar a proposta, o conteúdo e o custo-benefício, nossa conclusão é que <strong>sim, o Tráfego Pago Descomplicado vale a pena</strong>, especialmente para iniciantes.
            </p>
            <p>
              Ele não é uma pílula mágica que vai te deixar rico, mas é uma ferramenta educacional sólida e acessível para quem quer dominar uma das habilidades mais importantes do marketing digital hoje: comprar tráfego qualificado.
            </p>
            <p>
              Se você está disposto a estudar e aplicar, é um excelente ponto de partida.
            </p>
          </section>

          <div className="text-center pt-8">
            <a 
              href={affiliateLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-bold hover:underline"
            >
              Ir para o site oficial agora <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
