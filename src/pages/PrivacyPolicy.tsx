import { NewsHeader } from "@/components/news/NewsHeader";
import { NewsFooter } from "@/components/news/NewsFooter";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const rightsList = (t("privacyPolicy.rights.rightsList", { returnObjects: true }) as string[]) || [];

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      
      <main className="container py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("privacyPolicy.title")}</h1>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("privacyPolicy.general.title")}</h2>
            <p>{t("privacyPolicy.general.p1")}</p>
            <p>{t("privacyPolicy.general.p2")}</p>
            <p>{t("privacyPolicy.general.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("privacyPolicy.methods.title")}</h2>
            <p>{t("privacyPolicy.methods.p1")}</p>
            <p>{t("privacyPolicy.methods.p2")}</p>
            <p>{t("privacyPolicy.methods.p3")}</p>
            <p>{t("privacyPolicy.methods.p4")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("privacyPolicy.processed.title")}</h2>
            <p>{t("privacyPolicy.processed.p1")}</p>
            <p>{t("privacyPolicy.processed.p2")}</p>
            <p>{t("privacyPolicy.processed.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("privacyPolicy.processingMethods.title")}</h2>
            <p>{t("privacyPolicy.processingMethods.p1")}</p>
            <p>{t("privacyPolicy.processingMethods.p2")}</p>
            <p>{t("privacyPolicy.processingMethods.p3")}</p>
            <p>{t("privacyPolicy.processingMethods.p4")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("privacyPolicy.legalBasis.title")}</h2>
            <p>{t("privacyPolicy.legalBasis.p1")}</p>
            <p>{t("privacyPolicy.legalBasis.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">{t("privacyPolicy.rights.title")}</h2>
            <p>{t("privacyPolicy.rights.intro")}</p>
            <ul className="list-disc pl-6 space-y-2">
              {rightsList.map((right, index) => (
                <li key={index}>{right}</li>
              ))}
            </ul>
            <p>{t("privacyPolicy.rights.p1")}</p>
            <p>{t("privacyPolicy.rights.p2")}</p>
            <p>{t("privacyPolicy.rights.p3")}</p>
            <p>{t("privacyPolicy.rights.p4")}</p>
            <p>{t("privacyPolicy.rights.p5")}</p>
            <p>{t("privacyPolicy.rights.p6")}</p>
            <p>{t("privacyPolicy.rights.p7")}</p>
            <p>{t("privacyPolicy.rights.p8")}</p>
          </section>
        </div>
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default PrivacyPolicy;
