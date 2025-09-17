// components/Breadcrumbs.tsx
import React from 'react';
import { Link } from 'react-router-dom'; 

type BreadcrumbItem = { label: string; href: string };

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <div className="flex items-center text-sm text-muted-foreground mb-6">
    {items.map((item, index) => (
      <React.Fragment key={item.href}>
        {index < items.length - 1 ? (
          <>
            <Link
              to={item.href}
              className="hover:text-data-blue transition-colors duration-300"
            >
              {item.label}
            </Link>
            <span className="mx-2 opacity-70">›</span>
          </>
        ) : (
          <span className="font-medium text-foreground">{item.label}</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

export default Breadcrumbs;
