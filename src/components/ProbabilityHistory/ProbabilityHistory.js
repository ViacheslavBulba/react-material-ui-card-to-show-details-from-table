import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const ProbabilityHistory = props => {

    const [probabilityHistoryDataArray, setProbabilityHistoryDataArray] = useState();

    const readDataRefreshChart = () => {
        const allProbabilityHistory = props.data;
        const probabilityHistoryArrayHolder = [];
        probabilityHistoryArrayHolder.push(['Days Ago', 'PX Prob', 'Rep Prob']);
        allProbabilityHistory.forEach(e => {
            probabilityHistoryArrayHolder.push([e.daysAgo, e.pilytixProb, e.repProb]);
        });
        setProbabilityHistoryDataArray(probabilityHistoryArrayHolder);
    }

    useEffect(() => {
        readDataRefreshChart();
    }, [props.data]);

    return (
        <>
            <br />
            <Typography variant="h5" >
                Probability History
            </Typography>
            <Chart
                height={'300px'}
                chartType="Bar"
                data={probabilityHistoryDataArray}
                aria-label="probability history bar chart"
            />
        </>
    );
}

export default ProbabilityHistory;