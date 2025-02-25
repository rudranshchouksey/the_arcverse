"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function PositionsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const positions = [
    {
      title: "Senior Architect",
      department: "Design",
      location: "New York",
      type: "Full-time",
      description: "Lead architectural projects and mentor junior team members.",
      requirements: [
        "10+ years of experience",
        "Strong portfolio",
        "Leadership skills"
      ]
    },
    {
      title: "Interior Designer",
      department: "Design",
      location: "London",
      type: "Full-time",
      description: "Create innovative interior design solutions for high-end projects.",
      requirements: [
        "5+ years of experience",
        "Proficiency in design software",
        "Strong aesthetic sense"
      ]
    },
    {
      title: "Project Manager",
      department: "Management",
      location: "Singapore",
      type: "Full-time",
      description: "Oversee project execution and client relationships.",
      requirements: [
        "7+ years of experience",
        "PMP certification",
        "Strong communication skills"
      ]
    },
    {
      title: "3D Visualization Artist",
      department: "Creative",
      location: "Remote",
      type: "Full-time",
      description: "Create photorealistic architectural visualizations.",
      requirements: [
        "3+ years of experience",
        "Mastery of 3D software",
        "Strong portfolio"
      ]
    }
  ]

  const departments = ["all", ...Array.from(new Set(positions.map(p => p.department)))]
  const filteredPositions = selectedDepartment === "all" 
    ? positions 
    : positions.filter(p => p.department === selectedDepartment)

  return (
    <div className="pt-20">
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Available Positions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join our team and be part of creating exceptional architectural experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-4 mb-8">
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={selectedDepartment === dept ? "default" : "outline"}
              onClick={() => setSelectedDepartment(dept)}
              className="capitalize"
            >
              {dept}
            </Button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredPositions.map((position, index) => (
            <div key={index} className="border rounded-lg p-6 bg-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{position.title}</h2>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                    <span>•</span>
                    <span>{position.type}</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/careers/apply?position=${position.title}`}>Apply Now</Link>
                </Button>
              </div>
              
              <p className="text-muted-foreground mb-4">{position.description}</p>
              
              <div>
                <h3 className="font-semibold mb-2">Requirements:</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
