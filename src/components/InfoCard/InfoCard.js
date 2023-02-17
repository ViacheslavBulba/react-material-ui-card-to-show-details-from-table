import './InfoCard.css';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as opportunities from "../../opportunities.json";
import Factors from '../Factors/Factors';
import ProbabilityHistory from '../ProbabilityHistory/ProbabilityHistory';
import TopLevelData from '../TopLevelData/TopLevelData';
import { useState, useEffect } from 'react';

const InfoCard = props => {

    const allOpportunitiesFromJson = opportunities.default;
    const [cardInfo, setCardInfo] = useState(props.data);

    function handleNextCardArrowClick() {
        const nextOpportunity = allOpportunitiesFromJson.find(item => item.oppId === (cardInfo.oppId + 1));
        if (nextOpportunity === undefined) {
            return;
        }
        setCardInfo(nextOpportunity);
    }

    function handlePreviousCardArrowClick() {
        const previousOpportunity = allOpportunitiesFromJson.find(item => item.oppId === (cardInfo.oppId - 1));
        if (previousOpportunity === undefined) {
            return;
        }
        setCardInfo(previousOpportunity);
    }

    const useKeyPress = function(targetKey) {
        const [keyPressed, setKeyPressed] = useState(false);
      
        function downHandler(event) {
          if (event.key === targetKey) {
            setKeyPressed(true);
            event.preventDefault(); // to prevent horizontal scroll on arrow keys in table when a card is open
          }
        }
      
        const upHandler = ({ key }) => {
          if (key === targetKey) {
            setKeyPressed(false);
          }
        };
      
        useEffect(() => {
          window.addEventListener("keydown", downHandler);
          window.addEventListener("keyup", upHandler);
          return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
          };
        });
      
        return keyPressed;
      };

      const arrowLeft = useKeyPress("ArrowLeft");
      const arrowRight = useKeyPress("ArrowRight");
      const escape = useKeyPress("Escape");

      useEffect(() => {
        if (arrowLeft) {
            handlePreviousCardArrowClick();
        }
      }, [arrowLeft]);

      useEffect(() => {
        if (arrowRight) {
            handleNextCardArrowClick();
        }
      }, [arrowRight]);

      useEffect(() => {
        if (escape) {
          props.handleClose();
        }
      }, [escape]);

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}><CloseIcon /></span>
                <span className="arrow-forward-icon" onClick={handleNextCardArrowClick}><ArrowForwardIcon /></span>
                <span className="arrow-backward-icon" onClick={handlePreviousCardArrowClick}><ArrowBackIcon /></span>
                <Card aria-label="opportunity details card">
                    <CardContent>
                        <CardHeader
                            title={cardInfo.oppName}
                        />
                        <TopLevelData data={cardInfo} />
                        {cardInfo.probabilityHistory && <ProbabilityHistory data={cardInfo.probabilityHistory} />}
                        {cardInfo.pilytixFactorsIncreasingWin && <Factors title="PX Factors Increasing Win" data={cardInfo.pilytixFactorsIncreasingWin} sort="desc" backgroundColor="#c9ffcf"/>}
                        {cardInfo.pilytixFactorsDecreasingWin && <Factors title="PX Factors Decreasing Win" data={cardInfo.pilytixFactorsDecreasingWin} sort="asc" backgroundColor="#fae1e1" />}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default InfoCard;