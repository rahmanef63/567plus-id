// constant.ts
// Type definitions for HOMEPAGE
export interface HeroSection {
    H1: string;
    H3: string;
    DESCRIPTION: string;
    CTA_BUTTON: string;
    BACKGROUND_IMAGE: string;
    HERO_IMAGE: string;
    TAGLINE: string;
}

export interface ServiceItem {
    TITLE: string;
    DESCRIPTION: string;
    ICON: string;
    BUTTON_TEXT: string;
}

export interface ServicesSection {
    H1: string;
    DESCRIPTION: string;
    SERVICES: ServiceItem[];
}

export interface LocationItem {
    NAME: string;
    ADDRESS: string;
    PHONE: string;
}

export interface LocationsSection {
    H1: string;
    DESCRIPTION: string;
    LOCATIONS: LocationItem[];
    MAP_IMAGE: string;
    CTA_BUTTON: string;
}

export interface TestimonialItem {
    CUSTOMER: string;
    TEXT: string;
    RATING: number;
    AVATAR: string;
}

export interface TestimonialsSection {
    H1: string;
    TESTIMONIALS: TestimonialItem[];
}

// Type definitions for CONTENT_COMPONENTS
export interface ContentHero {
    H1: string;
    H3: string;
    PARAGRAPH: string;
    CTA_BUTTON: string;
    IMAGE: string;
}

export interface CardItem {
    TITLE: string;
    DESCRIPTION: string;
    ICON: string;
    BUTTON_TEXT: string;
}

export interface CardsComponent {
    CARDS_COMPONENT: CardItem[];
}

export interface Modal {
    TITLE: string;
    DESCRIPTION: string;
    FIELDS: string[];
    BUTTON_TEXT: string;
    IMAGE: string;
}

export interface ModalsComponent {
    LOGIN_MODAL: Modal;
    SIGNUP_MODAL: Modal;
    CONTACT_MODAL: Modal;
}

// Type definitions for BLOG_CONTENT
export interface BlogPost {
    TITLE: string;
    EXCERPT: string;
    AUTHOR: string;
    DATE: string;
    IMAGE: string;
}

export interface BlogContent {
    BLOG_HEADER: string;
    BLOG_POSTS: BlogPost[];
}

// Type definitions for FOOTER_LINKS
export interface SocialLink {
    PLATFORM: string;
    URL: string;
    ICON: string;
}

export interface QuickNavLink {
    NAME: string;
    URL: string;
    ICON: string;
}

export interface FooterLinks {
    SOCIAL_LINKS: SocialLink[];
    QUICK_NAVIGATION: QuickNavLink[];
}

// Type definitions for UTILS
export interface Utils {
    HELPER_FUNCTIONS: string;
    API_CALLS: string;
    VALIDATORS: string;
    STATE_MANAGEMENT: string;
}


