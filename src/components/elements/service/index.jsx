import React from "react";
import "font-awesome/css/font-awesome.min.css";

import {
  Container,
  ServiceHeader,
  ServiceTitle,
  ServiceIcon,
  Description,
  ButtonGroup,
  ServiceButton,
  GithubButton,
  ButtonIcon
} from "./styles";
import {
  DigitDesign,
  DigitText,
  DigitLayout,
  DigitDialogActions
} from "@cthit/react-digit-components";
import {connect} from "react-redux";

const Service = ({
  openDialog,
  title,
  url,
  description,
  github_url,
  fontawesome_icon
}) => (
    <DigitDesign.Card absWidth="400px" absHeight="300px">
      <DigitDesign.CardBody onClick={()=>{
        openDialog({
          title: "This is a title",
          description: "Description",
          cancelButtonText: "No",
          confirmButtonText: "Yes"
      });
      }}>
        <DigitLayout.Row>
          <ServiceIcon className={"fa " + fontawesome_icon} />
          <DigitText.Title text={title} />
        </DigitLayout.Row>
        <Description>{description}</Description>
      </DigitDesign.CardBody>
    </DigitDesign.Card>
);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  openDialog: (dialogData) => dispatch(DigitDialogActions.digitDialogOpen(dialogData)) 
});

export default connect(mapStateToProps,mapDispatchToProps)(Service);