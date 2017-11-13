import React from 'react';

import Player from './player.js';

class Players extends React.Component{
    render(){
        return (
            <div>
            {this.props.members.map(function(player){
                    return(
                        <Player key={player.id} name={player.name} score={player.score} />
                    );
             })}
             </div>
        );
    }
}

export default Players;