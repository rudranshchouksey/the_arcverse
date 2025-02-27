import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function InteriorPage() {
  const projects = [
    {
      title: "Minimalist Penthouse",
      description: "Clean lines and open spaces define this luxury penthouse",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
      location: "New York, USA"
    },
    {
      title: "Boutique Hotel Lobby",
      description: "Elegant and welcoming hotel interior design",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      location: "Paris, France"
    },
    {
      title: "Modern Office Space",
      description: "Contemporary workplace designed for productivity",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
      location: "Singapore"
    }
  ]

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Link href="/portfolio" className="hover:text-primary">Portfolio</Link>
            <span>/</span>
            <span className="text-primary">Interior Design</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Interior Design</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our interior design projects that combine aesthetics with functionality.
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
                <div className="portfolio-overlay">
                  <Button variant="secondary" size="sm">View Details</Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <p className="text-sm text-muted-foreground">{project.location}</p>
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
          <div className="flex gap-4">
            <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary/10">
              <Link href="/portfolio/exterior">
                <ArrowLeft className="mr-2 h-4 w-4" /> Exterior Architecture
              </Link>
            </Button>
            <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary/10">
              <Link href="/portfolio/floor-plan">
                Floor Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}