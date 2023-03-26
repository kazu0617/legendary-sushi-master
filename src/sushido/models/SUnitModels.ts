import { SUnitModel, SUnitOptions } from "../factory/type";

export const マグロ箱: SUnitOptions = {
  code: "マグロ箱",
  stack: { maxCount: 0 },
  generation: { objCode: "マグロ" },
  titleEn: "Tuna (box)",
  titleKo: "",
  descriptionJa: "マグロが取り出せる",
  descriptionEn: "Grab to take Tuna",
  descriptionKo: "",
};

export const サーモン箱: SUnitOptions = {
  code: "サーモン箱",
  stack: { maxCount: 0 },
  generation: { objCode: "サーモン" },
  titleEn: "Salmon (box)",
  titleKo: "",
  descriptionJa: "サーモンが取り出せる",
  descriptionEn: "Grab to take Salmon",
  descriptionKo: "",
};

export const えび箱: SUnitOptions = {
  code: "えび箱",
  stack: { maxCount: 0 },
  generation: { objCode: "えび" },
  titleEn: "Shrimp (box)",
  titleKo: "",
  descriptionJa: "えびが取り出せる",
  descriptionEn: "Grab to take Shrimp",
  descriptionKo: "",
};

export const たこ箱: SUnitOptions = {
  code: "たこ箱",
  stack: { maxCount: 0 },
  generation: { objCode: "たこ" },
  titleEn: "Octopus (box)",
  titleKo: "",
  descriptionJa: "たこが取り出せる",
  descriptionEn: "Grab to take Octopus",
  descriptionKo: "",
};

export const いか箱: SUnitOptions = {
  code: "いか箱",
  stack: { maxCount: 0 },
  generation: { objCode: "いか" },
  titleEn: "Squid (box)",
  titleKo: "",
  descriptionJa: "いかが取り出せる",
  descriptionEn: "Grab to take Squid",
  descriptionKo: "",
};

export const てんぷらこ箱: SUnitOptions = {
  code: "てんぷらこ箱",
  stack: { maxCount: 0 },
  generation: { objCode: "てんぷらこ" },
  titleEn: "Tempura batter (box)",
  titleKo: "",
  descriptionJa: "てんぷらこが取り出せる",
  descriptionEn: "Grab to take Tempura batter",
  descriptionKo: "",
};

export const なまたまご箱: SUnitOptions = {
  code: "なまたまご箱",
  stack: { maxCount: 0 },
  generation: { objCode: "なまたまご" },
  titleEn: "Egg (box)",
  titleKo: "",
  descriptionJa: "なまたまごが取り出せる",
  descriptionEn: "Grab to take Egg",
  descriptionKo: "",
};

export const のり箱: SUnitOptions = {
  code: "のり箱",
  stack: { maxCount: 0 },
  generation: { objCode: "のり" },
  titleEn: "Seaweed (box)",
  titleKo: "",
  descriptionJa: "のりが取り出せる",
  descriptionEn: "Grab to take Seaweed",
  descriptionKo: "",
};

export const すめし箱: SUnitOptions = {
  code: "すめし箱",
  stack: { maxCount: 0 },
  generation: { objCode: "すめし" },
  titleEn: "Rice (box)",
  titleKo: "",
  descriptionJa: "すめしが取り出せる",
  descriptionEn: "Grab to take Rice",
  descriptionKo: "",
};

export const 瓶箱: SUnitOptions = {
  code: "瓶箱",
  stack: { maxCount: 0 },
  generation: { objCode: "瓶" },
  titleEn: "Broth cup (box)",
  titleKo: "",
  descriptionJa: "茶碗蒸しの茶器が取り出せる",
  descriptionEn: "Grab to take a Broth cup",
  descriptionKo: "",
};

export const アボカド箱: SUnitOptions = {
  code: "アボカド箱",
  stack: { maxCount: 0 },
  generation: { objCode: "アボカド" },
  titleEn: "Avocado (box)",
  titleKo: "",
  descriptionJa: "アボカドが取り出せる",
  descriptionEn: "Grab to take Avocado",
  descriptionKo: "",
};

export const コンベア: SUnitOptions = {
  code: "コンベア",
  stack: { maxCount: 1 },
  transporter: [
    { type: "input", speed: 10 },
    undefined,
    { type: "output", speed: 10 },
    undefined,
  ],
  titleEn: "Conveyor",
  titleKo: "",
  descriptionJa: "矢印の方向へ自動的に移動させる",
  descriptionEn: "Automatically carries items in the direction of the arrow",
  descriptionKo: "",
};

