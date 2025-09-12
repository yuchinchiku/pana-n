export type Company = {
  table: { label: string; items: { value: string, note?: string, mapUrl?:string }[] }[];
};

export const company: Company = {
  table: [
    { label: "社名", items: [{ value: "有限会社パナ・ン" }] },
    { label: "取締役社長", items: [{ value: "宮平　玄幸" }] },
    { label: "顧問弁護士", items: [{ value: "渡邉　直貴「弁護士法人ブレイス」" }] },
    { label: "顧問社会保険労務士	", items: [{ value: "掘下　和紀「社会保険労務士法人 堀下＆パートナーズ」" }] },
    { label: "電話番号", items: [{ value: "0980-88-1733" }] },
    { label: "FAX", items: [{ value: "0980-88-1713" }] },
    { label: "E-mail", items: [{ value: "<a class='u-link-blank underline' href='email:spa@pana-n.jp'>spa@pana-n.jp</a>" }] },
    { label: "WEBサイト", items: [{ value: "<a class='u-link underline' href='email:spa@pana-n.jp'>https://pana-n.jp</a>" }] },
    { label: "設立", items: [{ value: "	2006年3月8日" }] },
    { label: "事業内容", items: [{ value: "ほぐし・エステ・スパ等の店舗経営及び業務受託運営<br>ほぐし・エステ・スパ等の療法士育成及び企画コンサルタント" }] },
    { label: "所在地", items: [{ value: "〒907-0013 沖縄県石垣市浜崎町3-3-2", mapUrl: 'https://maps.app.goo.gl/8grmXHpYXeFVCBEg6' }] },
  ],
};
