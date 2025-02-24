import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurWorkPage() {
  const process = [
    {
      title: "Conceptualization",
      description: "We begin by understanding your vision and requirements, transforming ideas into initial concepts.",
      image: "https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&q=80",
    },
    {
      title: "Design Development",
      description: "Our team develops detailed designs, incorporating feedback and refining every aspect.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    },
    {
      title: "Implementation",
      description: "We bring designs to life with precision, ensuring every detail meets our high standards.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">We Turn Ideas Into Works of Art</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Our creative process transforms vision into reality, crafting exceptional architectural experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {process.map((step, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold">{step.title}</h2>
              <p className="text-lg text-muted-foreground">{step.description}</p>
            </div>
            <div>
              <Image src={step.image} alt={step.title} width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
