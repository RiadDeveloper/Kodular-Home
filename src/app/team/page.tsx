import React from "react";
import Image from "next/image";
import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Diego Barreiro",
      role: "Chief Executive Officer",
      image: "https://github.com/barreeeiroo.png?size=300",
      country: "🇪🇸",
      website: "https://www.barreiro.xyz",
      email: "diego@kodular.io",
      github: "https://github.com/barreeeiroo",
      twitter: "https://twitter.com/Barreeeiroo"
    },
    {
      name: "Hossein Amerkashi",
      role: "Head of Development",
      image: "https://github.com/kkashi01.png?size=300",
      country: "🇺🇸",
      website: "https://amerkashi.wordpress.com/",
      email: "hossein@kodular.io",
      github: "https://github.com/kkashi01",
      twitter: "https://twitter.com/amerkashih"
    },
    {
      name: "Pavitra Golchha",
      role: "VP of Innovation",
      image: "https://github.com/pavi2410.png?size=300",
      country: "🇮🇳",
      website: "https://pavi2410.me",
      email: "pavitra@kodular.io",
      github: "https://github.com/pavi2410",
      twitter: "https://twitter.com/PavitraGolchha"
    }
  ];

  return (
    <section className="py-32 mt-16 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-jost font-bold mb-4 bg-gradient-to-r from-kodular-purple to-blue-600 text-transparent bg-clip-text">
           Our Amazing Team
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Our team is passionate about helping people bring their app ideas to life. 
            With expertise in various domains, we're here to support you on your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Profile Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="p-8 text-center relative">
                <a 
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block group-hover:text-kodular-purple dark:group-hover:text-kodular-purple transition-colors duration-200"
                >
                  <h3 className="text-2xl font-bold font-jost mb-1 dark:text-white">
                    {member.name} <span className="ml-2">{member.country}</span>
                  </h3>
                </a>
                <p className="text-kodular-purple dark:text-kodular-purple/90 font-medium text-lg mb-6">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="flex justify-center items-center space-x-6">
                  <a 
                    href={`mailto:${member.email}`}
                    className="transform hover:scale-110 transition-transform duration-200 text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
                    title="Email"
                  >
                    <FaEnvelope size={22} />
                  </a>
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    title="GitHub"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a 
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-200 text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400"
                    title="Twitter"
                  >
                    <FaTwitter size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
