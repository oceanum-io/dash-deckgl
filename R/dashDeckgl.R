# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashDeckgl <- function(id=NULL, configuration=NULL, cursor_position=NULL, custom_libraries=NULL, description=NULL, events=NULL, height=NULL, landmask=NULL, lastevent=NULL, mapbox_key=NULL, merge_layers=NULL, overlay=NULL, preserve_drawing_buffer=NULL, spec=NULL, tooltips=NULL, viewstate=NULL, width=NULL) {
    
    props <- list(id=id, configuration=configuration, cursor_position=cursor_position, custom_libraries=custom_libraries, description=description, events=events, height=height, landmask=landmask, lastevent=lastevent, mapbox_key=mapbox_key, merge_layers=merge_layers, overlay=overlay, preserve_drawing_buffer=preserve_drawing_buffer, spec=spec, tooltips=tooltips, viewstate=viewstate, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDeckgl',
        namespace = 'dash_deckgl',
        propNames = c('id', 'configuration', 'cursor_position', 'custom_libraries', 'description', 'events', 'height', 'landmask', 'lastevent', 'mapbox_key', 'merge_layers', 'overlay', 'preserve_drawing_buffer', 'spec', 'tooltips', 'viewstate', 'width'),
        package = 'dashDeckgl'
        )

    structure(component, class = c('dash_component', 'list'))
}
