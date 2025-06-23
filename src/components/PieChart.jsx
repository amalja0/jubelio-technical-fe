import {usePieChartData} from "../hooks/usePieChartData.js";
import Plot from 'react-plotly.js';

export default function PieChart() {
  const {
    products,
    isLoadingProducts,
    errorProducts,
    isErrorProducts
  } = usePieChartData();

  if (!products || products.length === 0) {
    return (
      <p>
        No data available
      </p>
    )
  }

  const labels = products?.map(({product_name}) => product_name);
  const values =  products?.map(({total_quantity}) => total_quantity);
  const chartData = [
    {
      values,
      labels,
      type: 'pie'
    }
  ];
  const chartLayout = {
    title: 'Most Sold Products',
  }

  return (
    <Plot
      data={chartData}
      layout={chartLayout}
    />
  )
}