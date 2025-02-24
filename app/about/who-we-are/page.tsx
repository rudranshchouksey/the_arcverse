import Image from "next/image"

export default function WhoWeArePage() {
  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A team of visionary architects and designers dedicated to creating exceptional spaces.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2015, THE ARCVERSE has grown from a small design studio to a leading architectural firm. Our journey has been defined by a commitment to innovation, sustainability, and excellence in design.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that great architecture has the power to transform lives and communities. Our work spans residential, commercial, and cultural projects, each reflecting our dedication to creating spaces that inspire and endure.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
              alt="Our team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              description: "To be the leading force in sustainable and innovative architectural design, creating spaces that enhance lives and respect our environment."
            },
            {
              title: "Our Mission",
              description: "To deliver exceptional architectural solutions that combine aesthetic excellence with functional efficiency, while maintaining the highest standards of sustainability."
            },
            {
              title: "Our Values",
              description: "Innovation, sustainability, integrity, and excellence guide everything we do. We believe in collaborative partnerships and delivering beyond expectations."
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}