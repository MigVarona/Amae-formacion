'use client'

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Amae } from "./Amae";

export default function Form() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(''); 

    const apiUrl = 'https://amae.adaptable.app/api/login'; 

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }), 
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        router.push('/dashboard'); 
      } else {
        const data = await res.json();
        setError(data.message || 'Error desconocido'); 
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setError('Error en la solicitud'); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black px-4 py-12 sm:px-6 lg:px-8">
      <Amae />
      <div className="mx-auto w-full max-w-md space-y-4">
        <div className="text-center">
          <p className="mt-2 text-muted-foreground">Bienvenido a Amae formación.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Nombre de usuario</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Ingresa tu nombre de usuario" 
              value={name}
              onChange={handleNameChange}
              required 
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="Ingresa tu contraseña" 
              value={password}
              onChange={handlePasswordChange}
              required 
            />
          </div>
          {error && <p className="white p-2 text-center rounded">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </Button>
        </form>
      </div>
    </div>
  );
}
