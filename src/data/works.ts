export type WorkTag = "design" | "writing" | "development";

export interface WorkItem {
  id: string;
  title: string;
  description: string;
  /** 画像パス（public 配下）。未指定なら規定サムネイル */
  thumbnail?: string;
  tags: WorkTag[];
  link?: string;
  /** 並び順用（新しいほど大きい値推奨） */
  date: string;
}

export const workItems: WorkItem[] = [
  {
    id: "sample-vr-stage",
    title: "VRイベント用ステージビジュアル",
    description:
      "VRChatワールド向けのライティングとシェーダー調整を担当。来場者の導線を意識した空間設計です。",
    tags: ["design", "development"],
    link: "#",
    date: "2025-11-01",
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
