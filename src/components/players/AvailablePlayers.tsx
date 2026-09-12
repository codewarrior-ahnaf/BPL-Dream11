import type { playerType } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }) => {

  return (
    <div className="grid grid-cols-3 gap-7 mt-6">
      {players.map((player: playerType, index: number) => {
        return (
          <PlayerCard key={index} player={player} />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
