import React, { use, useState } from 'react';
import type { playerType } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
    playersPromise: Promise<playerType[]>
}

const players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise);

    const [buttonType, setButtonType] = useState("available")
    
    // const handleUpdateBtnType = (type: "available" | "selected") => {
    //     setButtonType(type);
    // }

    return (
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 mb-2">
          <h2 className="font-bold text xl:">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>

          <div>
            <button
              onClick={() => setButtonType("available")}
              className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
            >
              Available
            </button>
            <button
              onClick={() => setButtonType("selected")}
              className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
            >
              Selected
            </button>
          </div>
        </div>

        {buttonType === "available" ? (<AvailablePlayers players={players} />) : (<SelectedPlayers></SelectedPlayers>)}
      </div>
    );
};

export default players;