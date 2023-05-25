# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDeckgl <- function(id=NULL, configuration=NULL, customLibraries=NULL, description=NULL, events=NULL, height=NULL, lastEvent=NULL, overlay=NULL, spec=NULL, tooltip=NULL, width=NULL) {
    
    props <- list(id=id, configuration=configuration, customLibraries=customLibraries, description=description, events=events, height=height, lastEvent=lastEvent, overlay=overlay, spec=spec, tooltip=tooltip, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDeckgl',
        namespace = 'dash_deckgl',
        propNames = c('id', 'configuration', 'customLibraries', 'description', 'events', 'height', 'lastEvent', 'overlay', 'spec', 'tooltip', 'width'),
        package = 'dashDeckgl'
        )

    structure(component, class = c('dash_component', 'list'))
}
