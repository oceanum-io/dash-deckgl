% Auto-generated: do not edit by hand
\name{dashDeckgl}

\alias{dashDeckgl}

\title{DashDeckgl component}

\description{
DashDeckGL is a wrapper of deck.gl for Dash. It takes a deck.gl JSON spec, converts it to a React component in aplotly dash app,
}

\usage{
dashDeckgl(id=NULL, configuration=NULL, customLibraries=NULL,
description=NULL, events=NULL, height=NULL, landmask=NULL,
lastevent=NULL, mapbox_key=NULL, mergelayers=NULL,
overlay=NULL, spec=NULL, tooltips=NULL, viewstate=NULL,
width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{configuration}{Named list. Addiitional configuration}

\item{customLibraries}{Unnamed list. Array of custom libraries to load. For example:
[{libraryName: 'DeckGriddedLayers', resourceUri: 'https://assets.oceanum.io/packages/deck-gl-grid/bundle.umd.cjs'}]}

\item{description}{Named list. HTML of description elements}

\item{events}{Unnamed list. List of events to listen to. Can be any of:
['click','hover','drag']}

\item{height}{Numeric | character. Height of the map component container as pixels or CSS string
(optional) Default 500}

\item{landmask}{Named list. Landmask basmap to add to the map with properties map_style
(optional)}

\item{lastevent}{Named list. The last event that was triggered. This is a read-only property.}

\item{mapbox_key}{Character. mapbox API key for mapbox basemaps
(optional)}

\item{mergelayers}{Logical. Current viewstate of the map.}

\item{overlay}{Character. JSON spec of the overlay deck.gl instance
(optional)}

\item{spec}{Character. JSON spec of the primary deck.gl instance}

\item{tooltips}{Unnamed list. An array of tooltip objects that follows he pydeck tooltip specifcation.
An additonal 'layer' property can be added to the tooltip objects to restrict their action to that layer ID.}

\item{viewstate}{Named list. Current viewstate of the map.}

\item{width}{Numeric | character. width of the map component container as pixels or CSS string
(optional) Default 100\% of parent container}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

