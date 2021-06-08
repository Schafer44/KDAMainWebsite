import React from "react";
import { Button } from "antd";
import "../CSS/Homepage.css";
import { ProductBody } from "./ProductBody";
import {Link} from "react-router-dom";

//<button onClick={() => useHistory().goBack()}>Back</button>



export class HomeBody extends React.Component{


  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
  }
  //Renders display
  render() {
    console.log(this.props.data);
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
  //Renders Buttons and redirects to ProductBody if user selected an entry
    renderButtons() {
        if (this.props.data.type === "entry") {
            return (
                <ProductBody {...this.props}/>
            );
        }
		//maps out all the children of selected item
        return Object.keys(this.props.data.children).map((key) => {
            return (
                <Button key={key} className="buttons" type="primary" shape="round">
                     <Link to={key}>{this.props.data.children[key]}</Link>
                </Button>
            );
        });
  }
}
