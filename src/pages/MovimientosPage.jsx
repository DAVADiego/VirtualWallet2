import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { MainNav } from "../components/main-nav"
import { ArrowDown, ArrowUp, CreditCard, Download, Home, Search, SlidersHorizontal, RefreshCw } from "lucide-react"
import { Badge } from "../components/ui/badge"

export default function MovimientosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />
      <div className="flex-1 p-4 md:p-6 space-y-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Actividad</h1>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input className="pl-10" placeholder="Buscar por nombre o correo electrónico" />
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Filtrar por</h2>
            </div>
            <div className="inline-block bg-blue-100 text-primary-500 px-3 py-1 rounded-full text-sm">
              Fecha: Últimos 90 días
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-medium mb-4">Pendiente</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <ArrowDown className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">Pedro Ardiles</p>
                          <Badge variant="outline" className="ml-2 text-xs">
                            Venezuela
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">27 feb · Disponible el 20 mar · Retenido</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-medium">$7,57</div>
                      <Button variant="link" className="h-auto p-0 text-primary-500">
                        Reembolsar este pago
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="font-medium mb-4">Completado</h2>
              <h3 className="text-sm text-muted-foreground mb-2">Esta semana</h3>
              <Card className="mb-4">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <ArrowUp className="h-4 w-4 text-red-500" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">Juan Carlos Tovar Perez</p>
                          <Badge variant="outline" className="ml-2 text-xs">
                            Venezuela
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">16 mar · Remesa enviada</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-medium text-red-500">-$17,00</div>
                      <Button variant="link" className="h-auto p-0 text-primary-500">
                        Repetir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-sm text-muted-foreground mb-2">La semana pasada</h3>
              <Card className="mb-4">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <CreditCard className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">Meta Platforms, Inc.</p>
                        <p className="text-sm text-muted-foreground">15 mar · Pago automático</p>
                      </div>
                    </div>
                    <div className="font-medium text-red-500">-$2,00</div>
                  </div>
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Home className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">CONTABO GmbH</p>
                        <p className="text-sm text-muted-foreground">10 mar · Pago</p>
                      </div>
                    </div>
                    <div className="font-medium text-red-500">-$6,00</div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <RefreshCw className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">Recarga de saldo</p>
                          <Badge variant="outline" className="ml-2 text-xs">
                            Perú
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">5 mar · Completado</p>
                      </div>
                    </div>
                    <div className="font-medium text-green-500">+$50,00</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

