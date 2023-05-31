import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const queryClient = new QueryClient();

const CovidDataChart = () => {
    const fetchCovidData = async () => {
        const response = await axios.get('https://disease.sh/v3/covid-19/all');
        return response.data;
    };

    const { data, isLoading, isError } = useQuery('covidData', fetchCovidData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data</div>;
    }

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'COVID-19 Data',
                data: Object.values(data),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="w-full h-96 pb-12 p-3 bg-gray-800 text-gray-200 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold tracking-tight text-center mb-5  whitespace-nowrap ">
                World wide data of cases:
            </h1>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <CovidDataChart />
        </QueryClientProvider>
    );
};

export default App;
