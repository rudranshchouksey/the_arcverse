import Image from "next/image"

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
          <h1 className="text-4xl font-bold mb-4">Interior Design</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our interior design projects that combine aesthetics with functionality.
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
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-2">{project.description}</p>
              <p className="text-sm text-muted-foreground">{project.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}