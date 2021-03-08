import React from "react";
import "../CSS/Homepage.css";
import { ProductTypes } from "../Data/types";
import { bool } from "prop-types";
import { RegulationsDisplay } from "./RegulationsDisplay";


export class ProductBody extends React.Component{


  //Properties accessed in methods below to store temporary variables
  comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    currentID: 0,
      currentIDName: "",
      currentName: "",
    currentURLID: "",
    parent: "",
    home: {
      name: "",
      category: ProductTypes.Baked,
      description: "",
      snap: bool,
      requirements: [""],
      relatedItems: [""],
        url: window.location.pathname,
    },
  };

  //Renders display
  render() {
    return (
      <>
        <div className="divide">{this.getParent()}</div>
        <div className="divide divideBottom"></div>
      </>
    );
  }

  //Retrieves Header
  getParent() {
    let par = {
      name: "Default",
      category: ProductTypes.Processed,
      description: "Item not Found",
      snap: true,
        regulatoryRequirements: "Default Requirements",

      };
      //creating a object for use in RegulationsDisplay
      console.log("Test 2" ,this.props.data);
          par = {
              name: this.props.data.name, 
              category: this.props.data.parents, 
              description: this.props.data.description, 
              snap: this.props.data.snapEligible, 
              regulatoryRequirements: this.props.data.regulation, 
              requiredLicenses: this.props.data.license, 
              productTesting: this.props.data.testingRequired, 
              relatedItems: this.props.data.examples, 
              tempuratureControl: this.props.data.temperatureControl, // Tempurature requirements!!!!
              URLTesting: this.props.data.testingRequiredURL,
              URLRegulatory: this.props.data.regulationURL,
      };

    return <RegulationsDisplay productProp={par} />;
  }
}
