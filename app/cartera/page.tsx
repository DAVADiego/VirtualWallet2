import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { BanknoteIcon as BankIcon, CreditCard, Plus } from "lucide-react"

export default function CarteraPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />
      <div className="flex-1 p-4 md:p-6 space-y-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Cartera</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Saldo de RemesasApp</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">$6,97</div>
                    <p className="text-sm text-muted-foreground">Disponible</p>
                  </div>
                  <Button className="bg-primary-500 hover:bg-primary-600">Transferir fondos</Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="bg-primary-100 p-3 rounded-full mb-3">
                      <BankIcon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="font-medium mb-1">Asociar una cuenta bancaria</h3>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="bg-primary-100 p-3 rounded-full mb-3">
                      <CreditCard className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="font-medium mb-1">Asociar tarjeta</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Cuentas bancarias y tarjetas</h2>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Agregar
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 p-2 rounded-md w-10 h-10"></div>
                    <div>
                      <p className="font-medium">NequiJunior</p>
                      <p className="text-sm text-muted-foreground">débito •••25</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Administrar
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 p-2 rounded-md w-10 h-10"></div>
                    <div>
                      <p className="font-medium">DaviPlata</p>
                      <p className="text-sm text-muted-foreground">prepagada •••95</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">PRINCIPAL</div>
                    <Button variant="ghost" size="sm">
                      Administrar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pt-4">
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Asociar tarjeta o cuenta bancaria
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

