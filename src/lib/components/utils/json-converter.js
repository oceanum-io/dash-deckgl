import React, {useContext, createContext, useEffect, useState} from 'react';

import {COORDINATE_SYSTEM, log, WebMercatorViewport} from '@deck.gl/core';
import GLConstants from '@luma.gl/constants';
import {JSONConverter} from '@deck.gl/json';
import {loadScript} from './script-utils';
import * as deckExports from '../../bundles';

const classesFilter = (x) => x.charAt(0) === x.charAt(0).toUpperCase();
const functionsFilter = (x) =>
    x.charAt(0) === x.charAt(0).toLowerCase() && x.charAt(0) !== '_';

const extractElements = (library = {}, filter) => {
    // Extracts exported elements as a dictionary from a library
    const dict = {};
    const elements = Object.keys(library).filter(filter);
    for (const el of elements) {
        dict[el] = library[el];
    }
    return dict;
};

// Handle JSONConverter and loaders configuration
const jsonConverterConfiguration = {
    classes: extractElements(deckExports, classesFilter),
    // Will be resolved as `<enum-name>.<enum-value>`
    enumerations: {
        COORDINATE_SYSTEM,
        GL: GLConstants,
    },
};

const ConverterContext = createContext();
const useConverter = () => useContext(ConverterContext);

const ConverterProvider = ({configuration, customLibraries, children}) => {
    const [jsonConverter, setJsonConverter] = useState(
        new JSONConverter({configuration: jsonConverterConfiguration})
    );

    const mergeConfiguration = (configuration) => {
        if (!configuration) return;
        const newConverter = new JSONConverter({...jsonConverter});
        newConverter.mergeConfiguration(configuration);
        newConverter.convertedJson = null;
        setJsonConverter(newConverter);
    };

    useEffect(() => {
        mergeConfiguration(configuration);
    }, [configuration]);

    const onModuleLoaded = (libraryName, module) => {
        const newConfiguration = {
            classes: extractElements(module, classesFilter),
            functions: extractElements(module, functionsFilter),
        };
        mergeConfiguration(newConfiguration);
    };

    useEffect(() => {
        if (!customLibraries) return;
        const loaded = {};
        customLibraries.forEach(({libraryName, resourceUri}) => {
            loaded[libraryName] = false;

            if (libraryName in window) {
                // do not redefine
                onModuleLoaded(libraryName, window[libraryName]);
                loaded[libraryName] = window[libraryName];
                return;
            }

            // because loadscript is async and scipt execution is untraceble
            // the only way we can listen on its execution complete is to observe on the
            // window.libraryName property
            Object.defineProperty(window, libraryName, {
                set: (module) => {
                    onModuleLoaded(libraryName, module);
                    loaded[libraryName] = module;
                },
                get: () => {
                    return loaded[libraryName];
                },
            });

            loadScript(resourceUri);
        });
    }, [customLibraries]);

    return (
        <ConverterContext.Provider value={jsonConverter}>
            {children}
        </ConverterContext.Provider>
    );
};

export {ConverterProvider, useConverter};
