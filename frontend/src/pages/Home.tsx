import socket from "../socket";

function Home() {
  return (
    <div>
      <button onClick={() => socket.emit("game:start")}>Start</button>
    </div>
  );
}

export default Home;
