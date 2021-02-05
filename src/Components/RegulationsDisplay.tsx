import React from "react";
import { ProductInfo } from "../Data/types";
import "../CSS/RegulationsPage.css";
//import { ProductInfo, ProductTypes, TestName } from "../Data/types";

interface RegulationsDisplayProps {
  productProp: ProductInfo;
}
interface RegulationsDisplayState {
  productInformation: ProductInfo;
}

export class RegulationsDisplay extends React.Component<
  RegulationsDisplayProps,
  RegulationsDisplayState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      productInformation: this.props.productProp,
    };
  }

  render() {
    return (
      <>
            <h2>
                <b>Product Name</b>
            </h2>
            <p>
                {this.state.productInformation.name}
            </p>
            <br>
            </br>
            <h2>
                <b>Regulatory Requirements</b>
            </h2>
            <p>
                {this.state.productInformation.regulatoryRequirements
                    ? this.state.productInformation.regulatoryRequirements
                    : "No Requirements"}
            </p>
            <br>
            </br>
            <h2>
                <b>Related Items</b>
            </h2>
            <p>
                {this.state.productInformation.relatedItems
                    ? this.state.productInformation.relatedItems
                    : "No Examples"}
            </p>
            <br>
            </br>
            <h2>
                <b>Licenses Required</b>
            </h2>
            <p>
                {this.state.productInformation.requiredLicenses
                    ? this.state.productInformation.requiredLicenses.toString()
                    : "No Licenses Required"}
            </p>
            <br>
            </br>
            <h2>
                <b>Testing Required</b>
            </h2>
            <p>
                {this.state.productInformation.productTesting
                    ? this.state.productInformation.productTesting.toString()
                    : "None Required"}
            </p>
        <br />
      </>
    );
  }
}
