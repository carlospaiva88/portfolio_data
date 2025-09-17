import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import Header from "./Header";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <div className="py-20 text-center text-foreground">Produto não encontrado.</div>;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.imageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: product.price.replace(/^R\$\s?/, ""),
      url: product.url,
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
    <Header />
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-card/30">
      <Helmet>
        <title>{product.title} | DataPortfolio</title>
        <meta name="description" content={product.description} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Produtos", href: "/produtos" },
          { label: product.title, href: "#" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-foreground">{product.title}</h1>

      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full rounded-lg object-cover mb-8"
        loading="lazy"
      />

      <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        <p>{product.description}</p>
        <p className="font-bold text-lg mt-6">Preço: {product.price}</p>
      </article>

      <Button variant="hero" size="sm" className="mt-8" asChild>
        <a href={product.url} target="_blank" rel="nofollow noopener noreferrer">
          Ver no site do affiliate
        </a>
      </Button>
    </main>
    </>
  );
};

export default ProductPage;
