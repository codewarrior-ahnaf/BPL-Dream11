import React, { use } from 'react';
import type { playerType } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps {
    playersPromise: Promise<playerType[]>
}

const players = ({ playersPromise }: PlayersProps) => {
    const players = use(playersPromise);
    console.log(players, 'players');
    
    
    return (
        <div className="container mx-auto">


            <div className="flex justify-between gap-4 mb-2">
                <h2 className="font-bold text xl:">Available Players</h2>

                <div>
                    <button className="btn btn-success">Available</button>
                    <button className="btn">Selected</button>
                </div>
            </div>





            <AvailablePlayers players={players} />

        </div>
    );
};

export default players;