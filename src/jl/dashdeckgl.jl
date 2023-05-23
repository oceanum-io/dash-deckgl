# AUTO GENERATED FILE - DO NOT EDIT

export dashdeckgl

"""
    dashdeckgl(;kwargs...)

A DashDeckgl component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `configuration` (Dict; optional)
- `customLibraries` (Array; optional)
- `description` (Dict; optional): HTML of description elements
- `events` (Array; optional): List of events to listen to
- `height` (Real; optional)
- `overlay` (String; optional): JSON spec of the overlay deck.gl instance
(optional)
- `spec` (String; required): JSON spec of the primary deck.gl instance
- `tooltip` (Dict; optional)
"""
function dashdeckgl(; kwargs...)
        available_props = Symbol[:id, :configuration, :customLibraries, :description, :events, :height, :overlay, :spec, :tooltip]
        wild_props = Symbol[]
        return Component("dashdeckgl", "DashDeckgl", "dash_deckgl", available_props, wild_props; kwargs...)
end

