"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Building2, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const portfolioLinks = [
    { href: '/portfolio/exterior', label: 'Exterior' },
    { href: '/portfolio/interior', label: 'Interior' },
    { href: '/portfolio/floor-plan', label: 'Floor Plan' },
    { href: '/portfolio/latest-projects', label: 'Latest Projects' },
  ]

  const careersLinks = [
    { href: '/careers/life-at-arcverse', label: 'Life at THE ARCVERSE' },
    { href: '/careers/positions', label: 'Available Positions' },
    { href: '/careers/internship', label: 'Internship' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b' 
        : 'bg-gradient-to-b from-background/80 to-background/0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-primary">THE ARCVERSE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="text-primary/80 hover:text-primary transition-colors">
                Portfolio
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-background rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {portfolioLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-primary/80 hover:text-primary hover:bg-primary/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/services"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              About
            </Link>

            <Link
              href="/clients"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Clients
            </Link>

            <div className="relative group">
              <button className="text-primary/80 hover:text-primary transition-colors">
                Careers
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-background rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {careersLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-primary/80 hover:text-primary hover:bg-primary/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="text-primary/80 hover:text-primary"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="text-primary/80 hover:text-primary"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary/80 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Portfolio Section */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-base font-medium text-primary/80">Portfolio</div>
                {portfolioLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-6 py-2 text-sm text-primary/70 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/clients"
                className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>

              {/* Careers Section */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-base font-medium text-primary/80">Careers</div>
                {careersLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-6 py-2 text-sm text-primary/70 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar