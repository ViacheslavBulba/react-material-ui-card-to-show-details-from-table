import './InfoCard.css';

import CloseIcon from '@mui/icons-material/Close';
import { CardHeader, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import Factors from '../Factors/Factors';

const InfoCard = props => {

    const allProbabilityHistory = props.data.probabilityHistory;
    const probabilityHistoryArrayHolder = [];
    probabilityHistoryArrayHolder.push(['Days Ago', 'PX Prob', 'Rep Prob']);
    allProbabilityHistory.forEach(e => {
        probabilityHistoryArrayHolder.push([e.daysAgo, e.pilytixProb, e.repProb]);
    });
    const [probabilityHistoryDataArray] = useState(probabilityHistoryArrayHolder);

    return (
        <div className="popup-box">
            <div className="box">
                {/* <span className="close-icon" onClick={props.handleClose}>x</span> */}
                <Card sx={{ maxWidth: 600 }}>
                    <CardContent>
                        <CardHeader
                            action={
                                <IconButton onClick={props.handleClose}>
                                    <CloseIcon />
                                </IconButton>
                            }
                            title={props.data.oppName}
                        />

                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">Opp Stage</TableCell>
                                        <TableCell align="right">{props.data.stage}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="left">Rep Probability</TableCell>
                                        <TableCell align="right">{props.data.repProbability}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="left">PX Probability</TableCell>
                                        <TableCell align="right">{props.data.pilytixProbability}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="left">PX Tier</TableCell>
                                        <TableCell align="right">{props.data.pilytixTier}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="left">Amount</TableCell>
                                        <TableCell align="right">{props.data.amount}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="left">Product</TableCell>
                                        <TableCell align="right">{props.data.product}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell align="left">Sales Rep Name</TableCell>
                                        <TableCell align="right">{props.data.salesRepName}</TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                        </TableContainer>

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



                        <Factors title="PX Factors Increasing Win" data={props.data.pilytixFactorsIncreasingWin} sort="desc" />
                        <Factors title="PX Factors Decreasing Win" data={props.data.pilytixFactorsDecreasingWin} sort="asc" />


                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default InfoCard;