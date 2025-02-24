import Image from "next/image"

export default function FloorPlanPage() {
  const plans = [
    {
      title: "Luxury Villa Layout",
      description: "5000 sq ft contemporary villa with smart space utilization",
      image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?auto=format&fit=crop&q=80",
      details: "5 Bedrooms • 6 Bathrooms • 3 Car Garage"
    },
    {
      title: "Urban Apartment Design",
      description: "Modern apartment layout optimized for city living",
      image: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&q=80",
      details: "2 Bedrooms • 2 Bathrooms • Open Plan Living"
    },
    {
      title: "Commercial Office Space",
      description: "Flexible office layout for modern workplace needs",
      image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?auto=format&fit=crop&q=80",
      details: "Open Workspace • Meeting Rooms • Break Areas"
    }
  ]

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Floor Plans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our thoughtfully designed floor plans that maximize space and functionality.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-muted-foreground mb-2">{plan.description}</p>
              <p className="text-sm text-primary">{plan.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}