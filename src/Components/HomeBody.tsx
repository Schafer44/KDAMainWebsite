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

//<button onClick={() => useHistory().goBack()}>Back</button>


export class HomeBody extends React.Component<{}, {isToggleOn: boolean}> {


  constructor(props: any) {
    super(props);
    this.state = {isToggleOn: true};
    this.changerStar = this.changerStar.bind(this);
    }
 

  //Properties accessed in methods below to store temporary variables
    comment = {
    currentID: 0,
      currentName: "",
      currentParent: "",
    currentURLID: "",
    parent: "",
    titles: [""],
    subcategories: [0],
    url: window.location.pathname,
    star: StarOutlined,
    starName: "Hello",
        starState: true,
        newData: JSON.parse(JSON.stringify(this.props)),
  };

  //Renders display
  render() {
    return (
        <>
          <div className="divide">
            <p className="header">{this.getParent(this.getID())}</p>
          </div>
          <div id="boxes">{this.renderButtons()}</div>
          <div className="divide divideBottom"></div>
        </>
    );
  }

  changerStar(name: string) {
      this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
      }));
      console.log("Current Name:" + name);
      this.comment.newData.data.data[this.comment.parent].forEach((data) => {
          if (data.parent === name) {
              data.starState = !data.starState;
          }
      })
  }

    renderButtons() {
        if (this.comment.newData.data.data[this.comment.parent] !== undefined) {
            if (this.comment.newData.data.data[this.comment.parent].type === "entry") {
                return (
                    <>
                        <p>HELLO</p>
                        <ProductBody {...this.props}/>
                    </>
                );
            }
        }
        this.comment.titles = this.comment.newData.data.data[this.comment.parent].children;

       
            /* this.comment.titles = */this.comment.titles.map((string) =>
                this.comment.newData.data.data[string].name

        );

        return this.comment.titles.map((obj) => {
            let replace = "/" + obj.replace(/ /g, "_");
      if (this.comment.url !== "/") {
          replace = this.comment.url + replace;
        }
      return (
          <Button className="buttons" type="primary" shape="round">
            <a href={"" + replace}>{obj}</a>
           </Button>
      );
        });
  }
    /*
  getStarState(name:string){

    RightData.types.forEach((data) => {
      if(data.parent === name)
      {
        console.log("STAR STATE: "+ data.starState);
        if(data.starState)
        {
          this.comment.starState = true;
        }
        else
        {
          this.comment.starState = false;
        }
      }
    });


    return this.comment.starState;
  }
  */
  //Retrieves Header
    getParent(/*num: number*/ currentName: string) {

        this.comment.parent = currentName;
        this.comment.currentParent = currentName;

        return this.comment.currentParent;
  }

  //Retrieves current Product Parent name for display
    getID() {
        let lastUrl = this.comment.url.split("/").pop();
        if (lastUrl !== "" && lastUrl !== undefined) {
            this.comment.currentName = lastUrl.replace(/_/g," ");
        }
        else {
            this.comment.currentName = "Home";
        }

      return this.comment.currentName;                  // change this to go back to original! to currentID
  }
}
