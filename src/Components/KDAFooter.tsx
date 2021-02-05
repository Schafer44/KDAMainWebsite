import React from "react";
import { Grid, Typography, Link} from "@material-ui/core";
import "../CSS/KDAFooter.css";


export default class KDAFooter extends React.Component {

    render() {
        return (
            <Grid container direction="row" alignItems="center" justify="center" spacing={2} className="navbarGradient">
                <Grid item xs={12} sm={4}>
                    <img className="kdaLogo" src="https://upload.wikimedia.org/wikipedia/en/b/bd/KSDofAg_logo.png" alt="Kansas Department of Agriculture" />
                </Grid>
                <Grid item container direction="column" alignContent="center" xs={6} sm={4}>
                    <Typography variant="h6"> Support </Typography>
                    <Link color ="inherit" href="/about" > About Us </Link>
                    <Link color ="inherit" href="/references"> Reference Page </Link>
                    <Link color ="inherit" href="/report"> File A Report </Link>
                </Grid>
            </Grid>
        )
    }
}