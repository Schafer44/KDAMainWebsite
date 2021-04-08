import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {Link} from "react-router-dom";
import "../CSS/KDAFooter.css";

export default class KDAFooter extends React.Component {

    render() {
        return (
            <Grid container direction="row" alignItems="center" justify="center" spacing={2} className="navbarGradient">
                <Grid item xs={12} sm={4}>
                    <img className="kdaLogo" src="https://upload.wikimedia.org/wikipedia/en/b/bd/KSDofAg_logo.png" alt="Kansas Department of Agriculture" />
                </Grid>
                <Grid item container direction="column" alignContent="center" xs={6} sm={4} >
                    <Typography variant="h6"> Support </Typography>
                    <Link to="/references" className="link"> Reference Page </Link>
                    <Link to="/report" className="link"> File A Report </Link>
                </Grid>
            </Grid>
        )
    }
}