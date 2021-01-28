import React from "react";
import "antd/dist/antd.css";
import { HomeBody } from "../Components/HomeBody";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";

export class Homepage extends React.Component {


    constructor(props: any) {
        super(props);
    }

    render() {
    return (
        <>
            {JSON.stringify(this.props)}
        <Layout>
          <KDANavbar />
          <HomeBody />
          <KDAFooter />
        </Layout>
      </>
    );
  }
}
