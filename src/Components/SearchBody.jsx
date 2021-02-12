import React from "react";
import "../CSS/Homepage.css";
import { Link } from "react-router-dom";
import { ProductBody } from "./ProductBody";

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

            <li>
                <button className="buttons" type="primary" shape="round" onClick={this.redierct(this.props.data[key]) }>
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
    redierct(key) {
        return (<ProductBody {...key} />);
    }

}
