/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
    },
    output: 'export',
    trailingSlash: true,
};

export default nextConfig;
