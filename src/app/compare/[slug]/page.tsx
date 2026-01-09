import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tools, comparisons } from '@/lib/data';
import { Check, Trophy, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const comparison = comparisons.find((c) => c.slug === params.slug);
  if (!comparison) return { title: 'Comparativo não encontrado' };
  
  const toolA = tools.find(t => t.id === comparison.toolA);
  const toolB = tools.find(t => t.id === comparison.toolB);

  if (!toolA || !toolB) return { title: 'Ferramentas não encontradas' };

  return {
    title: `${toolA.name} vs ${toolB.name}: Qual é melhor em 2025?`,
    description: `Comparativo detalhado: ${toolA.name} ou ${toolB.name}? Veja preços, funcionalidades e descubra qual vale mais a pena para seu negócio.`,
  };
}

export default function ComparePage({ params }: Props) {
  const comparison = comparisons.find((c) => c.slug === params.slug);
  
  if (!comparison) {
    notFound();
  }

  const toolA = tools.find(t => t.id === comparison.toolA);
  const toolB = tools.find(t => t.id === comparison.toolB);

  if (!toolA || !toolB) {
    notFound();
  }

  const winner = comparison.winnerId === toolA.id ? toolA : toolB;

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen pb-20">
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {toolA.name} <span className="text-blue-200">vs</span> {toolB.name}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Qual é a melhor opção para sua empresa? Analisamos os detalhes para você decidir.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
            {/* Winner Badge */}
            <div className="flex flex-col items-center mb-12">
               <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-sm mb-4 border border-yellow-200">
                 <Trophy className="w-4 h-4" /> Vencedor: {winner.name}
               </div>
               <p className="text-center text-gray-600 max-w-3xl">
                 {comparison.conclusion}
               </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b-2 border-gray-100 bg-gray-50 w-1/3 text-gray-500 font-medium">Recurso / Critério</th>
                    <th className="p-4 border-b-2 border-gray-100 bg-white w-1/3 font-bold text-lg text-center">{toolA.name}</th>
                    <th className="p-4 border-b-2 border-gray-100 bg-white w-1/3 font-bold text-lg text-center">{toolB.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.differences.map((diff, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 border-b border-gray-100 font-medium text-gray-700">{diff.feature}</td>
                      <td className={clsx(
                        "p-4 border-b border-gray-100 text-center",
                        diff.winner === 'A' ? "text-green-600 font-bold bg-green-50/30" : "text-gray-600"
                      )}>
                        {diff.toolAValue}
                      </td>
                      <td className={clsx(
                        "p-4 border-b border-gray-100 text-center",
                        diff.winner === 'B' ? "text-green-600 font-bold bg-green-50/30" : "text-gray-600"
                      )}>
                        {diff.toolBValue}
                      </td>
                    </tr>
                  ))}
                  {/* Rating Row */}
                   <tr>
                      <td className="p-4 border-b border-gray-100 font-medium text-gray-700">Avaliação Geral</td>
                      <td className="p-4 border-b border-gray-100 text-center font-bold text-lg">{toolA.rating}/5.0</td>
                      <td className="p-4 border-b border-gray-100 text-center font-bold text-lg">{toolB.rating}/5.0</td>
                   </tr>
                </tbody>
              </table>
            </div>

            {/* CTAs */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
               <div className="text-center p-6 bg-gray-50 rounded-xl">
                 <h3 className="font-bold text-xl mb-4">{toolA.name}</h3>
                 <a 
                   href={toolA.affiliateLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                 >
                   Testar {toolA.name} <ArrowRight className="w-4 h-4" />
                 </a>
               </div>
               <div className="text-center p-6 bg-gray-50 rounded-xl">
                 <h3 className="font-bold text-xl mb-4">{toolB.name}</h3>
                 <a 
                   href={toolB.affiliateLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                 >
                   Testar {toolB.name} <ArrowRight className="w-4 h-4" />
                 </a>
               </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
