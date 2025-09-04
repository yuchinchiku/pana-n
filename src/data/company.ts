export type Company = {
  table: { label: string; items: { value: string, note?: string, mapUrl?:string }[] }[];
};

export const company: Company = {
  table: [
    { label: "社名", items: [{ value: "有限会社パナ・ン" }] },
    { label: "取締役社長", items: [{ value: "宮平　玄幸" }] },
    { label: "顧問弁護士", items: [{ value: "渡邉　直貴「ブレイス法律事務所」" }] },
    { label: "顧問社会保険労務士	", items: [{ value: "掘下　和紀「堀下社会保険労務士事務所」" }] },
    { label: "電話番号", items: [{ value: "0980-88-1733" }] },
    { label: "FAX", items: [{ value: "0980-88-1713" }] },
    { label: "E-mail", items: [{ value: "<a class='u-link-blank underline' href='email:spa@pana-n.jp'>spa@pana-n.jp</a>" }] },
    { label: "WEBサイト", items: [{ value: "<a class='u-link underline' href='email:spa@pana-n.jp'>https://pana-n.jp</a>" }] },
    { label: "設立", items: [{ value: "	2006年3月8日" }] },
    { label: "事業内容", items: [{ value: "ほぐし・エステ・スパ等の店舗経営及び業務受託運営<br>ほぐし・エステ・スパ等の療法士育成及び企画コンサルタント" }] },
    { label: "所在地", items: [{ value: "〒907-0242 沖縄県石垣市白保1960−104−1 石垣空港2F", mapUrl: 'https://maps.app.goo.gl/BgVgCvhpBUMSgC5r9' }] },
  ],
};
