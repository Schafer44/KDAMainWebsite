import React from "react";
import "../CSS/Homepage.css";
import { Link } from "react-router-dom";
import { ProductBody } from "./ProductBody";
import { Button } from "antd";
import { HomeBody } from "./HomeBody";

export class SearchBody extends React.Component {
    


    render() {
        console.log("test5",this.props);
        if (this.props) {}

        console.log(this.props)
        const result = Object.keys(this.props.data).filter(key => {
            console.log(key)
            return this.props.data[key].type === "entry"
        }).filter(key => {
            console.log(key)
            return this.props.data[key].name.includes(this.props.search)
        }).map(key => (

            /*<li>
                <button className="buttons" type="primary" shape="round" onClick={<ProductBody {...key} />}>
                    <Link to={key} >{this.props.data[key].name}</Link>
                </button>
            </li>*/
            <li>
                <button className="buttons" type="primary" shape="round" onClick={this.redirect(this.props.data[key])}>
                    <Link to={key} >{this.props.data[key].name}</Link>
                </button>
            </li>

            ));
        return (
            <>
                <div className="divide">{result}</div>
            </>
        );
    }

    redirect(key, event) {
        return (<ProductBody {...key} />);
    }
}
