import { Server } from "socket.io";
import Game from "./controllers/Game";

const io = new Server(4000, {
  cors: { origin: ["http://localhost:3000"] },
});

const game = new Game();

io.on("connection", (socket) => {
  socket.on("game:find-room", () => game.findRoom);
  socket.on("disconnect", () => game.leave);
});
