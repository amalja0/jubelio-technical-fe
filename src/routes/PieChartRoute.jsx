import { createRoute } from "@tanstack/react-router";
import PieChart from "../components/PieChart.jsx";
import {Route as RootRoute} from './_root.jsx';
import HeatMapChartData from "../components/HeatMapChart.jsx";

const PieChartRoute = () => {
  return (
    <div className="p-2 flex flex-col items-center gap-5">
      <div className="w-5/6 flex flex-col gap-3 border border-white rounded-md p-5">
        <span className="text-lg font-medium">Most Sold Out Products</span>
        <PieChart/>
        <span className="mt-2 self-end text-xs italic">by Amalia</span>
      </div>
    </div>
  )
}

export const Route = createRoute({
  path: '/',
  getParentRoute: () => RootRoute,
  component: PieChartRoute
})
