import { Room, Client } from "colyseus";
import { MyRoomState} from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {

  onCreate (options: any) {
    this.setState(new MyRoomState());

    this.onMessage("moveA", (client, data) => {
      console.log("call on moveA");
      let currPlayer = this.state.playerA;
      currPlayer.x = data.position.x;
      currPlayer.y = data.position.y;
    });

    this.onMessage("moveB", (client, data) => {
      console.log("call on moveA");
      let currPlayer = this.state.playerB;
      currPlayer.x = data.position.x;
      currPlayer.y = data.position.y;
    });

  }

  // Authorize client based on provided options before WebSocket handshake is complete
  // onAuth (client: Client, options: any) { }


  onJoin (client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave (client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

}