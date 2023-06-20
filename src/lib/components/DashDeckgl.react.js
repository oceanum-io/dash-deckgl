import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
const Deckgl = React.lazy(() =>
    import(/* webpackChunkName: "deckgl" */ './Deckgl.jsx')
);

/**
 * DashDeckGL is a wrapper of deck.gl for Dash.
 * It takes a deck.gl JSON spec, converts it to a React component in aplotly dash app,
 */

const DashDeckgl = (props) => {
    return (
        <React.Suspense fallback={<div>Loading map...</div>}>
            <Deckgl {...props} />
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

    /**
     * An array of tooltip objects that follows he pydeck tooltip specifcation.
     * An additonal 'layer' property can be added to the tooltip objects to restrict their action to that layer ID.
     */
    tooltips: PropTypes.array,
    /**
     * width of the map component container as pixels or CSS string
     * (optional) Default 100% of parent container
     * */
    width: PropTypes.number,

    /**
     * Height of the map component container as pixels or CSS string
     * (optional) Default 500
     * */
    height: PropTypes.number,

    /**
     * Array of custom libraries to load. For example:
     * [{libraryName: 'DeckGriddedLayers', resourceUri: 'https://assets.oceanum.io/packages/deck-gl-grid/bundle.umd.cjs'}]
     * */
    customLibraries: PropTypes.array,

    /**
     * Addiitional configuration
     */
    configuration: PropTypes.object,

    /**
     * HTML of description elements
     */
    description: PropTypes.object,

    /**
     * List of events to listen to. Can be any of:
     * ['click','hover','drag']
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

    /**
     * The last event that was triggered. This is a read-only property.
     */
    lastEvent: PropTypes.object,
};

export const defaultProps = DashDeckgl.defaultProps;
export const propTypes = DashDeckgl.propTypes;
export default DashDeckgl;
