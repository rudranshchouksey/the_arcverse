import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LatestProjectsPage() {
  const projects = [
    {
      title: "Eco-Friendly Office Complex",
      description: "Sustainable commercial development with LEED certification",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      category: "Commercial",
      completion: "2024"
    },
    {
      title: "Urban Residential Tower",
      description: "Mixed-use development in the heart of the city",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80",
      category: "Residential",
      completion: "2024"
    },
    {
      title: "Cultural Arts Center",
      description: "Modern venue for performing arts and exhibitions",
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80",
      category: "Cultural",
      completion: "2024"
    }
  ]

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Latest Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover our most recent architectural achievements and ongoing developments.
          </p>
        </div>
      </div>

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
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <p className="text-sm text-primary">Completion: {project.completion}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}