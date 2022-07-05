import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "types";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "ws://localhost:4000"
);

export default socket;
