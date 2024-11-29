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
<div className="flex flex-row justify-between">

<div>
    LOGO
</div>

<div className="flex flex-row"> 
    <NavigationMenu>
    <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
        <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
        </NavigationMenuItem>
    </NavigationMenuList>
    </NavigationMenu>

    <NavigationMenu>
    <NavigationMenuList>
        <NavigationMenuItem>
            <button>Item Two</button>
        </NavigationMenuItem>
    </NavigationMenuList>
    </NavigationMenu>
</div>

</div>

    )
}

export default Navbar;