import React, { useState, type Dispatch, type SetStateAction } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillFlagFill } from "react-icons/bs";
import { MdSportsCricket } from "react-icons/md";
import type { playerType } from "../../types/playerType";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: {
  player: playerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: playerType[];
  setSelectedPlayers: Dispatch<SetStateAction<playerType[]>>;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectPlayer = () => {
    setIsSelected(true);
    const newCoinPrice = coin - player.price;
    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      toast(`${player.playerName} is purchase`);
    } else {
      toast.error("Coin is not enough to purchase");
    }

    // Selected players Logic
    setSelectedPlayers([...selectedPlayers, player])
  };
  return (
    <div
      className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Player Image */}
      <figure className="relative overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-3 top-3">
          <span className="badge badge-primary gap-1 px-3 py-3 font-semibold shadow-lg">
            <MdSportsCricket />
            {player.playerType}
          </span>
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body gap-4 p-5">
        {/* Player Name */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <FaUser className="text-primary" />
            {player.playerName}
          </h2>

          {/* Origin */}
          <p className="mt-2 flex items-center gap-2 text-sm text-base-content/60">
            <BsFillFlagFill className="text-primary" />
            {player.origin}
          </p>
        </div>

        <div className="divider my-0" />

        {/* Rating Section */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-base-content/50">
            Player Details
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {/* Batting */}
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Batting</p>
              <p className="mt-1 font-semibold">{player.battingStyle}</p>
            </div>

            {/* Bowling */}
            <div className="rounded-xl bg-base-200 p-3">
              <p className="text-xs text-base-content/50">Bowling</p>
              <p className="mt-1 font-semibold">{player.bowlingStyle}</p>
            </div>
          </div>
        </div>

        <div className="divider my-0" />

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-base-content/50">Price</p>
            <h2 className="text-xl font-bold text-primary">${player.price}</h2>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            className={`btn btn-primary rounded-xl px-5 transition-all hover:scale-105`}
            // disabled={isSelected === true ? true : false}
            // disabled={isSelected ? true : false}
            disabled={isSelected}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
