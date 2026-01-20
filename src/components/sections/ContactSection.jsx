import { siteContent } from "../../data/content";
import ContactForm from "../ui/ContactForm";
import ContactInfo from "../ui/ContactInfo";
import MapEmbed from "../ui/MapEmbed";

const ContactSection = () => {
  const { contact } = siteContent;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-neutral-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {contact.title}
          </h2>
          <p className="text-lg text-neutral-600">{contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info and map */}
          <div className="space-y-8">
            <ContactInfo />
            <MapEmbed />

            {/* Practitioner note */}
            <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
              <p className="text-sm text-primary-800">
                <span className="font-semibold">For Medical Practitioners:</span>{" "}
                {contact.practitionerNote.replace("For medical practitioners: ", "")}
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
