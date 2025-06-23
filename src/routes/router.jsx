import {createRouter} from '@tanstack/react-router';
import {Route as RootRoute} from './_root.jsx';
import {Route as PieChartRoute} from './PieChartRoute.jsx';
import {Route as HeatMapChartRoute} from './HeatMapChartRoute.jsx';

const routeTree = RootRoute.addChildren([
  PieChartRoute,
  HeatMapChartRoute
])

export const router = createRouter({
  routeTree,
})
