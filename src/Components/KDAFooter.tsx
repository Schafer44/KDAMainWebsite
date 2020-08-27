import React from "react";
import { Grid, Typography, Button, TextField, Link, Box, styled} from "@material-ui/core";

const SignUpButton = styled(Button)({
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: '0',
    minWidth: '120px',
    marginTop: '12px',
    marginBottom: '12px',
  });

const MarginTypography = styled(Typography)({
    marginTop: '12px',
    marginBottom: '12px'
})

export default class KDAFooter extends React.Component {

    render() {
        return (
            <Grid container direction="row" alignItems="center" justify="center" spacing= {2}>
                <Grid item xs>
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/bd/KSDofAg_logo.png"/>
                </Grid>
                <Grid item container direction="column" alignContent="center" xs >
                    <Typography variant="h6"> Support </Typography>
                    <Link href="#"> About Us </Link>
                    <Link href="#"> Snap Eligibility </Link>
                    <Link href="#"> Reference Page </Link>
                    <Link href="#"> Contact Us </Link>
                    <Link href="#"> File A Report </Link>
                </Grid>
                <Grid item container alignItems="center" direction="column" alignContent="center" xs >
                    <MarginTypography >Stay updated with KDA</MarginTypography>
                    <TextField id="standard-basic" placeholder="Email Address" />
                    <SignUpButton variant="contained" color="primary"> Sign Up </SignUpButton>
                </Grid>
            </Grid>
        )
    }
}