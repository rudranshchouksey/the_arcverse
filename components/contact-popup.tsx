"use client"

import { useState, useEffect } from 'react'
import { X, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ContactPopup() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  useEffect(() => {
    // Show popup initially after 2 seconds
    const initialTimeout = setTimeout(() => {
      setOpen(true)
    }, 2000)

    // Set up recurring popup every 7 minutes
    const interval = setInterval(() => {
      setOpen(true)
    }, 420000) // 7 minutes in milliseconds

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setOpen(false)
  }

  const services = [
    "Architectural Design",
    "Interior Design",
    "3D Visualization",
    "Unity Development",
    "Unreal Engine Development",
    "Consultation"
  ]

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Form Section */}
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-primary">THE ARCVERSE</span>
            </div>
            
            <DialogHeader>
              <DialogTitle className="text-2xl">Get in Touch</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
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
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Required
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
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
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Image Section */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0">
              <Image 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" 
                alt="Architectural design" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <div className="bg-black/60 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Transform Your Vision Into Reality</h3>
                <p className="text-sm">
                  Our team of expert architects and designers are ready to bring your ideas to life. 
                  Contact us today to start your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}