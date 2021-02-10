import React from "react";
import { Button } from "antd";
import "../CSS/Homepage.css";
//import Data from "../Data/FoodType.json";
/*
import RightData from "../Data/FoodCategories.json";
import Data from "../Data/data.json";
*/
import { ProductBody } from "./ProductBody";
import { StarOutlined } from '@ant-design/icons';
//import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";

//<button onClick={() => useHistory().goBack()}>Back</button>



export class HomeBody extends React.Component{


  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.changerStar = this.changerStar.bind(this);
  }
  //Renders display
    render() {
console.log(this.props);
    return (
        <>
          <div className="divide">
            <p className="header">{this.props.data.name}</p>
          </div>
          <div id="boxes">{this.renderButtons()}</div>
          <div className="divide divideBottom"></div>
        </>
    );
  }

  changerStar(name) {
      this.setState(prevState => ({
          //isToggleOn: !prevState.isToggleOn
      }));
        console.log("Current Name:" + name);
        this.props.data[this.comment.parent].forEach((data) => {
        if (data.parent === name) {
              data.starState = !data.starState;
          }
      })
  }

    renderButtons() {
        if (this.props.data.type === "entry") {
            return (
                <ProductBody {...this.props}/>
            );
        }

        return Object.keys(this.props.data.children).map((key) => {
            return (
                <Button className="buttons" type="primary" shape="round">
                <Link to={key}>{this.props.data.children[key]}</Link>
                </Button>
            );
        });
  }
}
