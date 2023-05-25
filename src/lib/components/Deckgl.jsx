import React, {useEffect, useState, useCallback} from 'react';
import {DeckGL} from '@deck.gl/react';
import {BASEMAP} from '@deck.gl/carto';
import {Map} from 'react-map-gl';

import {loadMapboxCSS} from './utils/mapbox-utils';
import {useConverter, ConverterProvider} from './utils/json-converter';
import makeTooltip from './utils/widget-tooltip';

const DeckglMap = ({
    spec,
    tooltip,
    width = '100%',
    height = 500,
    events = [],
    description,
    overlay,
    mapbox_key,
    google_maps_key,
    setProps,
    lastEvent,
}) => {
    const [primaryProps, setPrimaryProps] = useState({});
    const [overlayProps, setOverlayProps] = useState({});
    const [librariesLoaded, setLibrariesLoaded] = useState(false);
    const [configurationLoaded, setConfigurationLoaded] = useState(false);
    const jsonConverter = useConverter();

    const [viewState, setViewState] = useState({});

    const descriptions = [];
    if (description) {
        for (const key in description) {
            if (
                [
                    'top-right',
                    'top-left',
                    'bottom-right',
                    'bottom-left',
                ].includes(key)
            ) {
                const pos = key.split('-');
                descriptions.push({pos, content: description[key]});
            }
        }
    }

    const handleEvent = useCallback(
        (eventType, info) => {
            if (events.includes(eventType)) {
                setProps({
                    lastEvent: {
                        ...info.object,
                        coordinate: info.coordinate,
                        eventType,
                    },
                });
            }
        },
        [events]
    );

    const handlers = {
        onClick: (info) => handleEvent('click', info),
        onHover: (info) => handleEvent('hover', info),
        // onViewStateChange: ({viewState, interactionState, oldViewState}) => {
        //     const viewport = new WebMercatorViewport(viewState);
        //     viewState.nw = viewport.unproject([0, 0]);
        //     viewState.se = viewport.unproject([
        //         viewport.width,
        //         viewport.height,
        //     ]);
        //     handleEvent('deck-view-state-change-event', viewState);
        // },
        onDragStart: (info) => handleEvent('drag-start', info),
        onDrag: (info) => handleEvent('drag', info),
        onDragEnd: (info) => handleEvent('drag-end', info),
    };

    const getTooltip = makeTooltip(tooltip);

    const sharedProps = {
        ...handlers,
        getTooltip,
    };

    useEffect(() => {
        loadMapboxCSS();
    }, []);

    useEffect(() => {
        const newPrimaryProps = jsonConverter.convert(spec);
        setViewState(newPrimaryProps.initialViewState);
        setPrimaryProps(newPrimaryProps);
    }, [spec, jsonConverter]);

    useEffect(() => {
        const newOverlayProps = jsonConverter.convert(overlay);
        setOverlayProps(newOverlayProps);
    }, [overlay, jsonConverter]);

    const updateViewState = useCallback(({viewState}) => {
        setViewState(viewState);
    }, []);

    if (google_maps_key) {
        return <div>Google map overlays not supported</div>;
    }

    return (
        <div
            className="deckgl-map"
            style={{height, width, position: 'relative'}}
        >
            <div
                id="deckgl-primary"
                style={{width: '100%', height: '100%', position: 'relative'}}
            >
                <DeckGL
                    viewState={viewState}
                    onViewStateChange={updateViewState}
                    {...sharedProps}
                    {...primaryProps}
                >
                    <Map
                        mapStyle={primaryProps.mapStyle || BASEMAP.POSITRON}
                        mapboxAccessToken={mapbox_key}
                    />
                </DeckGL>
            </div>
            {overlay && (
                <div
                    id="deckgl-overlay"
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        pointerEvents: 'none',
                    }}
                >
                    <DeckGL
                        viewState={viewState}
                        contoller={false}
                        {...sharedProps}
                        {...overlayProps}
                        style={{
                            ...overlayProps.style,
                            zIndex: 1,
                            pointerEvents: 'none',
                        }}
                    >
                        <Map
                            mapStyle={overlayProps.mapStyle}
                            mapboxAccessToken={mapbox_key}
                        />
                    </DeckGL>
                </div>
            )}
            {descriptions.map((d, i) => (
                <div
                    key={i}
                    className="description"
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        [d.pos[0]]: 10,
                        [d.pos[1]]: 10,
                    }}
                    dangerouslySetInnerHTML={{__html: d.content}}
                />
            ))}
        </div>
    );
};

const Deckgl = (props) => {
    return (
        <ConverterProvider
            customLibraries={props.customLibraries}
            configuration={props.configuration}
        >
            <DeckglMap {...props} />
        </ConverterProvider>
    );
};

export default Deckgl;
