import React, {useEffect, useRef} from 'react';
import {createDeck} from '@deck.gl/jupyter-widget';

const Deckgl = ({
    spec,
    tooltip,
    height,
    customLibraries,
    configuration,
    events,
    description,
    overlay,
    mapbox_key,
    google_maps_key,
    setProps,
}) => {
    const primaryDiv = useRef(null);
    const overlayDiv = useRef(null);

    const eventlist = events && events.map((event) => `deck-${event}-event`);
    const width = window.innerWidth - 10;

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
                descriptions.push([{pos, content: description[key]}]);
            }
        }
    }

    useEffect(() => {
        let overlayInstance = null;
        const mapSpec = JSON.parse(spec);

        const mapEventHandler = (eventType, info) => {
            if (eventType === 'deck-view-state-change-event') {
                console.log(info);

                if (overlayInstance) {
                    overlayInstance.setProps({viewState: info});
                }
            }

            if (events && eventlist.includes(eventType) && info.object) {
                setProps({object: info.object});
            }
        };

        const deckInstance = createDeck({
            mapboxApiKey: mapbox_key,
            googleMapsApiKey: google_maps_key,
            primaryDiv,
            jsonInput: mapSpec,
            tooltip,
            customLibraries,
            configuration,
            handleEvent: mapEventHandler,
        });

        if (overlay) {
            const overlaySpec = JSON.parse(overlay);
            overlaySpec.viewState = mapSpec.initialViewState || {};
            overlaySpec.style = {
                ...overlaySpec.style,
                'z-index': 1,
                'pointer-events': 'none',
            };
            overlaySpec.views[0].controller = false;
            overlayInstance = createDeck({
                mapboxApiKey: mapbox_key,
                googleMapsApiKey: google_maps_key,
                container: overlayDiv,
                jsonInput: overlaySpec,
                tooltip,
                customLibraries,
                configuration,
            });
        }
    }, []);

    return (
        <div id="deckgl-wrapper" style={{height}}>
            <div
                id="deckgl-primary"
                style={{width, height, position: 'absolute'}}
            />
            {overlay && (
                <div
                    id="deckgl-overlay"
                    style={{
                        width,
                        height,
                        position: 'absolute',
                        pointerEvents: 'none',
                    }}
                />
            )}
            {descriptions.map((d) => (
                <div
                    className="description"
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        [d.pos[0]]: 10,
                        [d.pos[1]]: 10,
                    }}
                    dangerouslySetInnerHTML={d.content}
                />
            ))}
        </div>
    );
};

export default Deckgl;
