import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"


function Navbar() {

    return (

<nav className="absolute top-0 left-0 w-full">
<div className="flex flex-row justify-between align-middle p-5">
  <div className="m-0 md:pl-6 flex flex-row items-center justify-center w-auto">
        <img src="/pictures/luxelogo.png" alt="logo" className="h-12 pr-4 md:h-14 m-0"/>
        <h1 className="text-2xl font-bold p-0 m-0">
  LUXE <span className="hidden md:inline font-thin">LANDSCAPERS</span>
</h1>
  </div>

  <div className="flex flex-row">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem >
            <Link href="/"  legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about"  legacyBehavior passHref>
              <NavigationMenuLink className= {`${navigationMenuTriggerStyle()}`}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
</div>
</nav>

    )
}

export default Navbar;