export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://sancha.vercel.app/sitemap.xml',
    host: 'https://sancha.vercel.app'
  };
}
