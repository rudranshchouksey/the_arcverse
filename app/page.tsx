import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactPopup from "@/components/contact-popup"

export default function Home() {
  const specializations = [
    {
      title: "Architecture",
      description: "Creating innovative and sustainable architectural solutions",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
    },
    {
      title: "Interior Design",
      description: "Crafting beautiful and functional interior spaces",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
    },
    {
      title: "Structure",
      description: "Engineering robust and efficient structural solutions",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?auto=format&fit=crop&q=80"
    },
    {
      title: "Landscape",
      description: "Creating harmonious outdoor environments",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80"
    },
    {
      title: "Vastu",
      description: "Incorporating ancient architectural principles",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
    },
    {
      title: "Unity Development",
      description: "Interactive 3D visualization and virtual reality experiences",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80"
    },
    {
      title: "Unreal Engine",
      description: "Photorealistic rendering and real-time architectural visualization",
      image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&q=80"
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

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "THE ARCVERSE transformed our office space into a modern marvel that perfectly balances functionality with aesthetic excellence.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Director, Urban Living",
      content: "Their understanding of sustainable design principles and innovative approach to architecture is truly unmatched in the industry.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    }
  ]

  const whyChooseUs = [
    {
      title: "Expertise & Innovation",
      description: "Over 15 years of architectural excellence with cutting-edge technology integration"
    },
    {
      title: "Sustainable Focus",
      description: "Commitment to environmentally responsible design and green building practices"
    },
    {
      title: "Client-Centric",
      description: "Personalized approach ensuring your vision comes to life exactly as imagined"
    },
    {
      title: "Comprehensive Services",
      description: "Full-service architectural solutions from concept to completion"
    }
  ]

  return (
    <>
      <ContactPopup />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
            alt="Modern architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Designing Tomorrow's
            <span className="block">Architectural Legacy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We create innovative spaces that inspire, endure, and transform the way people live and work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/projects">View Our Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About THE ARCVERSE</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to revolutionize architectural design, THE ARCVERSE has grown from a visionary startup to a leading architectural firm. We combine traditional architectural excellence with cutting-edge technology to create spaces that inspire and endure.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to innovation, sustainability, and client satisfaction has made us a trusted partner for projects ranging from residential developments to commercial complexes.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Our office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Specializations</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Comprehensive architectural solutions powered by innovation and expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={spec.image}
                    alt={spec.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                <p className="text-muted-foreground">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground">
                Discover our latest architectural achievements
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/portfolio/latest-projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vision into Reality?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Let's collaborate to create architectural masterpieces that exceed expectations.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </>
  )
}