/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push({
            "utf-8-validate": "commonjs utf-8-valdiate",
            bufferutil: "commonjs bufferutil"
        });

        return config;
    },
    images: {
        domains: [
            "upliadthing.com",
            "utfs.io"
        ]
    }
}

module.exports = nextConfig
