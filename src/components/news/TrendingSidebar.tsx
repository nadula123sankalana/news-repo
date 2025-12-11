interface TrendingItem {
  category: string;
  title: string;
  time: string;
}

const trendingItems: TrendingItem[] = [
  {
    category: "Marchés",
    title: "Le CAC 40 termine en hausse de 0,8% porté par le secteur technologique",
    time: "Il y a 2h",
  },
  {
    category: "Entreprises",
    title: "TotalEnergies annonce un investissement majeur dans les énergies renouvelables",
    time: "Il y a 3h",
  },
  {
    category: "International",
    title: "La Fed maintient ses taux : ce que cela signifie pour les marchés européens",
    time: "Il y a 4h",
  },
  {
    category: "France",
    title: "Réforme des retraites : les nouvelles mesures annoncées par le gouvernement",
    time: "Il y a 5h",
  },
];

export function TrendingSidebar() {
  return (
    <aside className="bg-news-sidebar p-4 rounded-sm">
      <h3 className="news-section-title">À la Une</h3>
      <div className="space-y-4">
        {trendingItems.map((item, index) => (
          <article key={index} className="group cursor-pointer">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              {item.category}
            </span>
            <h4 className="font-headline text-sm font-semibold text-foreground leading-snug mt-1 group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
            {index < trendingItems.length - 1 && (
              <div className="news-divider mt-4" />
            )}
          </article>
        ))}
      </div>
    </aside>
  );
}
