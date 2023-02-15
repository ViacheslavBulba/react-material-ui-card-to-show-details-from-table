import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const TopLevelData = props => {
    return (
        <Grid container direction="row" justifyContent="center">
            <TableContainer component={Paper} sx={{ maxWidth: 600 }} aria-label="top level details table on the opportunity card">
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
        </Grid>
    );
}

export default TopLevelData;