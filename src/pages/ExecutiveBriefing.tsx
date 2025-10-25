import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeroWithChevron from "@/components/sections/HeroWithChevron";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const ExecutiveBriefing = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Received!",
      description: "We'll contact you shortly about the next Executive Briefing.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroWithChevron
        title="Executive Briefing"
        subtitle="Explore a 2 Hr Executive Briefing to see if C12 is the right place for you"
      />

      {/* Stats Block */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">It Is Lonely At The Top</h2>
            <p className="text-3xl font-heading mb-6">But, it doesn't have to be…</p>
            <p className="text-xl mb-12">
              C12 Business Forums is an invitation-only peer group for Christian CEOs.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl font-heading font-bold text-accent mb-4">95%</div>
                <p className="text-lg">of CEOs report better understanding their purpose as a leader</p>
              </div>
              <div>
                <div className="text-6xl font-heading font-bold text-accent mb-4">78%</div>
                <p className="text-lg">report improvement in their marriage as a result of being in C12</p>
              </div>
              <div>
                <div className="text-6xl font-heading font-bold text-accent mb-4">73%</div>
                <p className="text-lg">of CEOs report increased profitability due to their C12 experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "4,000+", label: "Christian CEOs and Business Leaders" },
                { number: "175+", label: "CITIES" },
                { number: "5", label: "CONTINENTS" },
                { number: "1", label: "MISSION" },
              ].map((stat, index) => (
                <Card key={index} className="p-8 text-center">
                  <div className="text-5xl font-heading font-bold text-accent mb-4">
                    {stat.number}
                  </div>
                  <p className="text-lg font-heading">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Includes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">C12 Membership Includes:</h2>
            <div className="space-y-6">
              {[
                "One-on-One Coaching",
                "CEO and Key Player Forums",
                "World-Class Curriculum and Resources",
                "Global Conferences Industry Forums",
                "Annual 360-Degree Business Evaluations",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={28} />
                  <p className="text-xl">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-xl mb-12">
              Every great partnership starts with a conversation. Tell us a little about yourself, and we'll
              connect you with a Chair to see if you qualify to attend the next Executive Briefing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div>
                <Label htmlFor="organization">Organization *</Label>
                <Input id="organization" required />
              </div>

              <div>
                <Label htmlFor="orgSize">How many people are in your organization? *</Label>
                <Select required>
                  <SelectTrigger id="orgSize">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10">0-10</SelectItem>
                    <SelectItem value="11-25">11-25</SelectItem>
                    <SelectItem value="26-50">26-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="101-250">101-250</SelectItem>
                    <SelectItem value="251-500">251-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">
                  How many years have you been stewarding the business as
                  Owner/Founder/CEO/President/General Manager? *
                </Label>
                <Select required>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="4-7">4-7 years</SelectItem>
                    <SelectItem value="8-15">8-15 years</SelectItem>
                    <SelectItem value="15+">15+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Request Executive Briefing"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveBriefing;
