// Tasas de cambio simuladas entre diferentes monedas
// Estas tasas deberían obtenerse de una API en un entorno real

export type ExchangeRate = {
  from: string
  to: string
  rate: number
}

export const exchangeRates: ExchangeRate[] = [
  // Perú (PEN) a otras monedas
  { from: "PEN", to: "VES", rate: 21.1 },
  { from: "PEN", to: "COP", rate: 1050.25 },
  { from: "PEN", to: "USD", rate: 0.27 },
  { from: "PEN", to: "EUR", rate: 0.25 },

  // Venezuela (VES) a otras monedas
  { from: "VES", to: "PEN", rate: 0.047 },
  { from: "VES", to: "COP", rate: 49.78 },
  { from: "VES", to: "USD", rate: 0.013 },
  { from: "VES", to: "EUR", rate: 0.012 },

  // Colombia (COP) a otras monedas
  { from: "COP", to: "PEN", rate: 0.00095 },
  { from: "COP", to: "VES", rate: 0.02 },
  { from: "COP", to: "USD", rate: 0.00026 },
  { from: "COP", to: "EUR", rate: 0.00024 },

  // USD a otras monedas
  { from: "USD", to: "PEN", rate: 3.7 },
  { from: "USD", to: "VES", rate: 78.15 },
  { from: "USD", to: "COP", rate: 3900.5 },
  { from: "USD", to: "EUR", rate: 0.93 },

  // EUR a otras monedas
  { from: "EUR", to: "PEN", rate: 4.0 },
  { from: "EUR", to: "VES", rate: 84.3 },
  { from: "EUR", to: "COP", rate: 4200.75 },
  { from: "EUR", to: "USD", rate: 1.08 },

  // Otras monedas
  { from: "ARS", to: "USD", rate: 0.0012 },
  { from: "MXN", to: "USD", rate: 0.059 },
  { from: "CLP", to: "USD", rate: 0.0011 },
  { from: "BRL", to: "USD", rate: 0.2 },
]

export function getExchangeRate(fromCurrency: string, toCurrency: string): number {
  // Si las monedas son iguales, la tasa es 1
  if (fromCurrency === toCurrency) return 1

  // Buscar la tasa directa
  const directRate = exchangeRates.find((rate) => rate.from === fromCurrency && rate.to === toCurrency)

  if (directRate) return directRate.rate

  // Si no hay tasa directa, intentar encontrar la tasa inversa
  const inverseRate = exchangeRates.find((rate) => rate.from === toCurrency && rate.to === fromCurrency)

  if (inverseRate) return 1 / inverseRate.rate

  // Si no hay tasa directa ni inversa, usar USD como puente
  const fromToUSD = exchangeRates.find((rate) => rate.from === fromCurrency && rate.to === "USD")

  const usdToTarget = exchangeRates.find((rate) => rate.from === "USD" && rate.to === toCurrency)

  if (fromToUSD && usdToTarget) {
    return fromToUSD.rate * usdToTarget.rate
  }

  // Si todo falla, devolver 1 como valor predeterminado
  return 1
}

export function formatCurrency(amount: number, currency: string): string {
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter.format(amount)
}

export function getCurrencySymbol(currency: string): string {
  const symbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    PEN: "S/",
    VES: "Bs.",
    COP: "$",
    ARS: "$",
    MXN: "$",
    CLP: "$",
    BRL: "R$",
    BOB: "Bs",
    PYG: "₲",
    UYU: "$U",
    PAB: "B/",
    DOP: "RD$",
  }

  return symbols[currency] || currency
}

