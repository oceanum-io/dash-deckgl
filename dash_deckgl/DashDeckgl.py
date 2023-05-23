# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDeckgl(Component):
    """A DashDeckgl component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- configuration (dict; optional)

- customLibraries (list; optional)

- description (dict; optional):
    HTML of description elements.

- events (list; optional):
    List of events to listen to.

- height (number; optional)

- overlay (string; optional):
    JSON spec of the overlay deck.gl instance (optional).

- spec (string; required):
    JSON spec of the primary deck.gl instance.

- tooltip (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_deckgl'
    _type = 'DashDeckgl'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, spec=Component.REQUIRED, tooltip=Component.UNDEFINED, height=Component.UNDEFINED, customLibraries=Component.UNDEFINED, configuration=Component.UNDEFINED, description=Component.UNDEFINED, events=Component.UNDEFINED, overlay=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'configuration', 'customLibraries', 'description', 'events', 'height', 'overlay', 'spec', 'tooltip']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'configuration', 'customLibraries', 'description', 'events', 'height', 'overlay', 'spec', 'tooltip']
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
