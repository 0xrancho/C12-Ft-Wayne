import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* CTA Section */}
      <div className="grid md:grid-cols-2">
        {/* Left Column - Dark Teal */}
        <div className="bg-primary text-primary-foreground p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="mb-4">C12 Chair</h3>
          <p className="mb-6 opacity-90">
            Our experienced Chairs bring decades of business leadership and biblical wisdom to guide you through challenges and opportunities.
          </p>
          <Link to="/faqs">
            <Button variant="outlined" size="xl">
              FAQs
            </Button>
          </Link>
        </div>

        {/* Right Column - Medium Teal */}
        <div className="bg-secondary text-secondary-foreground p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="mb-4">Connect</h3>
          <p className="mb-6 opacity-90">
            Ready to start your journey? Let's have a conversation about how C12 can equip you to lead with clarity and conviction.
          </p>
          <Link to="/contact">
            <Button variant="outlined" size="xl">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} C12 Indianapolis. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <Link to="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
              <span className="opacity-50">|</span>
              <a href="#" className="hover:text-accent transition-colors">
                Privacy
              </a>
            </div>
          </div>

          <p className="text-center text-sm opacity-50 mt-4">
            Handcrafted with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