export const HOMEPAGE = {
    HERO_SECTION: {
        H1: "Selamat Datang di Layanan Laundry 567plus",
        H3: "Layanan Laundry Premium untuk Hidup yang Sibuk",
        DESCRIPTION: "Kami menyediakan solusi laundry self-service dan full-service untuk memastikan pakaian Anda selalu bersih, segar, dan dikirim tepat waktu. Lokasi yang nyaman di seluruh kota dengan layanan jemput antar tersedia.",
        CTA_BUTTON: "Mulai Sekarang",
        BACKGROUND_IMAGE: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2278&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        HERO_IMAGE: "/images/hero-laundry.png",
        TAGLINE: "Mudah, Cepat, Bersih!"
    },
    SERVICES_SECTION: {
        H1: "Layanan Kami",
        DESCRIPTION: "Pilih dari berbagai layanan kami yang dirancang untuk memenuhi kebutuhan laundry Anda.",
        SERVICES: [
            {
                TITLE: "Layanan Laundry Mandiri",
                DESCRIPTION: "Fasilitas laundry mandiri kami yang modern sempurna bagi Anda yang ingin solusi cepat dan ekonomis.",
                ICON: "self-service-icon.svg",
                BUTTON_TEXT: "Pelajari Lebih Lanjut"
            },
            {
                TITLE: "Layanan Laundry Lengkap",
                DESCRIPTION: "Biarkan kami yang bekerja! Layanan laundry lengkap kami mencakup cuci, pengeringan, dan lipat dengan pengiriman yang tersedia.",
                ICON: "full-service-icon.svg",
                BUTTON_TEXT: "Coba Sekarang"
            },
            {
                TITLE: "Layanan Jemput Antar",
                DESCRIPTION: "Jadwalkan penjemputan dan kami akan mengirim pakaian Anda yang sudah bersih dan segar langsung ke depan pintu Anda.",
                ICON: "delivery-icon.svg",
                BUTTON_TEXT: "Jadwalkan Sekarang"
            }
        ]
    },
    LOCATIONS_SECTION: {
        H1: "Temukan Lokasi Terdekat",
        DESCRIPTION: "Kami memiliki 6 lokasi yang strategis di seluruh kota, termasuk Condet, Pucung, Depok, Kelapa Dua, Sentra Timur, dan Bogor.",
        LOCATIONS: [
            { NAME: "Condet", ADDRESS: "Jl. Raya Condet No. 12, Jakarta", PHONE: "021-1234567" },
            { NAME: "Pucung", ADDRESS: "Jl. Pucung Raya No. 8, Bekasi", PHONE: "021-7654321" },
            { NAME: "Depok", ADDRESS: "Jl. Margonda Raya No. 24, Depok", PHONE: "021-9876543" },
            { NAME: "Kelapa Dua", ADDRESS: "Jl. Kelapa Dua No. 10, Tangerang", PHONE: "021-5432167" },
            { NAME: "Sentra Timur", ADDRESS: "Jl. Sentra Timur Blok B, Jakarta", PHONE: "021-9988776" },
            { NAME: "Bogor", ADDRESS: "Jl. Pajajaran No. 15, Bogor", PHONE: "021-5566778" }
        ],
        MAP_IMAGE: "/images/map-locations.png",
        CTA_BUTTON: "Lihat Lokasi di Peta"
    },
    TESTIMONIALS_SECTION: {
        H1: "Apa Kata Pelanggan Kami",
        TESTIMONIALS: [
            {
                CUSTOMER: "John Doe",
                TEXT: "Laundry 567plus telah membuat hidup saya jauh lebih mudah. Layanan jemput antar benar-benar menyelamatkan waktu saya!",
                RATING: 5,
                AVATAR: "/images/john-doe.png"
            },
            {
                CUSTOMER: "Jane Smith",
                TEXT: "Saya suka kemudahan laundry mandiri, dan mesinnya selalu dalam kondisi prima.",
                RATING: 4,
                AVATAR: "/images/jane-smith.png"
            }
        ]
    }
};

