import { NewsHeader } from "@/components/news/NewsHeader";
import { Breadcrumb } from "@/components/news/Breadcrumb";
import { ArticleMeta } from "@/components/news/ArticleMeta";
import { ArticleContent } from "@/components/news/ArticleContent";
import { VideoPlaceholder } from "@/components/news/VideoPlaceholder";
import { TrendingSidebar } from "@/components/news/TrendingSidebar";
import { NewsFooter } from "@/components/news/NewsFooter";
import newsHeroImage from "@/assets/news-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      
      <main className="container py-4">
        <Breadcrumb items={["Accueil", "Économie", "Technologie"]} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article */}
          <article className="lg:col-span-8">
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="news-tag">Économie</span>
              <span className="news-tag bg-news-headline">Technologie</span>
            </div>
            
            {/* Headline */}
            <h1 className="news-headline text-3xl md:text-4xl lg:text-[2.75rem] mb-4">
              Following recent warnings from Elon Musk about the accelerating role of artificial intelligence in global financial systems…
            </h1>
            
            {/* Subheadline */}
            <p className="news-subhead text-lg md:text-xl mb-6 leading-relaxed">
              Une nouvelle initiative soutenue par les institutions financières françaises attire l'attention des investisseurs et du grand public
            </p>
            
            {/* Article Meta */}
            <ArticleMeta
              author="Olivier Chicheportiche"
              role="Journaliste économie & technologies"
              publishDate="11 décembre 2024"
              publishTime="06h07"
              commentCount={247}
            />
            
            {/* Featured Image/Video */}
            <VideoPlaceholder 
              imageUrl={newsHeroImage}
              caption="Intelligence artificielle et systèmes financiers : une révolution en marche — Crédit : INFO Business"
            />
            
            {/* Article Body */}
            <ArticleContent />
            
            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-news-divider">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-muted-foreground mr-2">Tags :</span>
                {["Intelligence artificielle", "Finance", "Innovation", "France", "Elon Musk", "Banque de France"].map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="text-sm bg-muted px-3 py-1 rounded-sm hover:bg-accent transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Related Articles */}
            <section className="mt-10">
              <h3 className="news-section-title">À lire aussi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    category: "Technologie",
                    title: "Comment l'IA transforme les métiers de la finance en France",
                    time: "Hier à 14h30",
                  },
                  {
                    category: "Économie",
                    title: "Les start-ups françaises de la fintech lèvent 2 milliards d'euros en 2024",
                    time: "10 décembre 2024",
                  },
                ].map((article, index) => (
                  <article key={index} className="group cursor-pointer">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h4 className="font-headline text-base font-semibold text-foreground leading-snug mt-1 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2">{article.time}</p>
                  </article>
                ))}
              </div>
            </section>
          </article>
          
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <TrendingSidebar />
            
            {/* Newsletter Signup */}
            <div className="bg-news-nav text-news-nav p-5 rounded-sm">
              <h3 className="font-headline text-lg font-bold mb-2">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Recevez chaque matin l'essentiel de l'actualité économique
              </p>
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-3 py-2 rounded-sm text-foreground bg-background text-sm mb-3"
              />
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity">
                S'inscrire
              </button>
            </div>
            
            {/* Ad Placeholder */}
            <div className="bg-muted aspect-[4/5] rounded-sm flex items-center justify-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Publicité
              </span>
            </div>
          </aside>
        </div>
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default Index;
