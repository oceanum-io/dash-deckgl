
import urllib.request
import pydeck as pdk
import xarray as xr
import dash_deckgl
from dash import Dash, callback, html, Input, Output

#Note that this import also adds the necessary custom layers to pydeck.settings.custom_libraries
from pydeck_grid import PcolorLayer, PartmeshLayer

urllib.request.urlretrieve("https://github.com/oceanum-io/dash-deckgl/raw/main/tests/data/gfs_nz.nc","test.nc")
grid_data = xr.open_dataset("test.nc")
datakeys = {
    "x": "longitude",
    "y": "latitude",
    "u": "UGRD_10maboveground",
    "v": "VGRD_10maboveground",
}

pcolor_layer = PcolorLayer(
    grid_data,
    datakeys,
    id="test_pcolor",
    colormap="turbo",
    vmin=0,
    vmax=50,
    scale=1.92,
    pickable=True,
    precision=2,
)
partmesh_layer = PartmeshLayer(
    grid_data, datakeys, id="test_particles", color="#FFFFFF", mesh="quiver"
)

r = pdk.Deck(
    initial_view_state=pdk.ViewState(latitude=-40, longitude=175, zoom=5, pitch=50),
    layers=[
        pcolor_layer,
        partmesh_layer,
    ]
)

colorbar = pcolor_layer.colorbar(units="kts", labels=[0, 10, 20, 30, 40, 50])
with open('spec.json', 'w') as f:
    f.write(r.to_json())

app = Dash(__name__)

app.layout = html.Div([
    dash_deckgl.DashDeckgl(
        id='deckgl',
        spec=r.to_json(),
        description={"top-right": colorbar},
        height=500,
        customLibraries=pdk.settings.custom_libraries,
        tooltip={
            "html": "<b>Wind speed:</b> {value} kts",
            "style": {"backgroundColor": "steelblue", "color": "white"},
        },
        events=['click']
    ),
    html.Div(id='output')
])


@callback(Output('output', 'children'), Input('deckgl', 'lastEvent'))
def display_output(value):
    return 'Mouse event: {}'.format(value)


if __name__ == '__main__':
    app.run_server()