export const CONTENT_COMPONENTS = {
    HERO: {
        H1: "Solusi Laundry Terpercaya untuk Semua Orang",
        H3: "Layanan laundry yang disesuaikan dengan kebutuhan Anda",
        PARAGRAPH: "Apakah Anda mencari layanan laundry mandiri atau layanan lengkap, 567plus memiliki semua yang Anda butuhkan. Kami bertujuan untuk membuat hari laundry Anda lebih mudah dan lebih nyaman dengan berbagai layanan yang kami tawarkan.",
        CTA_BUTTON: "Jelajahi Layanan Kami",
        IMAGE: "/images/hero-content.png"
    },
    CARDS: {
        CARDS_COMPONENT: [
            {
                TITLE: "Layanan Laundry Mandiri",
                DESCRIPTION: "Fasilitas modern kami dirancang untuk memberikan Anda pengalaman laundry yang cepat dan terjangkau.",
                ICON: "/icons/self-service.png",
                BUTTON_TEXT: "Coba Sekarang"
            },
            {
                TITLE: "Layanan Laundry Lengkap",
                DESCRIPTION: "Kami menangani semuanya dari mencuci hingga melipat, sehingga Anda dapat fokus pada hal yang lebih penting.",
                ICON: "/icons/full-service.png",
                BUTTON_TEXT: "Mulai Sekarang"
            },
            {
                TITLE: "Layanan Jemput Antar",
                DESCRIPTION: "Jadwalkan penjemputan, dan kami akan mengirim pakaian Anda yang sudah bersih langsung ke rumah Anda.",
                ICON: "/icons/delivery.png",
                BUTTON_TEXT: "Jadwalkan Penjemputan"
            }
        ]
    },
    MODALS: {
        LOGIN_MODAL: {
            TITLE: "Masuk ke Akun Anda",
            DESCRIPTION: "Masukkan kredensial Anda untuk masuk dan mengakses akun Anda.",
            FIELDS: ["Email", "Kata Sandi"],
            BUTTON_TEXT: "Masuk",
            IMAGE: "/images/login-modal.png"
        },
        SIGNUP_MODAL: {
            TITLE: "Buat Akun Anda",
            DESCRIPTION: "Daftar untuk menikmati kemudahan layanan laundry kami.",
            FIELDS: ["Nama", "Email", "Kata Sandi", "Konfirmasi Kata Sandi"],
            BUTTON_TEXT: "Daftar",
            IMAGE: "/images/signup-modal.png"
        },
        CONTACT_MODAL: {
            TITLE: "Hubungi Kami",
            DESCRIPTION: "Kami senang mendengar dari Anda! Isi formulir di bawah ini untuk menghubungi kami.",
            FIELDS: ["Nama", "Email", "Pesan"],
            BUTTON_TEXT: "Kirim Pesan",
            IMAGE: "/images/contact-modal.png"
        }
    }
};

export const BLOG_CONTENT = {
    BLOG_HEADER: "Terbaru dari Blog Kami",
    BLOG_POSTS: [
        {
            TITLE: "5 Tips Menjaga Pakaian Anda Tetap Seperti Baru",
            EXCERPT: "Pelajari praktik terbaik untuk mencuci, mengeringkan, dan menyimpan pakaian Anda agar tetap segar.",
            AUTHOR: "Ahli Laundry",
            DATE: "25 Juli 2024",
            IMAGE: "/images/blog-post-1.jpg"
        },
        {
            TITLE: "Keuntungan Menggunakan Layanan Laundry Profesional",
            EXCERPT: "Temukan mengapa menggunakan layanan laundry profesional dapat menghemat waktu Anda dan memberikan hasil yang lebih baik.",
            AUTHOR: "Tim 567plus",
            DATE: "10 Agustus 2024",
            IMAGE: "/images/blog-post-2.jpg"
        }
    ]
};

export const FOOTER_LINKS = {
    SOCIAL_LINKS: [
        { PLATFORM: "Facebook", URL: "https://facebook.com/567plus", ICON: "/icons/facebook.png" },
        { PLATFORM: "Instagram", URL: "https://instagram.com/567plus", ICON: "/icons/instagram.png" },
        { PLATFORM: "Twitter", URL: "https://twitter.com/567plus", ICON: "/icons/twitter.png" }
    ],
    QUICK_NAVIGATION: [
        { NAME: "Beranda", URL: "/", ICON: "/icons/home.png" },
        { NAME: "Layanan", URL: "/services", ICON: "/icons/services.png" },
        { NAME: "Kontak", URL: "/contact", ICON: "/icons/contact.png" },
        { NAME: "Blog", URL: "/blog", ICON: "/icons/blog.png" }
    ]
};

export const UTILS = {
    HELPER_FUNCTIONS: "Fungsi Pembantu untuk operasi umum",
    API_CALLS: "Metode untuk berinteraksi dengan API eksternal",
    VALIDATORS: "Fungsi untuk memvalidasi data input",
    STATE_MANAGEMENT: "Fungsi untuk mengelola state global dalam aplikasi"
};
