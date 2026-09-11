import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/players/players";
import type { playerType } from "./types/playerType";



const playersFetch = async(): Promise<playerType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();

  return data;
}

function App() {
  const playersPromise = playersFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h5>Loading.......</h5>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  )
}

export default App
