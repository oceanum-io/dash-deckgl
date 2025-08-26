# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class DashDeckgl(Component):
    """A DashDeckgl component.
DashDeckGL is a wrapper of deck.gl for Dash.
It takes a deck.gl JSON spec, converts it to a React component in aplotly dash app,

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- configuration (dict; optional):
    Addiitional configuration.

- cursor_position (string; optional):
    Show cursor position (optional) One of:
    ['top-left','top-right','bottom-left','bottom-right','none']
    Default 'none'.

- custom_libraries (list; optional):
    Array of custom libraries to load. For example: [{libraryName:
    'DeckGriddedLayers', resourceUri:
    'https://assets.oceanum.io/packages/deck-gl-grid/bundle.umd.cjs'}].

- description (dict; optional):
    HTML of description elements.

- events (list; optional):
    List of events to listen to. Can be any of:
    ['click','hover','drag'].

- height (number | string; optional):
    Height of the map component container as pixels or CSS string
    (optional) Default 500.

- landmask (dict; optional):
    Landmask basmap to add to the map with properties map_style
    (optional).

- lastevent (dict; optional):
    The last event that was triggered. This is a read-only property.

- mapbox_key (string; optional):
    mapbox API key for mapbox basemaps (optional).

- merge_layers (boolean; optional):
    Merge layers.

- overlay (string; optional):
    JSON spec of the overlay deck.gl instance (optional).

- preserve_drawing_buffer (boolean; optional):
    Add preserveDrawingBuffer to the WebGL context.

- spec (string; required):
    JSON spec of the primary deck.gl instance. Omit initial_view_state
    from the spec to re-render the deck.gl map with new layers or
    properties but without resetting the view.

- tooltips (list; optional):
    An array of tooltip objects that follows he pydeck tooltip
    specifcation. An additonal 'layer' property can be added to the
    tooltip objects to restrict their action to that layer ID.

- viewstate (dict; optional):
    Current viewstate of the map.

- width (number | string; optional):
    width of the map component container as pixels or CSS string
    (optional) Default 100% of parent container."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_deckgl'
    _type = 'DashDeckgl'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        spec: typing.Optional[str] = None,
        tooltips: typing.Optional[typing.Sequence] = None,
        width: typing.Optional[typing.Union[NumberType, str]] = None,
        height: typing.Optional[typing.Union[NumberType, str]] = None,
        custom_libraries: typing.Optional[typing.Sequence] = None,
        configuration: typing.Optional[dict] = None,
        description: typing.Optional[dict] = None,
        events: typing.Optional[typing.Sequence] = None,
        overlay: typing.Optional[str] = None,
        landmask: typing.Optional[dict] = None,
        mapbox_key: typing.Optional[str] = None,
        lastevent: typing.Optional[dict] = None,
        viewstate: typing.Optional[dict] = None,
        merge_layers: typing.Optional[bool] = None,
        cursor_position: typing.Optional[str] = None,
        preserve_drawing_buffer: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'configuration', 'cursor_position', 'custom_libraries', 'description', 'events', 'height', 'landmask', 'lastevent', 'mapbox_key', 'merge_layers', 'overlay', 'preserve_drawing_buffer', 'spec', 'tooltips', 'viewstate', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'configuration', 'cursor_position', 'custom_libraries', 'description', 'events', 'height', 'landmask', 'lastevent', 'mapbox_key', 'merge_layers', 'overlay', 'preserve_drawing_buffer', 'spec', 'tooltips', 'viewstate', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['spec']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(DashDeckgl, self).__init__(**args)

setattr(DashDeckgl, "__init__", _explicitize_args(DashDeckgl.__init__))
