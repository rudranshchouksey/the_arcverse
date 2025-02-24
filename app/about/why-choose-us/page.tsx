import { Check } from "lucide-react"

export default function WhyChooseUsPage() {
  const reasons = [
    {
      title: "Expertise & Experience",
      description: "Over 8 years of excellence in architectural design with a portfolio of successful projects across various sectors.",
      points: [
        "Award-winning design team",
        "Industry-leading expertise",
        "Proven track record",
        "Global project experience"
      ]
    },
    {
      title: "Innovation & Technology",
      description: "Utilizing cutting-edge technology and innovative approaches to create future-ready architectural solutions.",
      points: [
        "Advanced 3D modeling",
        "Sustainable design tools",
        "Virtual reality presentations",
        "Smart building integration"
      ]
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize our clients' vision and needs, ensuring a collaborative and transparent design process.",
      points: [
        "Personalized attention",
        "Regular communication",
        "Flexible solutions",
        "On-time delivery"
      ]
    }
  ]

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover what makes THE ARCVERSE your ideal partner for architectural excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 bg-card rounded-lg border">
              <h2 className="text-2xl font-bold mb-4">{reason.title}</h2>
              <p className="text-muted-foreground mb-6">{reason.description}</p>
              <ul className="space-y-3">
                {reason.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "50+", label: "Expert Team Members" },
            { number: "15+", label: "Countries Served" },
            { number: "25+", label: "Industry Awards" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}