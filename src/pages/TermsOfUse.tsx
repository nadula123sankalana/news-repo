import { NewsHeader } from "@/components/news/NewsHeader";
import { NewsFooter } from "@/components/news/NewsFooter";
import { useTranslation } from "react-i18next";

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      
      <main className="container py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("termsOfUse.title")}</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("termsOfUse.general.title")}</h2>
            <p>{t("termsOfUse.general.p1")}</p>
            <p>{t("termsOfUse.general.p2")}</p>
            <p>{t("termsOfUse.general.p3")}</p>
            <p>{t("termsOfUse.general.p4")}</p>
            <p>{t("termsOfUse.general.p5")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("termsOfUse.content.title")}</h2>
            <p>{t("termsOfUse.content.p1")}</p>
            <p>{t("termsOfUse.content.p2")}</p>
            <p>{t("termsOfUse.content.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("termsOfUse.service.title")}</h2>
            <p>{t("termsOfUse.service.p1")}</p>
            <p>{t("termsOfUse.service.p2")}</p>
            <p>{t("termsOfUse.service.p3")}</p>
            <p>{t("termsOfUse.service.p4")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("termsOfUse.ipRights.title")}</h2>
            <p>{t("termsOfUse.ipRights.p1")}</p>
            <p>{t("termsOfUse.ipRights.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("termsOfUse.liability.title")}</h2>
            <p>{t("termsOfUse.liability.p1")}</p>
            <p>{t("termsOfUse.liability.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("termsOfUse.other.title")}</h2>
            <p>{t("termsOfUse.other.p1")}</p>
            <p>{t("termsOfUse.other.p2")}</p>
            <p>{t("termsOfUse.other.p3")}</p>
          </section>
        </div>
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default TermsOfUse;
