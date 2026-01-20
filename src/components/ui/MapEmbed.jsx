import { siteContent } from "../../data/content";

const MapEmbed = () => {
  const { clinic } = siteContent;

  return (
    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm border border-neutral-200">
      <iframe
        src={clinic.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing location of ${clinic.name}`}
      />
    </div>
  );
};

export default MapEmbed;
