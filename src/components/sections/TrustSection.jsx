import { siteContent } from "../../data/content";
import TrustBadge from "../ui/TrustBadge";

const TrustSection = () => {
  const { trust } = siteContent;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{trust.title}</h2>
          <p className="text-lg text-primary-200">
            Trusted care backed by professional excellence and community commitment.
          </p>
        </div>

        {/* Trust items grid */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {trust.items.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
            >
              <TrustBadge
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
