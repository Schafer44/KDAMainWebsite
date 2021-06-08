import React from "react";
import "../CSS/Homepage.css";
import { Link } from "react-router-dom";
import { ProductBody } from "./ProductBody";
import { Button } from "antd";
import KDANavbar from "./KDANavbar";



export default class SearchBody extends React.Component {

    render() {
        // returns results pulled from the name category
        const result = Object.keys(this.props.data).filter(key => {
            return this.props.data[key]
        }).filter(key => {
            return (this.props.data[key].name.toLowerCase().includes(this.props.search.toLowerCase())
                );
            }).map(key => (
                <Button key={key} className="buttons2" type="primary" shape="round">
                    <Link to={ "/"+key}>
                        {this.props.data[key].name}
                        {(this.props.data[key].examples != null) ?
                            <p className="examples">
                                {this.props.data[key].examples}
                            </p>
                        : ""}
                    </Link>
                </Button>
            ));


        // returns results pulled from the Examples category
        const resultExample = Object.keys(this.props.data).filter(key => {
            return this.props.data[key]
        }).filter(key => {
            if (this.props.data[key].examples !== undefined)
                return (this.props.data[key].examples.toLowerCase().includes(this.props.search.toLowerCase())
                );
            }).map(key => (
                <Button key={key} className="buttons2" type="primary" shape="round">
                    <Link to={"/"+key} >
                        {this.props.data[key].name}
                        {this.props.data[key].examples != null ?
                        <p className="examples">
                            {this.props.data[key].examples}
                        </p>
                        : ""}
                    </Link>
                </Button>
            ));
        return (
            <>
                <div className="divide">{result}</div>
                <br>
                </br>
                <div className="divide">{resultExample}</div>
                <br>
                </br>
            </>
        ); 
    }
}