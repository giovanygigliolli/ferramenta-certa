import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolCard from '@/components/ToolCard';
import { tools, categories } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Handle 'all' case
  if (params.slug === 'all') {
    return {
      title: 'Todas as Ferramentas - Ferramenta Certa',
      description: 'Lista completa de ferramentas online para pequenos negócios.',
    };
  }

  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return { title: 'Categoria não encontrada' };

  return {
    title: `${category.name}: Melhores Ferramentas em 2025`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  let categoryName = '';
  let categoryDescription = '';
  let filteredTools = [];

  if (params.slug === 'all') {
    categoryName = 'Todas as Ferramentas';
    categoryDescription = 'Explore nossa lista completa de softwares e plataformas.';
    filteredTools = tools;
  } else {
    const category = categories.find((c) => c.slug === params.slug);
    
    if (!category) {
      notFound();
    }
    
    categoryName = category.name;
    categoryDescription = category.description;
    filteredTools = tools.filter((t) => t.category === category.id);
  }

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryName}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{categoryDescription}</p>
          </div>
          
          {filteredTools.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p>Nenhuma ferramenta encontrada nesta categoria ainda.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
