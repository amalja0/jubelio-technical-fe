import {createRootRoute, Link, Outlet} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component:() => (
    <>
      <div className="flex flex-row justify-center gap-5 mb-8">
        <Link to="/" className="text-xl">
          Pie Chart
        </Link>
        <Link to="/heat-map-chart" className="text-xl">
          Heat Map Chart
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})