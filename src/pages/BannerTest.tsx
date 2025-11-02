import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroWithChevron from "@/components/sections/HeroWithChevron";
import heroBanner4 from "@/assets/hero-banner4.png";

const BannerTest = () => {
  return (
    <div className="min-h-screen">
      {/* Test Hero with NEW Banner */}
      <HeroWithChevron
        backgroundImage={heroBanner4}
        title="Don't Lead Alone."
        subtitle="Join a community of Christian CEOs and Business Owners who lead with faith and excellence."
        description={
          <p>
            C12 Indianapolis brings together business leaders who want to grow strong companies while
            pursuing a greater impact.
          </p>
        }
      >
        <Link to="/contact">
          <Button variant="outlined" size="xl">
            Request a Meeting
          </Button>
        </Link>
        <Link to="/why-c12">
          <Button variant="outlined" size="xl">
            Learn More
          </Button>
        </Link>
      </HeroWithChevron>

      {/* Comparison Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">NEW BANNER TEST PAGE</h2>
            <p className="text-xl">
              This is a test page to preview the new hero banner before rolling it out site-wide.
              The banner, text overlay, and triangle are all visible here for Playwright comparison.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerTest;
