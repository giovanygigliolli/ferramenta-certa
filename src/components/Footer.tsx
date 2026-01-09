import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-bold text-lg mb-4 text-gray-700">FerramentaCerta</h3>
          
          <div className="mb-8 p-4 bg-white rounded-lg border border-gray-200 text-sm text-gray-600">
            <p>
              Este site não é oficial da Hotmart ou do produtor. O conteúdo tem caráter informativo e pode conter links de afiliado, 
              pelos quais podemos receber comissão sem custo adicional ao comprador.
            </p>
          </div>

          <div className="flex justify-center gap-6 text-sm text-gray-500 mb-8">
            <Link href="/sobre" className="hover:text-blue-600">Sobre</Link>
            <Link href="/termos" className="hover:text-blue-600">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-blue-600">Política de Privacidade</Link>
          </div>
          
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Ferramenta Certa. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
