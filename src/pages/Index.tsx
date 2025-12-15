import { NewsHeader } from "@/components/news/NewsHeader";
import { ArticleMeta } from "@/components/news/ArticleMeta";
import { ArticleContent } from "@/components/news/ArticleContent";
import { VideoPlaceholder } from "@/components/news/VideoPlaceholder";
import { NewsFooter } from "@/components/news/NewsFooter";
import { OptInForm } from "@/components/news/OptInForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      
      <main className="container py-8 max-w-5xl lg:max-w-6xl">
        {/* Headline */}
        <h1 className="news-headline text-3xl md:text-4xl lg:text-[2.5rem] mb-4">
          Following recent warnings from Elon Musk about the accelerating role of artificial intelligence in global financial systems…
        </h1>
        
        {/* Subheadline */}
        <p className="news-subhead text-lg md:text-xl mb-6 leading-relaxed">
          A new business initiative supported by leading French financial institutions is gaining significant attention.
        </p>
        
        {/* Article Meta */}
        <ArticleMeta
          author="David Richardson"
          role="Business & Technology Correspondent"
          publishDate="December 11, 2024"
          publishTime="06:07 AM"
          commentCount={247}
        />
        
        {/* Featured Image/Video */}
        <VideoPlaceholder 
          imageUrl="/elone.jpg"
          caption="Artificial intelligence and financial systems: a revolution in progress — Credit: INFO Business"
        />
        
        {/* Article Body */}
        <ArticleContent />
        
        {/* Opt-In Form */}
        <OptInForm />
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default Index;