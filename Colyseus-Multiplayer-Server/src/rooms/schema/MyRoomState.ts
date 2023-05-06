import { Schema, Context, type, MapSchema } from "@colyseus/schema";

class playerA extends Schema {
  @type("number") x: number;
  @type("number") y: number;
}

class playerB extends Schema {
  @type("number") x: number;
  @type("number") y: number;
}

export class MyRoomState extends Schema {
  @type(playerA) playerA = new playerA();
  @type(playerB) playerB = new playerB();
}