import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { TutorialIcon } from "./styles";
import { everything } from "../../../descriptions/everything";
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
    detailedDescriptionName,
    fontawesome_icon
}) => (
    <DigitDesign.Card absWidth="20vw" absHeight="200px">
        <DigitDesign.CardBody
            onClick={() => {
                openDialog({
                    renderMain: () => (
                        console.log(detailedDescriptionName),
                        (
                            <div>
                                <DigitLayout.Row>
                                    <TutorialIcon
                                        className={"fa " + fontawesome_icon}
                                    />
                                    <DigitText.Heading5 text={title} />
                                </DigitLayout.Row>
                                <DigitMarkdown
                                    markdownSource={everything[detailedDescriptionName]}
                                />
                            </div>
                        )
                    )
                });
            }}
        >
            <DigitLayout.Row>
                <TutorialIcon className={"fa " + fontawesome_icon} />
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
