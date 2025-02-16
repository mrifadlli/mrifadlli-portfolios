"use client"

import { Badge } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projectData = {
  title: "Digital Assets Services",
  description: "Smart Transactions, Safe Outcomes. Blockchain-secured financial solutions.",
  techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI", "Magic UI"],
  images: [
    "/asset_portfolio/brancash-app/brancash-1.png",
    "/asset_portfolio/brancash-app/brancash-2.png",
    "/asset_portfolio/brancash-app/brancash-3.png",
  ],
  website: "https://brancash.com",
};

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState(projectData.images[0]);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">

      <h1 className="text-3xl font-bold">{projectData.title}</h1>
      <p className="mt-2 text-neutral-500">{projectData.description}</p>


      <div className="mt-6">
        <Image
          src={selectedImage}
          alt={projectData.title}
          width={800}
          height={450}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="mt-8 space-y-5">
        <h1 className="text-3xl font-bold">Overview</h1>
        <div className="flex gap-5">
          {projectData.images.map((img, index) => (
            <button key={index} onClick={() => {
              setSelectedImage(img)
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={60}
                className={`w-24 h-24 rounded-md cursor-pointer border-2 transition object-cover ${selectedImage === img ? "border-blue-500" : "border-transparent"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {projectData.techStack.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>

          ))}
        </div>
      </div>
    </div>
  );
}