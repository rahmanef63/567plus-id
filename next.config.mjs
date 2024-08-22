/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com', 'img.daisyui.com']
    }
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
