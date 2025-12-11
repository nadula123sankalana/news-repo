import { Check } from "lucide-react";

export function ArticleContent() {
  return (
    <article className="news-body space-y-6">
      <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-headline first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary">
        Following recent warnings from Elon Musk about the accelerating role of artificial intelligence in global financial systems, a new business initiative supported by leading French financial institutions has gained significant attention.
      </p>

      <p>
        The initiative aims to provide citizens with access to AI-assisted income-generation opportunities previously reserved for experts.
      </p>

      <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-muted/50">
        <p className="text-lg italic text-news-subhead">
          "Artificial intelligence is transforming the way we understand financial markets. This initiative represents a major step toward democratizing these technologies."
        </p>
        <cite className="text-sm text-muted-foreground mt-2 block not-italic">
          — Official Source, Bank of France
        </cite>
      </blockquote>

      <p>
        Recent initiatives by the French government and the Bank of France aim to encourage entrepreneurship and innovation by giving citizens structured access to modern digital systems.
      </p>

      <p>
        According to official sources, this initiative focuses on enabling individuals to access automated systems that support modern financial decision-making. The objective is to simplify participation and remove traditional barriers typically associated with complex financial environments.
      </p>

      <h2 className="font-headline text-2xl font-bold text-news-headline mt-10 mb-4">
        Key Highlights
      </h2>

      <ul className="space-y-3 my-6">
        {[
          "Secure and regulated framework",
          "Accessible to beginners",
          "Transparent operational model",
          "Backed by public institutions",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-headline text-2xl font-bold text-news-headline mt-10 mb-4">
        Expert Commentary
      </h2>

      <p>
        Financial experts emphasize that the program is designed to be inclusive and educational. Participants receive step-by-step onboarding and ongoing assistance.
      </p>

      <div className="bg-news-sidebar p-6 rounded my-8">
        <h3 className="font-headline text-lg font-bold text-news-headline mb-3">
          Project Background
        </h3>
        <p className="text-sm">
          The program emerged from extensive research into digital transformation and economic resilience. It reflects France's commitment to innovation while maintaining strict regulatory oversight.
        </p>
      </div>

      <h2 className="font-headline text-2xl font-bold text-news-headline mt-10 mb-4">
        How It Works
      </h2>

      <ol className="space-y-4 my-6">
        {[
          "Register using the official form",
          "Connect with a personal consultant",
          "Complete the minimum activation requirement",
          "Begin observing system-supported activity within a few days",
        ].map((step, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              {index + 1}
            </span>
            <span className="pt-1">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="font-headline text-2xl font-bold text-news-headline mt-10 mb-4">
        Impact on France
      </h2>

      <p>
        The initiative strengthens the national economy by empowering individuals, promoting technological adoption, and reinforcing trust through institutional support.
      </p>
    </article>
  );
}