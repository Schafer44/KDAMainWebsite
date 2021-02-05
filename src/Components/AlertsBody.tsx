import React from 'react';
import { styled } from "@material-ui/core/styles";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography, Box } from '@material-ui/core';
import "../CSS/AlertsBody.css";
import Data from "../Data/data.json";

interface UpdatesState {
    cardsExpanded: boolean[],
}
const ScrollableBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'scroll',
    height: "50%",
    maxHeight: "600px",
    margin: "1em",
  });

const StyledCard = styled(Card)({
    width: "100%",
    margin: ".5em",
});

export default class AlertsBody extends React.Component<{}, UpdatesState> {
    constructor(props: any){
        super(props);
         let newData = JSON.parse(JSON.stringify(this.props));
        this.state = {
            cardsExpanded: new Array<boolean>(Object.values(newData.data.data.alerts).length),
        };
    }

    handleExpandClick(index: any) {
        this.setState(state =>  {
            const cardsExpanded = state.cardsExpanded.map(card => card);
            cardsExpanded[index] = !cardsExpanded[index];
            return {
                cardsExpanded
            };
        });
    }

    render() {
        let newData = JSON.parse(JSON.stringify(this.props));
        return (
            <ScrollableBox>
                {Object.values(Data.data.alerts).map((update, index) => (
                    <StyledCard key={index} >
                        <CardHeader title = {update.title} subheader={update.date} className="updateTitle" />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {update.preview}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton 
                            aria-expanded={this.state.cardsExpanded[index]}
                            aria-label="show more"
                            onClick={() => this.handleExpandClick(index)}
                            className={clsx("expand", {
                                "expandOpen": this.state.cardsExpanded[index],
                            })}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.cardsExpanded[index]} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {update.description}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </StyledCard>
                ))}
            </ScrollableBox>
        );
    }
}