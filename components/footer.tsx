import Link from 'next/link'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-xl">Arcverse</span>
            </div>
            <p className="text-muted-foreground">
              Creating innovative architectural solutions that transform spaces and enrich lives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#residential" className="text-muted-foreground hover:text-foreground">Residential Design</Link></li>
              <li><Link href="/services#commercial" className="text-muted-foreground hover:text-foreground">Commercial Architecture</Link></li>
              <li><Link href="/services#interior" className="text-muted-foreground hover:text-foreground">Interior Design</Link></li>
              <li><Link href="/services#sustainable" className="text-muted-foreground hover:text-foreground">Sustainable Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@arcverse.com" className="text-muted-foreground hover:text-foreground">contact@arcverse.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-muted-foreground">123 Architecture Ave, Design District</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Arcverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer