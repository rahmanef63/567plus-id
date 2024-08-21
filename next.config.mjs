/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
    },
    trailingSlash: true,
};

export default nextConfig;
