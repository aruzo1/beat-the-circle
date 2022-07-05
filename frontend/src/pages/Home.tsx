import socket from "socket";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => socket.emit("game:find-room")}>Play</button>
    </div>
  );
}

export default Home;
