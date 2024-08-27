import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Andini Pratiwi",
        rate: "⭐⭐⭐⭐⭐",
        description: "Tempat nyuci langganan paling nyaman, paling lengkap serta petugasnya ramah-ramah, responnya pun cepat..selalu happy kalau mencuci disini, semoga semakin baik kedepannya dalam semua aspek.",
        imageUrl: "/marquAndiniPratiwi.png",
    },
    {
        name: "LET Indonesia",
        rate: "⭐⭐⭐⭐⭐",
        description: "Disini bisa melayani semua kebutuhan laundry. Ada cuci sepatu, helm, karpet, boneka. Bisa juga ambil layanan dryclean/wetclean. Pokoknya kalau nyuci di Laundry 567 plus. Pegawainya ramah-ramah. Layanannya super lengkap & cepat.",
        imageUrl: "/marquLETIndonesia.png",
    },
    {
        name: "Irma Noviyanti",
        rate: "⭐⭐⭐⭐⭐",
        description: "Tempatnya nyaman, bersih, harga terjangkau apalagi ada tempat tunggunya plus disediain aqua gelas juga. Terbaik pokoknya, mba-mba nya ramah.",
        imageUrl: "/marquIrmaNoviyanti.png",
    },
    {
        name: "Anisa Paramita",
        rate: "⭐⭐⭐⭐⭐",
        description: "Pelayanannya ramah, tempatnya bagus, nyaman, adem dan ada tempat chargeran juga pokoknya cozy banget deh makanya langganan terus.",
        imageUrl: "/marquAnisaParamita.png",
    },
    {
        name: "Dhery Haryadi",
        rate: "⭐⭐⭐⭐⭐",
        description: "Pelayanan cepat dan ramah. Udah kedua kalinya nyuci disini, mari ringankan beban istri dengan mencuci disini.",
        imageUrl: "/marquDheryHaryadi.png",
    },
    {
        name: "ninis nis",
        rate: "⭐⭐⭐⭐⭐",
        description: "Paling enak kalau mau self laundry di sini. sejam baju bersih + kering. Staffnya jg ramah-ramah. Kalau self laundry murah banget.",
        imageUrl: "/marquNinisNis.png",
    },
    {
        name: "Aisyah Sakinah Shanum",
        rate: "⭐⭐⭐⭐⭐",
        description: "Alhamdulillah laundry duvet bedcover yg penuh noda susu coklat bisa cling putih bersih lagi, makasih yaa!",
        imageUrl: "/marquAisyahSakinahShanum.png",
    },
    {
        name: "Narullyta",
        rate: "⭐⭐⭐⭐⭐",
        description: "Pertama kali self laundry di sini dan akhirnya jadi langganan. Sistemnya mudah, tempatnya nyaman. Staffnya juga ramah.",
        imageUrl: "/marquNarullyta.png",
    },
    {
        name: "Santri Mikro16",
        rate: "⭐⭐⭐⭐⭐",
        description: "Pengen laundry express, langsung jadi dalam 2 jam. Pegawainya juga baik dan ramah.",
        imageUrl: "/marquSantriMikro16.png",
    },
    {
        name: "nurhaliza Siti",
        rate: "⭐⭐⭐⭐⭐",
        description: "Saya sangat senang dan puas dengan adanya laundry 567. Tempatnya bersih, nyaman, dan cepat.",
        imageUrl: "/marquNurhalizaSiti.png",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    imageUrl,
    name,
    rate,
    description,
}: {
    imageUrl: string;
    name: string;
    rate: string;
    description: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={imageUrl} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{rate}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{description}</blockquote>
        </figure>
    );
};

export function TestimonialsSection() {
    return (
        <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.rate} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.rate} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[hsl(var(--background-light))] dark:from-[hsl(var(--background-dark))]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[hsl(var(--background-light))] dark:from-[hsl(var(--background-dark))]"></div>


        </div>
    );
}
