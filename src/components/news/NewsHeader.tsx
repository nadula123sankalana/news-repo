import { Search, User, Menu } from "lucide-react";
import { useState } from "react";

const categories = [
  "Économie",
  "Technologie",
  "Entreprises",
  "France",
  "International",
  "Marchés",
  "Opinions",
];

export function NewsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="bg-news-nav text-news-nav">
        <div className="container flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Mercredi 11 décembre 2024</span>
            <span className="text-primary font-semibold">DIRECT</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-primary transition-colors">
              <User className="w-4 h-4" />
            </button>
            <button className="hover:text-primary transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div className="container py-3 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 hover:bg-muted rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground font-bold text-xl px-2 py-1 rounded-sm">
                INFO
              </div>
              <span className="font-headline text-2xl font-bold text-foreground">
                Business
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <span>Newsletter</span>
            <span className="text-border">|</span>
            <span>Podcasts</span>
            <span className="text-border">|</span>
            <span>Vidéos</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:block border-b border-border">
        <div className="container">
          <ul className="flex items-center gap-6 h-12">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  className="news-nav-item text-foreground hover:text-primary transition-colors"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-b border-border bg-background">
          <ul className="container py-4 space-y-3">
            {categories.map((category) => (
              <li key={category}>
                <a
                  href="#"
                  className="block text-foreground hover:text-primary transition-colors font-medium"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
