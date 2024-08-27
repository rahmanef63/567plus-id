import Image from "next/image";
import { servicesData } from "@/constants/services";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function ServiceOverview() {
    // Transforming servicesData to match the expected format for Timeline
    const data = servicesData.map(service => ({
        title: service.title,
        content: (
            <div className="mb-52">
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-20">
                    {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.images.map((src, imgIndex) => (
                        <Image
                            key={imgIndex}
                            src={src}
                            alt={service.title}
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-60 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    ))}
                </div>
            </div >
        ),
    }));

    return (
        <div className="w-full h-full">
            <Timeline data={data} />
        </div>
    );
}
