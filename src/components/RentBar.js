import {useSelector} from "react-redux";

import {Bar} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend
);

const optionsChart = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
        },
    },
};

const importData = (dataForChart) => {
    const ERent = dataForChart.map(eRent => eRent.effectiveRent);
    const SRent = dataForChart.map(sRent => sRent.startingRent);
    const id = dataForChart.map(id => "id " + id.id);

    const dataChartExport = {
        labels: id,
        datasets: [
            {
                label: 'effective rent',
                data: ERent,
                backgroundColor: 'rgba(99,133,255,0.5)',
            },
            {
                label: 'starting rent',
                data: SRent,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };
    return dataChartExport;
}


const RentBar = () => {
    const rent = useSelector(state => state.rents.items);

    return (rent.data?<Bar options={optionsChart} data={importData(rent.data)}/>:null)
}
export default RentBar
