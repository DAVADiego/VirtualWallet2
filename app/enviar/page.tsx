"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MainNav } from "@/components/main-nav"
import { CountrySelector } from "@/components/country-selector"
import { getExchangeRate, formatCurrency, getCurrencySymbol } from "@/lib/exchange-rates"
import { ArrowRight, Users, RefreshCw, CheckCircle2, AlertCircle, Calculator } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EnviarPage() {
  const [originCountry, setOriginCountry] = useState<{
    value: string
    label: string
    flag: string
    currency: string
  } | null>(null)
  const [destinationCountry, setDestinationCountry] = useState<{
    value: string
    label: string
    flag: string
    currency: string
  } | null>(null)
  const [amount, setAmount] = useState<string>("")
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null)
  const [recipient, setRecipient] = useState<string>("")
  const [note, setNote] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)

  // Calcular el monto convertido cuando cambian los países o el monto
  useEffect(() => {
    if (originCountry && destinationCountry && amount && !isNaN(Number.parseFloat(amount))) {
      const rate = getExchangeRate(originCountry.currency, destinationCountry.currency)
      setExchangeRate(rate)
      setConvertedAmount(Number.parseFloat(amount) * rate)
    } else {
      setExchangeRate(null)
      setConvertedAmount(null)
    }
  }, [originCountry, destinationCountry, amount])

  // Resetear el estado de éxito/error cuando cambian los inputs
  useEffect(() => {
    if (isSuccess || error) {
      setIsSuccess(false)
      setError("")
    }
  }, [originCountry, destinationCountry, amount, recipient])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validaciones
    if (!originCountry) {
      setError("Por favor selecciona el país de origen")
      return
    }

    if (!destinationCountry) {
      setError("Por favor selecciona el país de destino")
      return
    }

    if (!amount || Number.parseFloat(amount) <= 0) {
      setError("Por favor ingresa un monto válido")
      return
    }

    if (!recipient.trim()) {
      setError("Por favor ingresa el nombre del destinatario")
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
              <ArrowRight className="mr-2 h-5 w-5 text-primary-500" />
              Enviar Remesa
            </h1>
            <p className="text-muted-foreground">Envía dinero a tus seres queridos en el extranjero</p>
          </div>

          {isSuccess ? (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-green-700">¡Envío exitoso!</h2>
                    <p className="text-green-600">
                      Has enviado {formatCurrency(Number.parseFloat(amount), originCountry?.currency || "USD")} a{" "}
                      {recipient}.
                    </p>
                    <p className="text-green-600">
                      El destinatario recibirá{" "}
                      {convertedAmount ? formatCurrency(convertedAmount, destinationCountry?.currency || "USD") : ""}
                    </p>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <Button
                      onClick={() => {
                        setAmount("")
                        setRecipient("")
                        setNote("")
                        setIsSuccess(false)
                      }}
                    >
                      Nuevo envío
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
                      <CardTitle>Detalles del envío</CardTitle>
                      <CardDescription>Completa la información para realizar tu remesa</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {error && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Error</AlertTitle>
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="origin">País de origen</Label>
                          <CountrySelector
                            onSelect={(country) => setOriginCountry(country)}
                            placeholder="Selecciona el país de origen"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="destination">País de destino</Label>
                          <CountrySelector
                            onSelect={(country) => setDestinationCountry(country)}
                            placeholder="Selecciona el país de destino"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="amount">Monto a enviar</Label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <span className="text-gray-500">
                                {originCountry ? getCurrencySymbol(originCountry.currency) : "$"}
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
                          {originCountry && amount && !isNaN(Number.parseFloat(amount)) && (
                            <p className="text-sm font-medium">
                              Enviarás {formatCurrency(Number.parseFloat(amount), originCountry.currency)}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label>Monto convertido</Label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <span className="text-gray-500">
                                {destinationCountry ? getCurrencySymbol(destinationCountry.currency) : "$"}
                              </span>
                            </div>
                            <Input
                              readOnly
                              value={convertedAmount ? convertedAmount.toFixed(2) : ""}
                              placeholder="0.00"
                              className="pl-8 bg-gray-50"
                            />
                          </div>
                          {exchangeRate && originCountry && destinationCountry && (
                            <p className="text-sm text-primary-600 flex items-center">
                              <Calculator className="h-3 w-3 mr-1" />
                              Tasa: 1 {originCountry.currency} = {exchangeRate.toFixed(2)} {destinationCountry.currency}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="recipient">Nombre del destinatario</Label>
                        <div className="flex space-x-2">
                          <Input
                            id="recipient"
                            placeholder="Nombre completo"
                            className="flex-1"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                          />
                          <Button type="button" variant="outline">
                            <Users className="h-4 w-4 mr-2" />
                            Contactos
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="note">Nota (opcional)</Label>
                        <Textarea
                          id="note"
                          placeholder="Agrega un mensaje para el destinatario"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                        />
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
                          "Enviar remesa"
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
                        <span className="text-muted-foreground">Origen:</span>
                        <span className="font-medium">
                          {originCountry ? (
                            <span className="flex items-center">
                              <span className="mr-1">{originCountry.flag}</span>
                              {originCountry.label}
                            </span>
                          ) : (
                            "No seleccionado"
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Destino:</span>
                        <span className="font-medium">
                          {destinationCountry ? (
                            <span className="flex items-center">
                              <span className="mr-1">{destinationCountry.flag}</span>
                              {destinationCountry.label}
                            </span>
                          ) : (
                            "No seleccionado"
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Envías:</span>
                        <span className="font-medium">
                          {amount && originCountry
                            ? formatCurrency(Number.parseFloat(amount), originCountry.currency)
                            : "0.00"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Recibe:</span>
                        <span className="font-medium">
                          {convertedAmount && destinationCountry
                            ? formatCurrency(convertedAmount, destinationCountry.currency)
                            : "0.00"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Comisión:</span>
                        <span className="font-medium text-green-600">Gratis</span>
                      </div>
                      <div className="border-t pt-4 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total a pagar:</span>
                          <span>
                            {amount && originCountry
                              ? formatCurrency(Number.parseFloat(amount), originCountry.currency)
                              : "0.00"}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Métodos de entrega</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="bank">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="bank">Banco</TabsTrigger>
                          <TabsTrigger value="cash">Efectivo</TabsTrigger>
                          <TabsTrigger value="mobile">Móvil</TabsTrigger>
                        </TabsList>
                        <TabsContent value="bank" className="pt-4 text-sm space-y-2">
                          <p>• Depósito directo a cuenta bancaria</p>
                          <p>• Disponible en 24-48 horas</p>
                          <p>• Sin costo adicional</p>
                        </TabsContent>
                        <TabsContent value="cash" className="pt-4 text-sm space-y-2">
                          <p>• Retiro en efectivo en puntos autorizados</p>
                          <p>• Disponible en 1-2 horas</p>
                          <p>• Comisión adicional del 1%</p>
                        </TabsContent>
                        <TabsContent value="mobile" className="pt-4 text-sm space-y-2">
                          <p>• Transferencia a billetera móvil</p>
                          <p>• Disponible inmediatamente</p>
                          <p>• Sin costo adicional</p>
                        </TabsContent>
                      </Tabs>
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

