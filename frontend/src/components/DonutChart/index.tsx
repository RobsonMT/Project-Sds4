import axios from 'axios';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { Base_URL } from 'utils/requests';

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () =>{ 

    let chartData : ChartData = {labels: [], series: []};

    axios.get(`${Base_URL}/sales/amount-by-seller`)
        .then( response => {
          const data = response.data as SaleSum[];
          const myLabels = data.map(value => value.sellerName);
          const mySeries = data.map(value => value.sum);

          chartData = {labels: myLabels, series: mySeries};
        });

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }
    
    const options = {
        legend: {
            show: true
        }
    }
  
    return (
      <Chart
        options={{ ...options, labels: chartData.labels}}
        series={chartData.series}
        type="donut"
        height="240"
      />
    );
  }
  
export default DonutChart;