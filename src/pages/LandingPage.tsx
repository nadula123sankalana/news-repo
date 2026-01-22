import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsHeader } from "@/components/news/NewsHeader";
import { NewsFooter } from "@/components/news/NewsFooter";

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NewsHeader />
      
      <main className="flex-1">
        {/* Hero Section with Gradient Background */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
          <div className="container relative py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-left space-y-8">
              {/* Main Heading */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-headline font-bold text-foreground leading-tight">
                {t("landing.title")}
              </h1>

              {/* Content Section */}
              <div className="max-w-5xl mx-auto mt-8 text-left">
                <p className="text-lg md:text-xl leading-7 text-news-body first-letter:text-6xl first-letter:font-headline first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none mb-6">
                  {t("landing.content.p1")}
                </p>
                <p className="text-lg md:text-xl leading-7 text-news-body">
                  {t("landing.content.p2")}
                </p>
              </div>

              {/* Read More Button */}
              <div className="pt-8">
                <Button
                  onClick={() => navigate("/article")}
                  size="lg"
                  className="h-14 text-lg font-semibold px-8 group hover:scale-105 transition-transform shadow-lg"
                >
                  {t("landing.readMore")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Scroll Indicator */}
              <div className="pt-8 flex flex-col items-center gap-2 text-xs text-muted-foreground">
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                </div>
                <span>{t("landing.scrollHint")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
              <div className="space-y-4 text-center">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
                  {t("landing.info.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("landing.info.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default LandingPage;
