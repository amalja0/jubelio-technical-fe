import {useHeatMapChartData} from "../hooks/useHeatMapChartData.js";
import Plot from "react-plotly.js";

export default function HeatMapChartData() {
  const {
    products,
    isLoadingProducts,
    errorProducts,
    isErrorProducts
  } = useHeatMapChartData();

  console.log(products);

  if (!products || products.length === 0) {
    return (
      <p>
        No data available
      </p>
    )
  }

  const x = products?.products;
  const y = products?.states;
  const z = products?.data?.map(({data}) => data);
  const chartData = [
    {
      x,
      y,
      z,
      type: 'heatmap'
    }
  ];
  const chartLayout = {
    title: 'Most Sold Products by State',
  }

  return (
    <Plot
      data={chartData}
      layout={chartLayout}
    />
  )

}