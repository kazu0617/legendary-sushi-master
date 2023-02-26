import _ from "lodash";
import { Customer, CustomerModel } from "./Customer";
import { FactoryManager, SoundCode } from "./factory/FactoryManager";
import { Direction, Pos, SObjModel, SUnitOptions } from "./factory/type";

export type GameEvent =
  | { code: "grabUnit"; userId: string; unitId: string }
  | { code: "grabObj"; userId: string; objId: string }
  | { code: "releaseObj"; userId: string; unitId: string }
  | {
      code: "startInteractUnit";
      userId: string;
      unitId: string;
    }
  | {
      code: "endInteractUnit";
      userId: string;
      unitId: string;
    };

export type FactoryModel = {
  unitModel: { [key: string]: SUnitOptions };
  objModel: { [key: string]: SObjModel };
};

export type GameData = {
  coin: number;
  dayCount: number;
  menuCodes: string[];
  dayTime: number;
  xMax: number;
  yMax: number;
  customerSpawnRatio: number;
  customerSpawnInterval: number;
  maxCustomerCount: number;
  customerModel: CustomerModel[];
};

export type MapData = {
  code: string;
  pos: [number, number];
  direction: Direction;
}[];

export class GameManager {
  fm: FactoryManager;
  customers: Customer[] = [];
  todayCoin: number = 0;
  t: number = 0;
  finishTime: number = 60;
  isFinished: boolean = false;
  gameData: GameData;
  totalCustomerCount: number = 0;
  customerBoost: number = 0;

  factoryEventStack: { type: string; data: any }[] = [];

  constructor(gameData: GameData, mapData: MapData) {
    this.gameData = gameData;
    this.fm = new FactoryManager(mapData);
    this.fm.onEvent({
      type: "coin",
      callback: this.onFactoryEventCoin.bind(this),
    });
    this.fm.onEvent({
      type: "sound",
      callback: this.onFactoryEventSound.bind(this),
    });
    this.t = 0;
  }

  update(deltaTime: number = 0) {
    this.fm.update(deltaTime);
    this.factoryEventStack = [];

    const emptyTables = this.fm.sUnitArray.filter((unit) =>
      unit.options.process?.some((process) => process.processCode === "taberu")
    );
    let waitingTableIndex = 0;
    this.customers.forEach((customer) => {
      customer.update(
        deltaTime,
        emptyTables.filter((table) =>
          this.customers.every((customer) => customer.table?.id !== table.id)
        ),
        customer.state === "WAITING_TABLE" ? waitingTableIndex++ : 0,
        this.gameData.dayTime < this.t
      );
    });
    this.customers = this.customers.filter((customer) => !customer.isDeleted);

    if (
      this.gameData.dayTime > this.t &&
      Math.floor(this.t / this.gameData.customerSpawnInterval) !==
        Math.floor((this.t + deltaTime) / this.gameData.customerSpawnInterval)
    ) {
      if (
        this.customers.length < this.gameData.maxCustomerCount &&
        Math.random() <
          (this.customers.length < 3
            ? 0.6
            : this.gameData.dayCount > 5 &&
              this.customers.length < this.gameData.xMax
            ? 0.2
            : 0) +
            this.customerBoost
      ) {
        this.totalCustomerCount++;
        if (this.customerBoost > 0) {
          this.customerBoost = 0;
        }
        this.customers.push(
          new Customer(
            {
              ...this.gameData.customerModel[0],
              visualCode:
                _.sample([
                  "あぶすお",
                  "むにょわ",
                  "にんじん",
                  "ねおねこ",
                  "ねおふぁ",
                  "れにうむ",
                ]) ?? "にんじん",
            },
            this.gameData.menuCodes,
            this.customers.filter(
              (customer) => customer.state === "WAITING_TABLE"
            ).length,
            this.gameData.xMax,
            this.boostCustomer.bind(this),
            this.onFactoryEventSound.bind(this)
          )
        );
      }
    }

    if (this.gameData.dayTime < this.t && this.customers.length === 0) {
      this.isFinished = true;
    }

    this.t += deltaTime;
  }

  boostCustomer(value: number) {
    this.customerBoost += value * 0.3;
  }

  emitGameEvent(event: GameEvent) {
    switch (event.code) {
      case "grabUnit":
        this.fm.grabUnit("RIGHT", event.userId, event.unitId);
        break;
      case "grabObj":
        this.fm.grabObj("RIGHT", event.userId, event.objId);
        break;
      case "releaseObj":
        this.fm.releaseObj("RIGHT", event.userId, event.unitId);
        break;
      case "startInteractUnit":
        this.fm.startInteractUnit(event.userId, event.unitId);
        break;
      case "endInteractUnit":
        this.fm.endInteractUnit(event.userId, event.unitId);
        break;
    }
  }

  protected onFactoryEventCoin(value: number, _category: string) {
    //TODO: categoryを使う
    this.todayCoin += value;
    this.factoryEventStack.push({ type: "coin", data: { value } });
  }

  protected onFactoryEventSound(targetId: string, code: SoundCode) {
    this.factoryEventStack.push({ type: "sound", data: { targetId, code } });
  }
}
