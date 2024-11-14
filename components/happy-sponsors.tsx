"use client";

import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  description?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Pixlcoders",
    logo: "/placeholder.svg?height=60&width=200",
    description: "Crafted to the dot",
  },
  { name: "Tlexpreso", logo: "/placeholder.svg?height=60&width=200" },
  {
    name: "Governo Do Estado Do Parana",
    logo: "/placeholder.svg?height=60&width=200",
  },
  {
    name: "Psoriasis Association of Singapore",
    logo: "/placeholder.svg?height=60&width=200",
  },
  { name: "MTX", logo: "/placeholder.svg?height=60&width=200" },
  {
    name: "Business Web",
    logo: "/placeholder.svg?height=60&width=200",
    description: "Comprometidos con tu negocio",
  },
  { name: "Waft Heavy Duty", logo: "/placeholder.svg?height=60&width=200" },
  {
    name: "Mondi Business Paper",
    logo: "/placeholder.svg?height=60&width=200",
  },
  { name: "Bloomberg Business", logo: "/placeholder.svg?height=60&width=200" },
];

export function HappySponsors() {
  return (
    <section className="py-12 mt-10  px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-pink-500 text-sm font-bold uppercase mb-2">
          Sponsors
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-8">
          Happy Sponsors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <Image
                src="/sponsors_1.png"
                alt={`${sponsor.name} logo`}
                width={200}
                height={60}
                className="mb-2"
              />
              <h4 className="font-semibold text-gray-800">{sponsor.name}</h4>
              {sponsor.description && (
                <p className="text-sm text-gray-600">{sponsor.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
