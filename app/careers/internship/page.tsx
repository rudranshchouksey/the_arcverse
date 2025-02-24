"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function InternshipPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    major: "",
    startDate: "",
    duration: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const programs = [
    {
      title: "Architecture Design",
      description: "Work alongside senior architects on real projects.",
      duration: "3-6 months"
    },
    {
      title: "Interior Design",
      description: "Learn about space planning and material selection.",
      duration: "3-6 months"
    },
    {
      title: "3D Visualization",
      description: "Create architectural visualizations using latest software.",
      duration: "3-6 months"
    }
  ]

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Internship Program</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Start your architectural career with hands-on experience at THE ARCVERSE.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Programs</h2>
            <div className="space-y-6">
              {programs.map((program, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-2">{program.description}</p>
                  <p className="text-sm text-primary">Duration: {program.duration}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hands-on experience with real projects</li>
                <li>• Mentorship from industry experts</li>
                <li>• Professional development workshops</li>
                <li>• Networking opportunities</li>
                <li>• Certificate upon completion</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="university" className="block text-sm font-medium mb-2">
                  University/College
                </label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="major" className="block text-sm font-medium mb-2">
                  Major/Field of Study
                </label>
                <Input
                  id="major"
                  value={formData.major}
                  onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                  Preferred Start Date
                </label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="duration" className="block text-sm font-medium mb-2">
                  Preferred Duration
                </label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="e.g., 3 months"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Why do you want to intern with us?
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}