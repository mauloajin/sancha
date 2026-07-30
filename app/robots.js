export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://sancha-nine.vercel.app/sitemap.xml',
    host: 'https://sancha-nine.vercel.app'
  };
}
