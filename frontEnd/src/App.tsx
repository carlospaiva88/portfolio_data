import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
import NotFound from "./pages/NotFound";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* <Route path="/artigos" element={<Articles />} />
      <Route path="/artigos/:slug" element={<ArticlePage />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/produtos/:slug" element={<ProductPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
