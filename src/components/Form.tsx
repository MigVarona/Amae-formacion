/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qXscvJ87VSz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Amae } from "./Amae"

export default function Form() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
     <Amae /> 
      <div className="mx-auto w-full max-w-md space-y-4">
        <div className="text-center">
          <p className="mt-2 text-muted-foreground">Bienvenido a Amae.</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input id="username" type="text" placeholder="Ingresa tu nombre de usuario" required />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              
            </div>
            <Input id="password" type="password" placeholder="Ingresa tu contraseña" required />
          </div>
          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </div>
  )
}