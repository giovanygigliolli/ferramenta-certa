import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Dicas e Guias para Pequenos Negócios',
  description: 'Artigos sobre gestão, marketing e ferramentas para ajudar sua empresa a crescer.',
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog Ferramenta Certa</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group h-full flex flex-col">
                <div className="h-48 bg-gray-200 w-full relative">
                   {/* Placeholder Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-blue-50 text-blue-200 text-4xl">IMG</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-600 font-medium text-sm mt-auto">Ler mais &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
