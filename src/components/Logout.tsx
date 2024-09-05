import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';  

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
  
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
    router.push('/');
  };
  

  return (
    <Button onClick={handleLogout} className="w-full">
      Cerrar sesión
    </Button>
  );
}
