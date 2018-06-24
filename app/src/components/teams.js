import React, {Component}               from 'react';
import Team                             from './team';
import                                  '../App.css';

export default class Teams extends Component {
    render() {
        return (
            <div>
                <ol>
                    {this.props.teams.map((team) => {
                        return <Team theTeam = {team} key = {team.id}/>
                    })}
                </ol>
            </div>
        );
    };
}
