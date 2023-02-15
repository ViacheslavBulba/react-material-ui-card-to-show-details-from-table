import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Factors = props => {

    const sortOrder = props.sort === "desc" ? 1 : -1;

    return (
        <>
            <br />
            <Typography variant="h5" >
                {props.title}
            </Typography>
            <br />
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} aria-label="factors table">
                {props.data.sort((a, b) => (b.weight.value - a.weight.value) * sortOrder).map(item => (
                    <Grid item key={item.name}>
                        <Card variant="outlined" sx={{ width: 250 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} gutterBottom>
                                    Name: {item.name}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Message: {item.message}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} gutterBottom>
                                    Value: {item.weight.value}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    Description: {item.weight.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Factors;