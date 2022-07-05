import { Socket } from "socket.io";
import Room from "./Room";

class Rooms {
  rooms: Room[] = [];

  joinRoom(socket: Socket) {
    let room = this.rooms.find((r) => r.players.length < 2);

    if (!room) {
      room = new Room();
      this.rooms.push(room);
    }

    room.join(socket);
  }

  leaveRooms(socket: Socket) {
    this.rooms.forEach((r) => {
      r.players.forEach((p) => {
        if (socket.id === p) r.leave(socket);
      });
    });
  }
}

export default Rooms;
