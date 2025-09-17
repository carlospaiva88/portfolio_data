// data/articles.ts

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;       // ISO 8601 string
  imageUrl?: string;
  author: string;
  content: string;    // HTML content
}

export const articles: Article[] = [
  {
    slug: "otimizando-data-pipelines-no-aws-glue",
    title: "Otimizando Data Pipelines no AWS Glue",
    description: "Melhore performance e custo em ETLs Python e PySpark no AWS.",
    category: "Cloud",
    date: "2025-09-17T10:00:00-03:00",
    imageUrl: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
    author: "Carlos Paiva",
    content: `
      <h2>Introdução</h2>
      <p>Neste artigo, exploro como melhorar desempenho e custo em ETLs Python e PySpark no AWS Glue, a ferramenta serverless poderosa da AWS para integração de dados.</p>
      <h2>Detecção automática de esquemas</h2>
      <p>O Glue permite que você detecte esquemas de dados mesmo quando eles mudam, facilitando ETLs dinâmicos.</p>
      <h2>Escalabilidade e custo</h2>
      <p>A execução serverless reduz custos e escala automaticamente conforme a demanda.</p>
      <h2>Conclusão</h2>
      <p>Com as estratégias certas, você otimiza seu pipeline e ganha velocidade nos processos de dados.</p>
    `,
  },
  {
    slug: "react-server-components",
    title: "React Server Components: Desvendando o Futuro",
    description: "Como os React Server Components aceleram seus apps React.",
    category: "Frontend",
    date: "2025-09-10T14:00:00-03:00",
    imageUrl: "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg",
    author: "Carlos Paiva",
    content: `
      <h2>O que são React Server Components?</h2>
      <p>Componentes que são renderizados no servidor, enviando código mais leve para o cliente.</p>
      <h2>Benefícios</h2>
      <p>Reduzem o tempo de carregamento, melhoram SEO e simplificam a distribuição.</p>
      <h2>Como usar</h2>
      <p>Conheça as APIs novas de React para criar Server Components no seu projeto.</p>
      <h2>Exemplos práticos</h2>
      <p>Vamos ver exemplos e casos reais que mostram ganho de performance.</p>
    `,
  },
  {
    slug: "aprenda-docker-de-zero",
    title: "Aprenda Docker do Zero e Melhore sua Produtividade",
    description: "Guia completo para iniciantes entenderem Docker e containerização.",
    category: "DevOps",
    date: "2025-09-10T10:00:00-03:00",
    imageUrl: "https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg",
    author: "Carlos Paiva",
    content: `
      <h2>Introdução ao Docker</h2>
      <p>Docker mudou o conceito de ambientes isolados para desenvolvimento e produção.</p>
      <h2>Containers vs Virtual Machines</h2>
      <p>Entenda as diferenças e vantagens dos containers.</p>
      <h2>Configurações básicas</h2>
      <p>Como criar, rodar e gerenciar containers no seu dia a dia.</p>
      <h2>Conclusão</h2>
      <p>Docker agiliza desenvolvimento e entrega de software.</p>
    `,
  },
  {
    slug: "segredos-para-um-backend-escala",
    title: "Segredos para Construir um Backend Escalável",
    description: "Dicas e boas práticas para fazer seu backend escalar.",
    category: "Backend",
    date: "2025-09-08T14:00:00-03:00",
    imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    author: "Carlos Paiva",
    content: `
      <h2>Arquitetura escalável</h2>
      <p>Divide responsabilidades com microserviços e APIs.</p>
      <h2>Gerenciamento de estado</h2>
      <p>Como utilizar cache, filas e bancos adequados.</p>
      <h2>Monitoramento e testes</h2>
      <p>Invista em observabilidade para evitar falhas.</p>
      <h2>Finalizando</h2>
      <p>Escalabilidade é mais que hardware, explicamos como.</p>
    `,
  },
  {
    slug: "tendencias-de-inteligencia-artificial",
    title: "Tendências de Inteligência Artificial para 2025",
    description: "Novidades e desafios no mundo da IA.",
    category: "IA",
    date: "2025-09-05T09:00:00-03:00",
    imageUrl: "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
    author: "Carlos Paiva",
    content: `
      <h2>Modelos generativos</h2>
      <p>Transformando criatividade com GPT-4, DALL·E e outros.</p>
      <h2>IA explicável</h2>
      <p>Importância da transparência e justiça nos modelos.</p>
      <h2>2025 e além</h2>
      <p>Como novas tecnologias estão moldando o futuro.</p>
    `,
  },
  {
    slug: "cloud-para-desenvolvedores",
    title: "Cloud Computing para Desenvolvedores: O Guia Completo",
    description: "Conheça plataformas e estratégias cloud para desenvolvimento.",
    category: "Cloud",
    date: "2025-09-02T11:00:00-03:00",
    imageUrl: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
    author: "Carlos Paiva",
    content: `
      <h2>Por que migrar para a nuvem?</h2>
      <p>Benefícios de agilidade, escalabilidade e custo.</p>
      <h2>Principais provedores</h2>
      <p>Visão geral AWS, Azure e Google Cloud.</p>
      <h2>Ferramentas para devs</h2>
      <p>Serviços para backend, storage e CI/CD.</p>
    `,
  },
  {
    slug: "melhores-praticas-para-seguranca-web",
    title: "Melhores Práticas de Segurança Web para 2025",
    description: "Como proteger suas aplicações de ameaças atuais.",
    category: "Segurança",
    date: "2025-08-30T15:00:00-03:00",
    imageUrl: "https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg",
    author: "Carlos Paiva",
    content: `
      <h2>Proteja contra explorações comuns</h2>
      <p>Cross-site scripting, CSRF e injeção SQL explicados.</p>
      <h2>Autenticação segura</h2>
      <p>Melhores práticas com OAuth e tokens JWT.</p>
      <h2>Monitoramento e updates</h2>
      <p>Importância da atualização constante dos sistemas.</p>
    `,
  }
];
