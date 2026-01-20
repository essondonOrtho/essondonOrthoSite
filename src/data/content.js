// Centralized content for Essendon Orthopaedics
// Edit this file to update website copy

export const siteContent = {
    clinic: {
        name: "Essendon Orthopaedics",
        tagline: "Specialist Orthopaedic Care",
        address: {
            street: "276 Buckley Street",
            suburb: "Essendon",
            state: "VIC",
            postcode: "3040",
        },
        phone: "(03) 9337 2775",
        fax: "(03) 9337 7858",
        email: "info@essendonortho.com.au",
        hours: {
            weekdays: "Monday - Thursday: 9:00 AM - 4:00 PM",
            friday: "Friday: 9:00 AM - 1:00 PM",
            weekend: "Saturday - Sunday: Closed",
        },
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d144.917!3d-37.754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzE0LjQiUyAxNDTCsDU1JzAxLjIiRQ!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau",
    },

    doctor: {
        name: "Mr. Ponnaren Pak",
        title: "Orthopaedic Surgeon",
        credentials: "MBBS, Dip. Surg. Anat., FRACS(Orth), FAOrthA",
        bio: "Mr. Ponnaren Pak maintains a general orthopaedic practice while providing a high level of sub-specialisation within the field of orthopaedic surgery. He delivers comprehensive and up-to-date care across all areas of orthopaedic treatment.",
        image: "/doctor.jpg",
    },

    navigation: [
        { label: "About", href: "#about" },
        { label: "Doctor", href: "#doctor" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ],

    hero: {
        headline: "Expert Orthopaedic Care in Melbourne's Inner North West",
        subheadline:
            "Comprehensive treatment for musculoskeletal and joint conditions with a focus on patient comfort and modern surgical techniques.",
        cta: "Book a Consultation",
    },

    about: {
        title: "Welcome to Our Clinic",
        paragraphs: [
            "Essendon Orthopaedics is a specialist orthopaedic clinic providing comprehensive care for musculoskeletal and joint-related conditions.",
            "Conveniently located in Essendon, we serve patients across Melbourne's inner north west and surrounding areas. Our modern, comfortable consulting rooms feature free parking for your convenience.",
        ],
        highlights: [
            "Modern consulting rooms",
            "Free on-site parking",
            "Convenient inner-city location",
            "Short appointment wait times",
        ],
    },

    services: {
        title: "Our Services",
        subtitle:
            "Comprehensive orthopaedic care with particular emphasis on joint replacement and reconstruction surgery.",
        items: [
            {
                title: "Shoulder Surgery",
                description:
                    "Shoulder arthroplasty (anatomical, reverse, and revision), complex open reconstructions, and arthroscopic procedures including rotator cuff repair.",
                icon: "shoulder",
            },
            {
                title: "Elbow Surgery",
                description:
                    "Open and arthroscopic elbow procedures for a range of conditions affecting elbow function and mobility.",
                icon: "elbow",
            },
            {
                title: "Wrist & Hand Surgery",
                description:
                    "Open and endoscopic wrist and hand surgery addressing conditions from carpal tunnel to complex reconstructions.",
                icon: "hand",
            },
            {
                title: "Hip Replacement",
                description:
                    "Primary and revision hip arthroplasty using modern techniques for improved outcomes and faster recovery.",
                icon: "hip",
            },
            {
                title: "Knee Surgery",
                description:
                    "Hip and knee arthroplasty (primary and revision), plus open and arthroscopic knee reconstructions.",
                icon: "knee",
            },
            {
                title: "Sports Medicine",
                description:
                    "Orthopaedic sports medicine addressing athletic injuries and helping patients return to active lifestyles.",
                icon: "sports",
            },
        ],
    },

    trust: {
        title: "Why Choose Us",
        items: [
            {
                title: "Hospital Affiliation",
                description:
                    "Affiliated with Mercy Health Werribee, providing access to public hospital services for uninsured patients.",
                icon: "hospital",
            },
            {
                title: "WorkCover & TAC",
                description:
                    "We accept WorkCover and TAC patients with short waiting times for appointments.",
                icon: "insurance",
            },
            {
                title: "Professional Accreditation",
                description:
                    "Fellow of the Royal Australasian College of Surgeons (FRACS) and the Australian Orthopaedic Association (FAOrthA).",
                icon: "accreditation",
            },
            {
                title: "Modern Techniques",
                description:
                    "Up-to-date treatments and surgical techniques for optimal patient outcomes.",
                icon: "modern",
            },
        ],
    },

    contact: {
        title: "Contact Us",
        subtitle:
            "Ready to book an appointment? Get in touch with our friendly team.",
        formDisclaimer:
            "We will respond within 48 hours. Information provided does not replace a face-to-face consultation.",
        practitionerNote:
            "For medical practitioners: We welcome electronic referrals via Argus (argus@essendonortho.com.au) or Healthlink (e276orth).",
    },

    footer: {
        copyright: `© ${new Date().getFullYear()} Essendon Orthopaedics. All rights reserved.`,
        externalLink: {
            label: "Orthopaedic Surgery Centre",
            url: "http://www.orthosurgcentre.com.au",
        },
    },
};
