import React, { type Dispatch, type SetStateAction } from 'react';
import type { playerType } from '../../types/playerType';

interface props {
  selectedPlayers: playerType[];
  setSelectedPlayers: Dispatch<SetStateAction<playerType[]>>;
}

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}: props) => {
    
    return (
        <div>
            
        </div>
    );
};

export default SelectedPlayers;