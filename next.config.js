/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_MAPBOX_TOKEN: 'pk.eyJ1IjoicXJ1bW4iLCJhIjoiY20zN2V0ZHBtMDRqajJxcHhrejI5cmlpYSJ9.qCAYS34VtDnEUC5pr28Q8g'
  }
};

module.exports = nextConfig;