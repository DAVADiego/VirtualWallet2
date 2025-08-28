import { Send } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2">
      <div className="bg-white p-1.5 rounded-full shadow-sm">
        <Send className="h-5 w-5 text-primary-500" />
      </div>
      <span className="font-bold text-white text-xl">RemesasApp</span>
    </Link>
  )
}

