import React from "react";
import "../CSS/Homepage.css";
import { ProductInfo, ProductTypes } from "../Data/types";
import { bool } from "prop-types";
import { RegulationsDisplay } from "./RegulationsDisplay";

/*interface RegulationsPageProps {}
interface RegulationsPageState {}*/

export class ProductBody extends React.Component/*<
  RegulationsPageProps,
  RegulationsPageState
    > */{


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
      console.log("Test 2" ,this.props);
          par = {
              name: this.props.data.name, 
              category: this.props.data.parents, /*newData.data.data[lastUrl.replace(/_/g, " ")].parent, */
              description: this.props.data.description, 
              snap: this.props.data.snapEligible, 
              regulatoryRequirements: this.props.data.regulation, 
              requiredLicenses: this.props.data.license, 
              productTesting: this.props.data.testingRequired, 
              relatedItems: this.props.data.examples, 
              // Tempurature requirements!!!!
      };

    return <RegulationsDisplay productProp={par} />;
  }
    getIDName() {
        let newData = JSON.parse(JSON.stringify(this.props));
    let lastUrl = this.comment.home.url.split("/").pop();
      if (lastUrl !== undefined) {
          this.comment.parent = newData.data.data[lastUrl].name;
          this.comment.currentName = newData.data.data[lastUrl].name;
      }
    if (lastUrl) {
      return (this.comment.parent = lastUrl.toUpperCase());
    }
    return this.comment.parent;
  }
}
