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
import Factors from '../Factors/Factors';
import ProbabilityHistory from '../ProbabilityHistory/ProbabilityHistory';

const InfoCard = props => {

    // EXTRACT GRAPH TO STANDALONE COMPONENT
    // add if for no data in each section
    // restrict scrolls
    // decrease first table width
    // fix alignment of factors cards

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

                        <ProbabilityHistory data={props.data.probabilityHistory} />



                        <Factors title="PX Factors Increasing Win" data={props.data.pilytixFactorsIncreasingWin} sort="desc" />
                        <Factors title="PX Factors Decreasing Win" data={props.data.pilytixFactorsDecreasingWin} sort="asc" />


                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default InfoCard;