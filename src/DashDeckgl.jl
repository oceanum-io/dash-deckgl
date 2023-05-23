
module DashDeckgl
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/dashdeckgl.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_deckgl",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-DashDeckgl.js",
    external_url = "https://unpkg.com/dash_deckgl@0.0.1/dash_deckgl/async-DashDeckgl.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DashDeckgl.js.map",
    external_url = "https://unpkg.com/dash_deckgl@0.0.1/dash_deckgl/async-DashDeckgl.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_deckgl.min.js",
    external_url = "https://unpkg.com/dash_deckgl@0.0.1/dash_deckgl/dash_deckgl.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_deckgl.min.js.map",
    external_url = "https://unpkg.com/dash_deckgl@0.0.1/dash_deckgl/dash_deckgl.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
