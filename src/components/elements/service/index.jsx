import React from "react";
import "font-awesome/css/font-awesome.min.css";
import {
  ServiceHeader,
  ServiceTitle,
  ServiceIcon,
  Description,
  ButtonGroup,
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
      <DigitDesign.CardBody onClick={
        () => {
          openDialog({
            title: title,
            renderMain: () => (
                description
            )
          });
        }
      }>
        <DigitLayout.Row>
          <ServiceIcon className={"fa " + fontawesome_icon} />
          <DigitText.Title text={title} />
        </DigitLayout.Row>
        <Description>{description}</Description>
      </DigitDesign.CardBody>
    </DigitDesign.Card>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  openDialog: (dialogData) =>
      dispatch(DigitDialogActions.digitDialogCustomOpen(dialogData))
});

export default connect(mapStateToProps,mapDispatchToProps)(Service);