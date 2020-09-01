import React from 'react';
import { styled } from "@material-ui/core/styles";
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { TestUpdates } from "../Data/TestUpdates";
import { Typography, Box } from '@material-ui/core';
import "../CSS/UpdateBody.css";

interface UpdateState {
    cardsExpanded: boolean[],
}
const ScrollableBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'scroll',
    height: "60%",
    margin: "1em",
  });

const StyledCard = styled(Card)({
    width: "100%",
    margin: ".5em",
});

export default class UpdateBody extends React.Component<{}, UpdateState> {
    constructor(props: any){
        super(props);
        this.state = {
            cardsExpanded: new Array<boolean>(Object.values(TestUpdates).length),
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
        return (
            <ScrollableBox>
                {Object.values(TestUpdates).map( (update, index) => (
                    <StyledCard key={index} >
                        <CardHeader title = {update.title} subheader={update.date} className="updateTitle" />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {update.preview}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton className = "expandOpen"
                            aria-expanded={this.state.cardsExpanded[index]}
                            aria-label="show more"
                            onClick={() => this.handleExpandClick(index)}>
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