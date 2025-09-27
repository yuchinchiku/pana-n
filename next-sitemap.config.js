/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pana-n.jp/', // ← 自分のドメインに変更
  generateRobotsTxt: true,        // robots.txt も自動生成
  sitemapSize: 7000,              // 大規模サイト用（任意）
};
