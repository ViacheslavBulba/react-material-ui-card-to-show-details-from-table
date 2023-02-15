import './InfoCard.css';

import CloseIcon from '@mui/icons-material/Close';
import { CardHeader, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Factors from '../Factors/Factors';
import ProbabilityHistory from '../ProbabilityHistory/ProbabilityHistory';
import TopLevelData from '../TopLevelData/TopLevelData';

const InfoCard = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}><CloseIcon /></span>
                <Card aria-label="opportunity details card">
                    <CardContent>
                        <CardHeader
                            title={props.data.oppName}
                        />

                        <TopLevelData data={props.data} />

                        {props.data.probabilityHistory && <ProbabilityHistory data={props.data.probabilityHistory} />}

                        {props.data.pilytixFactorsIncreasingWin && <Factors title="PX Factors Increasing Win" data={props.data.pilytixFactorsIncreasingWin} sort="desc" />}

                        {props.data.pilytixFactorsDecreasingWin && <Factors title="PX Factors Decreasing Win" data={props.data.pilytixFactorsDecreasingWin} sort="asc" />}

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default InfoCard;