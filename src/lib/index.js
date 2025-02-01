/* eslint-disable import/prefer-default-export */
import DashDeckgl from './components/DashDeckgl.react';
import * as deckExports from './bundles';

// Expose deck
globalThis.deck = globalThis.deck || {};
Object.assign(globalThis.deck, deckExports);

export {DashDeckgl};
