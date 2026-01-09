import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tools } from '@/lib/data';
import { Star, Check, X, ArrowRight, ExternalLink } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return { title: 'Ferramenta não encontrada' };

  return {
    title: `Review ${tool.name} 2025: Vale a pena? Preço e Análise Completa`,
    description: `Confira nossa análise honesta sobre o ${tool.name}. Descubra se é bom, preços, prós e contras e se vale a pena para seu negócio.`,
  };
}

export default function ReviewPage({ params }: Props) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": tool.name,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web browser"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": tool.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Ferramenta Certa"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-gray-50 min-h-screen pb-20">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <Link href="/" className="hover:text-blue-600">Home</Link>
                  <span>/</span>
                  <span className="capitalize">{tool.category}</span>
                  <span>/</span>
                  <span className="text-gray-900 font-medium">Review {tool.name}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Review Completo: {tool.name} é bom?
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                  {tool.shortDescription}
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl text-center min-w-[200px]">
                <div className="text-4xl font-bold text-blue-600 mb-2">{tool.rating}/5.0</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[1,2,3,4,5].map(s => (
                     <Star key={s} className={`w-5 h-5 ${s <= tool.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div className="text-sm text-gray-500">Nota da Editoria</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Intro */}
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">O que é o {tool.name}?</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {tool.fullDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tool.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            {/* Pros & Cons */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
                <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Prós
                </h3>
                <ul className="space-y-3">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm">
                <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> Contras
                </h3>
                <ul className="space-y-3">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Best For / Not For */}
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Para quem indicamos?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Ideal para:</h4>
                  <ul className="space-y-2">
                    {tool.bestFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Não indicamos para:</h4>
                  <ul className="space-y-2">
                    {tool.notFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <X className="w-4 h-4 text-gray-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Preços e Planos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {tool.pricing.map((plan, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                    <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                           <Check className="w-3 h-3 text-green-500" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                 <a 
                  href={tool.affiliateLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  Ver tabela de preços completa no site oficial <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg sticky top-24">
              <div className="text-center mb-6">
                 {/* Placeholder Logo */}
                 <div className="w-20 h-20 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center text-gray-400 font-bold">LOGO</div>
                 <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                 <p className="text-gray-500 text-sm">Site Oficial</p>
              </div>
              
              <a 
                href={tool.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-blue-200 shadow-lg mb-3"
              >
                Testar Agora
              </a>
              <a 
                href={tool.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-gray-700 border border-gray-200 text-center py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Ver Preços Atualizados
              </a>
              
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-xs text-center text-gray-400">
                  Ao clicar nos links, podemos receber uma comissão sem custo adicional para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
