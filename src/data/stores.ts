// src/data/stores.ts
export type Store = {
  value: string;
  cat: string;
  name: string;
  href: string;
  image: string;
  hasButton?: boolean;
};

export const stores: Store[] = [
  {
    value: "ほぐしガッテン",
    href: "hogushigatten-nahakume",
    image: "hogushi-nahakume",
    cat: "ほぐしガッテン",
    name: "那覇久米店",
    hasButton: true
  },
  {
    value: "ほぐしガッテン",
    href: "hogushigatten-maezato",
    image: "hogushi-maesato",
    cat: "ほぐしガッテン&<br>パナ・ン琉球スパ",
    name: "石垣 真栄里店",
    hasButton: true
  },
  {
    value: "ほぐしガッテン",
    href: "hogushigatten-omori",
    image: "hogushi-omori",
    cat: "ほぐしガッテン",
    name: "大森東口店（東京品川）",
    hasButton: true
  },
  {
    value: "星のや",
    href: "hoshino-okinawa",
    image: "hosinoya-okinawa",
    cat: "星のや沖縄スパ",
    name: "星野リゾート星のや沖縄",
    hasButton: true
  },
  {
    value: "星のや",
    href: "hoshino-taketomi",
    image: "hosinoya-taketomi",
    cat: "星のや竹富島スパ",
    name: "星野リゾート星のや竹富島",
    hasButton: true
  },
  {
    value: "星のや",
    href: "hoshino-iriomote",
    image: "hosinoya-iriomote",
    cat: "西表スパ",
    name: "星野リゾート西表島ホテル",
    hasButton: true
  },
  {
    value: "星のや",
    href: "hoshino-kohama",
    image: "hosinoya-kohama",
    cat: "小浜島琉球スパ",
    name: "星野リゾートリゾナーレ小浜島",
    hasButton: true
  },
  {
    value: "琉球足つぼ",
    href: "fusaki",
    image: "foot-fusaki",
    cat: "琉球足つぼ",
    name: "フサキビーチリゾートホテル＆ヴィラズ",
    hasButton: true
  },
  {
    value: "パナ・ン",
    href: "painushima",
    image: "painushima",
    cat: "パナ・ン",
    name: "南ぬ島石垣空港店",
    hasButton: true
  },
];
