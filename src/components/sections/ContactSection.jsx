import { siteContent } from "../../data/content";
import ContactInfo from "../ui/ContactInfo";
import CTAButton from "../ui/CTAButton";
import MapEmbed from "../ui/MapEmbed";

const ContactSection = () => {
  const { contact, clinic } = siteContent;
  const phoneHref = `tel:${clinic.phone.replace(/\s/g, "")}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-neutral-600">{contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 lg:p-8">
            <ContactInfo />

            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-8 border-t border-neutral-100">
              <CTAButton href={phoneHref} variant="primary" className="flex-1">
                Call {clinic.phone}
              </CTAButton>
              <CTAButton
                href={`mailto:${clinic.email}`}
                variant="secondary"
                className="flex-1"
              >
                Email Us
              </CTAButton>
            </div>
          </div>

          <MapEmbed />
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mt-12 lg:mt-16 max-w-3xl mx-auto">
          <p className="text-sm text-primary-800 text-center">
            <span className="font-semibold">For Medical Practitioners:</span>{" "}
            {contact.practitionerNote.replace("For medical practitioners: ", "")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
