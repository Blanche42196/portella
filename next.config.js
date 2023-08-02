/** @type {import('next').NextConfig} */
const nextConfig = {
    generateStaticParams: function () {
        return {
          '/src/app/': { page: '/' }, // Add your custom routes here if needed
        };
      },
}



module.exports = nextConfig
