import React, { useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import Header from '@/components/Header';
import FooterPages from './FooterPages';
import { Button } from '@/components/ui/button';
import { articles } from "../data/articles";

const ARTICLES_PER_PAGE = 6;

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = articles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  return (
    <>
      <Header />
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* título */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Artigos
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Publicações sobre tecnologia, engenharia de dados e desenvolvimento.
              </p>
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {paginatedArticles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>

            {/* paginação */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-10 gap-2">
                <Button 
                  variant="outline" 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                >
                  Anterior
                </Button>
                <span className="px-3 py-2 text-sm text-muted-foreground">
                  Página {currentPage} de {totalPages}
                </span>
                <Button 
                  variant="outline" 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                >
                  Próxima
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Articles;
