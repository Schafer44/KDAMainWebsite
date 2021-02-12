import React from "react";
import "antd/dist/antd.css";
import AlertsBody from "../Components/AlertsBody";
import { Layout } from "antd";
import KDANavbar from "../Components/KDANavbar";
import KDAFooter from "../Components/KDAFooter";

export default class AlertsPage extends React.Component {
  render() {
    return (
      <>
        <Layout>
                <AlertsBody {...this.props}/>
        </Layout>
      </>
    );
  }
}
