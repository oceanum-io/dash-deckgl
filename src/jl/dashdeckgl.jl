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
- `cursor_position` (String; optional): Show cursor position
(optional)
One of: ['top-left','top-right','bottom-left','bottom-right','none']
Default 'none'
- `custom_libraries` (Array; optional): Array of custom libraries to load. For example:
[{libraryName: 'DeckGriddedLayers', resourceUri: 'https://assets.oceanum.io/packages/deck-gl-grid/bundle.umd.cjs'}]
- `description` (Dict; optional): HTML of description elements
- `events` (Array; optional): List of events to listen to. Can be any of:
['click','hover','drag']
- `height` (Real | String; optional): Height of the map component container as pixels or CSS string
(optional) Default 500
- `landmask` (Dict; optional): Landmask basmap to add to the map with properties map_style
(optional)
- `lastevent` (Dict; optional): The last event that was triggered. This is a read-only property.
- `mapbox_key` (String; optional): mapbox API key for mapbox basemaps
(optional)
- `merge_layers` (Bool; optional): Merge layers
- `overlay` (String; optional): JSON spec of the overlay deck.gl instance
(optional)
- `preserve_drawing_buffer` (Bool; optional): Add preserveDrawingBuffer to the WebGL context
- `spec` (String; required): JSON spec of the primary deck.gl instance
- `tooltips` (Array; optional): An array of tooltip objects that follows he pydeck tooltip specifcation.
An additonal 'layer' property can be added to the tooltip objects to restrict their action to that layer ID.
- `viewstate` (Dict; optional): Current viewstate of the map.
- `width` (Real | String; optional): width of the map component container as pixels or CSS string
(optional) Default 100% of parent container
"""
function dashdeckgl(; kwargs...)
        available_props = Symbol[:id, :configuration, :cursor_position, :custom_libraries, :description, :events, :height, :landmask, :lastevent, :mapbox_key, :merge_layers, :overlay, :preserve_drawing_buffer, :spec, :tooltips, :viewstate, :width]
        wild_props = Symbol[]
        return Component("dashdeckgl", "DashDeckgl", "dash_deckgl", available_props, wild_props; kwargs...)
end

