import { Server } from "socket.io";
import Rooms from "./controllers/Rooms";

export const io = new Server(4000, {
  cors: { origin: ["http://localhost:3000"] },
});

const rooms = new Rooms();

io.on("connection", (socket) => {
  socket.on("room:join", () => rooms.joinRoom(socket));
  socket.on("disconnect", () => rooms.leaveRooms(socket));
});

setInterval(() => {
  console.dir(rooms, { depth: null });
}, 3000);
