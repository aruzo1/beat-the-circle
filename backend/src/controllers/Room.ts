import { Socket } from "socket.io";
import base64id from "base64id";

class Room {
  id = base64id.generateId();
  players: string[] = [];

  join(socket: Socket) {
    this.players.push(socket.id);
    socket.join(this.id);
  }

  leave(socket: Socket) {
    this.players = this.players.filter((p) => p !== socket.id);
    socket.leave(this.id);
  }
}

export default Room;
