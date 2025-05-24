import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedOn() {
  const partners = [
    {
      name: "Genbeta",
      logo: "https://ext.same-assets.com/2645679348/2521757085.png",
      link: "https://www.genbeta.com/actualidad/kodular-crea-aplicaciones-para-android-saber-programacion"
    },
    {
      name: "La Voz de Galicia",
      logo: "https://ext.same-assets.com/2645679348/2567502790.png",
      link: "https://www.lavozdegalicia.es/noticia/santiago/2018/10/02/estudiante-bachillerato-internacional-socio-makeroid-nosa-web-facilita-vida-moitas-persoas-non-saben-programarestudiante-proyecto-exito/0003_201810S2C8992.htm"
    },
    {
      name: "Tu App Inventor",
      logo: "https://ext.same-assets.com/2645679348/3711956104.png",
      link: "https://www.tuappinvetorandroid.com/2018/06/24/makeroid/"
    },
    {
      name: "Product Hunt",
      logo: "https://ext.same-assets.com/2645679348/1948683865.png",
      link: "https://www.producthunt.com/posts/kodular"
    },
    {
      name: "BetaList",
      logo: "https://ext.same-assets.com/2645679348/1289169103.png",
      link: "https://betalist.com/startups/makeroid"
    },
    {
      name: "BetaPage",
      logo: "https://ext.same-assets.com/2645679348/1264769441.png",
      link: "https://betapage.co/startup/makeroid"
    }
  ];

  return (
    <section className="py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-jost font-semibold mb-12 text-center">
          As featured on...
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.link}
              className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
              target="_blank"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
