/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DashDeckgl} from '../lib';
import * as spec from './spec.json';

const CUSTOM_LIBRARIES = [
    {
        libraryName: 'DeckGriddedLayers',
        resourceUri:
            'https://assets.oceanum.io/packages/deck-gl-grid/bundle.umd.cjs',
    },
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            spec: JSON.stringify(spec),
            customLibraries: CUSTOM_LIBRARIES,
            height: 500,
            events: ['click'],
            tooltip: {
                html: '<b>Wind speed:</b> {value} kts',
                style: {backgroundColor: 'steelblue', color: 'white'},
            },
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <DashDeckgl setProps={this.setProps} {...this.state} />
                <div>
                    {this.state.lastEvent &&
                        JSON.stringify(this.state.lastEvent.coordinate)}
                </div>
            </div>
        );
    }
}

export default App;
