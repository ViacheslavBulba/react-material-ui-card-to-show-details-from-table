import Typography from '@mui/material/Typography';

import { useState } from 'react';
import { Chart } from 'react-google-charts';

const ProbabilityHistory = props => {

    const allProbabilityHistory = props.data;
    const probabilityHistoryArrayHolder = [];
    probabilityHistoryArrayHolder.push(['Days Ago', 'PX Prob', 'Rep Prob']);
    allProbabilityHistory.forEach(e => {
        probabilityHistoryArrayHolder.push([e.daysAgo, e.pilytixProb, e.repProb]);
    });
    const [probabilityHistoryDataArray] = useState(probabilityHistoryArrayHolder);

    return (
        <>
            <br />
            <Typography variant="h5" >
                Probability History
            </Typography>

            <Chart
                //width={'400px'}
                height={'300px'}
                chartType="Bar"
                data={probabilityHistoryDataArray}
            />
        </>
    );
}

export default ProbabilityHistory;