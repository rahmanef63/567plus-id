

export interface Service {
    title: string;
    description: string;
    images: string[];
}

export const servicesData: Service[] = [
    {
        title: "Ekspres",
        description:
            "Layanan laundry ekspres dengan waktu pengerjaan yang lebih cepat. Termasuk cuci lipat 2 jam, cuci setrika 6 jam, dan bedcover express 4 jam.",
        images: [
            "https://assets.aceternity.com/templates/startup-1.webp",
            "https://assets.aceternity.com/templates/startup-2.webp",
        ],
    },
    {
        title: "Standar",
        description:
            "Layanan laundry standar dengan durasi pengerjaan reguler dan kualitas terbaik. Durasi pengerjaan 1-3 hari.",
        images: [
            "https://assets.aceternity.com/pro/hero-sections.png",
            "https://assets.aceternity.com/features-section.png",
        ],
    },
    {
        title: "Dry Cleaning",
        description:
            "Layanan dry cleaning tanpa air menggunakan chemical khusus untuk pakaian bermerk atau bahan sensitif.",
        images: [
            "https://assets.aceternity.com/pro/bento-grids.png",
            "https://assets.aceternity.com/cards.png",
        ],
    },
];

