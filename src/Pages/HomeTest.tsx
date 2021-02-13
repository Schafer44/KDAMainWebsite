import React from "react";
import "antd/dist/antd.css";
import { HomeBody } from "../Components/HomeBody";
import { Layout } from "antd";

export class Homepage extends React.Component<{ data: object }> {
    state = {
        theme: "dark",
        current: "1",
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <>
                <Layout>
                    <HomeBody data = {this.props.data}/>
                </Layout>
            </>
        );
    }
}
