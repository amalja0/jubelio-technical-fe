import {createRoute, Outlet} from "@tanstack/react-router";

const Home = () => {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Outlet />
    </div>
  )
}

export const route = createRoute({
  path: '/',
  component: Home
})

