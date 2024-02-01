/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookme",
    DB_URI: "mongodb://127.0.0.1:27017/bookme",

    STRIPE_SECRET_KEY: "",
    STRIPE_WEBHOOK_SECRET: "",

    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",

    SMTP_HOST: "",
    SMTP_PORT: "",
    SMTP_USER: "",
    SMTP_PASSWORD: "",
    SMTP_FROM_EMAIL: "",
    SMTP_FROM_NAME: "",

    GEOCODER_API_KEY: "",
    GEOCODER_PROVIDER: "",

    MAPBOX_ACCESS_TOKEN: "",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "",

    REVALIDATE_TOKEN: ""
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
