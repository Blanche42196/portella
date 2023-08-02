/** @type {import('next').NextConfig} */
const nextConfig = {
    generateStaticParams: function () {
        return {
          '/': { page: '/' }, // Add your custom routes here if needed
        };
      },
}



module.exports = nextConfig
