export type WorkTag = "design" | "writing" | "development";

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
  /** 詳細ページの本文。未指定なら description を使用 */
  body?: string;
  /** 外部リンクのカード情報。指定時は詳細ページの画像エリアにカードを表示 */
  externalCard?: ExternalCard;
  tags: WorkTag[];
  link?: string;
  /** 並び順用（新しいほど大きい値推奨） */
  date: string;
}

export const workItems: WorkItem[] = [
  {
    id: "mixtourpro-djay-note",
    title: "Mixtour Pro x djayが良いぞという話",
    description:
      "DJ機材のレビュー記事。製品の特徴をわかりやすく伝えることを意識して、実際の使用感や他製品との比較も交えて執筆しました。",
    body: "Mixtour Proは、初心者からプロまで幅広いDJに対応した高性能なコントローラーです。特にdjayとの組み合わせで、直感的な操作と豊富な機能が魅力的です。この記事では、Mixtour Proの特徴やdjayとの相性について詳しく解説します。",
    tags: ["writing"],
    link: "https://note.com/_misoka/n/n06c717bec78b",
    externalCard: {
      title: "Mixtour Pro x djayが良いぞという話",
      image: "mixtourpro.webp",
      siteName: "note",
    },
    date: "2026-04-07",
  },
  {
    id: "sample-script",
    title: "進行台本・MC原稿",
    description:
      "60分枠の音楽イベント向けに、オープニングからクロージングまでの台本とアナウンス文言を作成しました。",
    tags: ["writing"],
    date: "2025-09-15",
  },
  {
    id: "sample-ui-kit",
    title: "告知用キービジュアル",
    description:
      "SNS告知とイベントページ用の統一トンマナでのビジュアルセット。メインカラーとアクセントのバランスを調整。",
    tags: ["design"],
    date: "2025-08-20",
  },
  {
    id: "sample-tool",
    title: "ワールドギミック用スクリプト",
    description:
      "UdonSharpでインタラクション要素を実装。負荷を抑えた同期処理を心がけています。",
    tags: ["development"],
    link: "#",
    date: "2025-07-05",
  },
  {
    id: "sample-copy",
    title: "イベント募集ページのライティング",
    description:
      "参加条件・スケジュール・注意事項を読みやすく整理し、問い合わせ件数の改善を狙ったコピーです。",
    tags: ["writing"],
    date: "2025-05-10",
  },
  {
    id: "sample-brand",
    title: "サークルブランドガイドライン",
    description:
      "ロゴ利用ルール、配色、タイポの簡易ガイドを1枚のシートにまとめ、チーム内で共有しやすくしました。",
    tags: ["design", "writing"],
    date: "2025-03-22",
  },
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
