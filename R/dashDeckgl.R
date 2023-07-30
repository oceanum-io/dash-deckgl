# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDeckgl <- function(id=NULL, configuration=NULL, customLibraries=NULL, description=NULL, events=NULL, height=NULL, lastEvent=NULL, mapbox_key=NULL, overlay=NULL, spec=NULL, tooltips=NULL, width=NULL) {
    
    props <- list(id=id, configuration=configuration, customLibraries=customLibraries, description=description, events=events, height=height, lastEvent=lastEvent, mapbox_key=mapbox_key, overlay=overlay, spec=spec, tooltips=tooltips, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDeckgl',
        namespace = 'dash_deckgl',
        propNames = c('id', 'configuration', 'customLibraries', 'description', 'events', 'height', 'lastEvent', 'mapbox_key', 'overlay', 'spec', 'tooltips', 'width'),
        package = 'dashDeckgl'
        )

    structure(component, class = c('dash_component', 'list'))
}
