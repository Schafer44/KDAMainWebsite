import React from "react";
import "antd/dist/antd.css";
import { HomeBody } from "../Components/HomeBody";
import { Layout } from "antd";

export class Homepage extends React.Component {


    render() {
    return (
        <>
        <Layout>
                <HomeBody  {...this.props}/>
        </Layout>
      </>
    );
  }
}
