import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "residential",
      title: "Residential Design",
      description: "Creating innovative living spaces that blend functionality with aesthetic excellence.",
      features: [
        "Custom home design",
        "Multi-family residential",
        "Renovation and remodeling",
        "Interior space planning",
        "Sustainable home solutions"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Architecture",
      description: "Designing productive workspaces that inspire creativity and collaboration.",
      features: [
        "Office buildings",
        "Retail spaces",
        "Corporate headquarters",
        "Industrial facilities",
        "Mixed-use developments"
      ]
    },
    {
      id: "interior",
      title: "Interior Design",
      description: "Crafting beautiful and functional interior spaces that enhance user experience.",
      features: [
        "Space planning",
        "Material selection",
        "Lighting design",
        "Furniture specification",
        "Color consultation"
      ]
    },
    {
      id: "sustainable",
      title: "Sustainable Solutions",
      description: "Implementing eco-friendly design practices for a better tomorrow.",
      features: [
        "LEED certification",
        "Energy-efficient design",
        "Sustainable materials",
        "Green building practices",
        "Environmental assessments"
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive architectural solutions tailored to your unique vision and requirements.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="p-8 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can bring your architectural vision to life.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}