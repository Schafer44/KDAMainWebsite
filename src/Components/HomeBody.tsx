import React from "react";
import { Button } from "antd";
import "../CSS/Homepage.css";
//import Data from "../Data/FoodType.json";
import RightData from "../Data/FoodCategories.json";
import Data from "../Data/data.json";

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
   /* this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log("Current Name:" + name);
    RightData.types.forEach((data) => {
      if (data.parent === name) {
        data.starState = !data.starState;
      }
    })*/


      this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
      }));
      console.log("Current Name:" + name);
      Data.data[this.comment.parent].forEach((data) => {
          if (data.parent === name) {
              data.starState = !data.starState;
          }
      })
  }

    renderButtons() {

        if (Data.data[this.comment.parent] !== undefined) {
            if (Data.data[this.comment.parent].type === "entry") {
                return (
                    <>
                        <p>HELLO</p>
                        <ProductBody />
                    </>
                );
            }
        }

        Data.data[this.comment.parent].children.forEach((data) => {
            
                //console.log("NEW ID:" + this.comment.currentID);
                //console.log("Type: "+ Data.title[val]);
                //return "HI" + Data.title[val];
            this.comment.titles = Data.data[this.comment.parent].children;
            
        });
        
           /*RightData.types.forEach((data) => {
      if (data.id === this.comment.currentID) {
        console.log(data.productPage);
        if (data.productPage)
          return (
              <>
                <p>HELLO</p>
                <ProductBody/>
              </>
          );
        //console.log("NEW ID:" + this.comment.currentID);
        //console.log("Type: "+ Data.title[val]);
        //return "HI" + Data.title[val];
        this.comment.titles = data.title;
      }
    });*/

    return this.comment.titles.map((obj) => {
      let replace = "/" + obj.replace(/ /g, "_");
      if (this.comment.url !== "/") {
          replace = this.comment.url + replace;
        }

      // console.log("URL NAV: "+replace);
      return (
          <Button className="buttons" type="primary" shape="round">
            <a href={"" + replace}>{obj}</a>
           </Button>
      );
        });
  }

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

  //Retrieves Header
    getParent(/*num: number*/ currentName: string) {

        if (Data.data[currentName].type === "category")
        {
            Data.data[this.comment.parent].children.forEach((obj) => {
                if (Data.data[obj].name.replace(/ /g, "") === currentName) {
                    this.comment.currentParent = Data.data[obj].name;
                    /*if (Data.data[obj] !== undefined) {
                        if (Data.data[obj].type !== "category") {
                            return (
                                <>
                                    <p>HELLO</p>
                                    <ProductBody />
                                </>
                            );
                        }
                    }*/
                }
            });
        }

        /*
    RightData.types.forEach((data) => {
      if (data.id === num) {
        //console.log("Parent:" + data.parent);
        this.comment.parent = data.parent;
      }
    });*/
        return this.comment.currentParent;
  }

  //Retrieves current Product Parent ID for display
    getID() {
        let lastUrl = this.comment.url.split("/").pop();
        console.log("LastBitofURL: " + lastUrl);
        if (lastUrl !== "" && lastUrl !== undefined) {
            this.comment.parent = lastUrl;
            this.comment.currentParent = lastUrl;
            this.comment.currentName = lastUrl;
        }
        else {
            this.comment.parent = "root";
            this.comment.currentParent = "root";
            this.comment.currentName = "root";
        }
        
    //console.log("LastBitofURL: " + lastUrl);
      
       /* Data.data[this.comment.parent].children.forEach((data) => {
        if (Data.data[data].parent === lastUrl) {
            this.comment.currentName = Data.data[data].name;
        }
        });*/


   /* RightData.types.forEach((data) => {
      if (data.parent.replace(/ /g, "_").toLowerCase() === lastUrl) {
        this.comment.currentID = data.id; 

      }
    });*/


      return this.comment.currentName;                  // change this to go back to original! to currentID
  }
}
