# AUTO GENERATED FILE - DO NOT EDIT

export dashdeckgl

"""
    dashdeckgl(;kwargs...)

A DashDeckgl component.
DashDeckGL is a wrapper of deck.gl for Dash.
It takes a deck.gl JSON spec, converts it to a React component in aplotly dash app,
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `configuration` (Dict; optional): Addiitional configuration
- `customLibraries` (Array; optional): Array of custom libraries to load. For example:
[{libraryName: 'DeckGriddedLayers', resourceUri: 'https://assets.oceanum.io/packages/deck-gl-grid/bundle.umd.cjs'}]
- `description` (Dict; optional): HTML of description elements
- `events` (Array; optional): List of events to listen to. Can be any of:
['click','hover','drag']
- `height` (Real; optional): Height of the map component container as pixels or CSS string
(optional) Default 500
- `lastEvent` (Dict; optional): The last event that was triggered. This is a read-only property.
- `overlay` (String; optional): JSON spec of the overlay deck.gl instance
(optional)
- `spec` (String; required): JSON spec of the primary deck.gl instance
- `tooltip` (Dict; optional): A tooltip object that follows he pydeck tooltip specifcation.
- `width` (Real; optional): width of the map component container as pixels or CSS string
(optional) Default 100% of parent container
"""
function dashdeckgl(; kwargs...)
        available_props = Symbol[:id, :configuration, :customLibraries, :description, :events, :height, :lastEvent, :overlay, :spec, :tooltip, :width]
        wild_props = Symbol[]
        return Component("dashdeckgl", "DashDeckgl", "dash_deckgl", available_props, wild_props; kwargs...)
end

