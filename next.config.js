/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // GitHub Pages'te (octolabstr/octolabs.github.io) yayınlanıyor — kullanıcı/organizasyon
  // sayfası olduğu için basePath GEREKMEZ, site doğrudan kökte (https://octolabstr.github.io) yayınlanır.
  output: 'export',
};

module.exports = nextConfig;
