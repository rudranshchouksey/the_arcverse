import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const categories = [
    {
      title: "Exterior Architecture",
      description: "Discover our collection of stunning exterior designs that redefine architectural excellence.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      link: "/portfolio/exterior"
    },
    {
      title: "Interior Design",
      description: "Explore our interior design projects that combine aesthetics with functionality.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      link: "/portfolio/interior"
    },
    {
      title: "Floor Plans",
      description: "Browse through our thoughtfully designed floor plans that maximize space and functionality.",
      image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&q=80",
      link: "/portfolio/floor-plan"
    }
  ]

  const featuredProjects = [
    {
      title: "Modern Residential Complex",
      description: "Award-winning sustainable residential development",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      category: "Residential"
    },
    {
      title: "Corporate Headquarters",
      description: "State-of-the-art office complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      category: "Commercial"
    },
    {
      title: "Cultural Arts Center",
      description: "Dynamic space for arts and cultural events",
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80",
      category: "Cultural"
    }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our diverse collection of architectural projects and designs across various categories.
          </p>
        </div>
      </div>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-12">Portfolio Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={index} href={category.link} className="group portfolio-card rounded-lg overflow-hidden border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover portfolio-image"
                  />
                  <div className="portfolio-overlay">
                    <Button variant="secondary" size="sm" className="gap-2">
                      View Projects <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="section-heading">Latest Projects</h2>
              <p className="text-xl text-muted-foreground mt-6">
                Our most recent architectural achievements
              </p>
            </div>
            <Button variant="outline" asChild className="text-primary border-primary hover:bg-primary/10">
              <Link href="/portfolio/latest-projects">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-12">Explore Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-primary">By Category</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/portfolio/exterior" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Exterior Architecture
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/interior" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Interior Design
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/floor-plan" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Floor Plans
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Latest Work</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/portfolio/latest-projects" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Latest Projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> All Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your architectural vision to life.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}