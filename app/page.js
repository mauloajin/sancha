const map = 'https://www.google.com/maps/search/?api=1&query=%E9%A4%90%E8%8C%B6%20%E4%B8%89%E8%BB%92%E8%8C%B6%E5%B1%8B';
const instagram = 'https://www.instagram.com/suncha2023/';
const tabelog = 'https://tabelog.com/tokyo/A1317/A131706/13289223/';
const hotpepper = 'https://www.hotpepper.jp/strJ003693374/';

const menu = [
  ['壱岐牛のたたきと卵黄ソース巻き', '肉の旨みと卵黄ソースを合わせた、餐茶のあて巻き。'],
  ['炙りサーモンといくら巻き', '炙ったサーモンといくらを組み合わせた海鮮のあて巻き。'],
  ['お造り', 'その日の仕入れに合わせた鮮魚のお造り。'],
  ['自家製鶏白湯の五島うどん', '自家製の鶏白湯で味わう五島うどん。'],
  ['さつま純然鶏の唐揚げ', '一品料理として案内されている鶏の唐揚げ。'],
  ['お茶割りと日本酒', '茶葉を選び、自分で点てるお茶割り。日本酒は複数銘柄を用意。']
];

const faqs = [
  ['餐茶（さんちゃ）はどこにありますか？', '東京都世田谷区三軒茶屋1-35-1 三軒茶屋ゴールデンビル 1F 105にあります。東急田園都市線・世田谷線の三軒茶屋駅から徒歩5分です。'],
  ['餐茶の営業時間は？', '月曜から金曜は17:00〜翌2:00、土曜・日曜・祝日は15:00〜翌2:00です。料理のラストオーダーは翌1:00、ドリンクは翌1:30です。営業日時は変更される場合があるため、来店前に予約ページまたは電話でご確認ください。'],
  ['定休日はいつですか？', '不定休です。年末年始などは営業が変わる場合があります。'],
  ['予約はできますか？', '予約可能です。食べログまたはホットペッパーの予約ページから空席を確認できます。電話での問い合わせは03-6453-2791です。'],
  ['どのような料理を楽しめますか？', '約10種類のあて巻きを中心に、お造り、海鮮料理、和食の一品料理を楽しめます。壱岐牛のたたきと卵黄ソース巻き、炙りサーモンといくら巻きなどが案内されています。'],
  ['あて巻きとは何ですか？', '酒の肴として楽しむ、具材を多めに巻いた寿司です。餐茶では魚介や肉を使った複数のあて巻きを用意しています。'],
  ['どのようなお酒がありますか？', '茶葉を選んで自分で点てるお茶割りと、日本酒を用意しています。日本酒は半合から注文できる案内があります。'],
  ['三軒茶屋駅からのアクセスは？', '三軒茶屋駅から徒歩5分、約238mです。西太子堂駅からも徒歩圏内です。'],
  ['Where is Sancha restaurant?', 'Sancha is at Sangenjaya Golden Building 1F 105, 1-35-1 Sangenjaya, Setagaya-ku, Tokyo. It is about a five-minute walk from Sangenjaya Station.'],
  ['How can I reserve a table at Sancha?', 'Online reservations are available through the linked Tabelog and Hot Pepper pages. You may also call 03-6453-2791.'],
  ['What kind of restaurant is Sancha?', 'Sancha is a Japanese izakaya in Sangenjaya serving atemaki sushi, sashimi, seafood dishes, tea-based drinks and sake.']
];

const jpPlaces = ['三軒茶屋','三茶','三軒茶屋駅','栄通り','太子堂','西太子堂','若林','池尻大橋','駒沢大学','世田谷公園','茶沢通り','国道246号','世田谷区','東京'];
const jpIntents = ['餐茶','さんちゃ','餐茶 予約','餐茶 営業時間','餐茶 電話番号','餐茶 アクセス','和食居酒屋','海鮮居酒屋','寿司居酒屋','あて巻き','あて巻き寿司','おつまみ寿司','海鮮料理','お造り','刺身','日本料理','創作和食','お茶割り','緑茶割り','日本酒','日本酒が飲める店','寿司と日本酒','海鮮と日本酒','ディナー','夜ごはん','ネット予約','駅近居酒屋','カウンターのある居酒屋','五島うどん','壱岐牛','サーモンいくら巻き'];
const jpKeywords = jpPlaces.flatMap((place) => jpIntents.map((intent) => `${place} ${intent}`));
const enPlaces = ['Sangenjaya','Sancha Tokyo','Sangenjaya Station','Taishido','Nishi-taishido','Ikejiri-ohashi','Komazawa-daigaku','Setagaya','Setagaya-ku Tokyo','Tokyo Japan'];
const enIntents = ['Sancha restaurant','Sancha izakaya','Japanese izakaya','Japanese restaurant','atemaki sushi','sushi rolls','seafood izakaya','seafood restaurant','sashimi restaurant','Japanese food','Japanese dining','sushi and sake','seafood and sake','tea cocktail','green tea drink','sake bar','dinner restaurant','restaurant reservation','online booking','opening hours','address','phone number','access','near station','local dining','Goto udon','Iki beef','salmon ikura roll'];
const enKeywords = enPlaces.flatMap((place) => enIntents.map((intent) => `${intent} ${place}`));

const restaurantLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://sancha-nine.vercel.app/#restaurant',
  name: '餐茶',
  alternateName: ['餐茶（さんちゃ）', 'Sancha', 'Suncha'],
  description: '東京都世田谷区三軒茶屋の、あて巻き寿司、海鮮料理、お造り、お茶割り、日本酒を提供する和食居酒屋。',
  url: 'https://sancha-nine.vercel.app/',
  telephone: '03-6453-2791',
  priceRange: '¥¥',
  servesCuisine: ['和食', '居酒屋', '寿司', '海鮮', 'Japanese', 'Sushi', 'Seafood'],
  address: {
    '@type': 'PostalAddress',
    postalCode: '154-0024',
    addressRegion: '東京都',
    addressLocality: '世田谷区',
    streetAddress: '三軒茶屋1-35-1 三軒茶屋ゴールデンビル 1F 105',
    addressCountry: 'JP'
  },
  hasMap: map,
  sameAs: [instagram, tabelog, hotpepper],
  acceptsReservations: hotpepper,
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '17:00', closes: '02:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '15:00', closes: '02:00' }
  ],
  paymentAccepted: 'Cash, VISA, Mastercard, JCB, American Express, Diners, electronic money, QR code payment'
};
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer }
  }))
};

function External({ href, children, className = '' }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <header className="nav">
        <a className="brand" href="#top"><b>餐茶</b><span>さんちゃ</span></a>
        <nav><a href="#about">特徴</a><a href="#menu">お品書き</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English</a></nav>
        <External className="navCta" href={hotpepper}>予約</External>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">SANGENJAYA · TOKYO</p>
            <h1><span>あて巻きと茶割</span>餐茶</h1>
            <p className="reading">さんちゃ — SANCHA</p>
            <p className="lead">寿司を肴に、茶を点てる。<br />三軒茶屋の和食居酒屋。</p>
            <div className="actions"><External className="button dark" href={hotpepper}>空席を確認</External><External className="button line" href={map}>Google Maps</External></div>
          </div>
          <div className="heroVisual" aria-hidden="true">
            <div className="sun"><span>餐</span></div>
            <p>ATEMAKI<br />SUSHI &amp; TEA</p>
          </div>
        </section>

        <section className="about" id="about">
          <div><p className="sectionLabel">01 — ABOUT</p><h2>酒の肴になる寿司、<br />自分で点てるお茶割り。</h2></div>
          <div>
            <p>餐茶（さんちゃ）は、東京都世田谷区三軒茶屋にある居酒屋です。和食を軸に、具材を多めに巻いた「あて巻き」、鮮魚のお造り、海鮮料理、一品料理を提供しています。</p>
            <p>あて巻きは約10種類。壱岐牛のたたきと卵黄ソース巻き、炙りサーモンといくら巻きなど、魚介や肉を組み合わせた巻き寿司を酒の肴として味わえます。茶葉を選んで自分で点てるお茶割りと、複数銘柄の日本酒も餐茶ならではの構成です。</p>
            <ul className="chips"><li>三軒茶屋駅 徒歩5分</li><li>あて巻き 約10種類</li><li>お造り・海鮮料理</li><li>お茶割り・日本酒</li></ul>
          </div>
        </section>

        <section className="menuSection" id="menu">
          <p className="sectionLabel">02 — FOOD &amp; DRINK</p>
          <div className="sectionHead"><h2>餐茶のお品書き</h2><p>季節や仕入れによって料理内容は変わります。最新の内容・価格は予約ページまたは店頭でご確認ください。</p></div>
          <div className="menuGrid">{menu.map(([name, detail], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p></article>)}</div>
          <div className="menuLinks"><External href={tabelog}>食べログでメニューを見る</External><External href={`${hotpepper}food/`}>ホットペッパーでメニューを見る</External></div>
        </section>

        <section className="info" id="info">
          <p className="sectionLabel">03 — INFORMATION</p><h2>店舗基本情報</h2>
          <dl>
            <div><dt>店名</dt><dd>餐茶（さんちゃ）</dd></div>
            <div><dt>英語・ローマ字表記</dt><dd>Sancha / Suncha</dd></div>
            <div><dt>業態</dt><dd>居酒屋、海鮮、寿司、和食</dd></div>
            <div><dt>住所</dt><dd>〒154-0024 東京都世田谷区三軒茶屋1-35-1 三軒茶屋ゴールデンビル 1F 105</dd></div>
            <div><dt>電話番号</dt><dd><a href="tel:0364532791">03-6453-2791</a></dd></div>
            <div><dt>営業時間</dt><dd>月〜金 17:00〜翌2:00<br />土・日・祝 15:00〜翌2:00<br /><small>料理L.O. 翌1:00／ドリンクL.O. 翌1:30</small></dd></div>
            <div><dt>定休日</dt><dd>不定休</dd></div>
            <div><dt>予約</dt><dd>予約可・オンライン予約可</dd></div>
            <div><dt>席</dt><dd>14席（カウンター9席、テーブル2席、立ち飲み3席）</dd></div>
            <div><dt>支払い</dt><dd>クレジットカード、電子マネー、QRコード決済に対応</dd></div>
            <div><dt>チャージ</dt><dd>お通し 500円</dd></div>
          </dl>
          <p className="notice">営業時間・料理・料金は変更される場合があります。来店前に予約ページまたは電話で最新情報をご確認ください。</p>
          <div className="links"><External href={instagram}>Instagram</External><External href={tabelog}>食べログ</External><External href={hotpepper}>ホットペッパー</External><External href={map}>Google Maps</External></div>
        </section>

        <section className="access" id="access">
          <div><p className="sectionLabel">04 — ACCESS</p><h2>三軒茶屋駅から、<br />歩いて5分。</h2><address>〒154-0024<br />東京都世田谷区三軒茶屋1-35-1<br />三軒茶屋ゴールデンビル 1F 105</address><p>東急田園都市線・東急世田谷線「三軒茶屋駅」から徒歩5分、約238m。西太子堂駅、太子堂、栄通り、茶沢通りからもアクセスできる三軒茶屋一丁目にあります。</p><External className="button dark" href={map}>Google Mapsで開く</External></div>
          <div className="mapGraphic" aria-hidden="true"><span className="station">三軒茶屋駅</span><i></i><span className="shop">餐茶</span><p>SANGENJAYA<br />SETAGAYA · TOKYO</p></div>
        </section>

        <section className="faq" id="faq">
          <p className="sectionLabel">05 — FAQ</p><h2>よくあるご質問</h2>
          {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}
        </section>

        <section className="english" id="english">
          <p className="sectionLabel">06 — ENGLISH GUIDE</p>
          <div className="englishGrid">
            <div><h2>Sancha<br />Japanese Izakaya</h2><p>Sancha (also written Suncha) is a Japanese izakaya in Sangenjaya, Setagaya, Tokyo. The restaurant specializes in atemaki—sushi rolls made to enjoy with drinks—along with sashimi, seafood and Japanese dishes.</p><p>Guests can choose tea leaves and prepare a tea-based drink at the table. A selection of sake is also served. Online table reservations are available through the booking links on this page.</p></div>
            <dl>
              <div><dt>NAME</dt><dd>餐茶（さんちゃ） / Sancha</dd></div>
              <div><dt>AREA</dt><dd>Sangenjaya, Setagaya-ku, Tokyo</dd></div>
              <div><dt>CUISINE</dt><dd>Japanese izakaya, atemaki sushi, sashimi, seafood</dd></div>
              <div><dt>ADDRESS</dt><dd>Sangenjaya Golden Building 1F 105, 1-35-1 Sangenjaya, Setagaya-ku, Tokyo 154-0024, Japan</dd></div>
              <div><dt>HOURS</dt><dd>Mon–Fri 5:00 pm–2:00 am<br />Sat, Sun &amp; holidays 3:00 pm–2:00 am<br />Irregular closing days</dd></div>
              <div><dt>ACCESS</dt><dd>About 5 minutes on foot from Sangenjaya Station</dd></div>
              <div><dt>RESERVATION</dt><dd><External href={hotpepper}>Online booking</External> / <a href="tel:0364532791">03-6453-2791</a></dd></div>
              <div><dt>MAP</dt><dd><External href={map}>Open Google Maps</External></dd></div>
            </dl>
          </div>
        </section>

        <section className="keywords">
          <p className="sectionLabel">SEARCH GUIDE</p><h2>餐茶と三軒茶屋の関連検索</h2>
          <p>店舗名、三軒茶屋駅周辺の地名、あて巻き寿司・海鮮・和食・お茶割り・日本酒など、餐茶を探すときに役立つ関連語です。</p>
          <details><summary>日本語の関連検索語（{jpKeywords.length}語）</summary><p>{jpKeywords.join(' ／ ')}</p></details>
          <details><summary>English search terms ({enKeywords.length} terms)</summary><p lang="en">{enKeywords.join(' · ')}</p></details>
        </section>

        <section className="booking"><p>RESERVATION</p><h2>あて巻きと茶割を、<br />三軒茶屋で。</h2><div className="actions"><External className="button light" href={hotpepper}>オンライン予約</External><a className="button outlineLight" href="tel:0364532791">03-6453-2791</a></div></section>
      </main>

      <footer>
        <a className="brand" href="#top"><b>餐茶</b><span>さんちゃ</span></a>
        <p>〒154-0024 東京都世田谷区三軒茶屋1-35-1<br />三軒茶屋ゴールデンビル 1F 105<br /><a href="tel:0364532791">03-6453-2791</a></p>
        <p>Sancha — Atemaki Sushi<br />Japanese Izakaya in Sangenjaya</p>
      </footer>
    </>
  );
}
