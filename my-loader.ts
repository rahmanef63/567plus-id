export interface LoaderOptions {
    src: string;
    width: number;
    quality?: number;
}

export default function loader({ src, width, quality }: LoaderOptions): string {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}



