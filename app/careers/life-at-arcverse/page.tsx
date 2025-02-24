import Image from "next/image"

export default function LifeAtArcversePage() {
  const culture = [
    {
      title: "Innovation & Creativity",
      description: "We foster an environment where creative thinking and innovative solutions thrive.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
    },
    {
      title: "Growth & Development",
      description: "Continuous learning and professional development are core to our culture.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80"
    },
    {
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between professional and personal life.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
    }
  ]

  const benefits = [
    "Competitive salary and benefits package",
    "Professional development opportunities",
    "Health and wellness programs",
    "Flexible working arrangements",
    "Collaborative work environment",
    "Regular team events and activities"
  ]

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Life at THE ARCVERSE</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join a team of passionate professionals dedicated to creating exceptional architectural experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {culture.map((item, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for exceptional architecture.
          </p>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}