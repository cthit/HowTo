import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { readFile } from 'fs'
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
  DigitDialogActions,
  DigitMarkdown
} from "@cthit/react-digit-components";
import {connect} from "react-redux";

const Service = ({
  openDialog,
  title,
  url,
  description,
  detailedDescription,
  github_url,
  fontawesome_icon
}) => (
    <DigitDesign.Card absWidth="400px" absHeight="300px">
      <DigitDesign.CardBody onClick={
        () => {
          openDialog({
            title: title,
            renderMain: () => (
              console.log('../../../'+detailedDescription),
                <DigitMarkdown markdownSource={readFile(detailedDescription,'utf8').text}/>
            )
          });
        }
      }>
        <DigitLayout.Row>
          <ServiceIcon className={"fa " + fontawesome_icon} />
          <DigitText.Title text={title} />
        </DigitLayout.Row>
        <DigitMarkdown markdownSource={description}/>
      </DigitDesign.CardBody>
    </DigitDesign.Card>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
  openDialog: (dialogData) =>
      dispatch(DigitDialogActions.digitDialogCustomOpen(dialogData))
});

export default connect(mapStateToProps,mapDispatchToProps)(Service);