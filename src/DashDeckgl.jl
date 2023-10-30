
module DashDeckgl
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.4.6"

include("jl/dashdeckgl.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_deckgl",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "DashDeckgl.js",
    external_url = nothing,
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "deckgl.js",
    external_url = nothing,
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "vendor.js",
    external_url = nothing,
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "DashDeckgl.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "deckgl.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "vendor.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_deckgl.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_deckgl.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
