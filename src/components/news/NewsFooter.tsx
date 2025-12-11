const footerLinks = {
  "Navigation": ["Économie", "Technologie", "Entreprises", "Marchés", "International"],
  "Services": ["Newsletter", "Podcasts", "Vidéos", "Archives", "RSS"],
  "À propos": ["Qui sommes-nous", "Rédaction", "Publicité", "Recrutement", "Contact"],
};

const legalLinks = [
  "Mentions légales",
  "Politique de confidentialité",
  "CGU",
  "Gestion des cookies",
  "Contact",
];

export function NewsFooter() {
  return (
    <footer className="bg-news-nav text-news-nav mt-12">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground font-bold text-lg px-2 py-0.5 rounded-sm">
                INFO
              </div>
              <span className="font-headline text-xl font-bold">Business</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              L'actualité économique et financière en France et dans le monde.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <ul className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              {legalLinks.map((link, index) => (
                <li key={link} className="flex items-center gap-4">
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">
              © 2024 INFO Business. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
