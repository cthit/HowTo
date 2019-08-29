import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { TutorialIcon } from "./styles";
import { everything } from "../../../descriptions/everything";
import {
    DigitDesign,
    DigitText,
    DigitLayout,
    DigitDialogActions,
    DigitMarkdown,
    DigitProviders,
    DigitDialog,
} from "@cthit/react-digit-components";
import { connect } from "react-redux";

<DigitProviders>
    <DigitDialog />
    <ServiceConnected />
</DigitProviders>;

export const Service = ({
    openDialog,
    title,
    description,
    detailedDescriptionName,
    fontawesome_icon,
}) => (
    <DigitDesign.Card absWidth="20vw" absHeight="200px">
        <DigitDesign.CardBody
            onClick={() => {
                openDialog({
                    renderMain: () => (
                        (
                            <div>
                                <DigitLayout.Row>
                                    <TutorialIcon
                                        className={"fa " + fontawesome_icon}
                                    />
                                    <DigitText.Heading5 text={title} />
                                </DigitLayout.Row>
                                <DigitMarkdown
                                    markdownSource={
                                        everything[detailedDescriptionName]
                                    }
                                />
                            </div>
                        )
                    ),
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
        dispatch(DigitDialogActions.digitDialogCustomOpen(dialogData)),
});

const ServiceConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Service);
