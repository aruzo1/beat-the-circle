import { useEffect, useState } from "react";
import socket from "socket";
import type { Player } from "types";

function useRoom() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    socket.on("room:read", ({ players }) => setPlayers(players));

    socket.on("room:join", (player) => {
      setPlayers((prev) => [...prev, player]);
    });

    socket.on("room:leave", (player) => {
      setPlayers((prev) => prev.filter((p) => p !== player));
    });

    socket.emit("room:join");

    return () => {
      socket.off("room:read");
      socket.off("room:join");
      socket.off("room:leave");
    };
  }, []);

  return { players };
}

export default useRoom;
