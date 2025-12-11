import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: string[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground py-3">
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="w-3 h-3" />}
          <a
            href="#"
            className={`hover:text-primary transition-colors ${
              index === items.length - 1 ? "text-foreground font-medium" : ""
            }`}
          >
            {item}
          </a>
        </span>
      ))}
    </nav>
  );
}
