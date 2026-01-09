import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-bold text-lg mb-4 text-gray-700">FerramentaCerta</h3>
          
          <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200 text-sm text-gray-600 shadow-sm">
            <p className="mb-2 font-semibold text-gray-800">Aviso Legal:</p>
            <p className="mb-2">
              Este site não é o site oficial do produto Tráfego Pago Descomplicado. 
              Este site não é oficial da Hotmart nem do produtor do curso.
            </p>
            <p className="mb-2">
              Os resultados podem variar de pessoa para pessoa e dependem da dedicação e aplicação do método. Não garantimos ganhos financeiros.
            </p>
            <p>
              Este site atua como afiliado e pode receber comissão pelas vendas indicadas através dos links, sem nenhum custo adicional para o comprador.
            </p>
          </div>

          <div className="flex justify-center gap-6 text-sm text-gray-500 mb-8">
            <Link href="/sobre" className="hover:text-blue-600 transition-colors">Sobre</Link>
            <Link href="/termos" className="hover:text-blue-600 transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-blue-600 transition-colors">Política de Privacidade</Link>
          </div>
          
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Ferramenta Certa. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
