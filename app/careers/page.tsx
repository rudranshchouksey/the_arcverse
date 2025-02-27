import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CareersPage() {
  const sections = [
    {
      title: "Life at THE ARCVERSE",
      description: "Experience a culture of innovation, creativity, and continuous growth.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      link: "/careers/life-at-arcverse"
    },
    {
      title: "Available Positions",
      description: "Explore current opportunities to join our dynamic team.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      link: "/careers/positions"
    },
    {
      title: "Internship Program",
      description: "Start your architectural career with hands-on experience.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      link: "/careers/internship"
    }
  ]

  const benefits = [
    {
      title: "Professional Growth",
      description: "Continuous learning and development opportunities"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working arrangements and wellness programs"
    },
    {
      title: "Innovation Culture",
      description: "Work with cutting-edge technology and methodologies"
    },
    {
      title: "Global Projects",
      description: "Opportunity to work on international projects"
    }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Careers at THE ARCVERSE</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join our team of passionate professionals dedicated to creating exceptional architectural experiences.
          </p>
        </div>
      </div>

      {/* Career Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-12">Explore Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link key={index} href={section.link} className="group portfolio-card rounded-lg overflow-hidden border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover portfolio-image"
                  />
                  <div className="portfolio-overlay">
                    <Button variant="secondary" size="sm" className="gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{section.title}</h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Career Paths</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/careers/life-at-arcverse" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Life at THE ARCVERSE
                  </Link>
                </li>
                <li>
                  <Link href="/careers/positions" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Available Positions
                  </Link>
                </li>
                <li>
                  <Link href="/careers/internship" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Internship Program
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Learn More</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> About THE ARCVERSE
                  </Link>
                </li>
                <li>
                  <Link href="/about/who-we-are" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowRight className="mr-2 h-4 w-4" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Join Our Team?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our current openings and find your perfect role.
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/careers/positions">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}