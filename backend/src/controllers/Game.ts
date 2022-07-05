import { Socket } from "socket.io";
import Room from "./Room";

class Game {
  rooms: Room[] = [];

  findRoom(socket: Socket) {
    let room = this.rooms.find((g) => g.players.length < 2);

    if (!room) {
      room = new Room();
      this.rooms.push(room);
    }

    room.join(socket);
  }

  leave(socket: Socket) {
    this.rooms.forEach((r) => {
      r.players.forEach((p) => {
        if (socket.id === p) r.leave(socket);
      });
    });
  }
}

export default Game;
