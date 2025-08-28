import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Search } from "lucide-react"
import Link from "next/link"

export default function AyudaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />
      <div className="flex-1 p-4 md:p-6 space-y-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Centro de ayuda: Cuenta Personal</h1>
            <h2 className="text-3xl font-bold">Hola, ¿En qué podemos ayudar?</h2>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input className="pl-10 py-6 text-lg" placeholder="Buscar preguntas, palabras clave o temas" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 space-y-2">
              <div className="bg-primary-50 border-l-4 border-primary-500 p-3">
                <Link href="#" className="font-medium text-primary-500">
                  Inicio
                </Link>
              </div>
              <div className="p-3 hover:bg-gray-100 transition-colors">
                <Link href="#" className="text-gray-700">
                  Pagos y transferencias
                </Link>
              </div>
              <div className="p-3 hover:bg-gray-100 transition-colors">
                <Link href="#" className="text-gray-700">
                  Controversias y limitaciones
                </Link>
              </div>
              <div className="p-3 hover:bg-gray-100 transition-colors">
                <Link href="#" className="text-gray-700">
                  Mi cuenta
                </Link>
              </div>
              <div className="p-3 hover:bg-gray-100 transition-colors">
                <Link href="#" className="text-gray-700">
                  Mi cartera
                </Link>
              </div>
              <div className="p-3 hover:bg-gray-100 transition-colors">
                <Link href="#" className="text-gray-700">
                  Inicio de sesión y seguridad
                </Link>
              </div>
              <div className="p-3 hover:bg-gray-100 transition-colors">
                <Link href="#" className="text-gray-700">
                  Herramientas para vendedores
                </Link>
              </div>
            </div>

            <div className="md:col-span-3 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Para ti</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Por qué mi pago está retenido o no disponible?
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      Retenciones de impuestos de RemesasApp para contribuyentes
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Qué debería hacer si mi cuenta está limitada?
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Cómo envío fondos?
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Cómo recibo fondos a través de RemesasApp?
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Por qué se rechazó mi pago?
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Preguntas comunes</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Cómo emito un reembolso?
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Cómo puedo asociar una tarjeta de débito o crédito a mi cuenta de RemesasApp?
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-500 hover:underline">
                      ¿Cómo puedo verificar mi cuenta de RemesasApp?
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Más formas en las que podemos ayudarlo</h3>
                {/* Aquí irían más opciones de ayuda */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

