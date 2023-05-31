import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

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

const MapMarkers = ({ data }) => {
    return (
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {data.map((country) => (
                <Marker key={country.countryInfo.iso3} position={[country.countryInfo.lat, country.countryInfo.long]}>
                    <Popup>
                        <div>
                            <h4>{country.country}</h4>
                            <p>Total Cases: {country.cases}</p>
                            <p>Total Deaths: {country.deaths}</p>
                            <p>Total Recovered: {country.recovered}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
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
        <div className="w-full p-4 h-screen overflow-scroll text-gray-200">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl  font-semibold mb-4">COVID-19 Cases by Country</h3>
                <LineGraph data={data} />
                <MapMarkers data={data} />
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
