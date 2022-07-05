import useRoom from "hooks/useRoom";

function Room() {
  const { players } = useRoom();

  if (players.length < 2) {
    return <h1>Waiting for players: {players.length}/2</h1>;
  }

  return (
    <div>
      <h1>Room</h1>
    </div>
  );
}

export default Room;
