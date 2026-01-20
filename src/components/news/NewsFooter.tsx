import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function NewsFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted py-6 mt-12">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              to="/privacy-policy" 
              className="text-muted-foreground hover:text-foreground underline transition-colors"
            >
              {t("footer.privacyPolicy")}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/terms-of-use" 
              className="text-muted-foreground hover:text-foreground underline transition-colors"
            >
              {t("footer.termsOfUse")}
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}