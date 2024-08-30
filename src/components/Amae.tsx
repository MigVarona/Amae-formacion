

import Image from 'next/image';

export function Amae() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/logo_glitch1_rgb_blanco.jpg" 
        alt="Amae"
        width={500} 
        height={300} 
        className="rounded-lg shadow-lg" 
        priority 
      />
    </div>
  );
}
