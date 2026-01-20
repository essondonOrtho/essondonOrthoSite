import { siteContent } from "../../data/content";

const Logo = ({ className = "" }) => {
  return (
    <a
      href="#"
      className={`flex flex-col leading-tight ${className}`}
      aria-label={`${siteContent.clinic.name} - Back to top`}
    >
      <span className="text-xl font-semibold tracking-tight text-primary-800">
        Essendon
      </span>
      <span className="text-sm font-medium tracking-widest text-primary-600 uppercase">
        Orthopaedics
      </span>
    </a>
  );
};

export default Logo;
