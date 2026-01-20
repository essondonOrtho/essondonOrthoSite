import { siteContent } from "../../data/content";
import Logo from "./Logo";

const Footer = () => {
  const { clinic, footer } = siteContent;

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-semibold tracking-tight text-white">
                Essendon
              </span>
              <br />
              <span className="text-sm font-medium tracking-widest text-primary-400 uppercase">
                Orthopaedics
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Specialist orthopaedic care in Melbourne&apos;s inner north west.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm space-y-2">
              <p>
                {clinic.address.street}
                <br />
                {clinic.address.suburb}, {clinic.address.state}{" "}
                {clinic.address.postcode}
              </p>
              <p>
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {clinic.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${clinic.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {clinic.email}
                </a>
              </p>
            </address>
          </div>

          {/* Hours column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <ul className="text-sm space-y-2">
              <li>{clinic.hours.weekdays}</li>
              <li>{clinic.hours.friday}</li>
              <li>{clinic.hours.weekend}</li>
            </ul>
          </div>

          {/* Links column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={footer.externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  {footer.externalLink.label}
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation logos */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-xs text-neutral-500 uppercase tracking-wider">
                Accredited by
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-neutral-400">
                  FRACS
                </span>
                <span className="text-sm font-semibold text-neutral-400">
                  FAOrthA
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-500">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
