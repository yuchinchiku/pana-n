import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['pn.konety.jp'], // ここに外部画像のドメインを追加
  },
};

module.exports = nextConfig;
