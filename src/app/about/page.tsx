import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="py-32 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-jost font-semibold mb-8 text-center">
            About Kodular
          </h1>

          <div className="mb-12 flex justify-center">
            <Image
              src="https://ext.same-assets.com/2645679348/1649404679.png"
              alt="Kodular Logo"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Kodular is a platform that allows users to create mobile applications without coding,
              using a drag-and-drop interface. It's designed to make app development accessible
              to everyone, regardless of their technical background.
            </p>

            <p>
              Our mission is to democratize app development by providing powerful tools
              that eliminate the barriers of traditional coding, allowing creators to
              focus on their ideas rather than technical implementation.
            </p>

            <h2 className="text-2xl font-jost font-semibold mt-10 mb-4">Our History</h2>

            <p>
              Kodular began as a project aimed at simplifying the app creation process.
              Over the years, we've grown into a robust platform with a passionate community
              of users who have created thousands of applications using our tools.
            </p>

            <p>
              We're proud to offer our core services for free, making app development
              accessible to students, entrepreneurs, and hobbyists around the world.
            </p>

            <h2 className="text-2xl font-jost font-semibold mt-10 mb-4">Our Values</h2>

            <ul>
              <li>Accessibility - Making technology accessible to everyone</li>
              <li>Innovation - Continuously improving our platform</li>
              <li>Community - Fostering a supportive environment for creators</li>
              <li>Education - Empowering learning through creation</li>
            </ul>

            <div className="mt-12 text-center">
              <Button asChild className="bg-kodular-purple hover:bg-kodular-purple/90 text-white">
                <Link href="https://c.kodular.io">
                  Start Creating with Kodular!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
