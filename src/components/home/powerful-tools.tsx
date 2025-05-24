import React from "react";
import Image from "next/image";

export default function PowerfulTools() {
  return (
    <section className="py-16" id="getstarted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-jost font-semibold mb-6">
              Kodular, powerful tools for you
            </h2>
            <p className="text-gray-600 mb-8">
              We provide several "modules" (services) to create Android apps without coding,
              just scroll down a little bit to check them!
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative max-w-md rounded-lg overflow-hidden shadow-lg border border-gray-200 p-6">
              <Image
                src="https://ext.same-assets.com/3569418955/2916539038.png"
                alt="Kodular Fenix"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
