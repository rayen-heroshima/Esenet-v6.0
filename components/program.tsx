import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function EventProgram() {
  const data = [
    {
      title: "8:30 : Accueil",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            C'est le début officiel de l'événement avec un accueil chaleureux des participants. L'occasion idéale pour se familiariser avec les objectifs de la journée et rencontrer les premiers intervenants et organisateurs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "9:00 : Les défis du Digital Business",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Une présentation sur les défis actuels auxquels sont confrontées les entreprises dans le domaine du business numérique, avec des discussions sur les stratégies et innovations pour réussir dans ce secteur.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "9:45 : Startup'Innov",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Un moment dédié à l'innovation dans la culture des startups et aux solutions novatrices qu'elles apportent dans différents domaines, allant des technologies aux modèles d'affaires disruptifs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "10:30 : Pause Café",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Un temps de pause pour se détendre, prendre un café et échanger avec d'autres participants. C'est également une excellente occasion de créer des liens et de discuter des sessions précédentes.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "10:45 : Reso'Débat",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Un forum de discussion où les participants peuvent échanger des idées, poser des questions et partager leurs expériences sur des sujets d'actualité dans le monde du business et de l'innovation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "11:45 : Visite des Stands",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Explorez les différents stands et expositions des partenaires et entreprises présents à l'événement. C'est l'occasion de découvrir de nouveaux produits, services ou solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "13:30 : Atelier Certifié PMI",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Participez à un atelier certifié PMI (Project Management Institute) sur la gestion de projets, qui vous fournira des outils et des techniques pour gérer efficacement vos projets professionnels.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "15:30 : Clôture",
      content: (
        <div className=" dark:bg-neutral-800 p-5  mb-3">
          <p className="text-white dark:text-neutral-200 text-sm md:text-base font-medium mb-4 leading-relaxed">
            La session de clôture où des discours de remerciements seront prononcés et l'événement prendra officiellement fin. Un moment pour résumer les points clés de la journée et encourager les participants à appliquer ce qu'ils ont appris.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#002b56] via-[#003f7f] to-[#005e9b] py-8 px-4">
      <Timeline data={data} />
    </div>
  );
}
