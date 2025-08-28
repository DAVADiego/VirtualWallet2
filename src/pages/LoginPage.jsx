import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Send, Globe, ShieldCheck, Clock } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary-500 to-primary-700">
      <header className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1.5 rounded-full shadow-sm">
            <Send className="h-5 w-5 text-primary-500" />
          </div>
          <span className="font-bold text-white text-xl">RemesasApp</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" className="text-white hover:bg-primary-600">
            Ayuda
          </Button>
          <Button variant="ghost" className="text-white hover:bg-primary-600">
            Idioma
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-4">
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Envía dinero a tus seres queridos de forma rápida y segura</h1>
          <p className="text-xl opacity-90">
            La manera más confiable de enviar remesas internacionales con las mejores tasas del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Crear cuenta
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary-600">
              Conocer más
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>+15 países</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              <span>100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Envíos en minutos</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 max-w-md w-full">
          <Card className="w-full shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
              <CardDescription className="text-center">Ingresa tus datos para acceder a tu cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email o número móvil</Label>
                <Input id="email" placeholder="correo@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" />
              </div>
              <Link to="#" className="text-sm text-primary-500 hover:underline block">
                ¿Olvidaste tu contraseña?
              </Link>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-primary-500 hover:bg-primary-600" asChild>
                <Link to="/dashboard">Iniciar Sesión</Link>
              </Button>
              <div className="relative w-full text-center">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">o</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Crear Cuenta
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-primary-800 text-white/80 py-4 text-center text-sm">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-4 mb-2">
            <Link to="#" className="hover:text-white">
              Términos y Condiciones
            </Link>
            <Link to="#" className="hover:text-white">
              Privacidad
            </Link>
            <Link to="#" className="hover:text-white">
              Contacto
            </Link>
          </div>
          <p>© 2025 RemesasApp. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

