import Typography from '@mui/material/Typography';

import {
    BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ProbabilityHistory = props => {

    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    let labels = [];
    let pxProbArray = [];
    let repProbArray = [];

    let allProbabilityHistory = props.data.sort((a, b) => (a.daysAgo - b.daysAgo));

    allProbabilityHistory.forEach(e => {
        labels.push(e.daysAgo);
        pxProbArray.push(e.pilytixProb);
        repProbArray.push(e.repProb);
    });

    let data = {
        labels,
        datasets: [
            {
                label: 'PX Prob',
                data: pxProbArray,
                backgroundColor: 'rgb(75, 192, 192)',
                stack: 'Stack 0',
            },
            {
                label: 'Rep Prob',
                data: repProbArray,
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 1',
            },
        ],
    };

    return (
        <>
            <br />
            <Typography variant="h5" >
                Probability History
            </Typography>
            <br />
            <Bar options={options} data={data} aria-label="probability history bar chart"/>
        </>
    );
}

export default ProbabilityHistory;