import React from 'react';
import {Button, List} from '@material-ui/core';
import faker from 'faker';
import {PlayerCard} from "../components/PlayerCard";
import {playersConnect} from "../connects/playersConnect";
import {createPlayer} from "../entities/player";


export const PlayerListPageRender = ({addPlayer, removePlayer, players}) => {
    return (
        <div>
            <List>
                {
                    players.map((player) => (
                        <PlayerCard
                            remove={() => {
                                removePlayer(player.name)
                            }}
                            key={player.name}
                            {...player}
                        />
                    ))
                }
            </List>

            <Button onClick={() => {
                addPlayer(createPlayer(faker.name.firstName()))
            }}>
                add player
            </Button>
        </div>
    );
};


export const PlayerListPage = playersConnect(PlayerListPageRender);

