"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Amae } from "@/components/Amae";
import LogoutButton from "@/components/Logout";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/moFaFbAjgas
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <LogoutButton />
      <div className="mt-10">
      <Amae />
      </div>
     
      <section className="w-full bg-black py-12 md:py-24 lg:py-32 flex justify-center items-center">
        <div className="container grid grid-cols-2 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 justify-center items-center">
          <a href="https://vimeo.com/890050563/88fcdcea98">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/masterclass_ia.png"
                alt="Video 1"
                width={600}
                height={400}
                className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </a>
          <a href="https://vimeo.com/943347285/08d0b01f15?share=copy">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/coordinacion postpo I.jpg"
                alt="Video 1"
                width={600}
                height={400}
                className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              
            </div>
          </a>
          <a href="https://vimeo.com/940972383/27400768a0?share=copy">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/coordinacion postpo II.jpg"
                alt="Video 1"
                width={600}
                height={400}
                className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              
            </div>
          </a>
          <a href="https://vimeo.com/944744554/071a875886?share=copy">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/coordinacion postpo III.jpg"
                alt="Video 1"
                width={600}
                height={400}
                className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />

              
            </div>
          </a>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/logo_glitch1_rgb_blanco.jpg"
              alt="Video 5"
              width={600}
              height={400}
              className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/logo_glitch1_rgb_blanco.jpg"
              alt="Video 6"
              width={600}
              height={400}
              className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Video 6</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/logo_glitch1_rgb_blanco.jpg"
              alt="Video 6"
              width={600}
              height={400}
              className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/logo_glitch1_rgb_blanco.jpg"
              alt="Video 6"
              width={600}
              height={400}
              className="aspect-video object-cover w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
