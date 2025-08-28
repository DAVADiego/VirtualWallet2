import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"
import { Bell, HelpCircle, LogOut, Settings } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function MainNav() {
  const location = useLocation()

  const routes = [
    {
      href: "/dashboard",
      label: "Inicio",
      active: location.pathname === "/dashboard",
    },
    {
      href: "/enviar",
      label: "Enviar",
      active: location.pathname === "/enviar",
    },
    {
      href: "/recargar",
      label: "Recargar",
      active: location.pathname === "/recargar",
    },
    {
      href: "/cartera",
      label: "Cartera",
      active: location.pathname === "/cartera",
    },
    {
      href: "/movimientos",
      label: "Movimientos",
      active: location.pathname === "/movimientos",
    },
    {
      href: "/ayuda",
      label: "Ayuda",
      active: location.pathname === "/ayuda",
    },
  ]

  return (
    <nav className="bg-primary-500 text-white w-full sticky top-0 z-50 shadow-md">
      <div className="flex h-16 items-center px-4 md:px-6 justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Logo />
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                to={route.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary-600",
                  route.active ? "bg-primary-600 text-white" : "text-white/90 hover:text-white",
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-primary-600 rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=36&width=36" alt="@usuario" />
                  <AvatarFallback className="bg-primary-200 text-primary-700">US</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Configuración</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Ayuda</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Cerrar Sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

