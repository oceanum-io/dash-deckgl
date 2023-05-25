/* eslint-disable import/prefer-default-export */
import DashDeckgl from './components/DashDeckgl.react';
import * as deckExports from './bundles/deck-bundle';
import * as lumaExports from './bundles/luma-bundle';
import * as loadersExports from './bundles/loaders-bundle';

// Expose deck
globalThis.deck = globalThis.deck || {};
Object.assign(globalThis.deck, deckExports);

// Expose luma
globalThis.luma = globalThis.luma || {};
Object.assign(globalThis.luma, lumaExports);

// Expose loaders
globalThis.loaders = globalThis.loaders || {};
Object.assign(globalThis.loaders, loadersExports);

export {DashDeckgl};
