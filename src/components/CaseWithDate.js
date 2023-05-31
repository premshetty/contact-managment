import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const queryClient = new QueryClient();

const CovidHistoricalChart = () => {
    const fetchCovidHistoricalData = async () => {
        const response = await axios.get(
            'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
        );
        return response.data;
    };

    const { data, isLoading, isError } = useQuery(
        'covidHistoricalData',
        fetchCovidHistoricalData
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data</div>;
    }

    const historicalData = data;
    const dates = Object.keys(historicalData.cases);
    const cases = Object.values(historicalData.cases);
    const deaths = Object.values(historicalData.deaths);
    const recovered = Object.values(historicalData.recovered);

    const chartData = {
        labels: dates,
        datasets: [
            {
                label: 'Cases',
                data: cases,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.4,
            },
            {
                label: 'Deaths',
                data: deaths,
                fill: false,
                borderColor: 'rgba(54, 162, 235, 1)',
                tension: 0.4,
            },
            {
                label: 'Recovered',
                data: recovered,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    return (
        <div className="w-full h-96 pb-12 p-3 bg-gray-800 text-gray-200 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold tracking-tight text-center mb-5  whitespace-nowrap ">
                Graph data for cases with date:
            </h1>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

const CaseWithDate = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <CovidHistoricalChart />
        </QueryClientProvider>
    );
};

export default CaseWithDate;