export const 直角コンベアL: SUnitOptions = {
  code: "直角コンベアL",
  stack: { maxCount: 1 },
  transporter: [
    { type: "input", speed: 10 },
    undefined,
    undefined,
    { type: "output", speed: 10 },
  ],
  titleEn: "Angled Conveyor L",
  titleKo: "",
  descriptionJa: "左に曲がるコンベア",
  descriptionEn: "Conveyor that turns to the left",
  descriptionKo: "",
};
export const 直角コンベアR: SUnitOptions = {
  code: "直角コンベアR",
  stack: { maxCount: 1 },
  transporter: [
    { type: "input", speed: 10 },
    { type: "output", speed: 10 },
    undefined,
    undefined,
  ],
  titleEn: "Angled Conveyor R",
  titleKo: "",
  descriptionJa: "右に曲がるコンベア",
  descriptionEn: "Conveyor that turns to the right",
  descriptionKo: "",
};
export const コンベア_Lv2: SUnitOptions = {
  code: "コンベア_Lv2",
  stack: { maxCount: 1 },
  transporter: [
    { type: "input", speed: 20 },
    undefined,
    { type: "output", speed: 20 },
    undefined,
  ],
  titleEn: "ConveyorLv2",
  titleKo: "",
  descriptionJa: "矢印の方向へ自動的に移動させる",
  descriptionEn: "Automatically carries items in the direction of the arrow",
  descriptionKo: "",
};

export const 直角コンベアL_Lv2: SUnitOptions = {
  code: "直角コンベアL_Lv2",
  stack: { maxCount: 1 },
  transporter: [
    { type: "input", speed: 20 },
    undefined,
    undefined,
    { type: "output", speed: 20 },
  ],
  titleEn: "Angled Conveyor L Lv2",
  titleKo: "",
  descriptionJa: "左に曲がるコンベア",
  descriptionEn: "Conveyor that turns to the left",
  descriptionKo: "",
};
export const 直角コンベアR_Lv2: SUnitOptions = {
  code: "直角コンベアR_Lv2",
  stack: { maxCount: 1 },
  transporter: [
    { type: "input", speed: 20 },
    { type: "output", speed: 20 },
    undefined,
    undefined,
  ],
  titleEn: "Angled Conveyor R Lv2",
  titleKo: "",
  descriptionJa: "右に曲がるコンベア",
  descriptionEn: "Conveyor that turns to the right",
  descriptionKo: "",
};
export const カウンター: SUnitOptions = {
  code: "カウンター",
  stack: { maxCount: 1 },
  process: [
    {
      processCode: "kiru",
      requireInteract: true,
      value: 5,
    },
    {
      processCode: "nigiru",
      requireInteract: true,
      value: 5,
    },
  ],
  titleEn: "Counter",
  titleKo: "",
  descriptionJa: "調理(切る / 握る)を行える",
  descriptionEn: "Prepare food",
  descriptionKo: "",
};

export const コンロ: SUnitOptions = {
  code: "コンロ",
  stack: { maxCount: 1 },
  process: [
    {
      processCode: "yaku",
      requireInteract: false,
      value: 5,
    },
  ],
  titleEn: "Stove",
  titleKo: "",
  descriptionJa: "調理(加熱) を行える",
  descriptionEn: "Cook food",
  descriptionKo: "",
};

export const 自動にぎるくん: SUnitOptions = {
  code: "自動にぎるくん",
  stack: { maxCount: 1 },
  process: [
    {
      processCode: "nigiru",
      requireInteract: false,
      value: 15,
    },
  ],
  titleEn: "Rice press",
  titleKo: "",
  descriptionJa: "自動化ツール: 調理(握る)を行える",
  descriptionEn: "Automatically prepares rice",
  descriptionKo: "",
};

export const ミキサー: SUnitOptions = {
  code: "ミキサー",
  stack: { maxCount: 1 },
  process: [
    {
      processCode: "kiru",
      requireInteract: false,
      value: 15,
    },
  ],
  titleEn: "Mixer",
  titleKo: "",
  descriptionJa: "調理(切る)を行える",
  descriptionEn: "Automatically cuts food",
  descriptionKo: "",
};

