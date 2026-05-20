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
    title: "misoka DJロゴデザイン更新",
    description:
      "自身のDJ活動に使用するロゴを、より使用用途を意識しつつ更新する意図で制作しました。",
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
    thumbnail: "works/burp-suite_logo.jpg",
    body: "有志の依頼にて、少人数規模でのBurp Suiteを使用した脆弱性診断のハンズオンを実施しました。\n既にWebサイト開発への知見を持った方を対象とし、ツールの導入から模擬サイトを利用した機能の実演・実使用までをカバーする内容となっております。\n\n知人からの提案を受け、内容の企画から資料作成、講義の実施までを行い、実際にメジャーな脆弱性の診断を一通り網羅するよう意識しながら内容を考案しました。",
    tags:["writing", "planning", "development"],
    link: "https://docs.google.com/document/d/1f-jZ904k_cn83i2qxmcZX_i_yBbnrNwNwYbunYfEO4w/edit?usp=drivesdk",
    externalCard: {
      title :"Burp Suite ハンズオン",
      image: "works/burp-thumbnail.png",
      siteName:"Google Document"
    },
    date: "2024-02-17",
  },
  {
    id: "misoka-logo1",
    title: "misoka DJロゴデザイン",
    description: "自身のDJ活動に使用するロゴを制作しました。",
    thumbnail: "works/misoka-old-mark.png",
    detailImage: "works/misoka-old-logos.png",
    body: "DJ活動のはじめから2025年あたりまで使用していたロゴデザイン群。上から2021/8（A）、2022/2（B）、2022/4（C）に制作したロゴ・ロゴマークになります。\nAの制作について意識した点としては、VRDJの配信スクリーンにおける存在感です。VRChatにおいてのDJはただ音を流すだけでなくOBSを使用した配信のスタイルを取るため、自力での映像出力やその際のビジュアルも求められ、とりわけそのスクリーンはかなり巨大なものも多いことを客側として感じていたため、スクリーンで大写しをする前提で制作をしました。\nただ、使用していく中でフライヤーの中で他のDJの横長・塊感のあるロゴ・ロゴマークと並べられる中での視認性の問題から、ロゴマークとしてシンプルにしたB・ラインの太さや傾斜を調整して存在感を強めたCを制作し、それが現在の新しいロゴマークでの改善を図ろうとした点にもつながる事になりました。\n\nロゴ群全体のデザインをするうえで意識した点は、自分の幅広く多くの音楽ジャンルにまたがるようなプレイのどのタイミングでも合うような、シンプルなデザインに収まるようにしたところです。\nまずユーザ名の最初の文字である「m」を先頭の「/」様の3本線として表現し、そこから連想する形で各文字をデザインしていきました。その中でも各「/」の文字列が見た目上「m」部と同様の等間隔に見えるよう間隔を調整・要素をシンプル化することで全体としての形状のまとまりを出し、シンプルながらも印象的な造形になることを意図して制作を行いました。\n",
    tags: ["design"],
    date: "2021-08-15",
  },
  {
    id: "qualia",
    title: "DJイベント「Qualia」",
    description: "「制作者の頭の中を覗いてみたい曲」というテーマでのDJイベントの企画・フライヤー制作を行いました。",
    thumbnail: "works/qualia-flyer.png",
    body: "「制作者の頭の中を覗いてみたい」「どんな視界で世界を見ているんだろう」と感じる曲というテーマでのDJイベントの企画・フライヤー制作を行いました。\n\nイベント名のQualiaは哲学用語で、外界からの刺激に対して生じる主観的な感覚体験を指す言葉で、各DJがどのような曲・アーティストを奇怪に思ったり驚きをもって受け止めたりしてるんだろう、というところが気になってこのような企画を興しました。\n\nフライヤー制作に際しては、様々な色が混ざり合う色の帯の画像素材から着想し、一見濁った水の水面（楽曲制作者の脳内）から様々な色が表出し、楽曲として表に見える様子をイメージして制作を行いました。\n背景には開場であるGOOD PARKING（夜の駐車場をテーマにしたワールド）からコンクリートのテクスチャを採用し、背景の文字列にはイベント名のQualiaから着想した文章を配置、文字としても思想が表に出てくるようなイメージをもたせるようにしています。",
    tags: ["design", "planning"],
    date: "2024-05-23",
  },
  {
    id: "vrdj-my-settings",
    title: "VRDJ環境備忘録",
    description: "自分のVRDJ環境の設定やその時の環境に感じたメリット・デメリットについての備忘録です。（photo by atsushikubo）",
    thumbnail: "works/dj-decks.webp",
    body: "VRDJを行うにあたって、機材の設定や環境の構築など、様々な試行錯誤を経て現在のスタイルに落ち着いています。\nこの備忘録では、使用している機材やソフトウェアの設定、またそれらの構成を組み合わせて使用して感じたメリット・デメリットについてまとめています。\n\n特にVRDJは通常のDJと異なり、VR空間内での操作や映像出力など独特の要素が多いながら、それらについての知見の伝達は練習などの場においての個人間の口伝であったりすることも多く、インターネット上の情報も古いものが多いです。\nそのため、これからVRDJを始める方や現在試行錯誤中の方にとって参考になる内容としてインターネットに知識を連ねておく意図も兼ね、現在も更新を重ねている記事です。",
    tags: ["design", "planning"],
    date: "2024-08-22",
    externalCard: {
      title: "VRDJ環境備忘録",
      image: "works/vrdj-my-settings.png",
      siteName: "note",
    },
    link: "https://note.com/_misoka/n/n95c8d7c33826",
  },
  {
    id: "vrdj-look-back",
    title: "思考を振り返る - 2021～2023",
    description: "自分の中でも特に印象的なMIXから、自分のVRChatやVRDJ・音楽や感性についての思考を振り返る記事です。",
    thumbnail: "works/campfire-misoka.webp",
    body: "元々SF作品が好きな自分のVRChatやVRDJに対する興味の一つの側面として、未来の人の営みや音楽の文化がどのようなものになるのかということに対する先取りや実験の場であるという感覚を持っています。\nこれまでのDJを記事作成時点に振り返り、特にSFというテーマで言うと印象的だった自分のMIXや思考を振り返ることで。そのような「こういう感覚を持っている・持ってきたこの感性でDJをしている」という部分を言語化をしようとした記事になります。\nWorksとして扱うには毛色が異なりますが、自分のVRChat・メタバース・VRDJや音楽に対しての眼差しが色濃く反映された媒体であることから、こちらに掲載することにしました。",
    tags: ["writing"],
    date: "2023-12-31",
    externalCard: {
      title: "思考を振り返る - 2021～2023",
      image: "works/vrdj-look-back.png",
      siteName: "note",
    },
    link: "https://note.com/_misoka/n/ne737a9445f75",
  },
  {
    id: "miyazaki-dj-fellows",
    title: "宮崎DJ講習会",
    description: "過去在住していた宮崎県内のDJコミュニティにて、初心者向けのDJ講習会を企画・実施に参画しました。",
    thumbnail: "works/miyazaki-dj-fellows.png",
    body: "当時在住していた宮崎県内でのDJ初心者の方に向けて講習会の企画・実施メンバーの1人として参画しました。\n参加者は主に最近DJを始めたばかりの方や、より知識を深めたい方を対象とし、第1回についてはDJソフトの解説やUSBでDJを行っていく際のファイルについての注意点・DJソフトRekordboxの初期設定やCue設定についてをカバーする内容となっています。\n\n知人からの提案を受け、内容の企画から資料作成、講習会の実施までを複数人の講師DJ陣で分担しながら行い、実際にDJを始めるにあたっての最初のハードルを下げることや、継続的に行うにあたってテンプレートや継続をしやすい構造を意識しながら内容を考案しました。\n\n惜しくも2回目については主催者の都合により開催が見送られてしまいましたが、今後もDJを始めたい方に向けての情報を広める機会があれば企画・実施には積極的に関わっていきたいと考えているうちの1つのマイルストーンとなる経験になりました。\n（有償の講習会であったため、詳しい内容についてはサイト上伏せさせて頂きます）",
    tags: ["design", "writing", "planning"],
    date: "2024-03-30",
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
