import type { Dispatch, SetStateAction } from "react";
import type { playerType } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

interface props {
  players: playerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({ players, coin, setCoin }: props) => {

  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {players.map((player: playerType, index: number) => {
        return (
          <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin} />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
