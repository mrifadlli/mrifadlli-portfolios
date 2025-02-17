"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { DATA } from '@/data/index';

const Page = () => {
    const { slug } = useParams();

    const projectData = DATA.projectOverview[slug as keyof typeof DATA.projectOverview];

    if (!projectData) {
        return (
            <div className="max-w-4xl mx-auto px-6 pt-12 pb-32 text-center">
                <h1 className="text-3xl font-bold">Not Found</h1>
                <p className="mt-2 text-neutral-500">The requested project does not exist.</p>
            </div>
        );
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedImage, setSelectedImage] = useState<string>(projectData?.images.length > 0 ? projectData?.images[0] : "");

    return (
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
            <h1 className="text-3xl font-bold">{projectData.title}</h1>
            <p className="mt-2 text-neutral-500">{projectData.description}</p>

            {selectedImage && (
                <div className="mt-6">
                    <Image
                        src={selectedImage}
                        alt={projectData.title}
                        width={800}
                        height={450}
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            )}

            {projectData.images.length > 0 && (
                <div className="mt-8 space-y-5">
                    <h1 className="text-3xl font-bold">Overview</h1>
                    <div className="flex gap-5">
                        {projectData.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setSelectedImage(img);
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
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
            )}

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
};

export default Page;
