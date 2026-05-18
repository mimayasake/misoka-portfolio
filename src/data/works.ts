export type WorkTag = "design" | "writing" | "development" | "planning";

export type BodySegment = string | { text: string; href: string };

export interface ExternalCard {
  title: string;
  description?: string;
  image?: string;
  siteName?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  /** グリッドカード用サムネイル（public 配下） */
  thumbnail?: string;
  /** 詳細ページ左側に表示する画像（public 配下）。未指定なら thumbnail にフォールバック */
  detailImage?: string;
  /** 詳細ページの本文。文字列またはリンクを含むセグメント配列。未指定なら description を使用 */
  body?: string | BodySegment[];
  /** 外部リンクのカード情報。指定時は詳細ページの画像エリアにカードを表示 */
  externalCard?: ExternalCard;
  tags: WorkTag[];
  link?: string;
  /** 並び順用（新しいほど大きい値推奨） */
  date: string;
}

export const workItems: WorkItem[] = [
  {
    id: "4kicks",
    title: "DJ Event「4KICKs」",
    description:
      "4つ打ちをテーマとしたDJイベントを企画・フライヤーの制作を行いました",
    thumbnail: "works/4KICKs.png",
    body: "きっかけは自身の新機材の導入ですが、それに際してGOOD INTERNETというDiscordサーバー内で有志を募り、自身のDJ基盤である4つ打ちの中でもHouseやTechnoにとらわれない様々な4つ打ちのジャンルが集まることを期待して企画しました。\n\nフライヤー制作に際しては、イベントのテーマである4つ打ちの波形を縦にした際のビジュアルをモチーフにしています。\nまた、シックでアンダーグラウンドめなジャンルの音楽を流すDJが集まったことから、コンクリートをイメージしたダークトーン・褐色を基調とした配色にしています。\n\nロゴタイプについてはパッと見たときの「4」と2つの「K」の右上がりの線が印象的であったことから、シンプルに先頭の4とKを組み合わせたものを着想し、そのバランスを崩さないように他の文字を配置しました。",
    tags: ["design", "planning"],
    date: "2026-04-21",
  },
  {
    id: "mixtourpro-djay-note",
    title: "Mixtour Pro x djayが良いぞという話",
    description:
      "現在のメインDJ機材のレビュー記事。コントローラーに対して初見の方を想定し、カジュアルな文体で執筆しました",
    thumbnail: "works/mixtourpro.webp",
    body: "最近になり、タイトルのMixtour Proという機材を導入したのをきっかけにdjayというiOSアプリとの組み合わせでDJを行っております。\n両方ともメインストリームのDJ機材・ソフトウェアではないため、当記事ではDJの読者層を想定しつつ、それぞれの機材・アプリケーションについてカジュアルな文体で分かりやすく良い点・悪い点を5点に絞り、ファーストインプレッションをまとめました。",
    tags: ["writing"],
    link: "https://note.com/_misoka/n/n06c717bec78b",
    externalCard: {
      title: "Mixtour Pro x djayが良いぞという話",
      image: "works/mixtourpro.webp",
      siteName: "note",
    },
    date: "2026-04-07",
  },
  {
    id: "misoka-logo2",
    title: "misoka DJロゴデザイン",
    description:
      "自身のDJ活動に使用するロゴを制作しました。",
    thumbnail: "works/misoka-logo.png",
    detailImage: "works/misoka-logos.png",
    body: "元々使用していたデザインロゴは比較的細い線を用いており、フライヤーやVJで使用される際に視覚的な主張に乏しいことが難点でした。\nそのため、元々のロゴにおいて基調となっていた縦・斜めのラインを強調し、太い線を用いることで視認性を高めることと、\nまた近年のDJロゴにて見かけるような、印象的なロゴ全体の形状を推すようなロゴデザインを参考に、可読性は犠牲にしつつも、ロゴ全体を塊感のあるものにすることを意識して制作しました。\nロゴのキーとなる部分は元のロゴにて印象的だった「s」の稲妻のようなラインで、その部分をメインに据えた上で他の文字を配置していきました。",
    tags: ["design"],
    date: "2025-12-23",
  },
  {
    id: "rftp-flyer",
    title: "DJ Event「Remember Future Teaparty」",
    description:
      "Future系のEDMをテーマとしたDJイベントのフライヤー制作を担当しました。",
    thumbnail: "works/RFTP.png",
    body: "Kawaii Future系EDMをテーマとしたDJイベントのフライヤー制作を担当しました。\n\nFuture bassを始めとしたサウンドの未来感をイメージしつつ、Kawaiiを意識したイベントコンセプトに合わせてパステル・ビビッドカラーを基調としています。\nまた縦と斜めのグリッド構成をベースにネオンライトを模したラインを配置するなど、未来的な意匠を取り込むことで、あくまで「Kawaii」「Future」の両方の要素が併存していることを意識させるようデザインしました。",
    tags: ["design"],
    date: "2024-08-21",
  },
  {
    id: "misoka-portfolio",
    title: "misoka Portfolioサイト制作",
    description:
      "このポートフォリオサイトの制作を行いました。Astro, Reactを用いて、デザインから実装までをClaude codeを使用して制作しました。",
    thumbnail: "works/portfolio-thumb.png",
    body: "元々は既存のポートフォリオサイトを過去に制作しておりましたが、よりモダンなデザインかつVRChat内やDJ活動などの活動にフォーカスしたポートフォリオサイトを作りたいと思い、制作しました。\nデザインはWorksの制作物より主張しないようシンプルかつミニマルなものを目指しつつ、要所要所で自身のテーマカラーであるアバターの紫・瞳の赤色を差し色として印象づけることを意識しています。\nまた、今後の継続的な更新を意識し、Worksについてはテキスト情報のみから各ページを生成するように仕様策定しています。\n着想から提出までの制作可能な期間がタイトであったことから、Claude Codeを活用しながらデザイン・実装を並走させて制作しました。スピード感を保ちつつクオリティのバランスを意識しながら進めた、初めての試みです。",
    tags: ["development", "writing"],
    date: "2026-05-17",
  },
  {
    id: "howl",
    title: "DJイベント「HOWL」",
    description:
      "シューゲイザーをテーマにしたDJイベントの企画・フライヤー制作を行いました。",
    thumbnail: "works/howl-flyer_light.jpg",
    detailImage: "works/howl-flyers.png",
    body: "シューゲイザー（Shoegazer）という音楽ジャンルをテーマにしたDJイベントの企画・フライヤー制作を行いました。\nシューゲイザーとはノイズやリバーブのかかったギターサウンド、およびそれを再生するアンプから生成されるハウリングの音を使用したロック音楽のジャンルです。\nHOWLというイベント名およびメインイメージに狼を選んだ理由としてはまさにそのハウリングと吠えるような音の様子から採用しました。\n\n明色・暗色それぞれのテーマで2枚のフライヤーを制作しておりますが、それぞれシューゲイザーと括られるジャンルについては、暗く内省的な雰囲気をもつものから、ドリームポップと呼ばれるような幻想的な雰囲気を持つ曲までを包含するため、それぞれをイメージ的にカバーする意図で制作を行いました。",
    tags: ["design", "planning"],
    date: "2024-02-02",
  },
  {
    id: "burpsuite-hands-on",
    title: "Burp Suiteを使用した脆弱性診断ハンズオンの実施",
    description: "Burp Suiteを使用した脆弱性診断のハンズオンを実施しました。",
    thumbnail: "",
    body: "有志の依頼にて、少人数規模でのBurp Suiteを使用した脆弱性診断のハンズオンを実施しました。\n既にWebサイト開発への知見を持った方を対象とし、ツールの導入から模擬サイトを利用した機能の実演・実使用までをカバーする内容となっております。\n",
    tags: ["writing", "planning"],
    link: "https://docs.google.com/document/d/1f-jZ904k_cn83i2qxmcZX_i_yBbnrNwNwYbunYfEO4w/edit?usp=drivesdk",
    externalCard: {
      title :"Burpハンズオン",
      siteName:"Google Document"
    }
    date: "2024-02-17"
  }
];

/** 新しい作品ほど先頭（グリッド左上から）に来るよう日付降順で並べます */
export function worksSortedByDateDesc(items: WorkItem[]): WorkItem[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function worksByTag(tag: WorkTag): WorkItem[] {
  return worksSortedByDateDesc(workItems.filter((w) => w.tags.includes(tag)));
}
