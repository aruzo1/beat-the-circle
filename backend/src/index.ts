import { Server, Socket } from "socket.io";
import base64id from "base64id";

const io = new Server(4000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

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
    this.rooms.forEach((room) => {
      if (room.players.includes(socket.id)) {
        room.leave(socket);
      }
    });
  }
}

const game = new Game();

io.on("connection", (socket) => {
  socket.on("game:start", () => game.findRoom(socket));
  socket.on("disconnect", () => game.leave(socket));
});

setInterval(() => {
  console.dir(game, { depth: null });
}, 3000);
