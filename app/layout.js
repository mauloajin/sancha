import './globals.css';

const siteUrl = 'https://sancha-nine.vercel.app';
const title = '三軒茶屋 餐茶（さんちゃ）｜あて巻き寿司と海鮮の和食居酒屋';
const description = '東京都世田谷区三軒茶屋の和食居酒屋「餐茶（さんちゃ）」。あて巻き寿司、お造り、海鮮料理、自分で点てるお茶割り、日本酒を楽しめます。三軒茶屋駅から徒歩5分。営業時間・予約・アクセスをご案内します。';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: ['餐茶', 'さんちゃ', '三軒茶屋', 'あて巻き', '寿司', '海鮮', '和食居酒屋', 'お茶割り', '日本酒'],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: '餐茶（さんちゃ）',
    locale: 'ja_JP',
    type: 'website'
  },
  twitter: { card: 'summary', title, description },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
