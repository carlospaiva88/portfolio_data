import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Pagination } from "@/components/ Pagination";
import Header from "./Header";

const PRODUCTS_PER_PAGE = 6;
const categories = ["Todos", "Acessórios", "Jogos", "Livros"];

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    currentCategory === "Todos"
      ? products
      : products.filter((p) => p.category === currentCategory);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
    <Header />
    
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Produtos Recomendados
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ferramentas, cursos e serviços que recomendo para comunidade dev.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md font-medium ${
                  currentCategory === category
                    ? "bg-gradient-primary text-white"
                    : "bg-card/50 text-muted-foreground hover:bg-gradient-primary hover:text-white transition-colors"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Products;
