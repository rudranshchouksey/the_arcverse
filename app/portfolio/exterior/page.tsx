import Image from "next/image"

export default function ExteriorPage() {
  const projects = [
    {
      title: "Modern Villa Complex",
      description: "Contemporary residential development with striking exterior design",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      location: "Beverly Hills, USA"
    },
    {
      title: "Urban Office Tower",
      description: "Innovative commercial building with sustainable facade",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      location: "London, UK"
    },
    {
      title: "Waterfront Residence",
      description: "Luxury home with panoramic ocean views",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      location: "Miami, USA"
    }
  ]

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Exterior Architecture</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover our collection of stunning exterior designs that redefine architectural excellence.
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