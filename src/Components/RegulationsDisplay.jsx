import React from "react";
import { ProductInfo } from "../Data/types";
import "../CSS/RegulationsPage.css";
import { Link } from "react-router-dom";

//import { ProductInfo, ProductTypes, TestName } from "../Data/types";
export class RegulationsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInformation: this.props.productProp,
    };
  }

    render() {
      // HTML for the actual Product information.
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
                <b>Regulatory Requirements for Direct-to-Consumer Sales</b>
            </h2>
            <p>
                {this.state.productInformation.regulatoryRequirements
                    ? this.state.productInformation.regulatoryRequirements
                    : "No Requirements"}
            </p>
            <a span class="url" href=
                {this.state.productInformation.URLRegulatory
                    ? this.state.productInformation.URLRegulatory
                    : ""
                }>{this.state.productInformation.URLRegulatory
                    ? this.state.productInformation.URLRegulatory
                    : ""
                }
            </a>
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
            <a span class="url" href=
                {this.state.productInformation.URLTesting
                    ? this.state.productInformation.URLTesting
                    : ""
                }>{this.state.productInformation.URLTesting
                    ? this.state.productInformation.URLTesting
                    : ""
                }
            </a>
            {

            }
            {/*<br>
            </br>
            <h2>
                <b>Tempurature Control</b>
            </h2>
            <p>
                {this.state.productInformation.tempuratureControl
                    ? this.state.productInformation.tempuratureControl.toString()
                    : "None Required"}
            </p>*/}
        <br />
      </>
        );
  }
}
