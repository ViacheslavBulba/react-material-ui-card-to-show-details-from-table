import './InfoCard.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const InfoCard = props => {
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
                        <Typography variant="body1">
                            {JSON.stringify(props.data)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Card Button</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default InfoCard;