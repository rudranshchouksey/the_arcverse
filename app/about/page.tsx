import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContactPopup from "@/components/contact-popup"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Chen",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Sustainability Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    },
    {
      name: "David Kim",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ]

  const process = [
    {
      title: "Conceptualization",
      description: "We begin by understanding your vision and requirements, transforming ideas into initial concepts.",
      image: "https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&q=80"
    },
    {
      title: "Design Development",
      description: "Our team develops detailed designs, incorporating feedback and refining every aspect.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
    },
    {
      title: "Implementation",
      description: "We bring designs to life with precision, ensuring every detail meets our high standards.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
    }
  ]

  return (
    <>
      <ContactPopup />
      <div className="pt-20">
        {/* Who We Are */}
        <div className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A team of visionary architects and designers dedicated to creating exceptional spaces.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At THE ARCVERSE, we envision a future where architecture seamlessly blends innovation, sustainability, and human-centric design. Our mission is to create spaces that inspire, endure, and enhance the quality of life for generations to come.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded in 2015, we've grown from a small studio to a leading architectural firm, delivering exceptional projects across residential, commercial, and cultural sectors.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Arcverse office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expertise & Innovation",
                  description: "Industry-leading expertise combined with cutting-edge design approaches"
                },
                {
                  title: "Sustainable Focus",
                  description: "Commitment to environmental responsibility and sustainable practices"
                },
                {
                  title: "Client-Centric",
                  description: "Dedicated to understanding and exceeding client expectations"
                }
              ].map((item, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* We Turn Ideas Into Works of Art */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">We Turn Ideas Into Works of Art</h2>
            {process.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
                <div className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                  index % 2 === 0 ? "" : "lg:order-1"
                }`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Privacy Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                At THE ARCVERSE, we take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
              </p>
              <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including name, email address, phone number, and any other information you choose to provide.
              </p>
              <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
              </p>
              <h3 className="text-xl font-semibold mb-4">Information Security</h3>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Let's create remarkable architectural experiences together.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}