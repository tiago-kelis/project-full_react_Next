/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'https://images-americanas.b2w.io/',

        },
        {
            protocol: 'https',
            hostname: 'https://th.bing.com/',

        },
    ],
}};

export default nextConfig;
