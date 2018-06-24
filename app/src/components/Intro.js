import React, {Component}               from 'react';
import IntroImage                       from "./IntroImage.js"

export default class Intro extends Component {
    render() {
        return (
            <div>
                <header>
                    <h2>FIFA World Cup Teams</h2>
                </header>
                <IntroImage />
            </div>
        );
    };
}