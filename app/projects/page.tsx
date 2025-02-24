import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Modern Residential Complex",
      description: "A sustainable residential development featuring contemporary design and eco-friendly solutions.",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      location: "New York, USA",
      year: "2023"
    },
    {
      title: "Corporate Headquarters",
      description: "State-of-the-art office complex emphasizing workplace wellness and productivity.",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      location: "London, UK",
      year: "2023"
    },
    {
      title: "Sustainable Living Hub",
      description: "Mixed-use development integrating residential, retail, and community spaces.",
      category: "Mixed Use",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80",
      location: "Singapore",
      year: "2022"
    },
    {
      title: "Cultural Arts Center",
      description: "A dynamic space for arts and cultural events with innovative acoustic design.",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80",
      location: "Paris, France",
      year: "2022"
    },
    {
      title: "Eco Hotel & Spa",
      description: "Luxury hospitality project with a focus on sustainability and natural integration.",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&q=80",
      location: "Bali, Indonesia",
      year: "2023"
    },
    {
      title: "Urban Renewal Plaza",
      description: "Public space revitalization project enhancing community connectivity.",
      category: "Urban Design",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      location: "Toronto, Canada",
      year: "2023"
    }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our portfolio of innovative architectural designs spanning residential, commercial, and cultural spaces.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className="text-muted-foreground">
                  {project.location} • {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}