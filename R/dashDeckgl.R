# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDeckgl <- function(id=NULL, configuration=NULL, customLibraries=NULL, description=NULL, events=NULL, height=NULL, landmask=NULL, lastevent=NULL, mapbox_key=NULL, mergelayers=NULL, overlay=NULL, preserveDrawingBuffer=NULL, spec=NULL, tooltips=NULL, viewstate=NULL, width=NULL) {
    
    props <- list(id=id, configuration=configuration, customLibraries=customLibraries, description=description, events=events, height=height, landmask=landmask, lastevent=lastevent, mapbox_key=mapbox_key, mergelayers=mergelayers, overlay=overlay, preserveDrawingBuffer=preserveDrawingBuffer, spec=spec, tooltips=tooltips, viewstate=viewstate, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDeckgl',
        namespace = 'dash_deckgl',
        propNames = c('id', 'configuration', 'customLibraries', 'description', 'events', 'height', 'landmask', 'lastevent', 'mapbox_key', 'mergelayers', 'overlay', 'preserveDrawingBuffer', 'spec', 'tooltips', 'viewstate', 'width'),
        package = 'dashDeckgl'
        )

    structure(component, class = c('dash_component', 'list'))
}
