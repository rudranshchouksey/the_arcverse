import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

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
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Link href="/portfolio" className="hover:text-primary">Portfolio</Link>
            <span>/</span>
            <span className="text-primary">Latest Projects</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Latest Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover our most recent architectural achievements and ongoing developments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group portfolio-card rounded-lg overflow-hidden border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover portfolio-image"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <div className="portfolio-overlay">
                  <Button variant="secondary" size="sm">View Details</Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <p className="text-sm text-primary">Completion: {project.completion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-between">
          <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary/10">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}