'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { usePathname } from 'next/navigation'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Réservation', href: '/pages/reservation' },
  { name: 'Location', href: '/pages/location' },
  { name: 'Contact', href: '/pages/propos' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActiveLink = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleMobileNavClick = () => setMobileMenuOpen(false)

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpqRymWaQ5fW78ZaYM3uUPPJADSZEpvBMkOdytafkW6h4z9Kb4Va3cmP2LhbWspBeQL6jcz0x4mTMc-Kx9mGvy3vyajJtYUdLEI1S2d8GaK1Ds_nrTG3CR5Ncy6c5308G_Wii3PLETUXHfe6V8jkaRDBGiHjQ-OZZxDdQb-0onxRPJYdFy8em3-h4_bqtMJ1_Zfp_3YyLpdQaRPYI31Zzq-AF2eq9V7Ro4jGwCTNp9PbIWyXprGMWDCP5yrK1Ci0N4_w"
              alt="Isauchrist Logo"
              className="h-16 w-16 rounded-full object-cover"
            />
          </Link>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="lg" aria-label="Ouvrir le menu">
                <Menu className="h-6 w-6" />
                <VisuallyHidden>Ouvrir le menu</VisuallyHidden>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2" onClick={handleMobileNavClick}>
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpqRymWaQ5fW78ZaYM3uUPPJADSZEpvBMkOdytafkW6h4z9Kb4Va3cmP2LhbWspBeQL6jcz0x4mTMc-Kx9mGvy3vyajJtYUdLEI1S2d8GaK1Ds_nrTG3CR5Ncy6c5308G_Wii3PLETUXHfe6V8jkaRDBGiHjQ-OZZxDdQb-0onxRPJYdFy8em3-h4_bqtMJ1_Zfp_3YyLpdQaRPYI31Zzq-AF2eq9V7Ro4jGwCTNp9PbIWyXprGMWDCP5yrK1Ci0N4_w"
                      alt="Isauchrist Logo"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleMobileNavClick}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      isActiveLink(item.href)
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-accent/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    active={isActiveLink(item.href)}
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar