import React from 'react';
import { Card, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  slug: string;
  imageUrl?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  category,
  date,
  slug,
  imageUrl,
}) => {
  
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="bg-card/50 border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
      {imageUrl && (
        <div className="w-full h-40 overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <CardHeader className="px-4 pt-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-data-blue text-data-blue">
            {category}
          </Badge>
          <span className="text-sm text-muted-foreground">{formattedDate}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mt-2 truncate" title={title}>
          {title}
        </h3>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-2">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <Button variant="hero" className="inline-flex items-center gap-2" asChild>
          <Link to={`/artigos/${slug}`}>
            Ler artigo <ExternalLink size={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
