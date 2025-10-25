import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import HeroWithChevron from "@/components/sections/HeroWithChevron";
import { useToast } from "@/hooks/use-toast";
import { FileText } from "lucide-react";

const Resources = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState("");
  const { toast } = useToast();

  const handleDownloadClick = (resourceName: string) => {
    setSelectedResource(resourceName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    toast({
      title: "Thank you!",
      description: "Your download will begin shortly.",
    });
  };

  const resources = [
    {
      title: "C12's Strategic Planning Guide",
      description:
        "A comprehensive framework for aligning your business strategy with Kingdom purpose.",
    },
    {
      title: "From Survival to Sustainability",
      description:
        "Practical steps to move your business from reactive management to proactive growth.",
    },
    {
      title: "Customer Loyalty & Referrals",
      description:
        "Proven strategies for building lasting customer relationships that drive organic growth.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroWithChevron
        title="Free Resources for Christian Leaders"
        subtitle="Equip yourself with practical tools and biblical wisdom for marketplace leadership."
      />

      {/* Resources Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <FileText className="text-accent" size={80} />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl mb-4">{resource.title}</h3>
                  <p className="mb-6 flex-1">{resource.description}</p>
                  <Button
                    variant="outlined"
                    size="lg"
                    onClick={() => handleDownloadClick(resource.title)}
                    className="w-full"
                  >
                    Download Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get Your Free Resource</DialogTitle>
            <DialogDescription>
              Enter your information to download {selectedResource}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <Label htmlFor="organization">Organization (optional)</Label>
              <Input id="organization" />
            </div>
            <div>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" type="tel" />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Download Now
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;
