import { Category, Tool, BlogPost, Comparison } from './types';

export const categories: Category[] = [
  {
    id: 'management',
    name: 'Sistemas de Gestão',
    slug: 'sistemas-de-gestao',
    description: 'ERPs e CRMs para organizar seu negócio.'
  },
  {
    id: 'site-builders',
    name: 'Criadores de Sites',
    slug: 'criadores-de-sites',
    description: 'Ferramentas para criar sites sem programar.'
  },
  {
    id: 'scheduling',
    name: 'Agendamento',
    slug: 'ferramentas-de-agendamento',
    description: 'Automatize sua agenda e reservas.'
  },
  {
    id: 'payments',
    name: 'Pagamentos',
    slug: 'plataformas-de-pagamento',
    description: 'Receba pagamentos online com segurança.'
  }
];

export const tools: Tool[] = [
  {
    id: 'conta-azul',
    name: 'Conta Azul',
    slug: 'conta-azul',
    shortDescription: 'ERP completo para pequenas empresas brasileiras.',
    fullDescription: 'O Conta Azul é um sistema de gestão online (ERP) feito para o pequeno empreendedor brasileiro. Ele integra vendas, financeiro e contabilidade em uma única plataforma fácil de usar.',
    logo: '/logos/conta-azul.png',
    category: 'management',
    rating: 4.8,
    affiliateLink: 'https://contaazul.com/?ref=affiliate',
    website: 'https://contaazul.com',
    pros: ['Interface muito intuitiva', 'Integração direta com contador', 'Emissão de notas fiscais simplificada', 'App mobile funcional'],
    cons: ['Preço pode ser alto para quem está começando', 'Falta gestão de produção complexa'],
    pricing: [
      { name: 'Essencial', price: 'R$ 129,90/mês', features: ['1 usuário', 'Faturamento até R$ 100k'] },
      { name: 'Controle', price: 'R$ 209,90/mês', features: ['3 usuários', 'Faturamento livre'] }
    ],
    bestFor: ['Pequenas empresas de serviços', 'Varejo simples'],
    notFor: ['Indústrias complexas', 'Grandes corporações'],
    features: ['Controle Financeiro', 'Emissão de NF-e', 'Conciliação Bancária', 'Gestão de Vendas']
  },
  {
    id: 'bling',
    name: 'Bling',
    slug: 'bling',
    shortDescription: 'ERP versátil e econômico, ideal para e-commerce.',
    fullDescription: 'O Bling é famoso por seu custo-benefício e poderosas integrações com marketplaces e plataformas de e-commerce.',
    logo: '/logos/bling.png',
    category: 'management',
    rating: 4.5,
    affiliateLink: 'https://bling.com.br/?ref=affiliate',
    website: 'https://bling.com.br',
    pros: ['Preço muito acessível', 'Muitas integrações de e-commerce', 'Estoque centralizado'],
    cons: ['Interface um pouco datada', 'Suporte pode demorar', 'Curva de aprendizado inicial'],
    pricing: [
      { name: 'Cromo', price: 'R$ 30,00/mês', features: ['Usuários ilimitados', 'Espaço 20MB'] },
      { name: 'Cobalto', price: 'R$ 60,00/mês', features: ['Integrações de logística'] }
    ],
    bestFor: ['E-commerce', 'Vendedores de Marketplace'],
    notFor: ['Empresas de serviços que buscam UX premium'],
    features: ['Gestão de Estoque', 'Integração Marketplaces', 'Emissão de Notas', 'Conta Digital']
  },
  {
    id: 'wix',
    name: 'Wix',
    slug: 'wix',
    shortDescription: 'Crie sites impressionantes com arrastar e soltar.',
    fullDescription: 'Wix é a plataforma líder mundial em criação de sites, oferecendo liberdade total de design.',
    logo: '/logos/wix.png',
    category: 'site-builders',
    rating: 4.7,
    affiliateLink: 'https://wix.com/?ref=affiliate',
    website: 'https://wix.com',
    pros: ['Templates lindos', 'Editor drag-and-drop verdadeiro', 'App market extenso'],
    cons: ['Site pode ficar pesado', 'Difícil migrar depois'],
    pricing: [
      { name: 'Light', price: 'R$ 29,00/mês', features: ['Domínio grátis 1 ano', 'Sem anúncios'] }
    ],
    bestFor: ['Portfólios', 'Sites institucionais', 'Pequenas lojas'],
    notFor: ['Grandes portais de conteúdo', 'E-commerce complexo'],
    features: ['Editor Visual', 'Wix ADI', 'Hospedagem Inclusa']
  },
  {
    id: 'rd-station',
    name: 'RD Station',
    slug: 'rd-station',
    shortDescription: 'Automação de Marketing líder no Brasil.',
    fullDescription: 'Plataforma tudo-em-um para gerenciar e automatizar suas ações de Marketing Digital.',
    logo: '/logos/rd.png',
    category: 'management',
    rating: 4.9,
    affiliateLink: 'https://rdstation.com',
    website: 'https://rdstation.com',
    pros: ['Fácil de usar', 'Conteúdo educativo excelente', 'Suporte em português'],
    cons: ['Preço em dólar/alto', 'Algumas limitações no editor de email'],
    pricing: [
      { name: 'Light', price: 'R$ 69/mês', features: ['Email marketing', 'Landing pages'] }
    ],
    bestFor: ['Pequenas e médias empresas', 'Agências'],
    notFor: ['Quem só precisa enviar emails simples'],
    features: ['Email Marketing', 'Landing Pages', 'Lead Scoring', 'Automação']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Qual o melhor sistema para pequeno negócio em 2025?',
    slug: 'melhor-sistema-pequeno-negocio-2025',
    excerpt: 'Analisamos as principais opções do mercado para ajudar você a decidir.',
    content: 'Escolher um sistema de gestão é uma tarefa difícil...',
    date: '2025-01-05',
    author: 'Equipe Ferramenta Certa'
  },
  {
    id: '2',
    title: 'Conta Azul ou Bling: Qual escolher?',
    slug: 'conta-azul-ou-bling',
    excerpt: 'Um comparativo detalhado entre os dois gigantes do ERP brasileiro.',
    content: 'Ambos são excelentes, mas atendem públicos diferentes...',
    date: '2025-01-02',
    author: 'Equipe Ferramenta Certa'
  }
];

export const comparisons: Comparison[] = [
  {
    id: 'conta-azul-vs-bling',
    slug: 'conta-azul-vs-bling',
    toolA: 'conta-azul',
    toolB: 'bling',
    winnerId: 'conta-azul', // Context dependent, but let's pick one for the structure
    conclusion: 'Se você busca facilidade de uso e gestão financeira impecável para serviços, vá de Conta Azul. Se seu foco é e-commerce e preço baixo, o Bling é imbatível.',
    differences: [
      { feature: 'Preço Inicial', toolAValue: 'R$ 129,90', toolBValue: 'R$ 30,00', winner: 'B' },
      { feature: 'Interface (UX)', toolAValue: 'Moderna e Intuitiva', toolBValue: 'Funcional, mas datada', winner: 'A' },
      { feature: 'E-commerce', toolAValue: 'Básico', toolBValue: 'Avançado', winner: 'B' }
    ]
  }
];
