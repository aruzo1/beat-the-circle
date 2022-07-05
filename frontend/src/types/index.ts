export type Player = string;

export interface Room {
  id: string;
  players: Player[];
}

export interface ServerToClientEvents {
  "room:read": (room: Room) => void;
  "room:join": (player: Player) => void;
  "room:leave": (player: Player) => void;
}

export interface ClientToServerEvents {
  "room:join": () => void;
}
