"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

const countries = [
  { value: "pe", label: "Perú", flag: "🇵🇪", currency: "PEN" },
  { value: "ve", label: "Venezuela", flag: "🇻🇪", currency: "VES" },
  { value: "co", label: "Colombia", flag: "🇨🇴", currency: "COP" },
  { value: "ec", label: "Ecuador", flag: "🇪🇨", currency: "USD" },
  { value: "cl", label: "Chile", flag: "🇨🇱", currency: "CLP" },
  { value: "ar", label: "Argentina", flag: "🇦🇷", currency: "ARS" },
  { value: "mx", label: "México", flag: "🇲🇽", currency: "MXN" },
  { value: "us", label: "Estados Unidos", flag: "🇺🇸", currency: "USD" },
  { value: "es", label: "España", flag: "🇪🇸", currency: "EUR" },
  { value: "br", label: "Brasil", flag: "🇧🇷", currency: "BRL" },
  { value: "bo", label: "Bolivia", flag: "🇧🇴", currency: "BOB" },
  { value: "py", label: "Paraguay", flag: "🇵🇾", currency: "PYG" },
  { value: "uy", label: "Uruguay", flag: "🇺🇾", currency: "UYU" },
  { value: "pa", label: "Panamá", flag: "🇵🇦", currency: "PAB" },
  { value: "do", label: "República Dominicana", flag: "🇩🇴", currency: "DOP" },
]

export function CountrySelector({ onSelect, defaultValue, placeholder = "Seleccionar país" }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue || "")

  const selectedCountry = countries.find((country) => country.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {selectedCountry ? (
            <span className="flex items-center">
              <span className="mr-2 text-lg">{selectedCountry.flag}</span>
              {selectedCountry.label} ({selectedCountry.currency})
            </span>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Buscar país..." />
          <CommandList>
            <CommandEmpty>No se encontró ningún país.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-y-auto">
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={(currentValue) => {
                    const selected = countries.find((c) => c.value === currentValue)
                    if (selected) {
                      setValue(currentValue)
                      onSelect(selected)
                      setOpen(false)
                    }
                  }}
                >
                  <span className="mr-2 text-lg">{country.flag}</span>
                  <span>{country.label}</span>
                  <span className="ml-2 text-muted-foreground">({country.currency})</span>
                  <Check className={cn("ml-auto h-4 w-4", value === country.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

