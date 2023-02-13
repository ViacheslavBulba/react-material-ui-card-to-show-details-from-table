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

const InfoCard = props => {

    const allProbabilityHistory = props.data.probabilityHistory;

    const myArray = [];
    myArray.push(['Days Ago', 'PX Prob', 'Rep Prob']);
    allProbabilityHistory.forEach(e => {
        myArray.push([e.daysAgo, e.pilytixProb, e.repProb]);
    });

    // const [data] = useState([
    //     ['Days Ago', 'PX Prob', 'Rep Prob'],
    //     ['28', 0.11, 0.05],
    //     ['21', 0.1, 0.1],
    //     ['14', 0.17, 0.2],
    //     ['7', 0.25, 0.2]
    // ]);

    const [data] = useState(myArray);

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
                            data={data}
                        />

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default InfoCard;