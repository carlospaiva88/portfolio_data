import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProductCard = ({
  title,
  description,
  category,
  price,
  url,
  imageUrl,
}: {
  title: string;
  description: string;
  category: string;
  price: string;
  url: string;
  imageUrl?: string;
}) => (
  <Card className="bg-card/50 border-border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group overflow-hidden">
    {imageUrl && (
      <div className="w-full h-48 overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <CardHeader className="px-4 pt-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-data-blue text-data-blue">
          {category}
        </Badge>
      </div>
      <h3 className="text-lg font-semibold text-foreground mt-2 truncate" title={title}>
        {title}
      </h3>
    </CardHeader>
    <CardContent className="px-4 pb-4 pt-2">
      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{description}</p>
      <div className="font-bold text-base mb-4">{price}</div>
      <Button variant="hero" asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener nofollow"
          className="w-full inline-flex items-center justify-center gap-2"
        >
          Comprar produto <ExternalLink size={16} />
        </a>
      </Button>
    </CardContent>
  </Card>
);
