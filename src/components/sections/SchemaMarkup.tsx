import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  type?: "organization" | "faq";
  faqData?: Array<{ question: string; answer: string }>;
}

const SchemaMarkup = ({ type = "organization", faqData }: SchemaMarkupProps) => {
  // Organization schema - appears on all pages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "C12 Fort Wayne",
    "alternateName": "C12 FT Wayne",
    "url": "https://www.c12ftwayne.com",
    "description": "C12 Fort Wayne is a Christian CEO peer advisory organization bringing together business leaders in confidential forums for mutual support, accountability, and growth through biblical principles and world-class business curriculum.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fort Wayne",
      "addressRegion": "IN",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.0793",
        "longitude": "-85.1394"
      },
      "geoRadius": "50 miles",
      "description": "Fort Wayne and Northeast Indiana"
    },
    "founder": {
      "@type": "Person",
      "name": "Kelly Schwedland"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "C12 Group",
      "url": "https://www.c12group.com"
    },
    "knowsAbout": [
      "CEO peer advisory",
      "Christian business leadership",
      "Executive coaching",
      "Business strategy",
      "Faith-based leadership",
      "Biblical business principles"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "CEOs, Business Owners, Executives",
      "geographicArea": {
        "@type": "Place",
        "name": "Fort Wayne, Indiana"
      }
    }
  };

  // LocalBusiness schema - adds local business details
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "C12 Fort Wayne",
    "image": "https://www.c12ftwayne.com/logo.png",
    "url": "https://www.c12ftwayne.com",
    "telephone": "",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fort Wayne",
      "addressRegion": "IN",
      "postalCode": "",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0793,
      "longitude": -85.1394
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": "Fort Wayne, Indiana",
    "serviceType": [
      "CEO Peer Advisory",
      "Executive Coaching",
      "Business Leadership Development",
      "Faith-Based Business Consulting"
    ],
    "knowsAbout": [
      "Christian business leadership",
      "CEO forums",
      "Executive development",
      "Biblical leadership principles"
    ]
  };

  // FAQ schema - only for FAQ page
  const faqSchema = faqData
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    : null;

  return (
    <Helmet>
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* FAQ Schema (only if faqData provided) */}
      {type === "faq" && faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SchemaMarkup;