export const コンベアミキサー: SUnitOptions = {
  code: "コンベアミキサー",
  stack: { maxCount: 1 },
  process: [
    {
      processCode: "kiru",
      requireInteract: false,
      value: 15,
    },
  ],
  transporter: [
    { type: "input", speed: 10 },
    undefined,
    { type: "output", speed: 10 },
    undefined,
  ],
  titleEn: "Mixer with Conveyor",
  titleKo: "",
  descriptionJa: "ミキサーにコンベアの機能を付加したユニット",
  descriptionEn: "Mixer connected to a conveyor",
  descriptionKo: "",
};
export const コンベア自動にぎるくん: SUnitOptions = {
  code: "コンベア自動にぎるくん",
  stack: { maxCount: 1 },
  process: [
    {
      processCode: "nigiru",
      requireInteract: false,
      value: 15,
    },
  ],
  transporter: [
    { type: "input", speed: 10 },
    undefined,
    { type: "output", speed: 10 },
    undefined,
  ],
  titleEn: "Rice press with Conveyor",
  titleKo: "",
  descriptionJa: "自動にぎる君にコンベアの機能を付加したユニット",
  descriptionEn: "Rice press connected to a conveyor",
  descriptionKo: "",
};
export const コンベアコンロ: SUnitOptions = {
  code: "コンベアコンロ",
  stack: { maxCount: 1 },
  process: [
    {
      processCode: "yaku",
      requireInteract: false,
      value: 5,
    },
  ],
  transporter: [
    { type: "input", speed: 10 },
    undefined,
    { type: "output", speed: 10 },
    undefined,
  ],
  titleEn: "Stove with Conveyor",
  titleKo: "",
  descriptionJa: "コンロにコンベアの機能を付加したユニット",
  descriptionEn: "Stove connected to a conveyor",
  descriptionKo: "",
};

export const コンバイナ: SUnitOptions = {
  code: "コンバイナ",
  stack: { maxCount: 1 },
  transporter: [undefined, undefined, undefined, undefined],
  combiner: { count: 1, speed: 30 },
  titleEn: "Combiner",
  titleKo: "",
  descriptionJa: "自動化ツール: 二種類の素材を組み合わせる",
  descriptionEn: "Automatically combines food together",
  descriptionKo: "",
};

export const コンベアコンバイナ: SUnitOptions = {
  code: "コンベアコンバイナ",
  stack: { maxCount: 1 },
  transporter: [
    { type: "input", speed: 10 },
    { type: "input", speed: 10 },
    { type: "input", speed: 10 },
    { type: "output", speed: 10 },
  ],
  combiner: { count: 1, speed: 30 },
  titleEn: "Combiner with Conveyor",
  titleKo: "",
  descriptionJa: "コンバイナにコンベアの機能を付加したユニット",
  descriptionEn: "Combiner connected to a conveyor",
  descriptionKo: "",
};

export const 売却機: SUnitOptions = {
  code: "売却機",
  stack: { maxCount: 1 },
  process: [{ processCode: "uru", requireInteract: false, value: 2 }],
  transporter: [undefined, undefined, undefined, undefined],
  titleEn: "Selling machine",
  titleKo: "",
  descriptionJa: "完成品を売却できる",
  descriptionEn: "Sells finished products",
  descriptionKo: "",
};

export const ダイニングテーブル: SUnitOptions = {
  code: "ダイニングテーブル",
  stack: { maxCount: 1 },
  process: [{ processCode: "taberu", requireInteract: false, value: 7 }],
  transporter: [undefined, undefined, undefined, undefined],
  titleEn: "Dining table",
  titleKo: "",
  descriptionJa: "お客さんが座るところ",
  descriptionEn: "Table where customers sit",
  descriptionKo: "",
};

export const ゴミ箱: SUnitOptions = {
  code: "ゴミ箱",
  stack: { maxCount: 0 },
  delete: { addCoin: 0 },
  titleEn: "Garbage can",
  titleKo: "",
  descriptionJa: "誤って作成した場合に破棄するためのユニット",
  descriptionEn: "Discard incorrectly prepared products",
  descriptionKo: "",
};

export const ネオロイド箱: SUnitOptions = {
  code: "ネオロイド箱",
  stack: { maxCount: 0 },
  delete: { addCoin: 1 },
  titleEn: "NeoRoid (box)",
  titleKo: "",
  descriptionJa: "これはいいゴミ箱だ！（★7）",
  descriptionEn: "THIS ITEM IS SUPER GOOD GREAT DELICIOUS Trash Can.",
  descriptionKo: "",
};

export const SushiUnitModels: SUnitModel = {
  マグロ箱,
  サーモン箱,
  えび箱,
  たこ箱,
  いか箱,
  てんぷらこ箱,
  なまたまご箱,
  のり箱,
  すめし箱,
  瓶箱,
  アボカド箱,
  カウンター,
  コンロ,
  自動にぎるくん,
  ミキサー,
  コンベアミキサー,
  コンベア自動にぎるくん,
  コンベアコンロ,
  コンベアコンバイナ,
  コンバイナ,
  売却機,
  ダイニングテーブル,
  コンベア,
  直角コンベアL,
  直角コンベアR,
  コンベア_Lv2,
  直角コンベアL_Lv2,
  直角コンベアR_Lv2,
  ゴミ箱,
  ネオロイド箱,
};
