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
     * JSON spec of the primary deck.gl instance.
     * Omit initial_view_state from the spec to re-render the deck.gl map with new layers or properties but without resetting the view.
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
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Height of the map component container as pixels or CSS string
     * (optional) Default 500
     * */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Array of custom libraries to load. For example:
     * [{libraryName: 'DeckGriddedLayers', resourceUri: 'https://assets.oceanum.io/packages/deck-gl-grid/bundle.umd.cjs'}]
     * */
    custom_libraries: PropTypes.array,

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
     * Landmask basmap to add to the map with properties map_style
     * (optional)
     * */
    landmask: PropTypes.object,

    /**
     * mapbox API key for mapbox basemaps
     * (optional)
     * */
    mapbox_key: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * The last event that was triggered. This is a read-only property.
     */
    lastevent: PropTypes.object,

    /**
     * Current viewstate of the map.
     */
    viewstate: PropTypes.object,

    /**
     * Merge layers
     */
    merge_layers: PropTypes.bool,

    /**
     * Show cursor position
     * (optional)
     * One of: ['top-left','top-right','bottom-left','bottom-right','none']
     * Default 'none'
     */
    cursor_position: PropTypes.string,
    /**
     * Add preserveDrawingBuffer to the WebGL context
     *
     * */
    preserve_drawing_buffer: PropTypes.bool,
};

export const defaultProps = DashDeckgl.defaultProps;
export const propTypes = DashDeckgl.propTypes;
export default DashDeckgl;
