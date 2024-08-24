/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            },
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
}
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my-loader.ts',
    // },
    // output: 'export',
    // trailingSlash: true,
    // webpack(config) {
    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         use: ['@svgr/webpack'],
    //     });
    //     return config;
    // },


export default nextConfig;
