import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Deckgl} from '../LazyLoader';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

const DashDeckgl = (props) => {
    return (
        <React.Suspense fallback={null}>
            <Deckgl {...this.props} />
        </React.Suspense>
    );
};

DashDeckgl.defaultProps = {};

DashDeckgl.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * JSON spec of the primary deck.gl instance
     */
    spec: PropTypes.string.isRequired,

    tooltip: PropTypes.object,

    height: PropTypes.number,

    customLibraries: PropTypes.array,

    configuration: PropTypes.object,

    /**
     * HTML of description elements
     */
    description: PropTypes.object,

    /**
     * List of events to listen to
     */
    events: PropTypes.array,

    /**
     * JSON spec of the overlay deck.gl instance
     * (optional)
     * */
    overlay: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export const defaultProps = DashDeckgl.defaultProps;
export const propTypes = DashDeckgl.propTypes;
export default DashDeckgl;
