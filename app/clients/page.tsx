import Image from "next/image"

export default function ClientsPage() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "THE ARCVERSE transformed our office space into a modern marvel. Their attention to detail and innovative design solutions exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Director, Urban Living",
      content: "Working with THE ARCVERSE was a game-changer for our residential project. Their understanding of sustainable design principles is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    }
  ]

  const partners = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
      description: "Leading technology company"
    },
    {
      name: "Urban Living",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
      description: "Luxury real estate developer"
    },
    {
      name: "EcoBuilders",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
      description: "Sustainable construction company"
    }
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Ongoing Projects" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Building lasting relationships through exceptional architectural solutions.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Companies */}
      <div className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}