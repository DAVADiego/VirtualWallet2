import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { MainNav } from "../components/main-nav"
import { ArrowUp, CreditCard, Home, Wallet, RefreshCw, Globe } from "lucide-react"
import { Badge } from "../components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />
      <div className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Saldo y acciones principales */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Wallet className="mr-2 h-5 w-5" />
                    Saldo disponible
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">$6,97 USD</div>
                    <div className="flex items-center text-white/80 text-sm">
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Última actualización: hace 5 minutos
                    </div>
                  </div>
                  <div className="mt-4 bg-white/10 p-3 rounded-md flex items-center space-x-2 backdrop-blur-sm">
                    <div className="text-sm">
                      <span className="font-medium">Retención de $7,57 USD</span>
                      <Link to="#" className="block text-blue-200 hover:text-blue-100">
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-primary-600 hover:bg-gray-100">Transferir fondos</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Acciones rápidas</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button
                    className="h-auto py-4 bg-primary-500 hover:bg-primary-600 flex flex-col items-center"
                    asChild
                  >
                    <Link to="/enviar">
                      <ArrowUp className="h-5 w-5 mb-1" />
                      <span>Enviar</span>
                    </Link>
                  </Button>
                  <Button
                    className="h-auto py-4 bg-primary-500 hover:bg-primary-600 flex flex-col items-center"
                    asChild
                  >
                    <Link to="/recargar">
                      <RefreshCw className="h-5 w-5 mb-1" />
                      <span>Recargar</span>
                    </Link>
                  </Button>
                  <Button
                    className="h-auto py-4 bg-primary-100 text-primary-600 hover:bg-primary-200 flex flex-col items-center"
                    asChild
                  >
                    <Link to="/cartera">
                      <CreditCard className="h-5 w-5 mb-1" />
                      <span>Tarjetas</span>
                    </Link>
                  </Button>
                  <Button
                    className="h-auto py-4 bg-primary-100 text-primary-600 hover:bg-primary-200 flex flex-col items-center"
                    asChild
                  >
                    <Link to="/movimientos">
                      <Globe className="h-5 w-5 mb-1" />
                      <span>Remesas</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-medium">Movimientos recientes</CardTitle>
                <Link to="/movimientos" className="text-primary-500 hover:underline text-sm">
                  Ver todos
                </Link>
              </CardHeader>
              <CardContent className="space-y-0">
                <div className="flex items-center justify-between py-3 border-b">
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
                  <div className="font-medium text-red-500">-$17,00</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
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
                <div className="flex items-center justify-between py-3 border-b">
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
                <div className="flex items-center justify-between py-3">
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

          {/* Sidebar derecho */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Tasas de cambio</CardTitle>
                <CardDescription>Actualizadas hace 10 minutos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🇵🇪</span>
                      <span>PEN → VES</span>
                    </div>
                    <div className="font-medium">21.10</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🇺🇸</span>
                      <span>USD → PEN</span>
                    </div>
                    <div className="font-medium">3.70</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🇨🇴</span>
                      <span>COP → VES</span>
                    </div>
                    <div className="font-medium">0.020</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">🇪🇸</span>
                      <span>EUR → USD</span>
                    </div>
                    <div className="font-medium">1.08</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tasas">Ver todas las tasas</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Cuentas bancarias y tarjetas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 p-2 rounded-md w-8 h-8 flex items-center justify-center">
                      <span className="text-xs font-bold">NJ</span>
                    </div>
                    <div>
                      <p className="font-medium">NequiJunior</p>
                      <p className="text-sm text-muted-foreground">débito •••25</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 p-2 rounded-md w-8 h-8 flex items-center justify-center">
                      <span className="text-xs font-bold">DP</span>
                    </div>
                    <div>
                      <p className="font-medium">DaviPlata</p>
                      <p className="text-sm text-muted-foreground">prepagada •••95</p>
                    </div>
                  </div>
                  <div className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">PRINCIPAL</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/cartera">Administrar métodos de pago</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Países frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <span className="text-lg mr-2">🇻🇪</span>
                    Venezuela
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="text-lg mr-2">🇨🇴</span>
                    Colombia
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="text-lg mr-2">🇵🇪</span>
                    Perú
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <span className="text-lg mr-2">🇪🇨</span>
                    Ecuador
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

