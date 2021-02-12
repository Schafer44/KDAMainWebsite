import React from "react";
import "antd/dist/antd.css";
import UpdatesBody from "../Components/UpdatesBody";
import { Layout } from "antd";

export default class UpdatesPage extends React.Component {
  render() {
    return (
      <>
        <Layout>
                <UpdatesBody  {...this.props}/>
        </Layout>
      </>
    );
  }
}
