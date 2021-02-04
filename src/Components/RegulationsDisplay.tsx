import React from "react";
import { Grid } from "@material-ui/core";
import { Descriptions, Space, Button } from "antd";
import { ProductInfo } from "../Data/types";
import { Image } from 'antd';
import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import "../CSS/RegulationsPage.css";
//import { ProductInfo, ProductTypes, TestName } from "../Data/types";

interface RegulationsDisplayProps {
  productProp: ProductInfo;
}
interface RegulationsDisplayState {
  productInformation: ProductInfo;
  favDisplay: JSX.Element;
}

export class RegulationsDisplay extends React.Component<
  RegulationsDisplayProps,
  RegulationsDisplayState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      productInformation: this.props.productProp,
      favDisplay: <HeartOutlined/>,
    };
  }

  render() {
    return (
      <>
        <br />
        <Grid
          container
                direction="column"

                justify="flex-start"
          alignItems="center"
          xs={12}
            >
          <Grid item xs={12} md lg xl>
            <Descriptions
              title={this.state.productInformation.name + " Information"}
                        size="middle"
                        layout="vertical"
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
            </Descriptions>
                </Grid>
               
                <Grid item xs={12} md lg xl>
                    <Descriptions
                        size="middle"
                        layout="vertical"
                        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label={<b>Product Name</b>}>
                            {this.state.productInformation.name}
                        </Descriptions.Item>
                        
                    </Descriptions>
                </Grid>


                <Grid item xs={12} md lg xl>
                    <Descriptions
                        size="middle"
                        layout="vertical"
                        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label={<b>Regulatory Requirements</b>}>
                            {this.state.productInformation.regulatoryRequirements
                                ? this.state.productInformation.regulatoryRequirements
                                : "No Requirements"}
                        </Descriptions.Item>

                    </Descriptions>
                </Grid>


                <Grid item xs={12} md lg xl>
                    <Descriptions
                        size="middle"
                        layout="vertical"
                        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label={<b>Related Items</b>}>
                            {this.state.productInformation.relatedItems
                                ? this.state.productInformation.relatedItems
                                : "No Examples"}
                        </Descriptions.Item>

                    </Descriptions>
                </Grid>


                <Grid item xs={12} md lg xl>
                    <Descriptions
                        size="middle"
                        layout="vertical"
                        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label={<b>Licenses Required</b>}>
                            {this.state.productInformation.requiredLicenses
                                ? this.state.productInformation.requiredLicenses.toString()
                                : "No Licenses Required"}
                        </Descriptions.Item>

                    </Descriptions>
                </Grid>





                <Grid item xs={12} md lg xl>
                    <Descriptions
                        size="middle"
                        layout="vertical"
                        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                        <Descriptions.Item label={<b>Tests Requried</b>}>
                            {this.state.productInformation.productTesting
                                ? this.state.productInformation.productTesting.toString()
                                : "None Required"}
                        </Descriptions.Item>

                    </Descriptions>
                </Grid>
                
            </Grid>
        <br />
      </>
    );
  }
}
