import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const queryClient = new QueryClient();

const LineGraph = ({ data }) => {
    const chartData = {
        labels: data.map((country) => country.country),
        datasets: [
            {
                label: 'COVID-19 Cases',
                data: data.map((country) => country.cases),
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="mb-4">
            <Line data={chartData} />
        </div>
    );
};

const CountryData = () => {
    const fetchCountryData = async () => {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        return response.data;
    };

    const { data, isLoading, isError } = useQuery('countryData', fetchCountryData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data</div>;
    }

    return (
        <div className="w-full p-4 h-screen  text-gray-200">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">COVID-19 Cases by Country</h3>
                <LineGraph data={data} />
            </div>
        </div>
    );
};

const CWData = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <CountryData />
        </QueryClientProvider>
    );
};

export default CWData;
