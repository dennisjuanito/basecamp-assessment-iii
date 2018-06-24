import React, {Component}               from 'react';
import                                  "./image/image.css";
import                                  '../App.css';

export default class Team extends Component {
    render() {
        return (
            <div>
                <li>
                    {this.props.theTeam.name} 
                    <img className = "flags" src = {this.props.theTeam.flag} alt = {this.props.theTeam.fifaCode}/>
                </li>
            </div>
        );
    };
}
