import React from "react";
import "../CSS/Homepage.css";
import { ProductInfo, ProductTypes } from "../Data/types";
import { bool } from "prop-types";
import { RegulationsDisplay } from "./RegulationsDisplay";

interface RegulationsPageProps {}
interface RegulationsPageState {}

export class ProductBody extends React.Component<
  RegulationsPageProps,
  RegulationsPageState
    > {



    constructor(props: any) {
        super(props);
    }


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
    let par: ProductInfo = {
      name: "Default",
      category: ProductTypes.Processed,
      description: "Item not Found",
      snap: true,
        regulatoryRequirements: "Default Requirements",

    };
      let newData = JSON.parse(JSON.stringify(this.props));
      let lastUrl = this.comment.home.url.split("/").pop();
      if (lastUrl !== undefined) {
          par = {
              name: newData.data.data[lastUrl].name, //!!
              category: newData.data.data[lastUrl].parent, //!!
              description: newData.data.data[lastUrl].description, //!!
              snap: newData.data.data[lastUrl].snapEligible, //!!
              regulatoryRequirements: newData.data.data[lastUrl].regulation, //!!
              requiredLicenses: newData.data.data[lastUrl].license, //!!
              productTesting: newData.data.data[lastUrl].testingRequired, //!!
              relatedItems: newData.data.data[lastUrl].examples, //!!
              // Tempurature requirements!!!!!!
          };
      }
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
