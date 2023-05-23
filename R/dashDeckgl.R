# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDeckgl <- function(id=NULL, configuration=NULL, customLibraries=NULL, description=NULL, events=NULL, height=NULL, overlay=NULL, spec=NULL, tooltip=NULL) {
    
    props <- list(id=id, configuration=configuration, customLibraries=customLibraries, description=description, events=events, height=height, overlay=overlay, spec=spec, tooltip=tooltip)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDeckgl',
        namespace = 'dash_deckgl',
        propNames = c('id', 'configuration', 'customLibraries', 'description', 'events', 'height', 'overlay', 'spec', 'tooltip'),
        package = 'dashDeckgl'
        )

    structure(component, class = c('dash_component', 'list'))
}
