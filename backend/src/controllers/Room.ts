import { Socket } from "socket.io";
import { io } from "..";

class Room {
  players: string[] = [];

  async join(socket: Socket) {
    this.players.push(socket.id);

    socket.emit("room:read", this);
    io.to(this.players).except(socket.id).emit("room:join", socket.id);
  }

  async leave(socket: Socket) {
    this.players = this.players.filter((p) => p !== socket.id);

    io.to(this.players).emit("room:leave", socket.id);
  }
}

export default Room;
