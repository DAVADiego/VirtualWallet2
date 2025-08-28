"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MainNav } from "@/components/main-nav"
import { CountrySelector } from "@/components/country-selector"
import { getCurrencySymbol, formatCurrency } from "@/lib/exchange-rates"
import { CreditCard, Landmark, Smartphone, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RecargarPage() {
  const [selectedCountry, setSelectedCountry] = useState<{
    value: string
    label: string
    flag: string
    currency: string
  } | null>(null)
  const [amount, setAmount] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState<string>("card")
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  // Resetear el estado de éxito/error cuando cambian los inputs
  useEffect(() => {
    if (isSuccess || error) {
      setIsSuccess(false)
      setError("")
    }
  }, [selectedCountry, amount, paymentMethod])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validaciones
    if (!selectedCountry) {
      setError("Por favor selecciona un país")
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Por favor ingresa un monto válido")
      return
    }

    // Simular procesamiento
    setIsProcessing(true)
    setError("")

    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainNav />
      <div className="flex-1 p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              <RefreshCw className="mr-2 h-5 w-5 text-primary-500" />
              Recargar Saldo
            </h1>
            <p className="text-muted-foreground">Agrega fondos a tu cuenta de RemesasApp</p>
          </div>

          {isSuccess ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-green-700">¡Recarga exitosa!</h2>
                    <p className="text-green-600">
                      Has recargado {formatCurrency(Number.parseFloat(amount), selectedCountry?.currency || "USD")} a tu
                      cuenta.
                    </p>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <Button
                      onClick={() => {
                        setAmount("")
                        setIsSuccess(false)
                      }}
                    >
                      Nueva recarga
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/dashboard">Ir al inicio</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detalles de la recarga</CardTitle>
                      <CardDescription>Selecciona el país y el monto a recargar</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {error && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="country">País de recarga</Label>
                        <CountrySelector
                          onSelect={(country) => setSelectedCountry(country)}
                          placeholder="Selecciona el país donde recargarás"
                        />
                        <p className="text-sm text-muted-foreground">
                          El país determina la moneda en la que se procesará tu recarga
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="amount">Monto a recargar</Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500">
                              {selectedCountry ? getCurrencySymbol(selectedCountry.currency) : "$"}
                            </span>
                          </div>
                          <Input
                            id="amount"
                            type="number"
                            placeholder="0.00"
                            className="pl-8"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        {selectedCountry && amount && !isNaN(Number.parseFloat(amount)) && (
                          <p className="text-sm font-medium text-primary-600">
                            Recargarás {formatCurrency(Number.parseFloat(amount), selectedCountry.currency)} a tu cuenta
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>Método de pago</Label>
                        <RadioGroup
                          defaultValue="card"
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                          className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                          <div>
                            <RadioGroupItem value="card" id="card" className="peer sr-only" />
                            <Label
                              htmlFor="card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <CreditCard className="mb-3 h-6 w-6" />
                              Tarjeta
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                            <Label
                              htmlFor="bank"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <Landmark className="mb-3 h-6 w-6" />
                              Banco
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="mobile" id="mobile" className="peer sr-only" />
                            <Label
                              htmlFor="mobile"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <Smartphone className="mb-3 h-6 w-6" />
                              Móvil
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="w-full bg-primary-500 hover:bg-primary-600"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Procesando...
                          </>
                        ) : (
                          "Recargar ahora"
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Resumen</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">País:</span>
                        <span className="font-medium">
                          {selectedCountry ? (
                            <span className="flex items-center">
                              <span className="mr-1">{selectedCountry.flag}</span>
                              {selectedCountry.label}
                            </span>
                          ) : (
                            "No seleccionado"
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Moneda:</span>
                        <span className="font-medium">{selectedCountry ? selectedCountry.currency : "---"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monto:</span>
                        <span className="font-medium">
                          {amount && selectedCountry
                            ? formatCurrency(Number.parseFloat(amount), selectedCountry.currency)
                            : "0.00"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Comisión:</span>
                        <span className="font-medium text-green-600">Gratis</span>
                      </div>
                      <div className="border-t pt-4 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total:</span>
                          <span>
                            {amount && selectedCountry
                              ? formatCurrency(Number.parseFloat(amount), selectedCountry.currency)
                              : "0.00"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Información importante</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>• Las recargas se procesan inmediatamente</p>
                      <p>• No hay comisiones por recargar tu cuenta</p>
                      <p>• Monto mínimo de recarga: $5.00 USD</p>
                      <p>• Para montos mayores a $1,000 USD se requiere verificación adicional</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

