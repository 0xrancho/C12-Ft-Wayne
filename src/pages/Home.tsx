import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroWithChevron from "@/components/sections/HeroWithChevron";
import SectionDivider from "@/components/sections/SectionDivider";
import indySkyline from "@/assets/indy-skyline.png";
import { Scale, Handshake, Target, ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroWithChevron
        backgroundImage={indySkyline}
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

      {/* What is C12 Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Great Businesses. Greater Purpose.</h2>
            <p className="mb-12">
              C12 is the world's largest network of Christian CEOs, owners, and executives who meet monthly
              in peer advisory groups. Together, we sharpen one another through business excellence, biblical
              leadership, and eternal perspective—so we can build companies that bless people and honor God.
            </p>

            {/* YouTube Video */}
            <div className="aspect-video w-full max-w-3xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wnqwY6nbneg"
                title="Power of Peers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <Link to="/why-c12" className="inline-flex items-center text-accent hover:text-accent/80 font-heading text-lg">
              Learn More About C12 <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Experience Summary Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group bg-card/10 border-accent/20 p-8 text-center backdrop-blur hover:bg-accent/20 transition-all duration-300 cursor-pointer h-64 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-16 h-16 mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Scale className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl text-primary-foreground">Proven Practices</h3>
              <p className="text-primary-foreground/90 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                Monthly facilitated curriculum centered on the five points of business alignment: Ministry,
                Revenue, Finances, Operations, and People.
              </p>
            </Card>

            <Card className="group bg-card/10 border-accent/20 p-8 text-center backdrop-blur hover:bg-accent/20 transition-all duration-300 cursor-pointer h-64 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-16 h-16 mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Handshake className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl text-primary-foreground">Prudent Counsel</h3>
              <p className="text-primary-foreground/90 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                Unbiased counsel from non-competing peers in a confidential, facilitated forum with
                personalized business coaching to promote accountability.
              </p>
            </Card>

            <Card className="group bg-card/10 border-accent/20 p-8 text-center backdrop-blur hover:bg-accent/20 transition-all duration-300 cursor-pointer h-64 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-16 h-16 mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl text-primary-foreground">Purposed Action</h3>
              <p className="text-primary-foreground/90 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                The C12 Experience offers an annual business review and monthly action-oriented sessions that
                foster personal, spiritual, and professional transformation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-16">Member Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-accent/20 bg-background">
              <div className="text-6xl font-heading font-bold text-accent mb-4">93%</div>
              <p className="text-xl">of CEOs say they have grown as leaders</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-accent/20 bg-background">
              <div className="text-6xl font-heading font-bold text-accent mb-4">94%</div>
              <p className="text-xl">report better understanding their purpose as a leader</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-accent/20 bg-background">
              <div className="text-6xl font-heading font-bold text-accent mb-4">98%</div>
              <p className="text-xl">have implemented at least one idea that improved their business</p>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-accent/20 bg-background">
              <div className="text-6xl font-heading font-bold text-accent mb-4">75%</div>
              <p className="text-xl">say their work/life balance has improved</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-accent/20 bg-background">
              <div className="text-6xl font-heading font-bold text-accent mb-4">82%</div>
              <p className="text-xl">have implemented ministry programs in their business</p>
            </Card>
          </div>
          <p className="text-center text-2xl font-heading mt-12 max-w-3xl mx-auto">
            At C12, results matter—because what's good for the leader is great for the business.
          </p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-16">Real Leaders. Real Transformation.</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Finding Purpose Beyond Profit",
                videoId: "GnO4IwqbNqk",
              },
              {
                title: "Redefining Success",
                videoId: "dXfgvWGf5yE",
              },
              {
                title: "Building Ministry Into Business",
                videoId: "2hl86lkXLAQ",
              },
            ].map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{video.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-center mb-16">Start Your Journey</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                number: "1",
                title: "Contact Us",
                description: "Tell us more about yourself and your organization.",
              },
              {
                number: "2",
                title: "Connect & Learn",
                description: "Schedule a discovery call with a Chair to discuss requirements and steps.",
              },
              {
                number: "3",
                title: "Apply",
                description: "Discuss membership requirements, next steps, and apply!",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-accent-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">An investment in transformation that pays dividends.</h2>
            <div className="space-y-4 mb-8 text-2xl">
              <p className="flex items-center justify-center gap-3">
                <CheckCircle2 className="text-accent" size={28} />
                From isolation to insight.
              </p>
              <p className="flex items-center justify-center gap-3">
                <CheckCircle2 className="text-accent" size={28} />
                From pressure to peace.
              </p>
              <p className="flex items-center justify-center gap-3">
                <CheckCircle2 className="text-accent" size={28} />
                From busy leadership to intentional stewardship.
              </p>
            </div>
            <p className="text-xl mb-10 opacity-95">
              You don't have to navigate business alone. Let's start a conversation about how C12 can equip
              you to lead with clarity, conviction, and impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outlined" size="xl">
                  Request a Meeting
                </Button>
              </Link>
              <Link to="/why-c12">
                <Button variant="outlined" size="xl">
                  Learn More About C12
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
