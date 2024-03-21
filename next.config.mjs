/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, _) => {
    config.module.rules.push({
      test: /\.[ct]sv$/,
      loader: "csv-loader",
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      },
    });

    return config;
  },
};

export default nextConfig;
