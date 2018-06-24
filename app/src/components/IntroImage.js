import React, {Component}               from 'react';
import img                              from "./image/worldcup.jpg";
import                                  "./image/image.css";

export default class IntroImage extends Component {
    render() {
        return (
            <div>
                <img className = "worldcup" src = {img} alt = "logo world cup"/>
            </div>
        );
    };
}