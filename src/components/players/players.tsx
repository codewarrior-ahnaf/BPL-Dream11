import React, { use } from 'react';
import type { playerType } from '../../types/playerType';

interface PlayersProps {
    playersPromise: Promise<playerType[]>
}

const players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise);
    console.log(players, 'players');
    
    
    return (
        <div>
            
        </div>
    );
};

export default players;