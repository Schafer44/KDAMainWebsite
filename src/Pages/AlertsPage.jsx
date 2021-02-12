import React from "react";
import "antd/dist/antd.css";
import AlertsBody from "../Components/AlertsBody";
import { Layout } from "antd";

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
