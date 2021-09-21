import { fetchDailyData } from '../../API';
import { Line, Bar } from 'react-chartjs-2';
import chart from './chart.module.scss';
import React, { useState, useEffect } from 'react';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();

    }, []);

    const lineChart = ( dailyData.length ? (
                /* Line */
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: 'orange',
                            label: 'Infected',
                            borderColor: 'hsl(36, 88%, 53%',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            fill: true,
                        }],
                    }}
                />) : null
    );

    const barChart = ( confirmed  ? (
                /* Bar */
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgb(209, 127, 19)', /* infected */
                                'rgba(11, 204, 69, 0.8)', /* Recovered */
                                'rgba(255, 0, 0, 0.9)', /* Death */
                                'hsl(36, 88%, 53%',
                                'rgb(36, 231, 94)',
                                'rgb(241, 30, 30)',
                            ],
                            data: [confirmed.value, confirmed.value - recovered.value - deaths.value, deaths.value]
                        }]
                    }}

                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` },
                    }}
                />
            ) : null
    );

    return (
        <div className={chart.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;