import React from "react";
import "antd/dist/antd.css";
import { Grid } from "@material-ui/core";
import CNIRegulationForm from "../Components/CreateNewItemRegulationForm";

interface COERegulationsPageProps {}
interface COERegulationsPageState {}

export class COERegulationsPage extends React.Component<
  COERegulationsPageProps,
  COERegulationsPageState
> {
  render() {
    return (
      <>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around"
          spacing={1}
        >
          <Grid item xs={10} md lg xl>
            <CNIRegulationForm />
          </Grid>
        </Grid>
      </>
    );
  }
}