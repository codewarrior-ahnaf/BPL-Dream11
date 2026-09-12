import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/players/players";
import type { playerType } from "./types/playerType";
import { useState } from "react";



const playersFetch = async(): Promise<playerType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();

  return data;
}

function App() {
  const playersPromise = playersFetch();
  const [coin, setCoin] = useState(50000);

  return (
    <>
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={<h5>Loading.......</h5>}>
        <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} />
      </Suspense>
    </>
  )
}

export default App
