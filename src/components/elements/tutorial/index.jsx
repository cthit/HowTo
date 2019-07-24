import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { readFile } from "fs";
import { ServiceIcon } from "./styles";
import {
    DigitDesign,
    DigitText,
    DigitLayout,
    DigitDialogActions,
    DigitMarkdown
} from "@cthit/react-digit-components";
import { connect } from "react-redux";

const Service = ({
    openDialog,
    title,
    description,
    detailedDescriptionPath,
    fontawesome_icon
}) => (
    <DigitDesign.Card absWidth="20vw" absHeight="200px">
        <DigitDesign.CardBody
            onClick={() => {
                openDialog({
                    title: title,
                    renderMain: () => (
                        console.log("../../../" + detailedDescriptionPath),
                        (
                            //<DigitMarkdown markdownSource={readFile(detailedDescriptionPath,'utf8').text}/>
                            <div></div>
                        )
                    )
                });
            }}
        >
            <DigitLayout.Row>
                <ServiceIcon className={"fa " + fontawesome_icon} />
                <DigitText.Title text={title} />
            </DigitLayout.Row>
            <DigitMarkdown markdownSource={description} />
        </DigitDesign.CardBody>
    </DigitDesign.Card>
);

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({
    openDialog: dialogData =>
        dispatch(DigitDialogActions.digitDialogCustomOpen(dialogData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Service);
