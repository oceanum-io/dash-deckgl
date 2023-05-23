
import os
import pydeck as pdk
import xarray as xr
import dash_deckgl
from dash import Dash, callback, html, Input, Output

from pydeck_grid import PcolorLayer, PartmeshLayer

grid_data = xr.open_dataset(os.path.join(os.path.dirname(__file__), "tests","data","gfs_nz.nc"))
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
    ],
    tooltip={
        "html": "<b>Wind speed:</b> {value} kts",
        "style": {"backgroundColor": "steelblue", "color": "white"},
    },
)

colorbar = pcolor_layer.colorbar(units="kts", labels=[0, 10, 20, 30, 40, 50])

app = Dash(__name__)

app.layout = html.Div([
    dash_deckgl.DashDeckgl(
        id='input',
        spec=r.to_json(),
        description={"top-right": colorbar},
    ),
    html.Div(id='output')
])


@callback(Output('output', 'children'), Input('input', 'object'))
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
