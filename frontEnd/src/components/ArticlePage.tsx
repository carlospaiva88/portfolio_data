import React from "react";
import { useParams, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs";
import { Button } from "../components/ui/button";
import { articles } from "../data/articles";
import Header from "./Header";
import FooterPages from "./FooterPages";



const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div className="py-20 text-center text-foreground">Artigo não encontrado.</div>;
  }

  const publishedAt = new Date(article.date);
  const formattedDate = publishedAt.toLocaleDateString("pt-BR", {
    day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Person", name: article.author },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://seusite.com/artigos/${slug}` }
  };

  return (
    <>
    
    <Header />
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
      <HelmetProvider>
        <title>{article.title} | DataPortfolio</title>
        <meta name="description" content={article.description} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </HelmetProvider>

      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Artigos", href: "/artigos" },
          { label: article.title, href: `#` },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-foreground">
        {article.title}
      </h1>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <span>{article.author}</span>
        <span>•</span>
        <time dateTime={article.date}>{formattedDate}</time>
      </div>

      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full rounded-lg object-cover mb-8"
        style={{ maxHeight: "400px" }}
        loading="lazy"
      />

      <article
        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-12">
        <Button variant="hero" asChild>
          <Link to="/artigos">Ver todos os artigos</Link>
        </Button>
      </div>
    </main>
    <FooterPages />
    </>
  );
};

export default ArticlePage;
